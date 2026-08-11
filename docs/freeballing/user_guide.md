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

- On Android, install FreeBall.ing from the RykerSoft Application Manager or sideload the signed hub APK. On Windows, download the official x86_64 EXE release and run it directly; no separate PCK is required.
- Open the app in portrait mode. The supplied cyan-and-magenta SVG title sits directly over the level editor's shared `HOME` ambient animation, while the main lobby shows an unobstructed, accurate preview of the selected board; tap the **i** button for level details and local rankings.
- Each category and level selector shows one readable choice. Drag it horizontally or use the left/right arrows to cycle, then tap **Play** to start the selected board (120-second match timer).
- On Android, the bottom dock provides Levels, Community, Play, Editor information, and Player Profile. The editor button presents the desktop feature tour; level creation itself is desktop-only.
- On a wide desktop window, the home screen uses a four-column arcade lobby: menu/categories, level list, board preview, and stats.
- On Android, the system **Back** button opens the pause menu during a match. From Home it opens an **Exit FreeBall.ing?** confirmation; press Back again or choose **Keep playing** to dismiss it.
- The bottom-right profile badge opens local matches, best score, and most-played levels — tap a linked level to open it.
- You may play as a guest without choosing a username. On Android, open **Player Profile**; on Windows, open **Online Profile**. Use **Sign in with Google** only if you want to submit cloud scores, vote, or publish levels.
- After a match, **Play Again** starts a clean Player 1 game on the same board and preserves the selected time limit.

## 2. How to play

- Aim the shooter with touch; hold to charge, release to fire.
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

- **Campaign** — Bundled levels with favorites and complexity filters.
- **Community** — Online boards when connected, plus local customs.
- **Rankings** — Per-level, weekly, and all-time standings from the shared Firebase leaderboard. Existing three-letter initials and current one-to-five-letter usernames remain attached to the score that originally stored them.
- **Public username** — After Google sign-in on Android or Windows, claim a unique one-to-five-letter A–Z name. Leaderboards and community maps show only that chosen name, not your Google name or email.
- **Guest access** — Rankings and community levels remain readable without sign-in. Local scores still save, but guests cannot submit cloud scores, vote, publish a level, or delete a cloud level.
- Offline, bundled levels still play; cloud lists need a network connection.
- Long-press a level you own (where available) to open its menu; **Delete Level** asks for confirmation before removing local (and matching community) copies.

## 5. Level editor

- The full level editor is available on desktop. From the desktop home, open the Editor panel or remix a level to open the editor dock.
- On Android, tapping Editor or an editor action opens a themed overview of its peg placement, materials, animation, audio, physics, testing, remixing, and publishing features without launching editor code.
- On a wide desktop window, compact independently scoped inspector rails keep foreground tools on the left and background tools on the right while maximizing the board canvas. Foreground **Create**, **Select**, **Material**, and **Motion** workspaces are separate, so placement tools never compete with object properties. Background **Create**, **Select**, **Look**, and **Motion** follow the same model.
- Desktop grid presets are 10, 15, 20, 30, and 40 pixels. The grid stays centered on the board and automatically contrasts with the chosen background. Stamp previews show exactly which in-bounds pieces will be committed.
- Use **Ctrl+Z** / **Ctrl+Y** (or **Ctrl+Shift+Z**) to undo and redo complete editor states, including foreground and background selections, motion, audio, gutters, and level metadata.
- On desktop, Ctrl/Command-click or marquee adds pieces to the selection; Alt-click or marquee subtracts them. Plain selection replaces the current set. Numeric motion fields update continuously without rebuilding the field or resetting inspector scroll position.
- The foreground Select inspector exposes exact X/Y position, rotation, scale, radius, width, height, durability hits, custom color, and pitch note. Background selection exposes exact transform, color, opacity, stroke, outline/fill, soft, glow, dash, and bold styling.
- Use **Look** to edit the board palette and each well's 1×–3× payout. **Audio** assigns both the level music set and material/event voices. **Level** edits metadata, board scale, roaming bonus, phase-wall behavior, import/export, saving, and publishing.
- Animate pegs with versioned foreground motion (slide, wobble, spin, scale) that previews live while selected. Use **PREVIEW** to pause at the authored pose before dragging transform handles.
- **SPIN EACH** rotates every selected peg in place. **ORBIT GROUP** groups compatible selections and revolves the formation around one shared pivot; mixed motion profiles are left untouched instead of being overwritten.
- Follow the funnel rule: never trap the ball with solid geometry that has no bottom exit.
- Keep the center high-value slot reachable; save customs locally as a guest, or sign in and claim a username before sharing through Community.

## 6. Audio & settings

- Peg hits use material-specific samples: standard phrase tones, bumper one-shots, armored triad builds, and randomized multiplier clips.
- Hit and gutter sounds pan left/right with where they happen on the board.
- Use the home Settings / music controls to mute or enable background music.
- Themes and save data persist on device between sessions.

## 7. Online profile & username

- FreeBall.ing starts in guest mode. Guest play includes the complete game, editor, local custom levels, local scores, settings, and offline campaign.
- On Android, open **Player Profile**; on Windows, open **Online Profile**. Choose **Sign in with Google**. Windows opens your default browser and returns to the game through a private localhost callback. Authentication links your private Firebase UID to the account, but your Google email, name, and avatar are not shown in the game or written to the public profile.
- After sign-in, choose a unique public username of one to five A–Z letters. Use the blank card (—) for unused positions; blank positions compact automatically, so `R`, `RY`, and `RYKER` are all valid.
- Tap a card, then drag slowly upward or downward. Each step requires a deliberate 180-screen-pixel movement, and magnetic resistance keeps the current character centered during small adjustments.
- Flick upward or downward to advance quickly. Flick speed selects between one and five characters, and one gesture can never move more than five transitions total. Each crossed character produces a short Android haptic pulse.
- A public username may be changed once every 30 days. Old reservations stay linked to their original account so another player cannot impersonate a previous name.
- Sign out at any time to return to guest mode. Your local game data remains on the device; cloud submission controls become unavailable until you sign in again. Android restores its Firebase session through the native SDK. Windows keeps its Firebase session only while the game is running, so sign in again after restarting the Windows build.
