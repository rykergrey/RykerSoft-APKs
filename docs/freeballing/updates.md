# Updates

## v1.0.27

- Overhauled the desktop level editor into a professional creative suite with dedicated Foreground and Background personas, contextual top bar, and right Studio docks for Color, Swatches, Layers, Motion, Quick Select, and Appearance
- Added deterministic flow path placement tools with live spacing adjusters, axis locks, and chain limits for precise peg creation
- Enhanced the Layers studio with real-time layer search, filtering, and paging for dense boards
- Added continuous numeric editing with coalesced undo/redo history and live selected-motion previewing
- Strengthened weekly scoreboard revalidation against authoritative server time windows with graceful offline caching and lifecycle-safe UI rendering
- Maintained the fixed 60 FPS Android target, responsive pooled audio, optional Google sign-in, private account identity, unique public usernames, authenticated cloud writes, and complete guest/offline play

## v1.0.26

- Fixed Windows Google sign-in by moving the browser exchange to Firebase's authorized localhost flow, avoiding the desktop OAuth client's secret-required token endpoint without shipping a client secret
- Made every SOLID shape start its three-second escape timer on sustained contact, so arches, rotated pieces, side contacts, and concave pockets flash and ghost instead of trapping a ball indefinitely
- Kept complete peg silhouettes inside the authored rails across placement, stamps, duplication, paste, transforms, import, save, preview, and gameplay, while cleaning invalid legacy relationships safely
- Confined level animation and final-ball camera tracking to the yellow cabinet frame on desktop, portrait, zoomed, and rotated views

## v1.0.25

- Optimized dense animated boards universally by batching compatible peg motion, eliminating unchanged redraw and collider work, and keeping editor previews aligned with gameplay motion
- Added Android-aware motion diagnostics to the level editor so future levels report their actual runtime motion-body, moving-peg, background, and shadow cost before release
- Reworked moving peg shadows as retained transforms and automatically disables costly peg-shadow layers on dense Android boards while preserving crisp peg faces and the inexpensive ball shadow
- Restored every authored sound-effect asset and exact playback pitch, removed substituted wall-hit notes, and removed all vibration and haptic feedback
- Maintained the fixed 60 FPS Android target, responsive pooled audio, optional Google sign-in, private account identity, unique public usernames, authenticated cloud writes, and complete guest/offline play

## v1.0.24

- Stabilized Android presentation at a consistent 60 FPS target with balanced and safe quality tiers that adapt only after sustained frame pressure, while preserving the full authored desktop presentation
- Reduced mobile rendering cost across ball trails, particles, ambient shapes, collision effects, score stickers, trajectory previews, wall ripples, and grouped-object motion without changing gameplay physics or scoring
- Rebuilt immediate UI and gameplay feedback around preloaded sample pools, trimmed uncompressed one-shots, collision throttling, and background music preloading so taps, launches, impacts, and special shots respond without runtime synthesis or input-frame loading
- Reduced Android audio and package overhead by using a single looping background-music stream, disabling mobile-only reverb work, trimming silence from effects, compressing native libraries, baking shaders, and excluding development-only resources from exports
- Maintained optional Google sign-in, private account identity, unique one-to-five-letter public usernames, authenticated server-owned cloud writes, and complete guest/offline play

## v1.0.23

- Made every level-selector board preview play its authored foreground piece motion, rotating components, launcher presentation, and moving shadows while keeping gameplay inactive
- Rendered each selected level's own ambient background animation inside its preview instead of leaving the board frozen over the generic home field
- Added focused regression coverage proving that both foreground and background preview animation advance without spawning gameplay
- Maintained optional Google sign-in, private account identity, unique one-to-five-letter public usernames, authenticated server-owned cloud writes, and complete guest/offline play

## v1.0.22

- Replaced the complete bundled and cloud campaign with eleven newly authored boards: The Cage, Diamond Mine, Nebula Drift, Galton Board, Honeycomb Haven, Orbital Decay, Plinko Master, Golden Pyramid, Super Collider, Triforce, and Whirlpool
- Removed Checkmate and Sands of Time from the campaign, and normalized every new board title so no `Remix` suffix appears in the level browser
- Preserved stable campaign IDs, curated categories, offline availability, audiovisual settings, motion data, custom gutters, and exact cloud/bundled parity for the replacement boards
- Maintained optional Google sign-in, private account identity, unique one-to-five-letter public usernames, authenticated server-owned cloud writes, and complete guest/offline play

