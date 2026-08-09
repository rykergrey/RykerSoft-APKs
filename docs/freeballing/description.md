# FreeBall.ing

A physics puzzle arcade game in the spirit of Pachinko and Peggle: launch balls, hunt valuable routes, and ride emergent melodies as everything bounces. Includes a full level editor, campaign and community levels, and shared Firebase leaderboards.

## Key Features
- **Physics playfield** — Heavy steel-ball feel, bumper kickouts, armored pegs, multiplier pegs, and score gutters at the bottom. Vertical loops redirect existing momentum instead of inventing extra speed.
- **Readable strategy scoring** — Pegs use fixed values; bumpers award 50 per hit and overload for a 500-point bonus on hit 25, while armor pays only when fully destroyed.
- **Temporary bumper overloads** — Repeated hits heat bumpers toward red, intensify their sparks, and temporarily shatter the piece for the rest of the shot so trapped bounce loops become visible, rewarding targets instead of match-extending stalls.
- **Precision comeback route** — Perfect Beams earn a bounded 1.25× peg premium; five successful Perfect Shots in a row pay a flat, non-multipliable 5,000-point jackpot.
- **Goals with tradeoffs** — Bonus-value pegs, live multiball pegs, capped 3× gutters, armor routes, and Perfect Five attempts each support a distinct scoring plan.
- **Arcade lobbies** — Portrait and wide desktop homes with accurate native board previews, a custom neon-ribbon vector title over the shared animated background, and in-place Campaign / Community / Editor / Rankings / Settings panels. The title area adds no separate oversized color panels. Desktop adds a dedicated level browser beside the board preview.
- **Tactile mobile initials** — Deliberate magnetic letter scrubbing, one-to-five-letter flicks, and per-step Android haptics make score and publishing initials easy to land precisely.
- **Smooth aiming under impact** — Launcher pacing stays wall-clock steady during hit-stop, with a lightweight flight-arc preview and crisp recovery from short impact freezes.
- **Local player profile** — A dedicated portrait badge opens matches played, best score, top scores, and most-played maps from device history.
- **Level editor** — Place, stamp, select, style, animate, and configure boards with centered grid presets, stable formation previews, full undo/redo history, material chips, and versioned foreground motion profiles. Desktop uses focused dual-rail inspectors and integrated Tap / Stamp / Select tools.
- **Campaign + custom levels** — Bundled levels offline; Firebase-backed community boards when online.
- **Leaderboards** — This week / last week / all-time rankings shared with the web FreeBall.ing project.
- **Arcade initials** — Scores and community maps use any three-letter label the player chooses. Initials are intentionally non-unique, require no account, and are display attribution rather than authentication.
- **Material audio** — Standard phrase tones, bumper one-shots, armored builds, and randomized multiplier hits, with stereo panning by hit position.
- **Smooth presentation** — Native-resolution mobile CanvasItems, full effects, antialiasing, interpolated 60–120 Hz pacing, localized peg/shadow redraws, efficient trails, and bounded collision effects preserve the satisfying physics presentation on phones and desktop.
- **Trapper Keeper–inspired arcade look** — Dark playfield, paper/ink UI, immersive portrait mobile layout, opaque color-accurate board previews, and a cream, cyan, violet, and hot-pink ribbon logo whose transparent surroundings leave the shared animated lobby visible.

## Platforms
- **Android** — Godot 4.7 release APK for the RykerSoft hub (`com.rykersoft.freeballing`)
- **Windows** — Native x86_64 Godot export with game data embedded in one portable EXE
