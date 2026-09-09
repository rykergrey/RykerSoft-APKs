# FreeBall.ing User Guide

Launch balls down a pegboard, seek high-value routes, and design your own boards.

## Table of Contents

- [1. Getting started](#1-getting-started)
- [2. How to play](#2-how-to-play)
- [3. Ball mechanics](#3-ball-mechanics)
- [4. Levels & rankings](#4-levels--rankings)
- [5. Level editor](#5-level-editor)
- [6. Audio & settings](#6-audio--settings)
- [7. Online profile & username](#7-online-profile--username)

## 1. Getting started

- On Android, install FreeBall.ing from the RykerSoft Application Manager or sideload the signed hub APK. On Windows, download the official x86_64 EXE release and run it directly; no separate PCK is required. On Linux, download the x86_64 AppImage, mark it executable, and launch it; alternatively extract the tar.gz and run `freeballing`. Linux currently supports guest/offline play; Google sign-in is available on Android and Windows.
- Portrait Home keeps the board prominent beneath the arcade title. Mobile board previews are static snapshots refreshed when selection changes; desktop previews animate. Tap **i** for level details and local rankings.
- Each category and level selector shows one readable choice. Drag it horizontally or use the left/right arrows to cycle, then tap **Play** to start the selected board (120-second match timer).
- On Android, the bottom dock provides Levels, Community, Play, More, and Player Profile. **More** opens rankings, help, shared settings, community refresh/load-more actions, and the desktop editor introduction.
- On a wide desktop window, Home has compact navigation and a level list, a large board preview with **Play** underneath, and **Info / Parts / Scores** tabs. Player Profile contains your local stats and online account. Resizing across the desktop breakpoint preserves your selected board and source.
- **Escape** or Android **Back** pauses and resumes a match. Pause freezes ball physics, obstacles, score, and time. Losing focus or backgrounding a match opens Pause; return to the app and choose Resume. From Home, Back/Escape closes the current sheet first, then opens the exit confirmation.
- The bottom-right profile badge opens local matches, best score, and most-played levels — tap a linked level to open it.
- You may play as a guest without choosing a username. On Android, open **Player Profile**; on Windows, open **Player Profile**. Use **Sign in with Google** only if you want to submit cloud scores, vote, or publish levels.
- After a match, **Play Again** starts a clean Player 1 game on the same board and preserves the selected time limit.

## 2. How to play

- Aim with touch or mouse; hold to charge, release to fire. On a keyboard, use **Left/Right** or **A/D** to aim, then hold and release **Space**. A collapsible Controls reminder appears beside the board when desktop space permits.
- First play offers an optional untimed practice mode. Practice has unlimited shots and does not submit scores. Read the rules in **More → How to play**, the desktop **How to play** button, or Pause. Choose **Start two-minute match** when ready.
- Clear **bonus** (orange) pegs for 100 points. Pink multiball pegs are also worth 100 and release another live ball.
- Standard pegs are worth 100. Armor awards 500 only when it is completely destroyed; partial armor damage awards nothing.
- Each bumper pays 50 on every hit. Hits from every multiball in the same shot share one counter; on hit 10, the bumper also awards a 500-point **Overload** bonus and temporarily shatters for the rest of that shot.
- The bumper begins heating on hit 5, and the final two hits produce increasingly intense red sparks. It materializes back into play after the current ball and all spawned multiballs finish.
- Bottom gutters multiply only the points earned by the ball that lands there, and are capped at 3×.
- Some boards wrap left/right or use special structures — keep the ball flowing downward (no dead cups). If a ball starts bouncing nearly straight up and down, the game gently redirects that same speed sideways rather than shoving it harder.

## 3. Ball mechanics

- **Standard launch** — Normal bounce with fixed peg values. Charge near full for a stronger launch speed.
- **Perfect Shot** — Release inside the gold timing window to fire a straight Perfect Beam. It destroys armor in one pass and earns 1.25× normal peg value.
- A Perfect Shot advances the five-shot streak only if it destroys at least one eligible peg. Any non-perfect launch or empty beam resets the streak. Five successful Perfect Shots in a row award a one-time 5,000-point bonus that gutters cannot multiply.
- Bonus and multiball pegs receive the same 1.25x Perfect Beam premium as other eligible targets; a destroyed multiball peg still releases another live ball.

## 4. Levels & rankings

- **Campaign** — Eleven bundled boards with favorites and complexity filters; the same campaign is mirrored online and remains playable offline.
- **Community** — Online boards when connected, plus local customs. The feed loads 25 summaries at a time, newest first; use **Load more** to fetch another page. Full geometry loads when you select a board.
- Tap the portrait level name or desktop **Browse boards** to open thumbnails, text search, favorites, recently played boards, and sorting. Search and sorting apply to the currently loaded collection; load more Community pages to expand it.
- **Rankings** — Per-level, weekly, and all-time standings from the shared Firebase leaderboard. Existing three-letter initials and current one-to-five-letter usernames remain attached to the score that originally stored them.
- **Public username** — After Google sign-in on Android or Windows, claim a unique one-to-five-letter A–Z name. Leaderboards and community maps show only that chosen name, not your Google name or email.
- **Guest access** — Rankings and community levels remain readable without sign-in. Local scores still save, but guests cannot submit cloud scores, vote, publish a level, or delete a cloud level.
- Offline, bundled levels still play; cloud lists need a network connection.
- Long-press a level you own (where available) to open its menu; **Delete Level** asks for confirmation before removing local (and matching community) copies.

## 5. Level editor

- The full level editor is available on desktop. From the desktop home, open the Editor panel or remix a level to open the editor dock.
- On Android, **More → Desktop editor** or an editor action opens a themed overview of its peg placement, materials, animation, audio, physics, testing, remixing, and publishing features without launching editor code.
- On a wide desktop window, the editor functions as a professional creative suite: a slim tool rail on the left, a top persona switcher (**Foreground** / **Background**), a contextual parameter bar, and a dedicated right **Studio** dock (**Color**, **Swatches**, **Layers**, **Motion**, **Quick Select**, and **Appearance**).
- **Tool rail & personas** — Switch between Foreground (pegs, bumpers, structures) and Background (ambient art, shapes, decorative layers). Each persona keeps independent tool state, layer organization, and inspector properties.
- **Placement & flow paths** — Tap to place single pegs or drag along flow paths. The flow path tool ensures deterministic spacing, automatic orientation alignment, and axis snapping (hold Shift).
- **Layers studio** — Search layers in real time, toggle visibility/locking, reorder depths, and page through large boards smoothly.
- **Grids & snapping** — Centered grid presets: 10, 15, 20, 30, and 40 pixels with automatic contrast against dark or light backdrops. Stamp previews show exactly which in-bounds pieces will be committed.
- **History & precision editing** — **Ctrl+Z** / **Ctrl+Y** (or **Ctrl+Shift+Z**) provides full undo/redo history with coalesced numeric modifications. Numeric fields allow direct typing and continuous scrubbing without losing focus.
- **Motion studio** — Animate pieces with versioned foreground motion (slide, wobble, spin, scale) that previews live while selected. **SPIN EACH** rotates pieces individually; **ORBIT GROUP** revolves the group around a shared pivot.
- **Look, Audio & Gutter economics** — Customize board palettes, 1×–3× gutter payouts and well colors, level background music sets, and event sound pitches.
- Follow the funnel rule: avoid solid geometry with no bottom exit. As a gameplay safety net, a ball that remains against any SOLID shape for three seconds heats the piece, flashes it, and temporarily ghosts its collision so the ball can escape.
- Keep the center high-value slot reachable; save customs locally as a guest, or sign in and claim a username before sharing through Community.

## 6. Audio & settings

- Peg hits use material-specific samples: standard phrase tones, bumper one-shots, armored triad builds, and randomized multiplier clips.
- Hit and gutter sounds pan left/right with where they happen on the board.
- Android targets a steady 60 FPS and automatically reduces decorative trails, particles, and ambient motion only after sustained frame pressure; gameplay physics, scoring, and controls remain unchanged.
- Settings are shared between desktop Home, mobile More, and Pause: separate music/effects volume, reduced camera motion, reduced flashes, text sizes from 100% to 125%, and Automatic / Full / Balanced / Battery saver detail. Text size applies when a screen reopens. The **Music on/off** pause shortcut controls music only.
- Reduced camera motion leaves authored board motion and game physics intact. Desktop previews suspend behind sheets and while unfocused; the app limits rendering to 15 FPS while unfocused.
- Themes and save data persist on device between sessions.

## 7. Online profile & username

- FreeBall.ing starts in guest mode. Guest play includes the complete game, editor, local custom levels, local scores, settings, and offline campaign.
- On Android, open **Player Profile**; on Windows, open **Player Profile**. Choose **Sign in with Google**. Windows opens your default browser and returns to the game through a private localhost callback. Authentication links your private Firebase UID to the account, but your Google email, name, and avatar are not shown in the game or written to the public profile.
- After sign-in, choose a unique public username of one to five A–Z letters. Use the blank card (—) for unused positions; blank positions compact automatically, so `R`, `RY`, and `RYKER` are all valid.
- Use **Or type 1–5 letters** for a conventional keyboard, including the mobile software keyboard. The typed field and arcade cards stay in sync.
- Tap a card, then drag slowly upward or downward. Each step requires a deliberate 180-screen-pixel movement, and magnetic resistance keeps the current character centered during small adjustments.
- Flick upward or downward to advance quickly. Flick speed selects between one and five characters, and one gesture can never move more than five transitions total.
- A public username may be changed once every 30 days. Old reservations stay linked to their original account so another player cannot impersonate a previous name.
- Sign out at any time to return to guest mode. Your local game data remains on the device; cloud submission controls become unavailable until you sign in again. Android restores its Firebase session through the native SDK. On Windows, **Remember me on this Windows account** optionally encrypts the refresh token with Windows DPAPI for the current Windows user. It is off by default; sign-out removes the stored token. If secure storage or renewal is unavailable, play as a guest or sign in again.
