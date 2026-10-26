# Index Assistant connection

Better Tracking can expose selected content to the verified Index Assistant Android app on the same device. This is optional app IPC, not an MCP wire endpoint. Each app keeps its own signing identity, account and storage. Nothing in this connection copies provider keys, authentication tokens, Profile or health-goal settings to Index.

## Enable it

On Android, open **Profile → Preferences → Index Assistant** and choose **Read library and journal** and/or **Add and update content**. Both controls default off and are independent. Index can also open the native connection settings activity. Opening that screen does not grant access. Grants apply to this device; content is always scoped to Better Tracking's current signed-in owner.

Requests wait at most five minutes for the signed-in app runtime to open and load its data. Missing authentication, bootstrap, open editors, the visible staging tray, or the in-app chat can require user action. Existing local pending saves must acknowledge before a bridge transaction begins (at most ten seconds waiting per attempt). Requests recheck owner, access, cancellation, expiry and editor state immediately before staging a canonical transaction commit. A cancellation after a server commit does not undo that saved content.

## Supported content

| Kind | Read/search | Create | Update |
| --- | --- | --- | --- |
| `library_item` | Built-in and saved items in Food, Supplement, Exercise, Measurement, Lifestyle and Note, with exact IDs and revisions | Validated ingredient or combo; name, domain, type, baseUnit and defaultServingSize required | Supplied supported fields only, with an observed `expectedRevision` |
| `staging_item` | All actual tray rows: durable stages plus read-only local manual selections, with exact IDs/revisions and journal date/domain filters | Exact itemId, observed itemRevision, positive quantity, compatible unit, timezone-qualified date and optional typed customValues; combos expand atomically | Quantity, unit, date and customValues with expectedRevision |
| `log_entry` | Dated journal entries, including planned/skipped records | Exact itemId, observed itemRevision, positive quantity, valid unit, timezone-qualified date, optional typed customValues; combos expand atomically | Quantity, unit, date, customValues, skipped and excludeFromBank, with an observed `expectedRevision` |

Library authoring includes description, manufacturer, ingredients, category, tags, serving metadata, visibility/favorite/drink flags, nutrient amounts/evidence, custom field definitions and combo component amounts. Existing reminders, sources, media, routine details and unknown fields outside a requested change are preserved. Reminder/profile/auth/provider settings and deletion are not supported operations. Ambiguous repeated combo reordering requires the app editor to avoid losing routine details. Schema and child-array edits replace that array, while unchanged matched elements retain unknown metadata. Unknown nutrients must be omitted rather than presented as known zero.

Search accepts plain text and `domain:FOOD` (or another exact domain). Journal search also accepts `date:YYYY-MM-DD`, `from:YYYY-MM-DD` and `to:YYYY-MM-DD` using the device's local calendar day. Limits are 1–20 with a continuation cursor. A large `read` returns `contentJson` fragments with `offset`, `totalCharacters` and `nextOffset`; read limits are 1–12,000 characters. Read/search results explicitly report `freshness: cache` because Firestore subscriptions can come from an offline cache.

Library read data and bounded search metadata include each item's `validUnits` from Better Tracking's own conversion rules. Search metadata includes serving size, domain/type, category, manufacturer and allowlisted nutrients; read the exact selected item for full custom-field definitions. Logging an existing item does not authorize creating a new library item.

An empty staging query lists the whole tray, including manual selections still held by the owning React runtime. Nonempty text filters literal content; a zero filtered result cannot establish that the whole tray is empty. Search discloses `filtered`, `query` and `unfilteredTotal`. Each manual row has a stable `manual:<trayKey>` ID and content revision, `freshness: local`, `durability: volatile`, `readOnly: true` and `operations: [read]`. Reading it never saves or migrates content. Native edits remain available in Better Tracking; bridge mutations against manual IDs return `unsupported_operation`. Durable rows disclose `freshness: cache`, `durability: durable`, `readOnly: false` and read/update operations. Manual snapshots retain per-row manual dates and the current tray's date/sequence offsets. Ordinary manual rows remain volatile through process termination; this release does not silently change their persistence behavior.

Staging writes atomically save owner-scoped `staging` records and their durable receipt. The actual tray subscribes to these records and merges them with existing manual selections. Staged quantity, unit, date and custom values survive runtime/restart recovery, and account changes remove the former owner's stages immediately. Native edits/removals compare revisions so a concurrent bridge update cannot be overwritten. Logging the tray commits the selected journal entries and removes exactly those stages in one cloud transaction; deterministic journal IDs make exact retries safe. Existing closed-tray contents do not block adding another stage, while an open tray protects current edits.

