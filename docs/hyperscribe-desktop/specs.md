# Hyperscribe Desktop specifications

## Release

- Version: `2.4.4`
- Runtime: Python 3.12 and PySide6, packaged with PyInstaller
- Architectures: Windows x86-64 and Linux x86-64
- Package ID used by RykerSoft: `com.rykersoft.hyperscribedesktop`
- Windows package: `HyperscribeDesktop-v2.4.4.exe`
- Linux bundle/archive: `HyperscribeDesktop-v2.4.4-linux-x86_64/` and
  `HyperscribeDesktop-v2.4.4-linux-x86_64.tar.gz`
- Code signing: the Windows executable is not Authenticode-signed

## Platform integration

- Windows data location: `%USERPROFILE%\.hyperscribe-desktop\`
- Linux data location: `~/.hyperscribe-desktop/`
- Windows system-wide shortcuts use the native `RegisterHotKey` API.
- Omarchy system-wide shortcuts are emitted as a managed Hyprland block; the
  optional Caps Lock layer exposes customizable `Ctrl+Alt+Shift+Super` (Hyper)
  combinations.
- Global commands and individual actions accept any number of alternate
  one-chord shortcuts.

## Providers

Gemini, Groq, OpenAI, and ElevenLabs are available with personal keys or approved
RykerSoft Pro shared access. Piper and Windows speech provide local/device
alternatives where available. No provider credential is bundled.

## Synchronization

- Opt-in Sync requires Google sign-in and approved RykerSoft Pro access.
- Desktop and Mobile share account-owned Firebase source records for selected
  Inbox text and metadata, scoped tags, actions, Chat threads, and text replacement
  rules. Each configured device keeps its own selection preferences.
- Automatic Desktop delivery coalesces selected changes for three seconds and
  checks remote changes every five to fifteen minutes while the app is running.
  Failed requests back off from thirty seconds to one hour.
- Incremental queries use server change timestamps. **Sync now** performs a full
  reconciliation, including repairs for older clients without those timestamps.
- Writes require the expected cloud revision. Acknowledged revisions determine
  sequential edits independently of device clock differences; genuinely concurrent
  edits use timestamp and deterministic content ordering. In-flight local edits
  are protected, and an unseen cloud edit is retained before a conflicting deletion.
- Completed status follows server confirmation, durable local application, and
  saved receipts. It includes a UTC check time and uploaded/downloaded record
  counts; it does not acknowledge another device's receipt.
- Attachment bytes, device paths, speech caches, search indexes, embeddings,
  provider credentials, and device-specific shortcuts remain local.

## Computer actions

- Reviewed computer actions can capture screenshots and record displays where
  supported. Windows prefers DXGI capture with a native compatibility fallback.
- Windows recordings offer display selection and 30 or 60 fps, attempt hardware
  encoding when available, and preserve completed MP4 fragments after interruption.
  Capture warns about HDR displays that cannot reliably produce an SDR image.
- Linux capture retains its existing backend. Window capture on Wayland falls
  back to region selection when other applications' geometry is unavailable.

## Saved knowledge

- Local SQLite FTS5 indexes full saved Inbox text and linked transcripts. The
  index is incremental, rebuildable, and excluded from cloud Sync.
- Only entries with a user-confirmed tag are eligible, including retained archived
  text. A rule or assistant tag suggestion alone does not enroll a capture.
  Tag changes preserve archive state; tagged entries can be archived or restored
  explicitly. Legacy entries marked as automatically archived by tagging are
  restored on load, preserving their tags and explicit archives. Pins protect retention.
  Generated action, answer, and speech output is omitted to avoid feeding
  generated text back as evidence. Source type is not used to infer authorship,
  endorsement, or truth. Mobile-compatible capture-detail exclusion and expiry
  fields are respected.
- Provider Chat can receive up to eight retrieved excerpts, or up to forty for
  explicit collection questions. The Knowledge toggle is on by default.
- Direct text search, paged previews, replacement aliases, and source reading
  run locally. Reviewed whole-entry edits verify the current text revision and
  retain version history.
- Optional local semantic retrieval uses a verified quantized MiniLM download and
  incremental passage indexing alongside keyword search.
- Editable Chat actions can attach today's Inbox, selected cards, or specified
  cards to a new thread. Daily and one-time schedules run while the app is open.
  The default Daily Inbox Review runs at 20:00 local time.

## Recording interaction modes

- The recording OSD exposes Inbox and Chat choices. Inbox is the default for
  each recording. Chat routes the transcript to the active thread, or a new
  thread selected from the Chat button's menu.
- The choice is captured per recording session before transcription. Chat
  requests force speech for their own assistant response without changing the
  persisted Chat Speak responses setting. Streaming responses can start speech
  before the full answer arrives. A configured Chat TTS voice is required.
- Inbox mode saves the transcript and audio. Chat mode sends the transcript to
  Chat without an automatic Inbox or clipboard item. Chat speech output is not
  saved to Inbox. Explicit Chat commands can create Inbox notes or timed alerts.
- Transcription replacement rules run before Chat. Enabled Inbox auto-tag rules
  match the original and processed request locally before provider generation;
  matching tags are attached to a generated item even if its wording changes.
  Rule definitions and tag assignments stay out of provider message payloads.
- Inbox text and voice rows show the earliest enabled alert at the right. Due
  times under 24 hours show remaining hours and minutes; longer intervals show
  the local calendar date and time. The badge refreshes each minute.

## Updates and distribution

Settings reads the public RykerSoft application registry over HTTPS. Packaged
Windows and Linux releases can be downloaded and installed in the application;
published SHA-256 values are verified when present. The Settings page also links
to the [Hyperscribe Desktop source repository](https://github.com/rykergrey/Hyperscribe-Desktop)
and the [RykerSoft release page](https://github.com/rykergrey/RykerSoft-APKs/releases)
for manual updates.

## Support

heavensounds@gmail.com
