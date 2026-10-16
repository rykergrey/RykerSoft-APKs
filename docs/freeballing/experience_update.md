# Mobile arcade experience — v1.0.30

This release updates the Android and Windows clients from v1.0.29. Android uses versionCode 46 and versionName 1.0.30; the portable Windows export uses file/product version 1.0.30.0. This document describes implementation and verification boundaries; published artifacts and catalog state must be checked through the release workflow.

## Changes since v1.0.29

- Mobile Home, Community, More, and Profile are independent destinations. Their board selections, loaded Community pages, list filters, and scroll state are retained through navigation. More/Profile do not construct a hidden board preview. Nested popups and detail views close before Back returns to Home or offers exit.
- The selected-board gallery and loaded-board list share real board artwork. One render/fetch queue bounds pending requests and the texture cache, drops requests with no visible consumer, and shows loading/unavailable states rather than an invented layout. Community request completion is guarded against navigation races.
- Mobile controls and panels use square-corner paper faces, cut edges, opaque surfaces, and retained shadows. The board's soft perimeter cast is shared between preview and gameplay. A static exterior fill follows the selected level's rail color without painting over the live cabinet or its authored background.
- Play retains the Home preview viewport and logo while the board expands into its matching gameplay frame. Source launcher, moving-piece, lighting, and background presentation are synchronized at handoff. Gameplay is frozen until the live board is rendered. Reduced motion uses a short dissolve; Back or backgrounding during the transition completes the handoff into Pause.
- Mobile board previews render a static selection snapshot and mobile Home never starts an automatic attract-mode game. Desktop keeps live authored previews and its idle demo. Hidden or inactive ambient nodes stop processing, cancel presentation tweens, and discard suspended score-wave work.
- Local high-score entry uses three cards. Existing longer local player preferences are read and saved as their first three A–Z letters; old score records keep their stored labels. Each touch direction has a bounded five-transition budget, and reversing a held touch resets the old remainder and budget. Stale touch velocity cannot flick in the previous direction. Authenticated public usernames remain separate one-to-five-letter names.
- Desktop editor changes in this release are square-corner visual styling. The persona studios, contextual inspectors, numeric previews, color scopes, history helpers, and authoring tools were already present in v1.0.29.

Pause/practice, shared preferences, keyboard aim/charge, optional Windows DPAPI sign-in persistence, Community summary pagination, and ranked-run metadata continue from v1.0.29. The Android presentation target remains 60 FPS with 60 Hz gameplay physics and sustained-pressure quality adaptation. No measured percentage speedup or universal device frame-rate guarantee is claimed.

## Verification workflow

Use Godot 4.7.x, Python 3, the Node 22 runtime declared by Firebase, and Java 21 for emulator checks. Run tests with isolated save directories so existing player data is unaffected.

```sh
godot --headless --editor --path . --import
python3 tools/run_regressions.py
npm --prefix functions ci --ignore-scripts
npm --prefix functions test
firebase emulators:exec --project demo-freeballing --only auth,firestore,functions 'GCLOUD_PROJECT=demo-freeballing FIRESTORE_EMULATOR_HOST=127.0.0.1:8080 node --test functions/test/firestore.rules.test.js functions/test/functions.integration.test.js'
```

The regression runner isolates each scene and fails on script/assertion errors even if Godot exits zero. Current suites cover destination navigation, real thumbnails and caches, browse modes, launch handoff, mobile branding, ambient lifecycle, desktop-only attract mode, touch reversal and three-letter local initials, plus pause, preferences, editor tools/history, identity, scoring, and performance contracts. The runner selects a simulated mobile budget for its performance suite; this is functional coverage rather than physical-device frame-time certification.

The retained historical `desktop_palette_selection_regression_test` references a removed Checkmate fixture and pre-persona UI, so it is excluded from the default runner. Native-window screenshot suites that assume window geometry are also excluded. Use a fixed-viewport capture scene for layout inspection:

```sh
godot --path . res://tools/experience_capture.tscn -- --capture-dir=/tmp/freeballing-captures
godot --path . res://tools/experience_capture.tscn -- --simulate-mobile-performance --capture-dir=/tmp/freeballing-captures
```

Add `--large-text` to capture 125% text at 1280×720 desktop / 480×800 portrait instead of standard 1440×900 / 480×1023. The scene requires a renderer. Project exports exclude tools and development documentation. Some existing suites emit resource/RID cleanup warnings at exit; passing functional assertions does not certify leak-free behavior.

## Backend compatibility

The v1.0.30 client changes add no Firebase functions, rules, indexes, or data migration. They retain the v1.0.29 backend contract: 25-document Community summary pages ordered by updatedAt and document ID, authenticated writes, retry idempotency, ruleset/time-limit/level revision metadata, and server plausibility bounds. These bounds are not authoritative replay verification. Existing rankings remain in place.

Older Community documents must already have summary metadata and numeric updatedAt for the paged feed. The existing admin maintenance tool supports a dry run and explicit apply:

```sh
GCLOUD_PROJECT=freeballing-59589 node functions/tools/backfill-community-summaries.js
GCLOUD_PROJECT=freeballing-59589 node functions/tools/backfill-community-summaries.js --apply
```

The tool adds preview points/count and missing numeric updatedAt, with lastUpdateTime preconditions. It does not rewrite geometry or scores. This is an administrator maintenance procedure, not a required player action or a new migration for this release.

## Native release validation boundaries

- Android checks should cover physical touch reversals in both directions, three-card local entry and separate public username entry, software keyboard, safe areas/rotation, Back through each destination and dropdown, preview-to-game handoff, and background/resume during a moving multiball shot.
- Windows checks should cover native launch, browser sign-in, opt-in DPAPI write/restore after restart, token renewal, sign-out deletion, and fallback when secure storage is unavailable. DPAPI storage is tied to the current Windows account; tokens are not placed in command arguments or plain save JSON.
- Representative modest Android hardware and an integrated-GPU Windows laptop are needed for p95/p99 frame times and sustained 15–20 minute thermal checks on dense animated/multiball boards. Compare Full, Balanced, and Battery saver without changing physics or scoring.
- A Linux-hosted Godot run and a successfully built Windows EXE do not establish native Windows sign-in/DPAPI behavior. Headless timing does not establish Android battery use, thermal behavior, or device touch ergonomics. Report actual artifact/device checks separately rather than treating this checklist as completed evidence.