Library revisions include relevant combo components; changes to a component invalidate the parent's prior revision. Journal amount edits rescale the saved historical nutrition rather than substituting current library nutrition. Date-only edits retain saved nutrition even if the library item was deleted. Fixed physical unit conversions are supported; legacy conversions involving `srv` require Better Tracking's editor because historical serving size was not recorded. Body-weight entries require kg/lbs and a non-future date. Other dated record types retain the app's planning behavior.

## Ownership, saves and interrupted work

`services/indexBridge/runtime.ts` registers only the current Firebase-authenticated UI runtime. Native code does not read WebView IndexedDB/localStorage or acquire tokens. Owner identity is an opaque namespace hash; every pending request is bound to it. Bootstrap/unmount/account changes mark the runtime unavailable. Native heartbeats expire after 60 seconds; one runtime ID fences work across WebView reloads. A queued request also notifies the already loaded Capacitor runtime through the retained `requestAvailable` event. The listener renews readiness and triggers a coalescing serialized drain that consumes every bounded queue page. It does not launch an activity or create a new WebView; a cold runtime still needs Open app. Interval polling remains a fallback, and runtime disposal removes the listener.

`services/indexBridge/content.ts` validates input against Better Tracking's existing library/journal validators. Canonical data is re-read inside a Firestore transaction for writes; `expectedRevision` detects concurrent edits. Successful mutation receipts and content are written atomically in the signed-in user's `indexBridgeReceipts` and `library`/`logs`/`staging` collections. Create IDs and expanded combo IDs are deterministic for the accepted owner and request ID. Exact retries return the same durable receipt; changing arguments under the same ID is a conflict. No local pending/cache write is reported as a successful mutation.

If a runtime restarts after claiming a request, it checks the canonical receipt ledger. A saved receipt can be returned even after late cancellation; absent/unavailable receipt evidence yields an honest uncertain/error result without automatically replaying the mutation. Transient native completion-delivery failures retry the same terminal response without rerunning its content operation. The native queue preserves status/cancellation across process death. A started request cannot regain its prior authority by switching access off/on or owners away/back. Queued work cannot run after expiry. Native queue storage uses Android's no-backup directory; receipts in Firestore are scoped by the same owner rules as other app records.

## Android endpoint and implementation

- App ID: `com.rykersoft.bettertracking`
- Provider: `content://com.rykersoft.bettertracking.indexbridge`
- Setup activity: `com.rykersoft.appbridge.IndexBridgeAccessActivity`
- Capacitor plugin: `IndexAppBridge`
- Shared Java kit: `android/app/src/main/java/com/rykersoft/appbridge/` (identical source shared with SuperThinking through Index's `docs/app-bridge/android-kit`)
- Caller pin: Index package `com.rykersoft.indexassistant` and SHA-256 certificate `2d602c65836a42405d353f0ff8b3a1a1690c16b38ad8da401144800ac86fe99b`; Binder/PackageManager verification, never a claimed package string
- Better Tracking existing release certificate SHA-256: `a49e2f4958a09b2e0bf3a1751b04ab102eaf344a85e2a8db6f1e860430b677f4`
- Protocol: Index Assistant `docs/app-bridge/protocol-v1.md`, version 1; `describe`, `execute`, `status`, `cancel`, 65,536-byte UTF-8 messages

The native provider is exported for this verified caller but has no exported file/query/CRUD endpoint. Native read/write controls start off. No Firebase rules change is required: the existing user-subtree rule restricts the transaction/receipt collections to the signed-in user.

## Verification

Pure adapter tests use an in-memory transactional store with staged atomic writes and acknowledgement-loss simulation, not live Firebase or model calls. Runtime tests mock authentication/native IPC and verify ownership, readiness, heartbeat, claim/recovery, unclaimed work, runtime replacement and native wake races without advancing interval timers. Settings tests cover default-off independent grants, revocation, Android-only availability and honest save failures. The existing navigation test mocks the new runtime boundary. Shared-kit Robolectric tests cover native default-off admission, durable pending/cancel/recovery, revoked authority, stable identities, receipt validation and bounded storage.

Commands: `npm run lint`, `npm test`, `npm run build:android`. Native release verification uses the existing local signing configuration with JDK 21 and the app's Android Gradle wrapper; coordinate the shared Gradle slot before running. No live account/provider request or phone installation is part of these checks. `dev/index-bridge-preview.html` is an optional synthetic settings preview with no account or provider access, excluded from the production entry points.
