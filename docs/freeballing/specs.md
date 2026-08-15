# Technical Specifications

## Platform & Requirements
- **Target OS**: Android 7.0+ (API Level 24+ typical Godot export floor); Windows x86_64
- **Engine**: Godot 4.7 (Mobile / Vulkan Mobile export)
- **Package ID**: `com.rykersoft.freeballing`
- **versionCode / versionName**: `28` / `1.0.27`
- **Architectures**: Android `armeabi-v7a`, `arm64-v8a`; Windows `x86_64`
- **Windows packaging**: Portable Godot release EXE with embedded PCK; file/product version `1.0.27.0`
- **Android release signer SHA-1**: `80BD2A1BBC461F86B50F6C569692A6C7BE010F54`
- **Android release signer SHA-256**: `AEC0A0690D2D2F288739D41FBF089F776FE5BEE6385033383A4BC1132BF0587E`

## Architecture
- **Scenes / scripts**: GDScript game board, shooter, pegs, UI home/editor overlays
- **Home UI**: Platform-split lobbies — `MobileHomeScreen` / `DesktopHomeScreen` with `AccurateLevelPreview` (always-updating SubViewport + non-playing `GameBoard` and the selected level's isolated `AmbientBackground`); authored foreground, launcher, shadow, and background animation remains live in previews while gameplay stays inactive; desktop uses nav + level browser + preview + stats columns
- **Branding**: Shared transparent supplied SVG `ArcadeBrand` with layered cyan-and-magenta outlined lettering on both responsive home layouts. The imported SVG generates mipmaps and uses mipmapped linear filtering at display size. There is no logo-specific motion layer; the wordmark sits directly over the shared editor `HOME` ambient preset.
- **Physics**: GodotPhysics2D (ported feel from the Matter.js web client); energy-neutral anti-loop redirects; no scripted soft-bounce boosts on fixed pegs; any sustained contact with a SOLID piece triggers its wall-clock escape/ghost timer, including arches and rotated or concave shapes
- **Scoring**: Central fixed-value `ScoringRules` table; bumper hits accumulate across every multiball in one shot, pay 50 per hit, heat from hit 5, and overload at hit 10 for a 500 bonus; bonus pegs are points-only; capped per-ball gutter payout; isolated multiball run totals. Level-specific gutter multipliers and well colors refresh the five physical capture areas whenever a board loads.
- **Bumper lifecycle**: One shared per-shot hit dictionary drives heat from hit 5 and critical sparks; overloaded bumper nodes and spin-group colliders are temporarily disabled, then materialize in a staggered sparkle sweep after the complete shot including multiballs
- **Aiming**: Wall-clock launcher presentation; collision-free trajectory overlay; per-frame pointer sampling while charging
- **Hit-stop**: Short real-time freeze that restores gameplay pace immediately when its budget expires
- **Motion**: `MotionUtils` + versioned `objectMotions` on `LevelData` for foreground peg slide/wobble/spin/scale profiles, including shared-pivot grouped orbit motion and non-destructive live editor preview
- **Editor**: Portrait bottom dock retained; wide desktop uses a professional studio shell with slim left tool rail, top persona bar (Foreground / Background), contextual property bar, and right Studio dock (Color, Swatches, Layers with real-time search and paging, Motion, Quick Select, Appearance). Features flow path deterministic spacing and axis locks, continuous numeric editing with coalesced undo/redo, centered 10/15/20/30/40 px grids, stable formation previews, full-silhouette rail containment, and lossless full-model undo/redo history
- **Android navigation**: The system Back request is handled in-app: Home toggles an exit confirmation and gameplay opens one guarded pause overlay
- **Audio**: Material sample banks (standard / bumper / armored / multi) plus BGM; stereo pan by hit X. Authored sample imports, file choices, and pitches remain unchanged; fixed-size pools and per-frame voice budgets never retune or replace those sounds. Wall hits and generic non-scale feedback events stay silent because they have no dedicated authored samples. Android preloads music asynchronously, keeps one looping MP3 decoder active, and omits the desktop collision-bus reverb.
- **Performance**: `PlatformPerformance` renders mobile CanvasItems at native resolution, keeps gameplay physics at 60 Hz with interpolation, and caps Android presentation at a deterministic 60 FPS. Mobile starts in `BALANCED_60` and enters `SAFE_60` only after sustained slow-frame pressure; the tiers bound trail history, particle density, ambient shapes, collision decoration, arc detail, refraction, and antialiasing while desktop retains the authored `FULL` presentation. The render-animated launcher opts out of physics interpolation to avoid double-sampling. Grouped motion sampling reuses dictionaries; ball trails and CPU particles use bounded pools and linear compaction.
- **Username input**: Five reusable letter cards support one-to-five-letter A–Z names through blank cards. Physical `InputEventScreenTouch` / `InputEventScreenDrag` routing ignores emulated duplicates, uses unscaled screen deltas, magnetic 180 px steps, and velocity-based one-to-five-letter flicks.
- **Authentication**: Optional Google sign-in uses a Godot v2 Android plug-in with Android Credential Manager on Android. Windows opens a project-authorized localhost page in the system browser and uses Firebase's official browser SDK with in-memory persistence; the page returns only the Firebase UID and session tokens to the game over a state-verified loopback callback. Google email, name, avatar, provider tokens, and OAuth client secrets are never published or persisted by the game.
- **Windows session security**: The desktop Firebase refresh token remains in memory for in-session ID-token renewal and is cleared at sign-out or process exit. Windows players sign in again after restarting the game rather than storing a bearer credential on disk.
- **Public identity**: Unique uppercase A–Z usernames are one to five letters, atomically reserved in Firestore, and may change once every 30 days. Retained reservations prevent old names from being claimed by another UID.
- **Persistence**: Local saves keep customs, preferences, profile stats, and normalized one-to-five-letter local player labels separate from the authenticated public username. Leaderboard reads resolve `username`, `playerName`, legacy `initials`, `player`, or `name` fields without detaching a label from its score. Firestore REST supplies anonymous reads for levels, scores, community maps, and public profiles.
- **Bundled campaign data**: `_manifest.json` contains the 11 replacement boards, all available offline; the production Firestore campaign mirrors the same IDs and content so connected and offline play remain consistent.
- **Backend**: Firebase project `freeballing-59589`; callable Node.js 22 functions verify Firebase Auth, derive owner UID and username server-side, validate and rate-limit writes, and transact scores, votes, levels, and username claims. Firestore client writes are denied; public documents contain no private Google identity.
- **Guest policy**: Guests retain all gameplay, editor, local-save, settings, and offline features. Cloud score submission, community voting, community publishing, and cloud deletion require an authenticated account; score/publishing also require a public username.

## Network
- `INTERNET` and `ACCESS_NETWORK_STATE` enabled for leaderboards and community levels
- Offline play uses bundled level JSON under `data/levels`
- Firebase App Check is staged in observation mode and is not enforced in v1.0.26, allowing telemetry review before a later enforcement rollout
