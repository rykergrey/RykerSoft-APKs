# Updates

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
- Added distinct 24 ms Android haptic pulses for held-drag and timed flick letter transitions
- Kept mobile board previews opaque so authored level colors remain accurate instead of dimming through the translucent lobby shell
- Rebuilt the portrait level selectors as one-choice carousels with full Android drag events, readable long names, and larger unclipped arrows
- Removed the preview identity plate and helper tooltips, while making the on-demand info glass more transparent
- Reworked the title into a larger red/blue/pink wordmark with a dedicated animated neon backdrop and no subtitle plate
- Replaced the mobile Rankings dock destination with a themed Player Profile badge; rankings remain available from the preview info button
- Made the Android editor desktop-only and replaced every mobile editor entry point with a feature-rich desktop editor tour

## v1.0.11

- Desktop editor Create now combines Tap, Stamp, and Select in one focused tool row, with selection-aware material and shape editing
- Added full-model editor undo/redo, preserving foreground/background selections, level metadata, audio configuration, motion, gutters, and future-compatible fields
- Added centered 10/15/20/30/40 px grid presets with adaptive contrast, stable stamp previews, edge clipping, and preview-to-commit parity
- Improved desktop palette selection, transform-wheel editing, modifier selection, marquee feedback, layered shadows, and joined-piece outlines
- Improved initials entry on touch with deliberate letter thresholds, magnetic slow-drag feedback, fast-scroll release, and per-step haptics
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
