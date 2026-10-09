# Hyperscribe Mobile 2.18.0 — Save selected chat threads

Release date: October 8, 2026. Android version **2.18.0 / code 48** follows the published 2.17.1/code 47. The package remains `com.rykersoft.hyperscribemobile`.

## Shipped changes

Ordinary incoming and outgoing Chat messages remain in their conversation without creating automatic Inbox copies. **Chat menu → Save thread to Inbox** saves a selected thread as one independent item, using the normal Inbox processing path: configured automatic actions, automatic tags when enabled, tag workflows, and retention policies. Explicit note and reminder requests still create their requested items.

Saved Markdown includes the title, ordered speaker headings, local timestamps, original message formatting, and numbered saved-source excerpts. Internal system turns are omitted. Stopped or failed replies are labeled, and attachment references identify files without embedding media or local paths. Saving is unavailable during active generation or another save. Later Chat edits leave the saved item unchanged; saving again creates another snapshot.

This release includes all pending application source changes, including Sync fixes for Inbox/Actions tag ID collisions, normalized transcription replacement rules, and clearer Sync diagnostics. The previous private Sync validation in `outputs/sync-fix-2026-10-08/validation.json` describes a different 2.17.1/code 47 APK and is retained as historical evidence.

## Validation

All **719 JVM tests across 125 suites** passed with no failures, errors, or skips after the release version change. Debug lint passed with **0 errors, 145 warnings, and 8 hints**.

Before the version bump, all **11 targeted Android checks** passed on an API 36 Pixel 7 emulator against the same application sources. These cover persistence, Inbox automation and tagging, snapshot independence, and Chat save controls. The three UI checks also passed again after asserting that the native Markdown preview was visible. Reviewed captures show the save menu in light mode, dark mode with 1.3× text, and the formatted saved preview. These are targeted checks rather than the full instrumentation suite.

The preceding private Sync fix also passed four physical-device regressions and automatic plus two server-confirmed manual Sync runs. Those results are historical; they are not a new live cloud Sync test of 2.18.0.

The live Mobile capability declaration was checked against the current package and provider contract. Pro remains enabled with the existing trusted-family providers; no capability, backend, credential, or entitlement changes are required by this release. Live sign-in and provider generation were not retested.

## Production packaging

The canonical release script passed its JVM tests, debug lint, release-vital lint, APK assembly, and app-bundle assembly. The APK manifest confirms 2.18.0/code 48, minimum API 29, target API 36, arm64-v8a/x86_64 support, and no debuggable flag. All 457 recorded application build inputs remained unchanged during packaging.

APK and app bundle retain production certificate SHA-256 `2D602C65836A42405D353F0FF8B3A1A1690C16B38AD8DA401144800AC86FE99B`, matching the independently downloaded preceding public APK. Signing files and the release signing password are absent from the APK.

- APK SHA-256: `4e7226c162d15d6c4209283972ec857b238989fef9eb88cbbed337ead89279ac`.
- App bundle SHA-256: `ab9f9257e2959a92030d9edcc48dc9cd4b75b1786a6fd5de4241cd6a26ff87a3`.

## Public publication and phone update

Public release: [Hyperscribe Mobile 2.18.0](https://github.com/rykergrey/RykerSoft-APKs/releases/tag/hyperscribe-mobile-v2.18.0). All five release assets were downloaded anonymously and matched the verified local files. The downloaded APK's package, version, and production certificate were checked again. All four app documents, the two supporting documents, and the two new screenshots were also fetched anonymously and matched their reviewed contents.

Source tag `v2.18.0` identifies commit `94c5c48f514ff5f5c1ed18b66e448f738be1d5e0`, including every pending application source change and its tests. Documentation and screenshots were published in `f1a27410b9029bc7edcfa39c3a8511a38ce7698c`. Catalog activation was published in `68d3a85`; `04353e83e35e77895eba606ab7d36d92e4a7bc79` preserves the catalog's existing Unicode formatting. The canonical public raw catalog and a fresh URL both matched the complete reviewed 17-app catalog at 2.18.0/code 48. Every unrelated entry, field, and Desktop download pointer is preserved.

The anonymously downloaded APK upgraded production in place on the connected Samsung SM-N975U1. No production data was cleared or uninstalled. Package Manager confirms 2.18.0/code 48 and preserves the original September 7 installation date. The installed APK hash exactly matches the public download. MainActivity launched successfully; the startup check found no fatal exception, SQLite corruption, or Room migration errors.

RykerSoft was opened on the phone and displayed a remote-registry synchronization message. Its refreshed listing was not confirmed before the phone moved to Recents. Public catalog contents and the production phone update were verified independently. Live provider generation, sign-in, and a new cloud Sync run are not claimed for this release.
