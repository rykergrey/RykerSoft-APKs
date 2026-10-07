# Hyperscribe Mobile 2.17.0 — Custom command grid and speech actions

Release date: October 7, 2026. Android version **2.17.0 / code 46** supersedes 2.16.1/code 45. The application remains `com.rykersoft.hyperscribemobile` and retains the existing production signing identity.

## Floating command grid

An inward swipe across the floating button or a hold opens a compact category grid. Choosing a category opens its module without executing an action or starting a recording. Ordinary tap recording and vertical repositioning remain available. The grid fits its content up to the configured height; modules use the configured workspace height, with overflow scrolling. Active recording controls remain reachable across modules, and the overlay follows the application theme.

Capture, Actions, Inbox, and Listen are reusable tab types. Users can add, duplicate, title, reorder, hide, and remove tabs. Capture tabs select recording profiles and imports. Actions tabs select all matching actions or an ordered set, optionally filtered by category and Action tags. Inbox tabs bind to the active Inbox or a live saved view with optional Inbox tags. View settings and matching pins apply before recent-item limits; missing views remain empty rather than broadening results. Listen provides a speech-action dropdown, Play clipboard, and the live speech playlist.

## Speech actions

The default speech configuration now references a normal saved action. Migration preserves the effective provider, voice, model, synthesis settings, and preprocessing in a **Default speech** action; existing per-chat presets become equivalent actions. Compatible action editors can mark an action **Use as default TTS action**. Existing edited actions are preserved, and interrupted migration can resume safely.

Chat manual/automatic reading, Inbox speech, text viewers/editors, Listen, and spoken reminders follow the default action or an explicit selection. Default remains a live reference to the application's current choice. Chat and spoken-reminder selections persist. Selecting Default to generate speech runs the current pipeline even if an earlier rendition exists; explicit saved-audio replay remains available separately.

A selected workflow runs against the whole input before speech segmentation. For example, a Before summarizer processes a copied article once, then the TTS step reads the summary. Nested multi-step pipelines and multiple speech outputs retain execution order. Missing, cyclic, incompatible, or unavailable workflows report errors instead of silently changing voices. Actions referenced by the default, Chat, or spoken reminders are guarded against deletion. Portable backups retain speech selections and modular menu settings.

## Compatibility and access

Room schema 16 adds speech-action selections to Chat threads and spoken reminders through a preserving migration. Native speech snapshots survive compatible Desktop JSON round trips, including settings not represented by the flattened Desktop fields. Desktop-only Computer actions remain unavailable on Android. This release adds no providers or backend changes. Existing personal-key priority, optional family provider access, Pro-gated opt-in Sync, local features, and media/credential boundaries remain unchanged.

## Verification notes

Before release packaging, all **700 JVM unit tests** passed across 123 suites, with no failures, errors, or skips. Debug and Android test APK builds passed. Android debug lint completed with **0 errors, 150 warnings, and 8 hints**; it is not a warning-free report. Coverage includes modular-tab preservation, category/tag/saved-view filtering, exact speech-settings migration, interrupted/concurrent migration, settings round trips, whole-input preprocessing, nested pipelines, and multiple speech outputs.

The initial physical-phone run passed **10 of 14 native checks**, including Chat storage, speech-selection persistence, database migration, the Listen dropdown, Inbox preprocessing/saved-audio replay, and alert UI checks. The remaining UI fixtures were refined, but their confirmation run occurred after the phone locked; missing views in that run do not validate gesture, compact-panel, editor, or cross-app playback behavior. A release-time attempt could not start because the debug application had subsequently been removed. The user confirmed that the updated behavior worked before requesting release. Full native-suite completion is not claimed.

## Production packaging and installation

The repository's signed release script completed successfully, repeating all 700 unit tests and debug lint before assembling the APK and app bundle. The APK is not debuggable. Its manifest confirms package `com.rykersoft.hyperscribemobile`, version 2.17.0/code 46, minimum API 29, target API 36, and arm64-v8a/x86_64 support.

The APK and app bundle retain production certificate SHA-256 `2D602C65836A42405D353F0FF8B3A1A1690C16B38AD8DA401144800AC86FE99B`. The prior public 2.16.1 APK was independently downloaded anonymously and verified against its recorded hash and the same certificate.

- APK SHA-256: `4774396f81df39f1c3f1ccecbea0e7950c27306023ab9d16577e19bc25610a55`.
- App bundle SHA-256: `dac0c789931f4bc1701dd9ad9c3b4ae1c90045f083091bcdb87bc1217fc11447`.

The signed APK installed in place on the Samsung SM-N975U1 (Android 12/API 31), upgrading production 2.16.0/code 44 without uninstalling or clearing application data. Package Manager reports 2.17.0/code 46 and retains the original installation date. MainActivity launched successfully; the live application process had no fatal-exception, SQLite corruption, or migration-error markers during the startup check. This is a startup smoke check, not full provider/backend or native-suite coverage.

Public release: [Hyperscribe Mobile 2.17.0](https://github.com/rykergrey/RykerSoft-APKs/releases/tag/hyperscribe-mobile-v2.17.0). Anonymous publication and catalog readback evidence is appended after activation.
