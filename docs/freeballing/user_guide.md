# FreeBall.ing User Guide

Launch balls down a pegboard, seek high-value routes, and design your own boards.

## Table of Contents

- [1. Getting started](#1-getting-started)
- [2. How to play](#2-how-to-play)
- [3. Ball mechanics](#3-ball-mechanics)
- [4. Levels & rankings](#4-levels--rankings)
- [5. Level editor](#5-level-editor)
- [6. Audio & settings](#6-audio--settings)
- [7. Initials entry](#7-initials-entry)

## 1. Getting started

- On Android, install FreeBall.ing from the RykerSoft Application Manager or sideload the signed hub APK. On Windows, download the official x86_64 EXE release and run it directly; no separate PCK is required.
- Open the app in portrait mode. Only the transparent SVG title and its built-in ribbons sit over the shared animated lobby—there are no separate moving color panels—while the main lobby shows an unobstructed, accurate preview of the selected board; tap the **i** button for level details and local rankings.
- Each category and level selector shows one readable choice. Drag it horizontally or use the left/right arrows to cycle, then tap **Play** to start the selected board (120-second match timer).
- On Android, the bottom dock provides Levels, Community, Play, Editor information, and Player Profile. The editor button presents the desktop feature tour; level creation itself is desktop-only.
- On a wide desktop window, the home screen uses a four-column arcade lobby: menu/categories, level list, board preview, and stats.
- The bottom-right profile badge opens local matches, best score, and most-played levels — tap a linked level to open it.
- After a match, **Play Again** starts a clean Player 1 game on the same board and preserves the selected time limit.

## 2. How to play

- Aim the shooter with touch; hold to charge, release to fire.
- Clear **bonus** (orange) pegs for 100 points. Pink multiball pegs are also worth 100 and release another live ball.
- Standard pegs are worth 100. Armor awards 500 only when it is completely destroyed; partial armor damage awards nothing.
- Each bumper pays 50 on every hit from the active ball. On hit 25, it also awards a 500-point **Overload** bonus and temporarily shatters for the rest of that shot, preventing a bumper trap from extending the match indefinitely.
- During the final ten hits, the bumper heats toward red. The final five hits produce increasingly intense red sparks, warning that the overload bonus is close. The bumper returns after the current ball and any spawned multiballs finish.
- Bottom gutters multiply only the points earned by the ball that lands there, and are capped at 3×.
- Some boards wrap left/right or use special structures — keep the ball flowing downward (no dead cups). If a ball starts bouncing nearly straight up and down, the game gently redirects that same speed sideways rather than shoving it harder.

## 3. Ball mechanics

- **Standard launch** — Normal bounce with fixed peg values. Charge near full for a stronger launch speed.
- **Perfect Shot** — Release inside the gold timing window to fire a straight Perfect Beam. It destroys armor in one pass and earns 1.25× normal peg value.
- A Perfect Shot advances the five-shot streak only if it destroys at least one eligible peg. Any non-perfect launch or empty beam resets the streak. Five successful Perfect Shots in a row award a one-time 5,000-point bonus that gutters cannot multiply.
- Bonus pegs still award their boosted point value when destroyed by a Perfect Beam, while multiball pegs release another live ball.

## 4. Levels & rankings

- **Campaign** — Bundled levels with favorites and complexity filters.
- **Community** — Online boards when connected, plus local customs.
- **Rankings** — Weekly and all-time standings from the shared Firebase leaderboard.
- **Arcade identity** — Enter any three initials for score and map attribution. Initials do not need to be unique, and FreeBall.ing does not require an account or Google sign-in.
- Offline, bundled levels still play; cloud lists need a network connection.
- Long-press a level you own (where available) to open its menu; **Delete Level** asks for confirmation before removing local (and matching community) copies.

## 5. Level editor

- The full level editor is available on desktop. From the desktop home, open the Editor panel or remix a level to open the editor dock.
- On Android, tapping Editor or an editor action opens a themed overview of its peg placement, materials, animation, audio, physics, testing, remixing, and publishing features without launching editor code.
- On a wide desktop window, dual inspector rails stay open over the canvas tools. The Create rail combines **Tap**, **Stamp**, and **Select**; an active selection can be restyled directly without leaving Create.
- Desktop grid presets are 10, 15, 20, 30, and 40 pixels. The grid stays centered on the board and automatically contrasts with the chosen background. Stamp previews show exactly which in-bounds pieces will be committed.
- Use **Ctrl+Z** / **Ctrl+Y** (or **Ctrl+Shift+Z**) to undo and redo complete editor states, including foreground and background selections, motion, audio, gutters, and level metadata.
- On desktop, Ctrl-click or Ctrl-marquee adds pieces to the selection; Alt-click or Alt-marquee subtracts them. Rotation and scale fields accept precise mouse-wheel adjustments without resetting the inspector scroll position.
- Animate pegs with versioned foreground motion (slide, wobble, spin, scale) that previews live in the editor.
- Follow the funnel rule: never trap the ball with solid geometry that has no bottom exit.
- Keep the center high-value slot reachable; save customs locally and share via community when available.

## 6. Audio & settings

- Peg hits use material-specific samples: standard phrase tones, bumper one-shots, armored triad builds, and randomized multiplier clips.
- Hit and gutter sounds pan left/right with where they happen on the board.
- Use the home Settings / music controls to mute or enable background music.
- Themes and save data persist on device between sessions.

## 7. Initials entry

- Initials appear after a completed score and when publishing a community level.
- Tap a letter card, then drag slowly upward or downward. Each letter requires a deliberate 180-screen-pixel movement, magnetic resistance keeps the current letter centered during small adjustments, and the artwork stays within one card row while your finger travels.
- Flick upward or downward to advance quickly. Flick speed selects between one and five letters, and one gesture can never move more than five letters total.
- On Android, each crossed letter produces a short haptic pulse. Held dragging pulses as each letter boundary is crossed; flicked letters are timed separately so every step remains distinct.
- Tap another letter card to edit that position. Keyboard letters, arrow keys, mouse dragging, and mouse-wheel stepping remain available on desktop.