## v1.0.21

- Removed Launcher Ball Recall in full, including launcher recapture and relaunch behavior, tractor-beam presentation, recovery slow motion, camera shifting, and its related animation and regression-test paths
- Rebuilt the wide desktop editor as a dense professional workspace with a 48 px command bar, narrower foreground/background rails, dedicated Create/Select/Material/Motion and Create/Select/Look/Motion workspaces, exact object inspectors, level music and gutter authoring, conventional Ctrl/Command-add and Alt-remove selection, stable scrolling, and uninterrupted numeric editing
- Added live selected-motion preview with a dedicated pause control, clearly separated Spin Each from Orbit Group, and preserved a shared group pivot without mutating authored peg transforms during preview
- Maintained optional Google sign-in, private account identity, unique one-to-five-letter public usernames, authenticated server-owned cloud writes, and complete guest/offline play

## v1.0.20

- Smoothed the supplied SVG logo at responsive desktop and mobile sizes by generating mipmaps and using mipmapped linear filtering, eliminating the jagged diagonal edges caused by shrinking one imported raster level
- Added native Android Back behavior: Back opens the pause menu during a match, shows a focused exit confirmation from Home, and never stacks duplicate pause overlays
- Refined the wide desktop editor with independently scoped foreground/background rails, conventional Ctrl/Command-add and Alt-remove selection, wider responsive inspectors, stable scrolling, and uninterrupted numeric motion editing
- Added live selected-motion preview with a dedicated pause control, clearly separated Spin Each from Orbit Group, and made grouped orbit authoring preserve one shared pivot without mutating authored peg transforms during preview
- Pulled undersized-peg shadows proportionally closer to their silhouettes while keeping the established cast length for normal and large pieces
- Preserved optional Google sign-in, private account identity, unique one-to-five-letter public usernames, authenticated server-owned cloud writes, and complete guest/offline play

## v1.0.19

- Removed the separate animated title backdrop from both responsive home layouts so the supplied FreeBall.ing logo no longer has distracting red, blue, and pink shapes sweeping behind it
- Replaced the home screen's custom procedural background variation with the level editor's shared `HOME` preset: mixed placed shapes, bounce walls, and the same slide, spin, and scale motion used by authored level backgrounds
- Centralized the `HOME` composition in the ambient-background component so the lobby and editor cannot drift into different implementations

## v1.0.18

- Replaced the shared mobile and desktop title with the supplied cyan-and-magenta layered FreeBall.ing SVG and enlarged the desktop title stage to give the new artwork room to breathe
- Made the portrait title stage responsive, keeping a compact height on short phones while expanding it on taller displays without pushing Shuffle beneath the bottom dock
- Removed the temporary 100-board generated curated library, its generator, visual test, taxonomy groups, and merge path; the bundled campaign now returns to the 13 established boards and connected campaign data remains authoritative
- Deferred roaming-bonus peg morphing until after the active physics query finishes, preventing collision-shape rebuild errors during peg contact callbacks
- Preserved optional Google sign-in, private account identity, unique one-to-five-letter public usernames, authenticated server-owned cloud writes, and full guest/offline play

## v1.0.17

- Fixed per-level, weekly, and all-time leaderboards so each stored score displays its corresponding player label across current `username` records and legacy `playerName`, three-letter `initials`, `player`, and `name` records
- Normalized local player labels to the supported one-to-five-letter format while preserving existing three-letter score history and keeping authenticated public usernames separate from Google identity
- Added a deterministic 100-board curated campaign library across ten design collections, complete with bundled manifests, taxonomy metadata, full audiovisual level settings, motion, custom gutters, and a synchronized level-design catalog
- Added a game-specific Level Design Handbook covering scoring, fixed well geometry, materials, motion, visual composition, Rube Goldberg sequencing, testing, safe JSON editing, and pre-publish checks
- Kept bundled-only curated boards available online and offline by merging them with the remote campaign manifest while allowing cloud records to remain authoritative for matching level IDs
- Fixed authored gutter metadata so custom one-to-three-times payouts and per-well colors refresh the physical capture areas, score correctly, and drive matching board and capture effects after every level load
- Added a dedicated animated neon title stage on mobile and desktop with faster ribbons, rails, print-head sweeps, and orbiting dots

