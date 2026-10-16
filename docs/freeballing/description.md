# FreeBall.ing

A physics puzzle arcade game in the spirit of Pachinko and Peggle: launch balls, hunt valuable routes, and ride emergent melodies as everything bounces. Play the campaign and community boards on Android or Windows, pass the device between local players, and create your own levels with the desktop editor.

## Key Features

- **Physics playfield** — Heavy steel-ball feel, bumper kickouts, armored pegs, multiplier pegs, and score gutters at the bottom. Vertical loops redirect existing momentum instead of inventing extra speed.
- **Readable strategy scoring** — Pegs use fixed values; bumpers award 50 per hit, heat from hit 5, and overload for a 500-point bonus on hit 10, while armor pays only when fully destroyed.
- **Temporary bumper overloads** — Repeated hits heat bumpers toward red and temporarily shatter them for the rest of the shot. They return after every ball from that shot finishes.
- **Precision comeback route** — Perfect Beams earn a bounded 1.25× peg premium; five successful Perfect Shots in a row pay a flat, non-multipliable 5,000-point jackpot.
- **Fast local turns** — The turn-complete screen uses three high-score initials. Drag letter cards up or down and reverse direction without lifting your finger, then pass to the next player or view final results.
- **Mobile arcade home** — Separate Home, Community, More, and Profile screens keep board browsing, settings, and account activity clear. Browse real board thumbnails, search loaded boards, filter favorites or recent play, and switch between the selected-board gallery and list.
- **Paper arcade presentation** — Raised square-corner controls, opaque panels, cast shadows, and a board surround matched to the selected level's rail color carry through mobile Home and gameplay. The supplied transparent cyan-and-magenta logo stays visible while the board preview expands into play. Reduced camera motion uses a shorter dissolve.
- **Board previews** — Mobile shows a static native board snapshot for each selection. Desktop previews animate the selected board's authored foreground and background motion; hidden or unfocused previews suspend rendering. Automatic idle demos are desktop-only.
- **Desktop home** — A dedicated board browser, prominent preview and Play action, Info / Parts / Scores tabs, and local Player Profile support touch, mouse, and keyboard play.
- **Desktop level editor** — A creative suite with a left tool rail, Foreground / Background personas, contextual property bar, and Color, Swatches, Layers, Motion, Quick Select, and Appearance studios. Includes flow paths, continuous numeric editing, live motion preview, centered grids, and undo/redo history. Android includes an editor introduction; the full editor runs on desktop.
- **Custom gutter economies** — Authored one-to-three-times payouts and per-well colors stay synchronized with capture areas, scoring, board art, and feedback.
- **Campaign + community** — Eleven authored campaign boards remain available online and offline. Browse community levels without an account; authenticated desktop players can publish their own boards.
- **Optional Google identity** — Android and Windows players may sign in with Google and claim a unique one-to-five-letter public username. This is separate from local three-letter initials. Google email, account name, avatar, and provider details are never used as public game identity.
- **Guest-friendly play** — No username is required for campaign play, local scores, settings, or offline use. Desktop guests can also create and save local levels. Cloud score submission, voting, and community publishing require sign-in.
- **Identity-safe leaderboards** — Per-level, weekly, and all-time rankings remain anonymously readable. Each stored score keeps its original player label; new authenticated cloud submissions use the account's public username.
- **Material audio** — Standard phrase tones, bumper one-shots, armored builds, and randomized multiplier hits, with stereo panning by hit position.
- **Shared settings and pause** — Music/effects volume, text size, reduced camera motion, reduced flashes, and detail preferences are available from Home and Pause. Backgrounding a match pauses physics and time; optional untimed practice does not submit scores.
- **60 FPS Android target** — Native-resolution rendering, interpolated 60 Hz gameplay, adaptive effect budgets, pooled feedback, and suspended hidden animation support the mobile presentation. Actual frame rate depends on the device and board.

## Platforms

- **Android** — Signed Godot 4.7 release APK for the RykerSoft hub (`com.rykersoft.freeballing`)
- **Windows** — Native x86_64 Godot export with game data embedded in one portable EXE
