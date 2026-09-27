# Hyperscribe Mobile specifications

## Android

- Package: `com.rykersoft.hyperscribemobile`
- Version: `2.13.3` (code 41)
- Minimum Android: 10 / API 29
- Target Android: API 36
- Architectures: arm64-v8a and x86_64
- UI: Kotlin, Jetpack Compose, Material 3
- Persistence: Room, DataStore, app-private files
- Background work: WorkManager and a user-initiated microphone foreground service

## Personal knowledge

- Enabled static text replacement rules supply bounded, bidirectional search aliases for matching names and phrases; source content is unchanged and no reindex is needed.
- Local SQLite full-text search over eligible saved text and transcripts, including retained archived entries.
- Optional English semantic search using a roughly 23 MB quantized MiniLM model on ARM64 devices; downloads use unmetered Wi-Fi and background indexing waits for sufficient battery.
- Incremental, resumable passage indexing. Keyword search remains available while the semantic index updates. Derived indexes can be rebuilt from saved entries.
- Automatic retrieval selects up to eight source passages with bounded context instead of attaching the entire Inbox. Configured cloud Chat receives those excerpts; embeddings and retrieval run locally.
- Source previews, passage reading, entry/history navigation, per-entry exclusion, and reviewed whole-entry replacements with revision checks and history preservation.
- Raw audio and attachment bodies need transcription or text extraction before knowledge search can use them. Retention and expiry continue to apply. English semantic search is optional; no Jev service is integrated.

## Chat operations and time-sensitive answers

- Direct replacement commands check current settings and atomically create, extend, or re-enable a matching rule. Conflicting mappings are left unchanged; receipts and an attempt checkpoint prevent retrying an interrupted settings mutation.
- Current-status queries with a named topic reserve up to four recent keyword passages alongside relevant evidence, within the existing eight-source/16,000-character budget. Historical queries retain ordinary retrieval.
- Evidence includes retrieval time and capture dates. Model instructions distinguish save dates from event dates, plans from actual events, and last known status from current facts. There is no verified project-state ledger or guarantee of complete chronology.
- Chat executes registered app operations. Other settings and workflows remain available through their UI; conversational text alone cannot perform unsupported operations.

## Providers

Gemini, Groq, OpenAI, and ElevenLabs support both personal bring-your-own keys and optional RykerSoft Pro Access. Personal keys are encrypted through Android Keystore and take priority. An entitled Google account can read only the package-scoped family fields declared for `com.rykersoft.hyperscribemobile`; those values remain in process memory and clear when access is lost. Piper and Android system speech provide local/device alternatives where available. No provider credential is bundled.

RykerSoft Pro authorization uses Firebase Authentication and the exact Boolean grant at `users/{uid}/entitlements/apps`. Free features continue when signed out, unentitled, revoked, or temporarily unable to verify access.

## Distribution

The source is maintained in a private Hyperscribe Mobile repository. The signed APK, these documents, and Mobile screenshots are published anonymously through a dedicated public RykerSoft release entry.

## Support

heavensounds@gmail.com