## v1.0.16

- Added optional Google sign-in on Android and Windows and a unique public username system using the familiar letter-card input, expanded from fixed three-letter initials to one through five letters
- Added a Windows system-browser sign-in flow using a dedicated desktop OAuth client, localhost callback, PKCE and CSRF state validation; desktop session credentials remain memory-only and are cleared when the game closes
- Added full guest play: campaign, local scores, custom-level creation, settings, and offline play work without an account; cloud score submission, voting, and community publishing require sign-in and a claimed username
- Secured Firebase writes behind authenticated callable functions, atomic username reservations, server-derived ownership/attribution, private identity records, rate limits, and read-only public Firestore rules
- Kept Google account details private: public profiles expose only the chosen game username, never email, Google name, avatar, provider data, or tokens
- Smoothed mobile launcher presentation by separating render-frame movement from physics interpolation and adding a subtle directional motion echo
- Rebalanced bumper overloads to heat from hit 5 and overload at hit 10, with hit totals shared across multiballs from the same shot
- Added a staggered materialization effect when overloaded bumpers return after the complete shot

## v1.0.15

- Removed the separate drifting red, blue, and pink title panels from the mobile home hero
- Kept the title area transparent so only the SVG logo's own restrained ribbons appear over the shared animated lobby

## v1.0.14

- Replaced the procedural title with a custom cream, cyan, violet, and hot-pink ribbon SVG shared by Android and Windows
- Kept the SVG background transparent so the animated lobby remains visible around and between the restrained skewed ribbons
- Removed the moving scanline from the mobile title animation while preserving its ribbon and orbiting-dot motion
- Constrained touch-drag letter artwork to a single initials-card row without changing the deliberate 180-screen-pixel selection threshold

## v1.0.13

- Bumpers now award their full 50 points on every hit and temporarily overload on the 25th hit from one ball
- Added a separate 500-point overload bonus, with the final normal hit and bonus both included in that ball's gutter-eligible run score
- Added a ten-hit heat warning, escalating red coloration, critical spark sprays during the final five hits, and a debris/flash/shockwave destruction burst
- Overloaded bumpers leave play for the remainder of the current shot and restore after all normal and multiball balls from that shot finish
- Preserved normal bumper kick, restitution, and moving-surface physics through the destruction hit
- Added a dedicated mobile Player Profile badge and expanded profile sheet for top scores and most-played maps
- Refined portrait category and level selectors into large one-choice carousels with clearer drag and arrow controls
- Added a richer desktop-editor feature tour on Android while keeping the full editor desktop-only
- Added an official portable Windows x86_64 release alongside the signed Android APK

## v1.0.12

- Rebuilt mobile initials entry around physical touch events so Android no longer double-processes emulated mouse movement
- Greatly reduced initials sensitivity with 180-screen-pixel letter spacing and stronger magnetic resistance during slow drags
- Added velocity-based upward/downward flicks that cycle one to five letters, with a strict five-transition cap per gesture
- Kept mobile board previews opaque so authored level colors remain accurate instead of dimming through the translucent lobby shell
- Rebuilt the portrait level selectors as one-choice carousels with full Android drag events, readable long names, and larger unclipped arrows
- Removed the preview identity plate and helper tooltips, while making the on-demand info glass more transparent
- Reworked the title into a larger red/blue/pink wordmark with a dedicated animated neon backdrop and no subtitle plate
- Replaced the mobile Rankings dock destination with a themed Player Profile badge; rankings remain available from the preview info button
- Made the Android editor desktop-only and replaced every mobile editor entry point with a feature-rich desktop editor tour

## v1.0.11

- Desktop editor Create now keeps compact Place and Stamp tools separate from the dedicated Select inspector, with selection-aware material, shape, geometry, gameplay, note, and appearance editing
- Added full-model editor undo/redo, preserving foreground/background selections, level metadata, audio configuration, motion, gutters, and future-compatible fields
- Added centered 10/15/20/30/40 px grid presets with adaptive contrast, stable stamp previews, edge clipping, and preview-to-commit parity
- Improved desktop palette selection, transform-wheel editing, modifier selection, marquee feedback, layered shadows, and joined-piece outlines
- Improved initials entry on touch with deliberate letter thresholds, magnetic slow-drag feedback, and fast-scroll release
- Play Again now starts a clean Player 1 match while preserving the selected time limit
- Reduced collision-storm frame spikes with chunked peg/shadow redraws, visual-only hit scaling, compacted CPU particles, simplified ring-buffer trails, and bounded collision audio clustering

