# FreeBall.ing

A physics puzzle arcade game in the spirit of Pachinko and Peggle: launch balls, hunt valuable routes, and ride emergent melodies as everything bounces. Includes a full level editor, campaign and community levels, and shared Firebase leaderboards.

## Key Features
- **Physics playfield** — Heavy steel-ball feel, bumper kickouts, armored pegs, multiplier pegs, and score gutters at the bottom. Vertical loops redirect existing momentum instead of inventing extra speed.
- **Readable strategy scoring** — Pegs use fixed values; bumpers award 50 per hit, heat from hit 5, and overload for a 500-point bonus on hit 10, while armor pays only when fully destroyed.
- **Temporary bumper overloads** — Repeated hits heat bumpers toward red, intensify their sparks, and temporarily shatter the piece for the rest of the shot so trapped bounce loops become visible, rewarding targets instead of match-extending stalls.
- **Precision comeback route** — Perfect Beams earn a bounded 1.25× peg premium; five successful Perfect Shots in a row pay a flat, non-multipliable 5,000-point jackpot.
- **Goals with tradeoffs** — Bonus-value pegs, live multiball pegs, capped 3× gutters, armor routes, and Perfect Five attempts each support a distinct scoring plan.
- **Arcade lobbies** — Portrait and wide desktop homes with animated native board previews that play each selected level's authored foreground and ambient background motion without starting gameplay, the supplied transparent FreeBall.ing logo over the level editor's shared `HOME` ambient animation, plus in-place Campaign / Community / Editor / Rankings / Settings panels. Desktop adds a dedicated level browser beside the board preview.
- **Responsive public usernames** — The familiar magnetic letter-card scrubber supports unique one-to-five-letter names, blank cards for shorter choices, and one-to-five-letter flicks.
- **Smooth aiming under impact** — Launcher pacing stays wall-clock steady during hit-stop, uses render-frame movement without physics double-interpolation on mobile, and retains a lightweight flight-arc preview.
- **Local player profile** — A dedicated portrait badge opens matches played, best score, top scores, and most-played maps from device history.
- **Professional desktop level editor** — Full creative suite with slim left tool rail, top persona bar (Foreground / Background), contextual property bar, and dedicated right Studio dock featuring Color, Swatches, Layers (with search and paging), Motion, Quick Select, and Appearance studios. Includes continuous numeric editing, flow path placement with deterministic spacing and axis locks, live selected-motion preview, centered grid presets, and coalesced undo/redo history.
- **Custom gutter economies** — Authored one-to-three-times payouts and per-well colors stay synchronized with the physical capture areas, score calculation, static board art, and capture feedback.
- **Campaign + custom levels** — Eleven newly authored campaign boards remain available online and offline, while the editor stays available to guests and authenticated players can publish Firebase-backed community boards.
- **Optional Google identity** — Android and Windows players may sign in with Google and claim a unique one-to-five-letter public username. Google email, account name, avatar, and provider details are never used as public game identity.
- **Guest-friendly play** — No username is required for campaign play, local scores, level creation, settings, or offline use. Guests simply cannot submit cloud scores, vote, or publish community levels.
- **Identity-safe leaderboards** — Per-level, weekly, and all-time rankings remain anonymously readable. Scores are revalidated against authoritative server week windows, preserving original initials and usernames while attributing new authenticated cloud submissions securely.
- **Material audio** — Standard phrase tones, bumper one-shots, armored builds, and randomized multiplier hits, with stereo panning by hit position.
- **Smooth presentation** — Native-resolution mobile CanvasItems, mipmapped SVG logo sampling, interpolated 60 FPS gameplay, adaptive mobile effect budgets, size-aware peg shadows, localized redraws, efficient trails, and bounded collision/audio feedback preserve the satisfying physics presentation while desktop retains the full authored look.
- **Color-splashed 1990s arcade look** — Dark playfield, paper/ink UI, immersive portrait mobile layout, opaque color-accurate board previews, and a supplied cyan-and-magenta layered wordmark whose transparent surroundings leave the shared animated lobby visible.

## Platforms
- **Android** — Godot 4.7 release APK for the RykerSoft hub (`com.rykersoft.freeballing`)
- **Windows** — Native x86_64 Godot export with game data embedded in one portable EXE
