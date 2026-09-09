# Mobile and desktop experience update

Released as v1.0.29 (Android code 30) from the updated v1.0.28 source tree. Android, Windows, and Linux packages are available in the RykerSoft distribution release. The score and publishing functions are deployed, and existing Community summary metadata has been migrated. See [release notes and validation limits](release-1.0.29.md).

## What changed

- Pause stops the SceneTree simulation and preserves in-flight position, velocity, score, and time. Resume, restart, exit, Escape, Android Back, and focus loss share the same flow.
- Home restores board selection, source, loaded pages, and scroll across layout changes. Overlays dismiss before exit; hidden/unfocused previews suspend rendering.
- Mobile gains More, larger controls and text, typed username input, and a thumbnail sheet with favorites, recent boards, and search/sort of loaded entries.
- Desktop prioritizes the board and Play, moves local stats to Profile, and groups details into Info/Parts/Scores. Gameplay supports keyboard aim/charge and collapsible controls in the side margin.
- First play offers optional untimed practice, with a reminder of aim/charge/release and Perfect Shot streak feedback. Practice cannot submit scores.
- AppPreferences supplies shared audio, text, motion, flashes, quality, and optional Windows remember-sign-in settings. The editor keeps its persona design and gains readable font weights, one color-scope dropdown, a dock that accommodates larger text, and compact toolbar icons when space is tight. History comparison/checkpoint/recovery helpers are extracted without changing save formats.
- Community uses projected pages of 25 summaries with a timestamp/document-name cursor, and at most 64 thumbnail points per board. Geometry is fetched only for the selected board. Summary pagination reduces payload, not Firestore per-document read billing; it is not global full-text search.
- Ranked submissions carry ruleset/time-limit/level timestamp metadata through offline retry. The server adds a revision digest and applies a generous score envelope. Legacy submissions remain bounded and identifiable; existing rankings are retained. Client metadata can still be forged: this is plausibility checking, not anti-cheat or replay verification.

## Verification

Use Godot 4.7.x, Python 3, and the Node 22 runtime declared by Firebase. Final development testing used Linux Godot 4.7.2, Node 22.23.2, and Java 21, with the Firebase emulators explicitly using Node 22.

```sh
godot --headless --editor --path . --import
python3 tools/run_regressions.py
npm --prefix functions ci --ignore-scripts
npm --prefix functions test
firebase emulators:exec --project demo-freeballing --only auth,firestore,functions 'GCLOUD_PROJECT=demo-freeballing FIRESTORE_EMULATOR_HOST=127.0.0.1:8080 node --test functions/test/firestore.rules.test.js functions/test/functions.integration.test.js'
```

The default runner covers 20 current suites, including pause physics, input, first play, practice, resize, preferences, score outbox, editor history/selection/tools, scoring, and performance contracts. Every scene has an isolated save directory. Script errors fail even if Godot exits zero. Emulator tests cover identity, ownership, weekly reads, retry idempotency, stale/invalid ranked rules, revision persistence, and stable 25-row pagination across equal timestamps.

`desktop_palette_selection_regression_test` is a pre-persona historical suite referencing the removed `level-checkmate` fixture and obsolete three-tab UI. It is retained unchanged but excluded from the default runner; current professional-editor and selection-palette suites cover the present shell. Existing native-window screenshot suites are also excluded because they assume window geometry that local tiling does not guarantee. Use the fixed-viewport capture scene instead:

```sh
godot --path . res://tools/experience_capture.tscn -- --capture-dir=/tmp/freeballing-captures
godot --path . res://tools/experience_capture.tscn -- --simulate-mobile-performance --capture-dir=/tmp/freeballing-captures
```

Add `--large-text` to capture 125% text at 1280×720 desktop / 480×800 portrait, instead of standard 1440×900 / 480×1023. Use isolated XDG save directories on Linux. The capture scene requires a renderer; it is not a headless screenshot test. It produces Home, settings/profile/browser, gameplay, Pause, practice, and desktop editor views. The project export presets exclude tools.

Some existing Godot suites and editor captures emit resource/RID cleanup warnings at process exit. Passing functional assertions does not certify leak-free behavior or native-device performance.

## Backend rollout order

1. Install functions dependencies and run unit/emulator checks under Node 22 and Java 21.
2. With the intended Firebase project and authorized admin credentials, deploy `submitScore` and `publishCommunityLevel` before distributing the new client.
3. Dry-run the metadata migration, review the count, then apply it:

```sh
GCLOUD_PROJECT=freeballing-59589 node functions/tools/backfill-community-summaries.js
GCLOUD_PROJECT=freeballing-59589 node functions/tools/backfill-community-summaries.js --apply
```

The script adds preview points/count and fills missing numeric updatedAt; it does not rewrite geometry or scores. Each write has a lastUpdateTime precondition so a concurrent publication cannot be overwritten. If a batch races, rerun after review. The feed's orderBy excludes documents without updatedAt, so backfill existing boards before publishing the client. The query uses the standard updatedAt index and document-name tie breaker; emulator pagination has been checked.

4. Confirm guest Community reads, loading/retry states, a legitimate score, an identical retry, and a stale-board rejection against the intended deployment. Build Android and Windows exports with their existing signing/packaging workflow, bump release versions, then publish through the normal release process.

## Native-device checks not exercised for v1.0.29

- Android: physical touch, software keyboard and safe-area/rotation behavior; Back from each sheet; background a moving multiball shot and resume without movement or timer loss.
- Windows: browser sign-in, opt-in DPAPI write/restore after restart, refresh-token rotation, sign-out deletion, and graceful fallback if PowerShell/DPAPI is unavailable. Encrypted storage is specific to the Windows account; no secret is stored in command arguments or plain save JSON.
- Representative modest Android hardware and an integrated-GPU Windows laptop: use F8 / `--perf-hud` for p95/p99 frame time, physics time, active balls, draw calls, and quality tier. Compare cold/warm loads and dense animated/multiball boards, then run 15–20 minutes to observe sustained thermal behavior. Check Full, Balanced, and Battery saver for presentation changes without physics/scoring changes.
- This Linux simulation cannot certify native sign-in, battery use, touch ergonomics, Android thermal behavior, or native behavior of the EXE/APK. No speedup percentage is claimed from headless timings.
