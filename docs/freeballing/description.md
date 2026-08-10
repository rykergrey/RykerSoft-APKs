# FreeBall.ing

A physics puzzle arcade game in the spirit of Pachinko and Peggle: launch balls, hunt valuable routes, and ride emergent melodies as everything bounces. Includes a full level editor, campaign and community levels, and shared Firebase leaderboards.

## Key Features
- **Physics playfield** — Heavy steel-ball feel, bumper kickouts, armored pegs, multiplier pegs, and score gutters at the bottom. Vertical loops redirect existing momentum instead of inventing extra speed.
- **Readable strategy scoring** — Pegs use fixed values; bumpers award 50 per hit, heat from hit 5, and overload for a 500-point bonus on hit 10, while armor pays only when fully destroyed.
- **Temporary bumper overloads** — Repeated hits heat bumpers toward red, intensify their sparks, and temporarily shatter the piece for the rest of the shot so trapped bounce loops become visible, rewarding targets instead of match-extending stalls.
- **Precision comeback route** — Perfect Beams earn a bounded 1.25× peg premium; five successful Perfect Shots in a row pay a flat, non-multipliable 5,000-point jackpot.
- **Goals with tradeoffs** — Bonus-value pegs, live multiball pegs, capped 3× gutters, armor routes, and Perfect Five attempts each support a distinct scoring plan.
- **Arcade lobbies** — Portrait and wide desktop homes with accurate native board previews, the supplied transparent FreeBall.ing logo over the level editor's shared `HOME` ambient animation, plus in-place Campaign / Community / Editor / Rankings / Settings panels. Desktop adds a dedicated level browser beside the board preview.
- **Tactile public usernames** — The familiar magnetic letter-card scrubber now supports unique one-to-five-letter names, blank cards for shorter choices, one-to-five-letter flicks, and per-step Android haptics.
- **Lucky launcher recovery** — A rare upward bounce can return the live ball to the moving launcher for a slot-free extra launch. A wider, force-free tractor-beam reaction, eased camera push, and anticipation slow motion telegraph close attempts without altering the ball's physics.
- **Smooth aiming under impact** — Launcher pacing stays wall-clock steady during hit-stop, uses render-frame movement without physics double-interpolation on mobile, and retains a lightweight flight-arc preview.
- **Local player profile** — A dedicated portrait badge opens matches played, best score, top scores, and most-played maps from device history.
- **Level editor** — Place, stamp, select, style, animate, and configure boards with centered grid presets, stable formation previews, full undo/redo history, material chips, and versioned foreground motion profiles. Desktop uses focused dual-rail inspectors and integrated Tap / Stamp / Select tools.
- **Custom gutter economies** — Authored one-to-three-times payouts and per-well colors stay synchronized with the physical capture areas, score calculation, static board art, and capture feedback.
- **Campaign + custom levels** — Bundled levels and the editor remain available to guests; authenticated players can publish Firebase-backed community boards.
- **Optional Google identity** — Android and Windows players may sign in with Google and claim a unique one-to-five-letter public username. Google email, account name, avatar, and provider details are never used as public game identity.
- **Guest-friendly play** — No username is required for campaign play, local scores, level creation, settings, or offline use. Guests simply cannot submit cloud scores, vote, or publish community levels.
- **Identity-safe leaderboards** — Per-level, weekly, and all-time rankings remain anonymously readable. Legacy three-letter initials and current one-to-five-letter public usernames stay attached to their corresponding stored scores, while new cloud submissions are authorized by Firebase Authentication and attributed by the server-owned public username.
- **Material audio** — Standard phrase tones, bumper one-shots, armored builds, and randomized multiplier hits, with stereo panning by hit position.
- **Smooth presentation** — Native-resolution mobile CanvasItems, full effects, antialiasing, interpolated 60–120 Hz pacing, localized peg/shadow redraws, efficient trails, and bounded collision effects preserve the satisfying physics presentation on phones and desktop.
- **Color-splashed 1990s arcade look** — Dark playfield, paper/ink UI, immersive portrait mobile layout, opaque color-accurate board previews, and a supplied cyan-and-magenta layered wordmark whose transparent surroundings leave the shared animated lobby visible.

## Platforms
- **Android** — Godot 4.7 release APK for the RykerSoft hub (`com.rykersoft.freeballing`)
- **Windows** — Native x86_64 Godot export with game data embedded in one portable EXE
