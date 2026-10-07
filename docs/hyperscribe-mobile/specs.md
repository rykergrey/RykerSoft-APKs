# Hyperscribe Mobile specifications

## Android

- Package: `com.rykersoft.hyperscribemobile`
- Version: `2.17.1` (code 47)
- Minimum Android: 10 / API 29
- Target Android: API 36
- Architectures: arm64-v8a and x86_64
- UI: Kotlin, Jetpack Compose, Material 3
- Persistence: Room, DataStore, app-private files
- Background work: WorkManager and a user-initiated microphone foreground service

## Personal knowledge

- Enabled static text replacement rules supply bounded, bidirectional search aliases for matching names and phrases; source content is unchanged and no reindex is needed.
- Local SQLite full-text search over eligible saved text and transcripts, including retained archived entries.
- Retrieval includes available saved text by default, including untagged and archived entries. The optional **Only include tagged items** setting requires at least one user-confirmed tag. Per-entry exclusions, deletion, expiry, and canonical transcript selection apply in either scope.
- Tag confirmation and archiving are independent of retrieval scope. Rule and assistant tags are suggestions until confirmed; confirmed entries archive automatically, and removing the last confirmed tag restores entries archived for that reason. Untagged captures remain in Inbox under ordinary retention. Pins protect retained entries while pinned.
- English semantic search using a roughly 23 MB quantized MiniLM model on ARM64 devices is enabled when no saved preference exists; explicit opt-outs remain off. It can be disabled independently of automatic retrieval and tagged-only scope. Downloads use unmetered Wi-Fi and background indexing waits for sufficient battery.
- Incremental, resumable passage indexing. Keyword search remains available while the semantic index updates. Derived indexes can be rebuilt from saved entries.
- Each conversational search returns up to eight bounded source excerpts, with complete source reads available in 4,000-character pages. The context-only collection route can gather up to 40 excerpts within a 48,000-character evidence budget, a 768-candidate budget, and a 10-second local retrieval window before a synthesis request. Configured cloud Chat receives selected text; embeddings and retrieval run locally.
- Source previews, passage reading, entry/history navigation, per-entry exclusion, and reviewed whole-entry replacements with revision checks and history preservation.
- Raw audio and attachment bodies need transcription or text extraction before knowledge search can use them. Saved generated answers and action outputs are eligible under the same scope and carry source-kind metadata; they are not independent confirmation of user facts. Retention and expiry continue to apply. No Jev service is integrated.
- Chat actions can choose today's Inbox, selected cards, or specified cards;
  apply model and generation settings; and run manually, once, or daily through
  WorkManager. The editable default Daily Inbox Review runs at 20:00 local time.

- Native Chat search cards persist a typed query and frozen aliases, fetch five previews on expansion, and open a temporary Inbox search with twenty results per page. Matching uses literal FTS terms/phrases; sorting uses captured timestamps and IDs, with generation-checked keyset cursors.
- Each search page scans at most 256 raw candidates. Excluded/expired candidates do not terminate the search: a continuation allows later eligible matches to be visited. Changed libraries require refresh. Search and source reads recheck current eligibility.
- The temporary Inbox search suspends the ordinary full-library list observer and restores that observer and the prior view on exit. Search result previews are not model context or TTS text.
- Broader collection requests cap total system/history/reference text at 160,000 characters and ask for a new thread if exceeded. This is a character guard, not an exact token accounting system. Media has its existing separate size limit.

## Chat operations and time-sensitive answers

- Explicit embedded reminder requests in longer Chat or Index 01 speech are parsed locally after transcription normalization. The saved item retains the original request as text without a title, receives configured auto-tags, and schedules a local reminder. Every Inbox viewer exposes alert controls, including for items without an existing alert.
- Direct replacement commands check current settings and atomically create, extend, or re-enable a matching rule. Conflicting mappings are left unchanged; receipts and an attempt checkpoint prevent retrying an interrupted settings mutation.
- Current-status queries with a named topic reserve up to four recent keyword passages alongside relevant evidence, within the existing eight-source/16,000-character budget. Historical queries retain ordinary retrieval.
- Evidence includes retrieval time and capture dates. Model instructions distinguish save dates from event dates, plans from actual events, and last known status from current facts. There is no verified project-state ledger or guarantee of complete chronology.
- Chat executes registered app operations. Other settings and workflows remain available through their UI; conversational text alone cannot perform unsupported operations.

## Conversational note assistant

- A Gemini-backed structured planner selects bounded search, read, create, append, reviewed replacement, schedule delegation, answer, or clarification steps. Exact local handlers remain available; unrelated conversation falls through to normal Chat.
- Recent same-thread context is capped at eight turns and 16,000 characters. Each request allows at most 16 planning steps, 72,000 characters of accumulated tool results, and one mutation. A saved list remains a note unless the user requests a timed notification; incomplete scheduling details use the existing reminder clarification flow.
- The initial semantic task intent is pinned before retrieved content arrives. Notes and tool results are reference data and cannot expand write authority. Source IDs must be known; reads progress contiguously with revision checks. Answers and replacement proposals require complete cited sources, and answers recheck availability and revision.
- Appending preserves existing text, removes duplicate whole list lines, checks the current revision, and retains the old text in revision history. Whole-entry replacement produces the existing review proposal rather than applying immediately. Notes are limited to 50,000 characters.
- Application receipts and persisted mutation checkpoints protect interrupted requests from duplicate creates or appends. Editing or regenerating old requests cannot write. Stored source references support follow-ups; natural-language intent and retrieval relevance still depend on the configured model and available evidence.

