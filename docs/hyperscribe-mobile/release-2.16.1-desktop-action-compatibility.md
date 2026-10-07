# Hyperscribe Mobile 2.16.1 — Desktop action compatibility

Version code 45 supersedes the 2.16.0/code 44 preparation build. It includes the conversational-note and reliable Sync improvements described in the [2.16.0 notes](release-2.16.0-reliable-sync.md), with a compatibility fix for Desktop-only Computer actions.

Computer actions received through Sync or Desktop JSON retain their original wire type, operation settings, favorites, and automatic-trigger metadata. Android displays **Requires Desktop** and rejects direct, combined, or nested execution before any AI provider or action side effect runs. Existing imported Computer rows with the older AI fallback remain blocked as well.

Automatic transcription and clipboard processing skip unavailable action roots, including the legacy configured Auto Action. This preserves Desktop trigger settings without letting them interrupt the phone's normal capture delivery. Explicitly selected Desktop-only pipelines continue to report their platform requirement. Sync also rechecks the active account before showing cloud-tag status after a server read.

## Setup and Pro access

Use the same Google account on participating devices and an active administrator-managed RykerSoft Pro grant for each edition. Enable Sync and review the selection policy on each installation. Pro access does not automatically enable sharing. Family provider access remains separate from cloud synchronization, and personal provider keys retain priority. Free/local workflows continue without a grant.

Sync transfers selected text and compatible metadata; attachment bytes and device-local paths remain local. Use portable backups for media and recovery. Android automatic checks are subject to network, battery, and OS restrictions, and a successful server check does not confirm another device's receipt. See [Sync setup](user_guide.md#sync-between-devices).

## Validation

- Validated source commit: `fafb311f2fe76b5f9f67240aa4b4f29fb2899387`, immutable tag `v2.16.1-release`. All 447 application/build input files retained the same before/after SHA-256 fingerprint: `e146c0d8cc808ac6bbf5e6c635865719a32dacaafd63367a1b5f4e4c4c772d71`.
- The full JVM suite passed: 678 tests across 120 suites, with no failures or errors. This includes 45 focused Sync tests and five action-availability tests covering Computer import/export, automatic-trigger filtering, and rejection of direct, combined, and nested execution before provider calls.
- The established signed-release script passed fresh debug lint with no errors, production APK/AAB builds, and release vital lint. No Android device was connected for installation or instrumentation testing.
- Actual APK metadata: `com.rykersoft.hyperscribemobile`, version `2.16.1`, code `45`, minimum API `29`, target API `36`, `arm64-v8a` and `x86_64`. The APK is not debuggable and passes 16 KB ZIP alignment verification.
- APK and AAB certificates match the established production SHA-256: `2D602C65836A42405D353F0FF8B3A1A1690C16B38AD8DA401144800AC86FE99B`. Packaged inspection found no signing files, service-account credentials, or provider-token material. The compiled APK contains the new Computer-operation and automatic-selection guards.
- APK size: 174,975,294 bytes. AAB size: 65,140,974 bytes. The superseded 2.16.0 artifacts retain their original hashes.

SHA-256:

- APK: `7217b99108b93fb85f29adac1a8dde0c0d75104fe3903019f42386444adbcb0c`
- AAB: `088ba3299eb7a2a2482f5599b2bd6c6c05a40399bb463db66dd90cfeee9ea12c`
