# Technical Specifications

## Platform & Requirements
- **Target OS**: Android 7.0+ (API Level 24+ typical Godot export floor); Windows x86_64
- **Engine**: Godot 4.7 (Mobile / Vulkan Mobile export)
- **Package ID**: `com.rykersoft.freeballing`
- **versionCode / versionName**: `16` / `1.0.15`
- **Architectures**: Android `armeabi-v7a`, `arm64-v8a`; Windows `x86_64`
- **Windows packaging**: Portable Godot release EXE with embedded PCK; file/product version `1.0.15.0`

## Architecture
- **Scenes / scripts**: GDScript game board, shooter, pegs, UI home/editor overlays
- **Home UI**: Platform-split lobbies — `MobileHomeScreen` / `DesktopHomeScreen` with `AccurateLevelPreview` (SubViewport + non-playing `GameBoard`); desktop uses nav + level browser + preview + stats columns
- **Branding**: Shared transparent SVG `ArcadeBrand` with outlined custom glyphs, restrained skewed ribbons, layered hard shadows, and a responsive `TextureRect` used by portrait and desktop; the mobile hero adds no separate title-specific geometry
- **Physics**: GodotPhysics2D (ported feel from the Matter.js web client); energy-neutral anti-loop redirects; no scripted soft-bounce boosts on fixed pegs
- **Scoring**: Central fixed-value `ScoringRules` table; bumpers pay 50 per hit and overload at 25 hits for a 500 bonus; bonus pegs are points-only; capped per-ball gutter payout; isolated multiball run totals
- **Bumper lifecycle**: Per-ball hit dictionaries drive warning heat and critical sparks; overloaded bumper nodes and spin-group colliders are temporarily disabled, then restored after the complete shot including multiballs
- **Aiming**: Wall-clock launcher presentation; collision-free trajectory overlay; per-frame pointer sampling while charging
- **Hit-stop**: Short real-time freeze that restores gameplay pace immediately when its budget expires
- **Motion**: `MotionUtils` + versioned `objectMotions` on `LevelData` for foreground peg slide/wobble/spin/scale profiles
- **Editor**: Portrait bottom dock retained; wide desktop uses dual inspector rails, integrated Tap / Stamp / Select tools, centered 10/15/20/30/40 px grids, stable formation previews, and lossless full-model undo/redo history
- **Audio**: Material sample banks (standard / bumper / armored / multi) plus BGM; stereo pan by hit X
- **Performance**: `PlatformPerformance` renders mobile CanvasItems at native resolution with full trails/particles/AA, keeps gameplay physics at 60 Hz with interpolation, and paces rendering to the detected display refresh rate up to 120 FPS. Retained peg faces and shadows are chunked; ball trails use a simplified ring history; CPU particles compact live entries linearly; collision-audio clusters are fixed-size.
- **Initials input**: Physical `InputEventScreenTouch` / `InputEventScreenDrag` routing ignores emulated duplicates, uses unscaled screen deltas, magnetic 180 px steps, and velocity-based one-to-five-letter flicks
- **Haptics**: Android `VIBRATE` permission plus 24 ms default-amplitude pulses for collision feedback and every held-drag or timed-flick initials transition
- **Persistence**: Local saves for customs/prefs/profile stats; Firestore REST for levels & highscores
- **Backend**: Firebase project shared with the web FreeBall.ing app; public score/map submissions use non-unique three-letter arcade initials and do not represent authenticated accounts or authorization identities

## Network
- `INTERNET` and `ACCESS_NETWORK_STATE` enabled for leaderboards and community levels
- Offline play uses bundled level JSON under `data/levels`