## Floating control and speech actions

- The permission-gated Android floating control opens a tabbed menu directly from the right-edge button. An inward swipe starts at the first enabled tab; continued swipe distance selects tabs in configured order, scrolling the strip when needed. Moving back toward the edge selects earlier tabs. Holding opens the configured or remembered tab. Vertical dragging repositions the button; an ordinary tap retains its recording shortcut. Tab navigation never executes an item.
- Tapping outside the menu or pressing Back closes it and restores the button's saved position. Closing leaves recording and speech playback running.
- Capture, Actions, Inbox, and Listen are reusable module types. Tabs can be duplicated and independently titled, ordered, hidden, removed, and configured. The tab strip and module contents scroll when needed within the configured workspace dimensions. Theme colors follow the application, with 48 dp minimum touch targets.
- Capture tabs select all or an ordered subset of capture profiles plus clipboard, new-text, text-file, audio-file, and image shortcuts. Recording pause, stop-profile, and cancel controls remain available across modules.
- Actions tabs show all eligible clipboard actions or an ordered selection, optionally constrained by category and Action tags. Category and tag constraints apply together; multiple selected tags match any selected tag. Image-input workflows require the main app; Desktop-only workflows require Desktop.
- Inbox tabs bind to the active Inbox or an existing saved view and may add Inbox tag filters. Saved-view bindings follow current search, archive, content, retention, and schedule settings. Filters apply before recent limits and matching pins. A missing view does not broaden the tab's results.
- Default speech references a stored action, including its provider, voice, synthesis settings, and pipeline. Existing effective default settings and per-chat presets migrate without replacing edited user actions. Chat and spoken-reminder selections persist; Default follows the current application default.
- Chat, Inbox, text viewers/editors, Listen, and spoken reminders accept compatible speech-action overrides. A selected workflow processes the complete input once before speech segmentation; nested pipelines and multiple TTS outputs preserve execution order. Chat automatic reading waits for the completed reply before applying the workflow.
- Listen offers a Default-or-specific-action dropdown, Play clipboard, and the live ordered speech playlist. Playback can continue when the menu closes. Explicit saved-audio replay reuses its original rendition; generating speech with Default or another action runs the selected workflow.
- Missing, cyclic, unavailable, or incompatible speech workflows report errors instead of silently selecting another voice. Default, Chat, and spoken-reminder action references guard deletion. Portable backups retain default-action references and modular menu settings.

## Providers

Gemini, Groq, OpenAI, and ElevenLabs support both personal bring-your-own keys and optional RykerSoft Pro Access. Personal keys are encrypted through Android Keystore and take priority. An entitled Google account can read only the package-scoped family fields declared for `com.rykersoft.hyperscribemobile`; those values remain in process memory and clear when access is lost. Piper and Android system speech provide local/device alternatives where available. No provider credential is bundled.

RykerSoft Pro authorization uses Firebase Authentication and the exact Boolean grant at `users/{uid}/entitlements/apps`. Free features continue when signed out, unentitled, revoked, or temporarily unable to verify access.

## Cross-device Sync

- Requires Google sign-in and an active exact-package RykerSoft Pro grant verified by the product backend. Use the same Google account on Android and Desktop; each edition requires its applicable grant. Sync is disabled until its policy is enabled.
- Inbox choices include all tagged items, selected tags, or everything except excluded tags. Explicit item sharing and device-only exclusions are supported. Actions can be selected by category or tag, or shared in full. Chat threads and text replacement rules are optional. Inbox and Action tag catalogs remain separate.
- Dedicated Firebase Authentication and account-private Firestore data in the Hyperscribe project are isolated from RykerSoft's entitlement/provider connection. Initial cloud settings can bootstrap an unconfigured installation; established installations keep their local selection policy.
- Account-scoped acknowledgments, conditional server transactions, server change stamps, and guarded local imports protect edits made during a pass. Deletion markers propagate deletion; removing an item from sharing preserves other devices' local copies. Unchanged content is not rewritten.
- Automatic work coalesces relevant local edits and checks server changes through a persisted incremental cache. Periodic WorkManager checks are scheduled at a 15-minute interval and can be delayed by Android network, battery, or background restrictions. Foreground resume also checks changes. Manual Sync now performs a full server reconciliation, including legacy records.
- Completion and its upload/download counts require a successful server-backed pass and durable local acknowledgment. This is not a receipt from another device. Failures retry with backoff; disabled, signed-out, or failed passes do not update the successful-check time.
- Sync transfers text and compatible metadata. Attachment bytes, recording files, provider credentials, and device-local paths stay off the sync wire. Portable backups remain the mechanism for moving local media and restoring content.
- Desktop Computer actions retain their wire type and operation settings through Sync or JSON import/export. Android marks them **Requires Desktop**, rejects direct and nested execution before provider calls, and excludes unavailable roots from automatic transcription/clipboard triggers. Desktop automatic-trigger settings remain preserved for Desktop use.

## Distribution

The source is maintained in a private Hyperscribe Mobile repository. The signed APK, these documents, and Mobile screenshots are published anonymously through a dedicated public RykerSoft release entry.

## Support

heavensounds@gmail.com