## v1.0.10

- Aiming stay smooth under hit-stop: launcher motion uses wall-clock pacing, and the charge pointer is sampled once per rendered frame
- Trajectory preview is a lightweight flight arc (no per-segment physics raycasts)
- Hit-stop recovers immediately when its budget expires instead of leaving a long slow-motion tail; armor breaks no longer trigger global hit-stop
- Desktop lobby gains a dedicated portrait level browser beside the preview, with a compact single-column menu/category rail

## v1.0.9

- Replaced 480×800 mobile viewport upscaling with native-resolution CanvasItem rendering
- Restored full mobile antialiasing, curve detail, particles, ambient layers, refraction, and per-frame trail sampling
- Display-aware 60/90/120 FPS pacing with 60 Hz physics interpolation for smooth high-refresh motion
- Ball trails, peg shadows, and camera focus sample interpolated render poses so custom draws stay locked to the body

## v1.0.8

- Bonus pegs now award points only and no longer add another launch
- Mobile performance budgets detect Android/iOS more reliably; ambient drawing honors AA / arc-segment caps
- Profiler HUD treats desktop as non-budgeted; headless skips the frame monitor

## v1.0.7

- Vertical-loop escapes now redirect existing momentum instead of adding sideways speed
- Removed artificial off-center shape shoves, soft-contact bounce boosts, and armored stuck-escape impulses
- Spinning bumper groups still inherit tangential motion (speed-capped); armor keeps the physics solver result

## v1.0.6

- Removed Clear Combo streak multipliers; pegs now always use fixed table values
- Bumper contacts use a target kick speed floor instead of compounding restitution
- Unified standard/armor/bonus/multiball bounce response; lowered hard max ball speed
- Combo HUD marks, floating-text tiers, and combo SFX routing removed with the streak system

## v1.0.5

- Scoring overhaul via central `ScoringRules`: Standard 100, final Armor break 500, Bonus 100 + launch, Multiball 100 + live ball, first per-ball Bumper 50
- Clear Combo I/II/III at 5 / 12 / 20 destroyed pegs (1.25× / 1.5× / 2×); armor chips, solids, walls, dividers, and bumpers neither advance nor reset it
- Perfect Beam at 1.25× peg value with no combo progress; one-time 5,000 Perfect Five streak award
- Gutter multipliers capped at 3× and isolated to each ball's own earned score during multiball
- Removed deprecated Ghost / Explosive / Sniper / Pilot / Zip power-ball systems and ammo UI
- Versioned foreground object motion profiles for animated pegs; desktop editor gains dual inspector rails

## v1.0.4

- Redesigned mobile and desktop lobbies with accurate native board previews
- Shared arcade brand mark, in-place Campaign / Community / Editor / Rankings / Settings panels
- Local profile stats card (matches, best score, most played) with tap-to-open levels
- Match timer default raised to 120 seconds; play starts from the selected level without a separate briefing step
- Preview boards clear shadow-floor draw state cleanly when levels change

## v1.0.3

- New mobile arcade lobby (portrait ink / spray stage) and wide desktop three-column home
- Soft cut-corner menu controls, chamfer panels, and refreshed briefing / end-of-game chrome
- Platform performance budgets for mobile: capped FPS, lighter trails/particles, viewport scaling
- Optional on-device profiler HUD for smoothness tuning

## v1.0.2

- Stereo positional SFX: peg hits and gutter captures pan by board X
- Refreshed bundled campaign level data across the 13-level set

## v1.0.1

- Simplified ball mechanics (standard charge shot; power-ball types removed from play UI)
- Bumper SFX uses a single one-shot clip; new randomized multiplier peg hit bank
- Updated gutter samples and trimmed bundled campaign level set
- Briefing / ammo UI cleanup
- Safer level delete flow with confirmation (local + own community levels)

## v1.0.0

- First RykerSoft hub release of the Godot FreeBall.ing Android build
- Signed release APK (`com.rykersoft.freeballing`, versionCode 1)
- Physics campaign play, level editor, audio, and Firebase leaderboards/community levels
- Package ID standardized to `com.rykersoft.freeballing` for hub installs
