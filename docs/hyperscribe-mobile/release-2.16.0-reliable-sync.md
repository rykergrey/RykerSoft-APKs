> Preparation build superseded by Hyperscribe Mobile 2.16.1 (45).

# Hyperscribe Mobile 2.16.0 — Conversational notes and reliable Sync

Version code 44 improves the saved-note assistant and cross-device synchronization with Hyperscribe Desktop.

This preparation build was superseded by 2.16.1/code 45 before RykerSoft catalog activation. Its signed artifacts and hashes below remain unchanged.

## Saved notes and knowledge

- Available saved text is included in Chat knowledge by default, including untagged and archived entries. **Only include tagged items** remains optional; explicit exclusions and retention still apply. Existing related-idea search opt-outs are preserved.
- Natural requests can save a note, find and read a list, append new items while retaining its previous text, or recall its contents. Bounded recent conversation supports follow-ups; whole-entry replacements still require review.
- Source revision checks, operation receipts, cancellation, and citations protect saved content. Index requests use the shared Chat assistant. Portable backups preserve both knowledge settings.

## Cross-device Sync

- Support Desktop's all-tagged Inbox policy, separate Inbox and Action tag catalogs, Desktop Chat payloads, and optional transcription text replacement synchronization.
- Confirm a successful check only after server responses and saved local acknowledgments, with upload/download counts. Disabled or failed checks do not update the success time. Pro Active reports account access; a successful pass does not confirm that another device has downloaded it.
- Protect local edits made during downloads, unseen remote changes, slow device clocks, and deletion markers. Device-only exclusions take precedence over sharing selections. Removing an item from sharing preserves other devices' existing local copies.
- Preserve compatible Desktop history and metadata and this device's attachment handles. Exclude attachment bytes, generated speech caches, and local file paths from the sync wire.
- Coalesce relevant local edits, read incremental server changes, and retry failures. Android background checks use a 15-minute WorkManager interval subject to connectivity and OS restrictions; opening the app also checks changes. Manual **Sync now** performs a full server reconciliation.

## Setup and Pro access

Sync is opt-in and requires Google sign-in plus an active administrator-managed RykerSoft Pro grant for the edition in use. Sign in with the same Google account on participating devices, enable Sync, and review compatible content selections on each installation. Provider access uses the same account's separate package-scoped provider authorization; personal keys retain priority.

Audio, images, files, and device-local paths do not transfer through Sync. Use portable backups to move media and keep recovery copies. Free/local workflows continue without a Pro grant. See the [user guide](user_guide.md#sync-between-devices) for setup, timing, and troubleshooting.

## Validation

- The full JVM unit suite is green: 674 tests, including 45 focused Sync tests, with no failures or errors. The signed release script reused the up-to-date unit results for the unchanged application source and completed fresh debug lint with no errors.
- Production APK and AAB builds passed, including release vital lint. Debug Android UI tests were compiled during source validation; no Android device was connected for installation or an instrumentation run.
- The APK reports `com.rykersoft.hyperscribemobile`, version `2.16.0`, code `44`, minimum API `29`, and target API `36`, with `arm64-v8a` and `x86_64` native libraries. It is not debuggable and passes 16 KB ZIP alignment verification.
- APK and AAB certificates match the established production SHA-256: `2D602C65836A42405D353F0FF8B3A1A1690C16B38AD8DA401144800AC86FE99B`.
- Packaged-artifact inspection found no signing files, service-account credentials, or provider-token material. The APK is 174,975,286 bytes; the AAB is 65,139,233 bytes.

SHA-256:

- APK: `3ea2389ce8c83e649049809dd75aa4fbebc17cf59fc18ea40494f32492c845a1`
- AAB: `fba6a03c6b47a168baba008b314f462e76247a2a2f57bf902bbde7180b32fbfd`
