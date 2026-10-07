# Hyperscribe Mobile 2.17.1 — Direct tabbed floating menu

Release date: October 7, 2026. Android version **2.17.1 / code 47** follows 2.17.0/code 46. The application package remains `com.rykersoft.hyperscribemobile`.

## Floating menu behavior

The right-edge floating button opens the tabbed menu directly. An inward swipe starts at the first enabled tab, nearest the edge, and continuing the swipe selects other tabs in configured order. Moving back toward the edge selects earlier tabs. The strip scrolls to keep the selected tab in view. Releasing keeps the chosen tab open without starting recording or executing an item. Holding opens the configured or remembered tab. Ordinary tap recording and vertical repositioning remain available.

Tapping a tab switches its content directly. Tapping outside the menu or pressing Back closes it; the close button remains available. Closing restores the floating button's saved position while recording and speech playback continue.

The modular configuration introduced in 2.17.0 remains available: custom names, duplicated Capture/Actions/Inbox/Listen tabs, ordering and visibility, selected capture/import tools, all matching or selected actions, category and tag filters, live saved Inbox views, matching pins, and recent-item limits. Menu dimensions, tab placement, restore-tab selection, and remembering the last tab remain configurable. The tab strip and contents scroll when needed. Listen retains its speech-action selector and playlist controls.

The preceding [2.17.0 release record](release-2.17.0-floating-menu-speech-actions.md) retains that version's implementation, packaging, installation, and verification history. Its results are not verification of this revision.

## Verification

All **701 JVM tests** passed across 123 suites with no failures, errors, or skips. Debug app and Android test APK builds passed. Debug lint completed with **0 errors, 145 warnings, and 8 hints**. The canonical release script then assembled and signed the production APK and app bundle using `--skip-tests`, following those completed checks.

All **six targeted native checks** passed on the Samsung SM-N975U1 (Android 12/API 31) in one final run. They covered continuous tab selection and reversal without execution, reaching distant custom tabs with local font scale 1.3/light theme, long-title display, consuming outside taps and transparent-gutter taps without activating the underlying test app, custom action subsets and live tab preferences, stop profiles, the Listen action dropdown passing the whole clipboard, real queued audio across apps and replay after Stop, and the modular tab editor. This is targeted coverage, not the entire Android instrumentation suite.

Setup attempts were invalidated by Android's automatic restore killing the fresh debug process and by the lock screen. Once unlocked, five checks passed; the remaining fixture expected an unnormalized title longer than the existing 40-character limit. Correcting fixture input normalization produced the six-test pass without changing production code. The temporary primary-profile debug installation was removed with its data retained, the existing work-profile installation was preserved, and the phone's original five-minute screen timeout was restored.

## Production packaging and installation

The non-debuggable APK manifest confirms version 2.17.1/code 47, minimum API 29, target API 36, and arm64-v8a/x86_64 support. APK and app bundle retain production certificate SHA-256 `2D602C65836A42405D353F0FF8B3A1A1690C16B38AD8DA401144800AC86FE99B`, matching the independently verified preceding releases.

- APK SHA-256: `788195a8729faeb0c56f0f24374b38a6ff82c4a28b2fddce51af76bbb1a68b6a`.
- App bundle SHA-256: `fd750a3bf85f25c1af9646fe6a975faff063a0cc6dcc6a47c410a91e44d8f0e5`.

The signed APK upgraded production 2.17.0/code 46 in place on the connected phone. No production data was cleared or uninstalled. Package Manager reports 2.17.1/code 47 and preserves the original installation date. MainActivity launched successfully, with no fatal-exception, SQLite corruption, or database-migration error markers in the startup check. Live provider/entitlement testing is not claimed; this revision adds no provider or backend changes.

## Public publication evidence

Public release: [Hyperscribe Mobile 2.17.1](https://github.com/rykergrey/RykerSoft-APKs/releases/tag/hyperscribe-mobile-v2.17.1). All five release assets were downloaded anonymously and matched the reviewed local bytes. The downloaded APK's manifest and production certificate were verified again. The installed phone APK's SHA-256 also exactly matched the signed and public APK.

All four app documents and supporting release/menu references were fetched anonymously and matched the reviewed files. The existing Inbox, Actions, and Chat gallery was preserved; two reviewed native captures with synthetic content show the tabbed Capture and speech-action Listen interface.

Source tag `v2.17.1` identifies commit `4856cd60f9ce09a74370b84e7c51c9f221dad715`. User documentation was published in `d51f888`, native images in `fb40ef4`, and the catalog in `e49819b91ddfa7c26e271595f8b73c9762394e15`. The full catalog retains 17 unique applications and all unrelated entries and Desktop pointers. Only Mobile's release version, APK URL/hash, changelog, and screenshot list changed.

The catalog's canonical public raw URL, explicit-main-ref URL, and commit-pinned URL were verified at 2.17.1/code 47. After the canonical URL's five-minute CDN cache updated, its complete 17-app catalog matched the reviewed published file. RykerSoft was opened on the phone, but its current WebView did not expose the expected native refresh controls; an on-device hub refresh was not confirmed. Production installation, startup, exact APK bytes, and the six native checks were confirmed independently.
