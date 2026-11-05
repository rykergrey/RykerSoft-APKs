# Index Assistant connection

SuperThinking exposes optional Android content operations to the verified Index Assistant app. Open **Settings → General → Index Assistant connection** to choose read and write access. Both start off and apply immediately on this device. Index can also open the native connection page; opening a page never grants access.

The endpoint is `com.rykersoft.superthinking.indexbridge`; connection setup is `com.rykersoft.appbridge.IndexBridgeAccessActivity`. The launcher receives `index_bridge=true` when opened from the native page. This hint only opens the application; the native page itself already owns the connection switches.

## Supported content

- `card`: search/read title, category, tags, text excerpts and tab metadata; create a card with one text tab; update title, category or tags.
- `text_tab`: search/read bounded Markdown text; add a text tab to an exact card; replace/append text or change its label.

An update requires the exact ID and revision returned by read/search. Media and chat content cannot be exported or edited through this connection. Existing media, chat drafts, other tabs, unknown canonical fields and local UI state remain intact. Text reads use character offsets, up to 12,000 characters per page. Search returns at most 20 entries. Create/update field schemas and limits are supplied by the native `describe` response after SuperThinking has opened its current vault.

## Ownership, storage and recovery

The Binder endpoint checks Index's package and existing signing certificate before processing requests. Native code stores only connection grants and bounded operation requests/results in an app-private no-backup AtomicFile. It never opens the WebView's vault or returns provider keys, sign-in tokens or private settings. This app capability protocol is separate from MCP.

The owning web runtime loads its own account/vault and heartbeats its readiness lease. A closed app can retain at most 32 pending requests for up to five minutes; an accepted queue returns `accepted:true` and its request identity, with an honest pending/open-app result. Disabled access is unadmitted. New durable queue entries notify an already-running Capacitor WebView through `requestAvailable`; notifications and fallback polling share one serialized consumer. The notification never launches the app or creates a runtime. Android may still suspend a background WebView, so a cold or suspended runtime may require **Open app**. Read and write switches are independent.

Guest saves commit content and their receipt together in the canonical localStorage card array. Signed-in writes require an online, confirmed Firestore transaction; an offline or bootstrapping account cannot claim a completed cloud mutation. IndexedDB refresh is advisory after that transaction. The adapter refuses cards with queued edits, waits for every in-flight card save, refuses dirty text edits and checks the observed canonical revision again at commit. Ordinary saves scheduled during a bridge commit wait and rebase onto the current visible card afterward; they preserve the canonical receipt ledger.

Request identities deduplicate on owner, operation and canonical arguments. A refreshed deadline does not create a new mutation. Confirmed receipts survive expiry and cancellation. After runtime loss, STARTED requests are offered only for reconciliation: the app checks the exact canonical guest card or server document for the receipt. A missing or unconfirmed receipt becomes `uncertain`; the operation is never automatically replayed. Revoking access or changing owner permanently cancels that request's authority even if the original switches or owner later return. An already committed result remains reportable without claiming rollback.

Completed native receipts are bounded by count and total serialized bytes; oldest completed entries may be evicted while pending work is retained. Canonical per-card receipts are also bounded to the latest 64. A very old evicted identity must be inspected rather than treated as a blanket guarantee of indefinite deduplication.

## Verification

`npm run check` checks types, runs the local mocked test suite and produces the web bundle. Bridge adapter tests cover field limits, exact revision checks, selective read privacy, interrupted receipt recovery, request identity conflicts, unknown-field preservation, owner/access guards and storage failure honesty. Native `IndexBridgeStoreTest` covers default-off admission, cold queues, cancellation, durable receipts, owner/grant round trips, exact update receipt targets and byte-aware pruning.

These checks do not establish phone interaction, real account connectivity or on-device IPC behavior. Android compilation and signed release verification are reported separately by the release coordinator.
