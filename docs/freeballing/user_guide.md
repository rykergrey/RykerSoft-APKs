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
- [8. Level Design Handbook](#8-level-design-handbook)
- [9. Level Concept Catalog](#9-level-concept-catalog)

## 1. Getting started

- On Android, install FreeBall.ing from the RykerSoft Application Manager or sideload the signed hub APK. On Windows, download the official x86_64 EXE release and run it directly; no separate PCK is required.
- Open the app in portrait mode. The transparent SVG title sits over its own compact animated neon stage of ribbons, rails, print-head sweeps, and orbiting dots, while the main lobby shows an unobstructed, accurate preview of the selected board; tap the **i** button for level details and local rankings.
- Each category and level selector shows one readable choice. Drag it horizontally or use the left/right arrows to cycle, then tap **Play** to start the selected board (120-second match timer).
- On Android, the bottom dock provides Levels, Community, Play, Editor information, and Player Profile. The editor button presents the desktop feature tour; level creation itself is desktop-only.
- On a wide desktop window, the home screen uses a four-column arcade lobby: menu/categories, level list, board preview, and stats.
- The bottom-right profile badge opens local matches, best score, and most-played levels — tap a linked level to open it.
- You may play as a guest without choosing a username. On Android, open **Player Profile**; on Windows, open **Online Profile**. Use **Sign in with Google** only if you want to submit cloud scores, vote, or publish levels.
- After a match, **Play Again** starts a clean Player 1 game on the same board and preserves the selected time limit.

## 2. How to play

- Aim the shooter with touch; hold to charge, release to fire.
- Clear **bonus** (orange) pegs for 100 points. Pink multiball pegs are also worth 100 and release another live ball.
- Standard pegs are worth 100. Armor awards 500 only when it is completely destroyed; partial armor damage awards nothing.
- Each bumper pays 50 on every hit. Hits from every multiball in the same shot share one counter; on hit 10, the bumper also awards a 500-point **Overload** bonus and temporarily shatters for the rest of that shot.
- The bumper begins heating on hit 5, and the final two hits produce increasingly intense red sparks. It materializes back into play after the current ball and all spawned multiballs finish.
- Bottom gutters multiply only the points earned by the ball that lands there, and are capped at 3×. Some boards customize the five payouts and well colors; the displayed label, capture feedback, and awarded score always use that board's authored value.
- Some boards wrap left/right or use special structures — keep the ball flowing downward (no dead cups). If a ball starts bouncing nearly straight up and down, the game gently redirects that same speed sideways rather than shoving it harder.

## 3. Ball mechanics

- **Standard launch** — Normal bounce with fixed peg values. Charge near full for a stronger launch speed.
- **Launcher recovery** — If a live ball bounces upward near the launcher, the barrel turns toward it and projects a visual tractor beam. Close attempts ease into anticipation slow motion and a small camera zoom, but the beam never pulls or steers the ball. A ball that physically overlaps the visible hub or barrel is captured; aim and release to fire that same ball again without spending another ball.
- **Perfect Shot** — Release inside the gold timing window to fire a straight Perfect Beam. It destroys armor in one pass and earns 1.25× normal peg value.
- A Perfect Shot advances the five-shot streak only if it destroys at least one eligible peg. Any non-perfect launch or empty beam resets the streak. Five successful Perfect Shots in a row award a one-time 5,000-point bonus that gutters cannot multiply.
- Bonus and multiball pegs receive the same 1.25x Perfect Beam premium as other eligible targets; a destroyed multiball peg still releases another live ball.

## 4. Levels & rankings

- **Campaign** — Thirteen established boards plus 100 curated boards grouped into ten design collections, with favorites and complexity filters.
- **Community** — Online boards when connected, plus local customs.
- **Rankings** — Per-level, weekly, and all-time standings from the shared Firebase leaderboard. Existing three-letter initials and current one-to-five-letter usernames remain attached to the score that originally stored them.
- **Public username** — After Google sign-in on Android or Windows, claim a unique one-to-five-letter A–Z name. Leaderboards and community maps show only that chosen name, not your Google name or email.
- **Guest access** — Rankings and community levels remain readable without sign-in. Local scores still save, but guests cannot submit cloud scores, vote, publish a level, or delete a cloud level.
- Offline, every bundled level still plays. When connected, cloud campaign data replaces matching bundled IDs while bundled-only curated boards remain in the list.
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

## 8. Level Design Handbook

This handbook is for anyone who wants to make a FreeBall.ing board that players can recognize, understand, master, and remember. It is deliberately specific to this game's launcher, materials, per-ball score banks, five fixed gutter widths, Perfect Beam, multiball behavior, motion system, and audiovisual editor. Treat it as both a design course and a pre-publish reference.

Shortcuts: [scoring](#know-the-scoring-economy-before-shaping-the-board) · [gutters](#understand-the-five-gutter-wells) · [motion](#design-motion-as-a-readable-rule) · [Rube Goldberg sequences](#build-satisfying-rube-goldberg-sequences) · [testing](#prototype-in-layers) · [pre-publish checklist](#pre-publish-checklist)

### Start with the game's real identity

FreeBall.ing is a five-shot score attack built from aim, probability, controlled chaos, and spectacle. It is not primarily a clear-every-peg puzzle. A board can be excellent when many pegs remain at the end, provided every shot presents a readable choice and creates a satisfying journey.

The most memorable boards usually make one clear promise: “thread the armored keyhole,” “feed the bumper reactor,” “watch one quiet leaf find its way down,” or “choose a safe 2× route or gamble on the narrow 3×.” Write that sentence before placing objects. Every major choice should reinforce it:

- Geometry controls where the ball can go.
- Materials control what contacts mean.
- Gutter geometry determines how the run's earned points resolve.
- Color and shape tell the player what matters before impact.
- Motion creates timing windows and changing routes.
- Ambient animation establishes place, pace, and emotion.
- Audio turns a contact sequence into a rhythm or phrase.

A level does not become richer merely by adding more objects. Richness comes from consequences, contrast, and relationships. A seven-object board with three meaningfully different lines can be deeper than a two-hundred-object field whose launch position barely matters.

### Know the scoring economy before shaping the board

Every live ball keeps its own run bank. Peg points enter the session score immediately and also enter that ball's bank. When the ball reaches a gutter, the game awards only the multiplier surplus for that bank. For example, a ball that banked 1,000 points and falls into 3× adds another 2,000; that ball ultimately contributed 3,000. Points banked by another simultaneous ball are not included.

This distinction is central to multiball design. A high-value first ball can land in 1× while a low-value child ball lands in 3×. The result is not equivalent to multiplying the whole shot. Design routes that let players influence which ball carries value, while accepting that multiball should retain some joyful unpredictability.

Live balls keep separate score banks, but they collide physically and share the shot's bumper-hit state. Leave enough separation space for one ball's route to perturb another without turning every multiball event into an unreadable collision knot.

- **Standard** — 100 points and clears in one hit. It is the cleanest path marker, statistical pin, and visual texture.
- **Armored** — 500 points only on the final break. It normally takes three ordinary contacts, but the first peg impact after a charge of at least 95% or a Perfect Beam destroys it at once. Armor is a lock, durable rail, score reserve, and charge lesson.
- **Multiball** — 100 points and releases another independently banked ball. Despite the legacy material name `MULTIPLIER`, this is not a score-multiplier peg. It is an event-density and route-branching tool.
- **Bumper** — 50 points on every contact and a strong kick. Hits from all balls in one shot share a counter. It begins heating on hit five; hit ten adds 500 points and overloads it out of play until the entire shot ends. A bumper is an engine, redirector, timer, and self-limiting loop.
- **Bonus** — 100 points with emphatic reward effects. Its value is primarily visual and dramatic, so use it as a destination, reveal, punctuation mark, or route beacon. With roaming bonus enabled, a new standard peg becomes the bonus after the current bonus supply is cleared.
- **Solid** — no score, low restitution, extra friction, and an absorbent contact response. It creates floors, channels, masks, gates, lettering, and machine structure. A ball continuously supported on the top face of the same solid tile for roughly three wall-clock seconds temporarily ghosts that tile until the ball clears it; side and underside contact do not trigger this escape. Perfect Beam ignores solid material.

A charged non-Perfect launch cancels 85% of gravity while it remains above the super-speed threshold and has not touched a peg. Walls do not consume the charge; the first peg contact does. This makes a wall-bank into an armored target a valid authored route rather than an accidental exploit.

The five-success Perfect Shot streak is a separate economy. A release in the gold window creates a straight Perfect Beam that pierces eligible destructibles, destroys armor, and gives those clears a 1.25x premium. It stops at a bumper, ignores solid pieces, and must clear at least one eligible target to advance the streak. Five successful beams award a flat 5,000 points that gutters do not multiply. A board may support that mastery path, but should not require five perfect releases from ordinary players.

Raw peg count is therefore a poor proxy for value or difficulty. Ten bumpers and four multiball pegs can outscore a hundred standards. Estimate at least these separate budgets: ordinary destructible value, armor value, possible multiballs, plausible bumper contacts, Perfect Beam advantage, and the amount of bank likely to remain when the ball reaches each gutter.

### Understand the five gutter wells

The playfield is 480 by 800. The usable gutter band spans approximately x=20 to x=460 and always contains five fixed-width wells. From left to right, their approximate ranges are:

- Left 1×: x=20.0 to x=122.8, center x=71.4, width 102.8.
- Left 2×: x=122.8 to x=209.2, center x=166.0, width 86.4.
- Center 3×: x=209.2 to x=270.8, center x=240.0, width 61.7.
- Right 2×: x=270.8 to x=357.2, center x=314.0, width 86.4.
- Right 1×: x=357.2 to x=460.0, center x=408.6, width 102.8.

The capture sensor is narrower than each visual well because the divider walls occupy space. The center sensor is only about 54 pixels wide before accounting for the ball and rotating divider heads. The default 3× is therefore inherently harder even on an empty lower board. Do not assume the five outcomes are equally probable.

Custom gutter arrays can assign any payout from 1× through 3× to each of those five fixed positions. They change the labels and scoring, not the physical widths. This enables layouts such as an outer crown `[3,1,1,1,3]`, twin temptations `[1,3,1,3,1]`, or a forgiving progression `[1,2,2,2,1]`. The current visual editor does not expose payout-array controls, so non-default arrays require generated or hand-edited level JSON. Custom well colors and one shared divider-head shape can make that altered economy immediately legible. Colors do not automatically follow a reassigned payout, so remap the five `well_colors` alongside the multiplier array. All four heads automatically rotate; fixed orientations and different shapes per divider are not currently supported. Whenever payouts differ from the familiar default, teach the change visually before the first ball reaches the bottom.

The four divider heads are physical and automatically rotate. Their selected shape changes the last deflections at every well boundary, so test a narrow approach across a complete rotation cycle and aim for usable margin around the well center rather than a mathematically perfect edge.

### Design the approach, not just the destination

Gutter strategy is mostly authored in the lower third of the board. An upper peg can change the route, but the last two or three meaningful contacts usually determine the landing. Think backward from each well:

- Draw an imaginary capture cone rising from each well mouth.
- Mark the last plausible contact points within those cones.
- Decide which contacts preserve a line, cross it, split it, or reverse it.
- Trace at least one understandable route to every payout you intend to be viable.
- Test the routes after some destructible pieces are gone; the fifth shot sees a different board from the first.

To make the center 3× easier, use a broad symmetric funnel, inward-sloped solids, diminishing deflections, or a calm central corridor. Keep the final contact high enough that the ball has time to settle toward x=240. A center bonus can advertise the route, but place it early enough that its collision does not randomly kick the ball away at the gutter mouth.

To make 3× challenging, use a center post, armor key, outward V, moving gate, low bumper, or two converging side routes with a narrow timing window. One carefully placed lower object is often sufficient. Difficulty feels fair when the player can see why the center is difficult and can deliberately improve the odds.

To make a strategic tradeoff, put easier scoring on a route that tends toward 1× or 2× and a smaller bank on the route that tends toward 3×. The meaningful question becomes “How much should I risk?” rather than “Will random physics reward me?” Another good pattern is to let the player remove a lower gate early, improving the jackpot approach for later balls.

Avoid a false jackpot: a bright 3× lane that is physically unreachable, or a center funnel whose final hidden deflector always rejects the ball. Surprise is enjoyable once; perceived deception damages trust. If a payout is intentionally impossible until a lock breaks or gate moves, show that state clearly.

### Compose routes and decisions

Players aim with both horizontal launcher position and shot angle, then choose charge. Give those inputs consequences in the first few contacts. A good opening offers one to three readable targets rather than an undifferentiated ceiling of pegs.

Useful route structures include:

- **Fork** — One early contact separates left and right plans.
- **Funnel** — Multiple entry points converge on one dramatic event.
- **Braid** — Two routes cross or exchange sides without becoming identical.
- **Lock and key** — Armor, a beam line, or destructible plug protects a later region.
- **Risk ladder** — Each successive choice offers more bank but a worse gutter angle.
- **Return loop** — A bumper or curved channel sends the ball through a scoring region again.
- **Reveal** — Clearing an outer shell exposes a bonus, multiball, or clean exit.
- **Sequence** — Contacts naturally occur in an authored order, creating a machine or melody.
- **State change** — Removing pegs, overloading a bumper, or moving a gate changes the best plan for later balls.

Perfect symmetry gives instant comprehension, useful statistical comparison, and a ceremonial appearance. It can also erase strategic choice if the two halves behave identically. Material asymmetry inside geometric symmetry is a strong compromise: the silhouette stays calm while left and right routes carry different risks.

Asymmetry creates discovery and replay value, but it needs landmarks. Anchor an organic scatter with a bright target, strong diagonal, repeated shape family, or color rhythm. “Sporadic” should describe the visual cadence, not the designer's process. Every apparently casual placement should affect a line, rhythm, silhouette, or negative-space boundary.

A practical deliberate-scatter method is to place three to five route anchors first, echo each anchor with a small cluster, and preserve one or two negative-space corridors between them. Then remove every non-anchor object one at a time. Restore it only if the route, rhythm, silhouette, or pacing becomes worse.

### Choose the right layout family

**Plinko and Galton fields** work when many small, evenly spaced contacts produce a readable probability distribution. Use staggered rows, modest radii, and enough vertical spacing for the ball to choose a side between rows. Change one variable at a time: remove selected pins to carve lanes, use armor at borders, or alter only the final rows to bias gutters. Dense uniform rows with large pegs become a slow pinball wall rather than Plinko.

**Pachinko boards** combine a statistical field with authored pockets, gates, and localized engines. A repeated background of small standards can make a few bumpers and multiballs feel special. Keep high-energy devices separated so the player can understand which machine is active.

**Peggle-like arrangements** favor deliberate clusters, crescents, arcs, pictures, and satisfying chain clears. Empty space is part of the composition. Place clusters so a well-aimed bank can skim several contacts, and use armor or bumpers as punctuation rather than filling every gap.

**Sparse skill boards** use roughly five to twenty-five meaningful objects. Enlarge silhouettes, separate choices, and make misses informative. Sparse does not mean easy: the narrow center well, precise banks, Perfect Beam lines, or moving windows can create high mastery without clutter.

**Pinball engines** use bumpers, solid rails, and returns to sustain energy. Give every loop an escape route. Because bumpers award repeat points and overload, test both the exciting common case and the rare long loop.

**Rube Goldberg machines** create a legible sequence: trigger, transfer, transformation, finale. Use solids and curves as track; destructibles as gates; bumpers as actuators; multiballs as branching events; and the gutter as the final reveal. A machine is most satisfying when the player can predict the next stage a moment before it happens.

**Icons and illustrations** use the foreground as graphic design. Preserve the silhouette at home-screen preview scale, then add only the collisions needed for play. Do not make every pixel a peg. Negative space, a few larger rectangles, actual hexagons, stars, triangles, and curves produce cleaner images than hundreds of cyan circles.

**Atmospheric boards** prioritize a feeling: snowfall, city rain, a quiet garden, a solar eclipse, or a neon tunnel. Physics still needs a beginning, middle, and end. The best atmospheric level makes the ball's motion belong to the scene—drifting through petals, orbiting a moon, descending a waterfall, or ricocheting like an arcade token.

**Strategy puzzles** make the order of shots matter. Let an early shot open a future route, reserve armor for charged shots, place multiball where it is valuable only after a channel opens, or offer a bumper-overload plan. The board should remain enjoyable when the player chooses imperfectly; strategy should improve outcomes rather than merely avoid punishment.

### Learn from the original 13 boards

The original campaign is a useful set of design studies rather than a single template to copy:

- **Galton Board** and **Plinko Master** show how staggered repetition creates probability, anticipation, and recognizable genre language. Their lesson is distribution; vary only a few rows when teaching cause and effect.
- **Checkmate** shows that a familiar grid, strict palette, and material contrast can create an identity before the ball moves.
- **Golden Pyramid**, **Diamond Mine Remix**, **Triforce**, **Sands of Time Remix**, and **Honeycomb Haven Remix** show the thumbnail power of geometry, tessellation, and large silhouettes. Their densest examples also demonstrate why repeated texture needs lanes and rests.
- **Orbital Decay**, **Nebula Drift**, and **Whirlpool** show how radial composition implies spin, gravity, and cosmic motion even before foreground animation is added. When extending that family, inspect complete object and motion bounds rather than only centers.
- **The Cage** shows architecture and enclosure. Its reusable lesson is to make every chamber's release readable and give structural solids a job beyond drawing the outline.
- **Super Collider** creates a complete bumper-engine identity with only 21 foreground pieces, while **Sands of Time Remix** uses 264. Together they prove that count is a pacing choice, not a measure of ambition.

All 13 use the familiar center-jackpot payout and are predominantly static. That makes them a clear baseline; custom payout economies, phase walls, moving foreground groups, roaming bonus, sparse poetry, and staged five-ball strategy are the most productive directions for expansion.

### Use materials as verbs

Do not distribute materials by percentage. Assign each one a job.

- Standards say “clear,” “trace,” “fall through,” and “hear this contact.”
- Armor says “commit,” “charge,” “unlock,” “bank value,” and “return later.”
- Multiball says “branch,” “amplify,” and “accept temporary chaos.”
- Bumpers say “kick,” “loop,” “time,” “heat,” and “transform after ten.”
- Bonus says “look here,” “arrive,” “reveal,” and “celebrate.”
- Solid says “support,” “guide,” “separate,” “draw,” and “slow.”

Material adjacency creates grammar. Armor surrounding a bonus reads as a vault. A multiball above two diverging chutes reads as a split. A bumper at the end of a solid rail reads as a launcher. Standards lining a curve read as a trail. A solid ledge beneath destructibles reads as a temporary shelf.

Exact overlap is risky. Two colliders in the same location can cause unstable contacts and make the player unsure what exists there. Use overlap only for an intentional shell-and-reveal construction, verify the collision order, and explain it visually through scale, color, or shape. Otherwise maintain clear separation.

### Use shapes for physics and meaning

Shape and material are independent. Shape defines the collider and silhouette; material defines score, durability, and contact response. Graybox the route first, then change material only when the contact should mean something different.

Circle is predictable and visually neutral. Square and rectangle create platforms, gates, walls, typography, and crisp graphic motifs. Triangle creates directional deflection and immediately reads as an arrow, tooth, roof, or hazard. Pentagon, hexagon, and octagon add recognizable material texture without needing dense detail. Pentagon and octagon load and render in gameplay data but are not currently offered by the foreground editor's polygon picker; generated or hand-edited JSON is required for them. Star is a strong focal silhouette and should stay relatively rare.

The curved shape is a quarter-circle annular arch centered in its bounding box. Rotate it in quarter turns to form scoops, elbows, cups with exits, wave channels, broken rings, and pipes. Test both faces of the curve; the concave side can catch a ball while the convex side sheds it. Never make an inescapable bowl.

Axis-aligned, touching square and rectangle tiles can form seamless collision platforms only when they share the same material, and only for Standard, Solid, Bumper, or Armored runs. This is useful for long structural runs, but overly long horizontal shelves slow a shot and can force the anti-stall behavior. Break a shelf with slopes, gaps, or a deliberate release point.

Keep authored centers and their full bounds inside the play space. The launch machinery occupies the top region around y=118, and the main peg-design band is roughly y=120 to y=680. Leave generous clearance above large or moving objects and above the gutter heads. A center point inside the board does not guarantee that a rotated rectangle, large curve, orbit path, or motion amplitude stays inside.

Keep `globalScale` at 1 unless changing the entire physics model is intentional. It scales peg and ball silhouettes and gravity, but not authored coordinates, walls, gutter widths, or launch speed, so it is not a harmless visual zoom and can change clearances nonuniformly.

### Design motion as a readable rule

Foreground motion supports slide, wobble, local spin, visual-only scale pulse, and orbit. Motion can be applied to individual pegs or groups around a pivot. Side walls can also phase, wrapping the ball horizontally to the opposite side.

Movement should answer one of four questions: What opens? What closes? What should I time? What is alive? If it answers none of them, it is probably decorative noise.

- Slide a gate across two routes to create an alternating choice.
- Orbit a small group around a bonus to create a readable timing window.
- Spin rectangles or curves whose changing surface angle visibly redirects the ball.
- Wobble a target gently to create character without rewriting the whole route.
- Pulse scale to emphasize a beat or focal object; collision size does not pulse.
- Use random phase on repeated decorative movers so they feel organic, and fixed phase on machinery that must synchronize.
- Use phase walls only when wraparound is central to the board's identity. Mark both edges with matching color, repeated arrows, or ambient motion.

Keep a static reference frame. When everything moves, players cannot form a plan and the composition loses its silhouette. A useful default is one principal moving system, one subtle supporting motion, and mostly static structure. Check moving geometry across its entire cycle for offboard paths, impossible gates, collider intersections, and temporary dead cups. Avoid tightly packed mixed-material motion groups: the moving body resolves a contact to its nearest member, so overlapping members can score or react differently from the exact silhouette touched. Inside a motion group, an individual member's slide and wobble are ignored while its local spin and visual scale can still contribute. A Perfect Beam crossing several tightly packed members of one moving group may resolve only the nearest member, so keep beam targets separated.

### Build satisfying Rube Goldberg sequences

Start with the finale and work upward. Decide whether the ending is a center jackpot, outer-well surprise, multiball fan, bumper overload, rare physical return to the launcher, or quiet final drop. A launcher return must make the ball actually overlap the visible hub or barrel; its tractor-beam effect only telegraphs a near attempt and never pulls the ball. Then give each preceding stage one clear function.

A reliable machine cadence is:

- **Entry** — A broad catcher accepts several launch angles.
- **Commitment** — A fork, armor lock, or moving gate selects the route.
- **Transfer** — A curve, slope, or bumper passes the ball to a new region.
- **Transformation** — Multiball, roaming bonus, overload, or destruction changes the state.
- **Breath** — A short open fall lets the player read what happened.
- **Finale** — The lower geometry presents a visible gutter consequence.

Alternate active and passive stages. Repeated bumper explosions without a quiet descent become noise; repeated solid chutes without a kick become sluggish. The player should sometimes influence the trigger, sometimes watch the consequence, and finally understand why the ball landed where it did.

The game redirects persistent near-vertical loops without adding energy, and it nudges very slow non-solid situations. Treat these as safety nets, not design engines. A machine that relies on watchdog intervention is not tuned.

### Make simple levels feel complete

Minimalism is a constraint on clutter, not permission to omit gameplay. A sparse board still needs a playable contact chain: an understandable entry, at least one meaningful transfer or recovery, and lower-board geometry that turns the final exit angle into a gutter consequence. If the ball usually touches one object and then falls through empty space, the board is unfinished no matter how elegant the composition looks.

Design the complete five-ball match. One-shot targets may simplify or redirect the route, but persistent or multi-hit elements such as a bumper, armor lock, solid bank, moving gate, or roaming bonus should keep later launches worth aiming. Test the untouched board, a partly cleared board, and the state after the most obvious reward is gone. Each state needs a deliberate target, a recoverable miss, and a lower resolution.

Give every collision object a gameplay job, and let objects cover multiple jobs when the result stays readable. A circle can be both a bank point and a color accent; a solid arch can frame a reward and guide the next contact; a signature bumper can choose the branch while separate follow-up pieces carry that choice toward the wells. Count playable stages rather than celebrating a low object count.

Use scale and negative space to reveal ball movement. Align the strongest foreground and ambient lines with an actual approach, rebound, transfer, or exit. Let ambient art complete silhouettes outside collision space; never add a collider merely to finish a picture, and never use visual sparseness to excuse a missing follow-up chain.

Minimal boards particularly benefit from sound. Five contacts with deliberate spacing and material rhythm can create a more memorable identity than fifty undifferentiated hits. They also reveal physics problems immediately, which makes them excellent teaching and calibration levels.

### Control complexity and pacing

Visual density, mechanical difficulty, rules complexity, and score volatility are different axes. Label and tune them separately.

- Light density is up to about 60 objects.
- Medium density is roughly 61 to 150 objects.
- Heavy density begins above 150 objects.

These are performance and filtering bands, not quality targets. Prefer the smallest count that expresses the idea. On heavy boards, use repeated structure, clear lanes, and a small number of material families. Avoid simultaneously maximizing density, multiballs, bumpers, motion, and ambient activity.

A match normally starts with five balls and commonly uses 120 seconds; 30- and 60-second briefings are also available. A long bumper loop consumes real match attention even when it is technically safe. Measure average shot duration and worst plausible multiball duration at every time limit the board is meant to support. The player should get to make several decisions, not spend the whole match watching the first launch resolve.

Think in acts. The upper act establishes the choice; the middle act delivers the board's signature experience; the lower act resolves gutter strategy. A dense board benefits from brief open falls between acts. A sparse board may compress those acts into a small set of multi-role objects, but object count does not prove that an act exists. Trace the expected contact sequence and verify that all three acts remain playable after early targets clear.

### Direct attention with color

Choose a hierarchy before choosing individual colors:

- Background establishes temperature and mood.
- Structural solids and armor define the silhouette.
- Standards create the main texture.
- One or two special colors mark actionable targets.
- Wall and gutter accents frame the stage and reinforce the reward economy.
- The white gameplay ball must remain visible everywhere along its route.

Use hue, value, and saturation deliberately. On a dark neon board, reserve the brightest warm color for the goal. On Porcelain or Mono boards, use value contrast and shape differences so materials remain identifiable. On a lush ambient board, lower the foreground color count instead of competing with every background hue.

The editor's palette families include Default, Night, Mono, Terra, Sunset, Crimson, Catalog, Primary, Vapor, Beach, Twilight, Summer, Metro, Biolume, and Porcelain. Treat these as starting points, not obligations. Adjust the gradient, opacity, rail effect, well colors, and bumper-head color as one composition.

Material colors may vary by theme, but gameplay language must remain learnable. Preserve either a consistent special color, a consistent special shape, or both. Never make armor and solid indistinguishable when one pays 500 and the other pays nothing. Check the board at full play size and in the small home preview.

### Pair foreground and ambient art

The ambient system offers six broad families—Arcade, Wave, Cyber, Hack, Zen, and Trip—with 36 presets. It can also render placed circles, squares, rectangles, triangles, stars, arches, rings, bars, diamonds, and polygons with outline, fill, soft, glow, dash, and bold styling. Background shapes can slide, spin, pulse, wobble, collide, bounce, phase, and warp.

Ambient shapes never collide with the gameplay ball and never score. Their collide, bounce, phase, and warp controls describe interactions inside the visual background field only.

Ambient art should extend the board's idea rather than illustrate a separate idea behind it. A lotus foreground pairs naturally with mandala or pond motion; a circuit board pairs with signal, trace, or matrix; a phase-wall serpent pairs with tunnel or vortex flow. Align background lines with foreground routes when that makes the intended motion clearer.

Opacity is a design control. If the gradient is too opaque, the ambient layer disappears. If it is too transparent, bright animation competes with pegs and the ball. Start with a restrained ambient, test actual gameplay motion, then increase intensity only where negative space can carry it.

Avoid placing score-bearing objects merely to match background decoration when they produce poor physics. Foreground is gameplay; ambient is atmosphere. When the same motif needs both, let ambient complete lines and textures outside the safe collision path.

### Score the board with sound

Level data and the editor present audio profiles including Zen Organic, Sitcom Sting, Neon Arcade, Mall Organ, Kids TV, Crystal Bowl, Woodshop, E.Piano Lounge, and Laser Run. The active collision runtime currently relies on fixed material-specific sample banks: standard phrase tones, armor stages, bumper one-shots, and randomized multiball clips. Horizontal position controls stereo placement. Stored root, scale, pitch-mapping, waveform, and per-peg `note` fields do not currently let a designer compose exact collision pitches, so do not base a level promise on a specific authored melody.

Sound design is still a powerful layout tool:

- Space contacts so dense sections have a readable rhythm rather than an uninterrupted burst.
- Use material changes to make armor stages, bumper returns, and multiball events audibly distinct.
- Let left and right routes create clear stereo movement.
- Give a Rube sequence breath between its loudest transfers.
- Keep bumper loops short enough that their repeating voice remains satisfying.
- Test maximum event density with simultaneous multiballs, not just one isolated ball.

Judge the complete contact texture, stereo spread, and peak repetition rate. These matter more to current gameplay than the unused note metadata.

### Design difficulty that feels fair

Difficulty can come from aim precision, timing, route planning, durability, prediction, state management, score risk, or limited readability. Choose one primary and at most two supporting sources for a normal level. Expert levels may combine more, but should still reveal their rules.

Fair challenge provides:

- A visible cause for important deflections.
- At least one recoverable or lower-risk route.
- Meaningful launcher control before randomness dominates.
- Consistent motion cycles or clearly signaled random behavior.
- A valid bottom exit from every solid enclosure.
- No important scoring objects hidden offboard or behind unintended overlaps.
- A route that remains playable after destructible geometry changes.
- A jackpot whose difficulty matches its presentation.

Do not confuse unpredictability with difficulty. A chaotic board can be entertaining, but mastery requires some stable relationship between choice and outcome. Likewise, deterministic is not automatically strategic: a funnel that guarantees 3× regardless of input removes the decision.

### Prototype in layers

Before grayboxing, complete a one-page level brief:

- Promise: the one sentence players should remember.
- Emotion: calm, tense, playful, spectacular, mysterious, precise, or another clear target.
- Layout family and primary skill.
- Intended relative frequency and bank size for all five wells.
- The job assigned to every material used.
- Expected contact chains from entry through lower-board resolution, including miss recovery and partly cleared late-shot routes.
- One motion rule, or an explicit choice to remain static.
- Foreground palette, ambient relationship, and ball-readability plan.
- Audio profile and expected peak contact density.
- Test targets for duration, multiball count, overloads, Perfect Beam value, and gutter outcomes.

Use this order to avoid polishing a board whose physics do not work:

1. Write the one-sentence promise and intended player emotion.
2. Choose the default gutter economy and mark desired landing routes.
3. Graybox only the essential solids, bumpers, and target pegs.
4. Fire from left, center, and right with low, medium, full, and Perfect timing. The aiming preview shows only the unobstructed parabola and does not simulate banks, peg collisions, or moving gates.
5. Test the first-shot board and a partly cleared late-shot state.
6. Assign materials according to their jobs and estimate the score economy.
7. Add supporting objects, preserving negative space and exits.
8. Add one foreground motion system if the concept benefits from timing.
9. Apply palette, gutter colors, rail effect, ambient preset, and audio profile.
10. Leave editor test mode and test normal five-ball matches, multiball concurrency, and worst-case shot duration; editor testing provides 999 balls and can hide economy problems.
11. Inspect the home preview and material readability.
12. Remove anything that does not strengthen the promise.

Save comparison variants when tuning important geometry. Moving a lower bumper by ten pixels can affect gutter distribution more than restyling an entire upper field. Compare variants by outcome, not by how much work each one took.

### From promise to first playable

Consider a gameplay-first version of **One Good Bounce**. Its promise is: “One signature bumper starts a readable chain that ends in a meaningful gutter decision.” The bumper is the identity, not the entire board. Build that idea in seven deliberate passes:

1. Set the payout hypothesis to `[1,1,3,2,1]`. Center is the aspirational result, right-center is a forgiving recovery, and the other wells are low value. Remap the well colors with the payouts.
2. Place one large bumper in the upper-middle board. Below it, graybox two short follow-up chains: a safer branch through path markers toward 2×, and a narrower branch through a bonus or armor key and lower target field toward 3×.
3. Leave a readable miss route. A launch that misses the bumper should still meet one useful contact or bank before reaching a lower-value well; it should not cross an empty board without another decision.
4. Give each piece one clear job. The bumper chooses the branch and preserves the signature after one-shot targets clear, destructible markers teach the next contact, armor anchors retain multi-hit objectives, and the lower target field converts the chain's exit angle into a visible well choice.
5. Test quick, full, and Perfect releases from left, center, and right. Trace complete sequences such as bumper → marker → lower target → well; merely touching the signature bumper is not success.
6. Test all five starting balls, including the state after the bonus and several path markers disappear. The persistent bumper, remaining armor, and uncleared lower field must still support at least two aimable outcomes, while cleared targets may open a new shortcut rather than erase the play.
7. Tune by evidence. If center becomes automatic, move the lower resolver or narrow its approach rather than adding decoration. If the bumper sprays every angle randomly, reduce its radius or add settling distance. If misses feel barren, add one functional recovery contact that rejoins a chain.

This example remains visually sparse, but it is not mechanically empty. The same process scales to a factory or Rube Goldberg board: promise, gutter hypothesis, contact chain, miss recovery, lower resolution, late state, measured revision.

### Hand-edit JSON safely

Use hand-edited JSON only when the desktop editor does not expose the control you need, such as custom payout arrays or runtime-supported Pentagon and Octagon shapes. Export a copy with **Export File**, keep the original untouched, edit the copy in a plain-text editor, then return through **Import File** or **Paste JSON**. Import checks are intentionally shallow, so a file being accepted does not prove that its geometry is safe.

- Coordinates use the board's top-left as the origin: x increases rightward and y increases downward.
- Rotation is stored in radians, not degrees.
- Give every peg a unique, nonempty `id`. Duplicate IDs can share bumper state or overwrite motion lookups.
- Use only supported material and shape names. Unknown material names fall back, and unknown shapes become circles.
- Give rectangles deliberate `width` and `height`; give squares a deliberate side length and polygonal or curved pieces a deliberate `radius`.
- Keep `globalScale` at `1` unless you intend to retune the whole physics model.
- A gutter payout array contains exactly five integers from 1 through 3. Supply five valid HTML `well_colors` in the same order so the visual tiers move with the rewards.
- Keep full silhouettes and complete motion envelopes inside the play area; checking only each center coordinate is not enough.
- Preserve unknown top-level fields, but do not rely on invented per-peg keys surviving an editor save.

Re-import the edited copy, inspect its home preview, test ordinary and Perfect launches, export it again, and compare the result. Treat that round trip as part of authoring, not as optional cleanup.

### Measure what players actually experience

For serious tuning, record more than score. Useful per-board measures include average and maximum shot duration, mean and variance of final score, landing frequency for all five wells, bank size by well, number of active multiballs, bumper hits and overload rate, armor completion, Perfect Beam value, percentage of objects reached, and frequency of anti-stall intervention.

Compare random launches with intentional launches. A strategic board should show a meaningful outcome difference when the player follows its intended route. A statistical Plinko board may intentionally show less control, but its distribution should still match the visual promise. A 3× challenge should become more likely with skill without becoming guaranteed.

For a quick pass, make 12–18 deliberate shots covering left, center, right, low and full power, Perfect timing, and one partly cleared state. For a tuning pass, choose the two or three outcome claims central to the level promise and repeat those conditions at least ten times. Log intended route, bank, final well, duration, peak live-ball count, and anomalies. A handful of memorable jackpot runs is not enough evidence.

Watch outliers. One rare infinite-feeling bumper loop, collider overlap, blocked gutter, or offboard orbit can matter more to perceived quality than the average result. Test on the target device because heavy particles, ambient layers, and many simultaneous physics bodies can change the feel.

### Common failure modes

- **Dead cup** — Solids or curves trap the ball without a lower exit. Add a drain, slope, destructible floor, or wider mouth.
- **Launcher blockage** — Large or moving pieces enter the barrel region. Move the complete bounds and motion path below the launch lane.
- **Decorative collision clutter** — Foreground pieces exist only to finish a picture but ruin routes. Move decoration to ambient art.
- **Exact duplicate objects** — Identical positions create ambiguous or unstable contact. Separate them or make the shell/reveal intent unmistakable.
- **Unreachable value** — Score-bearing objects sit offboard, inside permanent solids, or outside all plausible lines.
- **False material language** — Solid resembles armor, bonus looks ordinary, or a multiball gate has no visual emphasis.
- **Center post overload** — Too many lower obstacles make 3× effectively random or impossible. One strong deflector is often enough.
- **Automatic jackpot** — A broad funnel sends nearly every launch to 3× and erases risk.
- **Multiball flood** — Many easy multiball pegs trigger at once, producing noise and long shots. Sequence them or make later ones conditional.
- **Bumper farm** — A closed loop repeatedly scores with little input. Provide an escape and test overload behavior.
- **Motion soup** — Multiple unrelated cycles make prediction and silhouette impossible. Establish one kinetic hierarchy.
- **Ambient competition** — Background motion has equal contrast to the ball and targets. Reduce opacity, density, glow, or color count.
- **Density without rhythm** — Every region has the same spacing. Create clusters, rests, lanes, and changes in scale.
- **One-shot bypass** — Perfect Beam deletes the entire challenge unintentionally. Use angles, bumpers, board-wall banks, or multiple lines while preserving a rewarding beam route; solid pieces do not stop the beam.
- **Slow spectacle** — The machine is impressive once but consumes most of every 120-second match. Shorten loops and insert clean exits.
- **Preview failure** — The board plays well but has no readable thumbnail identity. Strengthen silhouette, focal color, or negative space.

### Pre-publish checklist

- The board has a one-sentence identity that a player can perceive.
- Every peg has a unique, nonempty ID and finite position, rotation, and size; rectangles use deliberate width and height, while squares have a deliberate side length.
- The first launch offers an understandable target or route.
- Every solid or curved container has a bottom exit.
- Full object bounds and complete motion paths remain inside the intended play area.
- No score-bearing object is accidentally unreachable.
- Exact overlaps are intentional, readable, and tested.
- The 3× approach is deliberately open, gated, redirected, or timed.
- Custom payout labels, colors, and foreground approach geometry tell the same story; physical well widths remain fixed.
- Early and late board states both remain playable.
- Sparse boards preserve an intentional contact-to-contact chain, a recoverable miss, and a lower-board decision after one-shot targets clear.
- Armor, multiball, bumper, bonus, and solid each have a defined job.
- Perfect Beam has useful targets but does not trivialize the whole board.
- Multiballs have space to separate and independently reach gutters.
- Bumper loops escape, and overload does not break the route.
- The ball stays visible over every foreground and ambient region.
- Materials remain distinguishable without relying only on subtle color differences.
- Background opacity reveals the intended ambient art without obscuring play.
- Foreground motion communicates timing or character and has a stable reference frame.
- Audio remains pleasant at maximum expected contact density.
- A five-ball, 120-second match includes multiple player decisions.
- The small home preview preserves the level's silhouette and focal point.
- The final result is simpler than the first draft wherever complexity added no consequence.

### Ten compact design recipes

- **Classic Plinko** — Stagger seven to ten rows of small standards, open two subtle lanes, reserve the final two rows for gutter bias, and use one bonus as a distribution landmark.
- **Peggle crescent** — Build two separated arcs with generous empty space, place an armor anchor at one tip, and reward a grazing bank that follows the curve.
- **Earned center jackpot** — Put an obvious key above an outward V. Clearing or moving the key converts the V into a center funnel for later shots.
- **Outer jackpot** — Assign 3× to both broad outer wells, use center solids to split the descent, and color the rails so the unfamiliar economy reads instantly.
- **Minimal poem** — Use the fewest objects that still provide an entry, a follow-up transfer, miss recovery, and lower resolution across five balls. Keep one muted palette and one slow ambient motif, and make style clarify the playable chain rather than substitute for it.
- **Bumper reactor** — Surround a restrained bumper core with destructible gates, release no more than two early multiballs, and give overload a clean exit toward a visible well.
- **Armor vault** — Frame a bonus or multiball with armor, provide a charged bank route and a separate Perfect Beam line, then let the opened vault improve the lower route.
- **Moving gate** — Slide one clearly colored bar across two static channels at a learnable period. Keep both failure outcomes playable and the timing visible from the launcher.
- **Rube staircase** — Alternate sloped solids, one-shot standard latches, and bumpers, with short open falls between stages and a final gutter fork.
- **Ambient artwork** — Begin with a strong silhouette and ball path, choose one matching ambient preset, then use placed background shapes to complete the illustration outside collision space.

## 9. Level Concept Catalog

The catalog below is both an inspiration library and an index of the curated built-in boards. Its ten collections move from classic foundations through minimal art, gutter strategy, material studies, kinetic machines, atmosphere, deliberate strategy, calm cascades, familiar silhouettes, and expert experiments. Every entry specifies a distinct design promise rather than merely a different peg arrangement.

The playable catalog is part of the v1.0.17 library. On an older installed build, these entries remain a design reference until the application itself is updated.

Familiar geometric ideas and genre conventions are welcome, but the library avoids branded characters, logos, and copied commercial layouts. Build an original arrangement and identity even when starting from a classic pegboard, pinball, or pachinko tradition.

Difficulty is an intended design target, not a claim that density alone makes a board hard:

- **Relaxed** — The route is spacious, readable, and primarily experiential.
- **Beginner** — One principal idea with forgiving recovery and little hidden state.
- **Intermediate** — Two interacting ideas or a meaningful risk/reward route choice.
- **Advanced** — Precision, timing, order, or state management materially changes the result.
- **Expert** — Several mastered systems interact, while causes and valid exits remain visible.
- **Master** — A catalog-finale challenge coordinates several expert systems and expects deliberate five-ball planning.

Use the collection map to find the right starting point:

- **[Arcade Foundations](#arcade-foundations)** — Plinko, Peggle-like arcs, pachinko, pinball, and core lessons.
- **[Minimal Masterpieces](#minimal-masterpieces)** — Sparse, calm, graphic boards that still sustain contact chains, late-shot choices, and lower resolution.
- **[Jackpot Geometry](#jackpot-geometry)** — Deliberate 1×/2×/3× steering, risk, funnels, banks, and gates.
- **[Material Studies](#material-studies)** — Focused uses of armor, bumpers, multiball, solid, bonus, and shape.
- **[Kinetic Machines](#kinetic-machines)** — Moving gates, orbits, relays, and Rube Goldberg journeys.
- **[Atmospheric Artworks](#atmospheric-artworks)** — Beautiful palette, silhouette, ambient, and motion synergy.
- **[Precision & Strategy](#precision--strategy)** — Charged shots, Perfect Beam, sequencing, and five-ball planning.
- **[Cascades & Calm](#cascades--calm)** — Gentle falling experiences, flowing channels, and meditative rhythm.
- **[Familiar Icons](#familiar-icons)** — Original hearts, rockets, notes, trees, faces, and other readable motifs.
- **[Expert Experiments](#expert-experiments)** — Phase walls, dense systems, extreme timing, and climactic machines.

<!-- BEGIN GENERATED LEVEL CATALOG -->

### Arcade Foundations

- **AF-01 — Centerline Plinko** (Beginner · medium density) — Premise: Teach the canonical staggered drop while keeping a legible, slightly guarded route to the center jackpot; Geometry/materials: 80 pieces (18 armored, 59 standard, 2 bumper, 1 bonus) led by 79 circle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 3 lower pieces; Presentation: Arcade palette, pinball ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **AF-02 — Split Decision** (Beginner · light density) — Premise: Use one early divider to create two visibly different but equally viable scoring routes; Geometry/materials: 52 pieces (2 solid, 46 standard, 2 multiball, 1 bonus, 1 armored) led by 48 circle, 2 rectangle, 2 star; Gutter intent: 1-3-2-3-1 custom payouts place 3× in left-center and right-center; Presentation: Arcade palette, tokens ambient, spark rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **AF-03 — Pachinko Rain** (Beginner · medium density) — Premise: Create a soft field of many small deflections that reads like rain without becoming visually dense; Geometry/materials: 63 pieces (4 bonus, 48 standard, 4 armored, 6 bumper, 1 multiball) led by 59 circle, 4 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Arcade palette, home ambient, neon rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **AF-04 — Five-Lane Drop** (Beginner · light density) — Premise: Make the five gutters understandable through five foreground lanes with distinct material rhythms; Geometry/materials: 39 pieces (4 solid, 29 standard, 2 multiball, 3 armored, 1 bonus) led by 34 circle, 4 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Arcade palette, tubes ambient, shock rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **AF-05 — Bell Curve** (Intermediate · medium density) — Premise: Demonstrate Galton-board probability with a broad triangular field and a deliberately divided center outcome; Geometry/materials: 77 pieces (4 armored, 62 standard, 9 solid, 2 bonus) led by 66 circle, 9 rectangle, 2 star; Gutter intent: the center 3× approach is deliberately contested by 6 lower pieces; Presentation: Arcade palette, grid ambient, plasma rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **AF-06 — Peggle Crescent** (Beginner · light density) — Premise: Frame a sweepable crescent whose open side invites satisfying long-angle shots and bonus cleanup; Geometry/materials: 39 pieces (2 bumper, 32 standard, 3 armored, 1 multiball, 1 bonus) led by 38 circle, 1 star; Gutter intent: 2-1-3-1-2 custom payouts place 3× in center; Presentation: Arcade palette, duel ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **AF-07 — Diamond Cascade** (Intermediate · light density) — Premise: Chain three readable diamond loops so each exit feeds the next motif instead of repeating a static stamp; Geometry/materials: 48 pieces (8 armored, 36 standard, 2 bonus, 1 multiball, 1 bumper) led by 46 circle, 2 star; Gutter intent: the center 3× approach is lightly guarded by 3 lower pieces; Presentation: Arcade palette, invade ambient, spark rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **AF-08 — Pinball Alley** (Intermediate · light density) — Premise: Build a narrow bumper-driven alley with rails that produce controlled rebounds rather than random pinball noise; Geometry/materials: 23 pieces (2 solid, 8 bumper, 11 standard, 1 multiball, 1 bonus) led by 16 circle, 4 hexagon, 2 rectangle; Gutter intent: 1-3-2-3-1 custom payouts place 3× in left-center and right-center; Presentation: Arcade palette, chrome ambient, neon rail effects, and a deliberately static foreground; Strategy: manage bumper loops and overload windows, then preserve a clean lower release.
- **AF-09 — Lucky Horseshoe** (Beginner · light density) — Premise: Use a familiar open horseshoe silhouette to cradle rewards while leaving a clean downward release; Geometry/materials: 40 pieces (2 bumper, 30 standard, 5 armored, 1 bonus, 2 multiball) led by 39 circle, 1 star; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Arcade palette, miami ambient, shock rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **AF-10 — Arcade Ladder** (Intermediate · light density) — Premise: Turn a ladder into a sequence of bankable rungs where climbing across the pattern improves reward quality; Geometry/materials: 27 pieces (8 solid, 6 bumper, 9 standard, 2 armored, 1 multiball, 1 bonus) led by 18 circle, 8 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Arcade palette, outrun ambient, plasma rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.

### Minimal Masterpieces

- **MM-01 — Three Stones** (Relaxed · light density) — Premise: Build three large anchor stones into overlapping ripple fields so every launch can discover a different multi-contact descent; Geometry/materials: 23 pieces (1 bumper, 4 armored, 1 bonus, 16 standard, 1 multiball) led by 23 circle; Gutter intent: 1-2-3-1-1 custom payouts place 3× in center; Presentation: Minimal palette, pond ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MM-02 — One Good Bounce** (Beginner · light density) — Premise: Make one signature bumper launch the ball into several readable follow-up chains and a meaningful final gutter fork; Geometry/materials: 26 pieces (20 standard, 3 armored, 1 bumper, 1 multiball, 1 bonus) led by 25 circle, 1 star; Gutter intent: 1-1-3-2-1 custom payouts place 3× in center; Presentation: Minimal palette, moon ambient, spark rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MM-03 — Falling Leaf** (Relaxed · light density) — Premise: Trace a drifting leaf descent with enough curved contacts, crosswinds, and low catches to keep the fall alive; Geometry/materials: 23 pieces (19 standard, 1 bonus, 2 bumper, 1 armored) led by 8 pentagon, 8 curved, 7 circle; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Minimal palette, garden ambient, neon rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MM-04 — Quiet Arch** (Relaxed · light density) — Premise: Use an open arch, sloped roof pieces, and shoulder bumpers to turn a calm silhouette into a lively sheltered cascade; Geometry/materials: 23 pieces (15 standard, 2 armored, 2 solid, 2 bumper, 1 bonus, 1 multiball) led by 11 circle, 9 curved, 2 rectangle; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Minimal palette, mandala ambient, shock rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MM-05 — Pendulum** (Intermediate · light density) — Premise: Make a sweeping bumper transfer the ball among an outer witness ring and a lower sequence of timed catches; Geometry/materials: 22 pieces (1 solid, 1 bumper, 16 standard, 2 armored, 1 multiball, 1 bonus) led by 20 circle, 1 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Minimal palette, lotus ambient, plasma rail effects, and 1 rotating group; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MM-06 — Two Doors** (Beginner · light density) — Premise: Offer two genuinely playable openings with different contact chains, rebound personalities, and payout approaches; Geometry/materials: 26 pieces (3 solid, 17 standard, 1 bumper, 3 armored, 1 multiball, 1 bonus) led by 22 circle, 3 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 3 lower pieces; Presentation: Minimal palette, stars ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MM-07 — Negative Space** (Intermediate · light density) — Premise: Let an empty central silhouette—not a filled drawing—be the board's dominant visual and strategic feature; Geometry/materials: 31 pieces (15 standard, 13 armored, 2 bumper, 1 bonus) led by 30 circle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Minimal palette, prism ambient, spark rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MM-08 — Mono Steps** (Relaxed · light density) — Premise: Create a quiet grayscale stair cascade where every short landing hands the ball to a visible scoring echo or bumper accent; Geometry/materials: 21 pieces (7 solid, 10 standard, 2 bumper, 1 armored, 1 bonus) led by 11 square, 7 rectangle, 2 circle; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Minimal palette, grid ambient, neon rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **MM-09 — Five Notes** (Beginner · light density) — Premise: Arrange five highlighted anchors with small echo contacts so the visual phrase also produces a satisfying playable rhythm; Geometry/materials: 20 pieces (16 standard, 2 bumper, 1 armored, 1 bonus) led by 19 circle, 1 star; Gutter intent: 1-2-1-3-1 custom payouts place 3× in right-center; Presentation: Minimal palette, beacon ambient, shock rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MM-10 — Last Light** (Relaxed · light density) — Premise: Chase one roaming light through a sparse constellation whose rays, mirrors, and low prism keep every shot interactive; Geometry/materials: 27 pieces (1 bonus, 2 armored, 21 standard, 1 multiball, 2 bumper) led by 24 circle, 3 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Minimal palette, moon ambient, plasma rail effects, and a roaming bonus; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.

### Jackpot Geometry

- **JG-01 — Needle’s Eye** (Advanced · light density) — Premise: Make the 3× reachable only through a narrow lower aperture whose approach remains readable from the launcher; Geometry/materials: 25 pieces (2 solid, 6 armored, 14 standard, 2 bumper, 1 bonus) led by 22 circle, 2 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 3 lower pieces; Presentation: Jackpot palette, beacon ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **JG-02 — Bank Shot** (Intermediate · light density) — Premise: Reward a deliberate wall bank that redirects the ball behind a center guard into the jackpot lane; Geometry/materials: 14 pieces (3 solid, 1 multiball, 2 armored, 6 standard, 1 bumper, 1 bonus) led by 10 circle, 3 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Jackpot palette, grid ambient, spark rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **JG-03 — Double Bank** (Advanced · light density) — Premise: Require two controlled direction changes while preserving alternate 2× exits when the second bank misses; Geometry/materials: 20 pieces (3 solid, 7 standard, 7 armored, 1 multiball, 1 bumper, 1 bonus) led by 16 circle, 3 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Jackpot palette, trace ambient, neon rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **JG-04 — Jackpot Funnel** (Beginner · light density) — Premise: Build the clearest positive center funnel in the catalog while using bumpers to prevent it from being automatic; Geometry/materials: 30 pieces (2 solid, 10 armored, 15 standard, 2 bumper, 1 bonus) led by 27 circle, 2 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 3 lower pieces; Presentation: Jackpot palette, tunnel ambient, shock rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **JG-05 — False Center** (Advanced · light density) — Premise: Present an obvious center route that quietly splits toward 2× while an offset entry is the true jackpot key; Geometry/materials: 18 pieces (4 solid, 1 bumper, 1 multiball, 3 armored, 8 standard, 1 bonus) led by 12 circle, 4 rectangle, 1 triangle; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Jackpot palette, cipher ambient, plasma rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **JG-06 — Left-Hand Key** (Intermediate · light density) — Premise: Make a left-side trigger route the reliable way to enter a center jackpot corridor; Geometry/materials: 24 pieces (17 standard, 1 multiball, 2 solid, 2 armored, 1 bumper, 1 bonus) led by 21 circle, 2 rectangle, 1 star; Gutter intent: 2-1-3-1-1 custom payouts place 3× in center; Presentation: Jackpot palette, root ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **JG-07 — Right-Hand Key** (Intermediate · light density) — Premise: Mirror the key idea on the right while changing materials and rebound timing enough to avoid rote play; Geometry/materials: 24 pieces (5 armored, 14 standard, 1 multiball, 2 solid, 1 bumper, 1 bonus) led by 20 circle, 2 rectangle, 1 hexagon; Gutter intent: 1-1-3-1-2 custom payouts place 3× in center; Presentation: Jackpot palette, signal ambient, spark rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **JG-08 — Outer Crown** (Advanced · light density) — Premise: Move the highest gutter rewards to the outer wells and teach players to resist default center bias; Geometry/materials: 38 pieces (5 armored, 28 standard, 2 multiball, 1 bonus, 2 bumper) led by 37 circle, 1 star; Gutter intent: 3-2-1-2-3 custom payouts place 3× in far-left and far-right; Presentation: Jackpot palette, chrome ambient, neon rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **JG-09 — Twin Temptation** (Advanced · light density) — Premise: Offer two valuable mid-well funnels separated by a low-value center decoy; Geometry/materials: 19 pieces (4 solid, 10 standard, 2 multiball, 2 bonus, 1 bumper) led by 13 circle, 4 rectangle, 2 star; Gutter intent: 1-3-1-3-1 custom payouts place 3× in left-center and right-center; Presentation: Jackpot palette, duel ambient, shock rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **JG-10 — Reverse Pyramid** (Intermediate · medium density) — Premise: Use an inverted triangle to gather broad entries into a small armored gate above the center well; Geometry/materials: 66 pieces (11 armored, 53 standard, 1 multiball, 1 bonus) led by 65 circle, 1 star; Gutter intent: the center 3× approach is deliberately contested by 8 lower pieces; Presentation: Jackpot palette, prism ambient, plasma rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.

### Material Studies

- **MS-01 — Armor Orchard** (Intermediate · light density) — Premise: Scatter durable fruit around outward-shedding branches, using knot bumpers and open drains to keep the orchard lively across five shots; Geometry/materials: 29 pieces (7 solid, 8 standard, 9 armored, 1 multiball, 3 bumper, 1 bonus) led by 17 circle, 7 rectangle, 3 hexagon; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Materials palette, garden ambient, ripple rail effects, and a deliberately static foreground; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.
- **MS-02 — Bumper Forge** (Intermediate · light density) — Premise: Drive sparks among energetic bumpers and a split anvil whose central crack exposes, rather than buries, the reward route; Geometry/materials: 23 pieces (4 solid, 7 armored, 6 bumper, 1 bonus, 4 standard, 1 multiball) led by 11 circle, 5 rectangle, 3 hexagon; Gutter intent: the center 3× approach is lightly guarded by 3 lower pieces; Presentation: Materials palette, acid ambient, spark rail effects, and a deliberately static foreground; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.
- **MS-03 — Multiball Loom** (Advanced · light density) — Premise: Interlace segmented warp lines with moving multiball shuttles so openings repeatedly braid and separate the live balls; Geometry/materials: 38 pieces (12 solid, 10 armored, 13 standard, 2 multiball, 1 bonus) led by 37 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Materials palette, matrix ambient, neon rail effects, and 5 independently moving targets; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **MS-04 — Solid River** (Intermediate · light density) — Premise: Space curved solid banks among scoring stones, current bumpers, and open channels so the river redirects without becoming a dead riverbed; Geometry/materials: 26 pieces (8 solid, 3 armored, 11 standard, 2 bumper, 1 multiball, 1 bonus) led by 17 circle, 8 curved, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Materials palette, pond ambient, shock rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **MS-05 — Roaming Star** (Intermediate · light density) — Premise: Showcase the roaming-bonus rule on an open star field where its next host remains visible and reachable; Geometry/materials: 29 pieces (27 standard, 1 bonus, 1 bumper) led by 21 circle, 8 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Materials palette, stars ambient, plasma rail effects, and a roaming bonus; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MS-06 — Glass & Iron** (Intermediate · light density) — Premise: Pair fragile pale circles with dark armored bars to make durability immediately legible through contrast; Geometry/materials: 34 pieces (16 standard, 16 armored, 1 multiball, 1 bonus) led by 16 circle, 8 rectangle, 8 square; Gutter intent: the center 3× approach is lightly guarded by 3 lower pieces; Presentation: Materials palette, chrome ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MS-07 — Woodblock Terrace** (Beginner · light density) — Premise: Alternate pitched terraces, destructible landings, and open handoffs so the ball cascades instead of parking on wood; Geometry/materials: 21 pieces (5 solid, 14 standard, 1 bumper, 1 bonus) led by 12 square, 7 rectangle, 1 circle; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Materials palette, stack ambient, spark rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **MS-08 — Paper Circuit** (Intermediate · light density) — Premise: Draw a thin angular circuit from solid traces and destructible square components without using dense peg fields; Geometry/materials: 19 pieces (10 armored, 7 standard, 1 multiball, 1 bonus) led by 10 rectangle, 8 square, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Materials palette, cipher ambient, neon rail effects, and a deliberately static foreground; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.
- **MS-09 — Shape Sampler** (Beginner · light density) — Premise: Give every supported peg silhouette a useful mechanical role instead of presenting shapes as decoration only; Geometry/materials: 18 pieces (9 standard, 5 armored, 1 bonus, 1 solid, 1 bumper, 1 multiball) led by 2 circle, 2 square, 2 rectangle; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Materials palette, prism ambient, shock rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **MS-10 — Armor Keyhole** (Advanced · light density) — Premise: Build a durable keyhole whose beam-clearable rim protects a lucrative center channel; Geometry/materials: 35 pieces (3 bumper, 30 armored, 1 multiball, 1 bonus) led by 34 circle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Materials palette, beacon ambient, plasma rail effects, and a deliberately static foreground; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.

### Kinetic Machines

- **KM-01 — Clockwork** (Intermediate · light density) — Premise: Mesh two slow rotating assemblies so their changing openings create a readable mechanical cadence; Geometry/materials: 29 pieces (5 armored, 16 standard, 5 bumper, 2 multiball, 1 bonus) led by 17 circle, 6 hexagon, 5 octagon; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Kinetic palette, tubes ambient, ripple rail effects, and 2 rotating groups; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **KM-02 — Escalator** (Intermediate · light density) — Premise: Slide a sequence of step targets laterally to carry and redirect falling balls across the board; Geometry/materials: 11 pieces (6 standard, 2 multiball, 1 bonus, 2 solid) led by 10 rectangle, 1 star; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Kinetic palette, stack ambient, spark rail effects, and 9 independently moving targets; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **KM-03 — Pinball Reactor** (Advanced · light density) — Premise: Contain a visually pulsing bumper core inside a rotating ring that periodically vents balls toward different wells; Geometry/materials: 25 pieces (5 armored, 9 standard, 4 multiball, 4 bumper, 1 bonus, 2 solid) led by 14 hexagon, 8 circle, 2 rectangle; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Kinetic palette, vortex ambient, neon rail effects, and 1 rotating group, 8 independently moving targets; Strategy: choose multiball timing before committing the enlarged ball field to a payout lane.
- **KM-04 — Rube Staircase** (Intermediate · light density) — Premise: Chain shelves, bumpers, and reward catches so one descent feels like a small cause-and-effect machine; Geometry/materials: 21 pieces (7 solid, 7 bumper, 5 standard, 1 multiball, 1 bonus) led by 13 circle, 7 rectangle, 1 star; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Kinetic palette, pinball ambient, shock rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **KM-05 — Conveyor Switch** (Advanced · light density) — Premise: Use opposing sliding rows to alternately expose left and right routes through a central switch; Geometry/materials: 21 pieces (15 standard, 2 armored, 2 multiball, 1 bonus, 1 bumper) led by 13 rectangle, 6 circle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Kinetic palette, signal ambient, plasma rail effects, and 2 motion groups; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **KM-06 — Orbiting Gates** (Advanced · light density) — Premise: Rotate paired solid gates around fixed pivots to create short, learnable timing windows; Geometry/materials: 18 pieces (8 solid, 2 multiball, 1 bonus, 7 armored) led by 9 circle, 8 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Kinetic palette, orbit ambient, ripple rail effects, and 2 rotating groups; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.
- **KM-07 — Bumper Relay** (Intermediate · light density) — Premise: Pass energy through a diagonal series of wobbling bumpers whose spacing supports visible handoffs; Geometry/materials: 16 pieces (8 bumper, 6 standard, 1 multiball, 1 bonus) led by 11 circle, 4 hexagon, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Kinetic palette, duel ambient, spark rail effects, and 8 independently moving targets; Strategy: manage bumper loops and overload windows, then preserve a clean lower release.
- **KM-08 — Ferris Wheel** (Intermediate · light density) — Premise: Rotate a reward wheel slowly enough that players can choose a carriage and predict its release side; Geometry/materials: 17 pieces (3 multiball, 6 standard, 3 bumper, 1 bonus, 4 solid) led by 9 circle, 4 star, 4 rectangle; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Kinetic palette, home ambient, neon rail effects, and 1 rotating group; Strategy: choose multiball timing before committing the enlarged ball field to a payout lane.
- **KM-09 — Metronome** (Advanced · light density) — Premise: Make a single sweeping arm set the tempo for every route beneath it; Geometry/materials: 14 pieces (1 bumper, 1 solid, 10 standard, 1 multiball, 1 bonus) led by 12 circle, 1 rectangle, 1 star; Gutter intent: the center 3× approach is deliberately contested by 4 lower pieces; Presentation: Kinetic palette, scroll ambient, shock rail effects, and 1 rotating group; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **KM-10 — Neon Factory** (Expert · light density) — Premise: Combine conveyors, rotating valves, and bumper presses into a dense but compartmentalized production line; Geometry/materials: 35 pieces (12 solid, 10 standard, 2 multiball, 4 armored, 1 bonus, 6 bumper) led by 19 rectangle, 14 hexagon, 1 star; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Kinetic palette, city ambient, plasma rail effects, and 2 rotating groups, 2 motion groups; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.

### Atmospheric Artworks

- **AA-01 — Aurora Weave** (Relaxed · light density) — Premise: Weave broad color bands into a playable sky whose paths echo the drifting aurora background; Geometry/materials: 56 pieces (44 standard, 6 armored, 1 multiball, 4 bumper, 1 bonus) led by 40 circle, 13 curved, 2 hexagon; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Atmospheric palette, kaleido ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **AA-02 — Neon Lotus** (Intermediate · light density) — Premise: Construct luminous petals around a quiet reward center with radial bumper accents; Geometry/materials: 34 pieces (24 standard, 8 bumper, 1 bonus, 1 multiball) led by 24 curved, 9 circle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Atmospheric palette, lotus ambient, spark rail effects, and a deliberately static foreground; Strategy: manage bumper loops and overload windows, then preserve a clean lower release.
- **AA-03 — Solar Eclipse** (Intermediate · light density) — Premise: Use a dark armored corona and one radiant center to stage reveal, contrast, and release; Geometry/materials: 44 pieces (4 bumper, 20 armored, 18 standard, 1 bonus, 1 multiball) led by 39 circle, 5 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Atmospheric palette, orbit ambient, neon rail effects, and a deliberately static foreground; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.
- **AA-04 — Koi Stream** (Relaxed · light density) — Premise: Draw two opposing curved fish forms whose open stream channel guides an unhurried descent; Geometry/materials: 33 pieces (4 armored, 24 standard, 4 bumper, 1 bonus) led by 18 circle, 12 curved, 2 hexagon; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Atmospheric palette, pond ambient, shock rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **AA-05 — Firefly Garden** (Relaxed · light density) — Premise: Scatter warm lights in deliberate depth bands so apparent randomness still provides meaningful aim clusters; Geometry/materials: 36 pieces (3 bumper, 29 standard, 2 bonus, 2 solid) led by 32 circle, 2 star, 2 rectangle; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Atmospheric palette, garden ambient, plasma rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **AA-06 — Porcelain Moon** (Relaxed · light density) — Premise: Shape a pale blue crescent with ceramic tones and abundant dark negative space; Geometry/materials: 43 pieces (4 armored, 20 standard, 17 solid, 1 bonus, 1 multiball) led by 25 circle, 17 curved, 1 star; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Atmospheric palette, moon ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **AA-07 — City Rain** (Intermediate · light density) — Premise: Layer cool vertical rain with a low skyline, allowing falling motion and architecture to reinforce each other; Geometry/materials: 46 pieces (3 solid, 38 standard, 3 armored, 1 multiball, 1 bonus) led by 45 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Atmospheric palette, rain ambient, spark rail effects, and 36 independently moving targets; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **AA-08 — Sunset Bridge** (Intermediate · light density) — Premise: Span the board with a warm arch whose openings create distinct above-bridge and below-bridge play; Geometry/materials: 35 pieces (4 armored, 23 standard, 6 solid, 1 multiball, 1 bonus) led by 21 circle, 11 curved, 2 rectangle; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Atmospheric palette, sunset ambient, neon rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **AA-09 — Deep Space Constellation** (Intermediate · light density) — Premise: Connect sparse star targets into a constellation while keeping the actual scoring route non-linear; Geometry/materials: 27 pieces (13 solid, 12 standard, 1 multiball, 1 bonus) led by 14 star, 13 rectangle; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Atmospheric palette, stars ambient, shock rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **AA-10 — Cathedral Glass** (Advanced · light density) — Premise: Use a symmetrical stained-glass mosaic whose material colors and shapes identify distinct scoring chapels; Geometry/materials: 35 pieces (15 solid, 9 armored, 7 standard, 2 multiball, 2 bonus) led by 15 hexagon, 8 curved, 6 square; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Atmospheric palette, prism ambient, plasma rail effects, and a deliberately static foreground; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.

### Precision & Strategy

- **PS-01 — Perfect Five** (Advanced · light density) — Premise: Clear a five-armor spine with one beam, then use four separate side targets to complete five successful releases, because one beam clearing five targets advances the streak only once; Geometry/materials: 19 pieces (5 armored, 11 standard, 1 bumper, 1 multiball, 1 bonus) led by 16 circle, 2 square, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Precision palette, trace ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **PS-02 — Armor Tax** (Advanced · light density) — Premise: Place durable toll gates on every safe route while leaving a riskier bypass for confident players; Geometry/materials: 30 pieces (11 armored, 16 standard, 1 multiball, 1 bumper, 1 bonus) led by 24 rectangle, 5 circle, 1 star; Gutter intent: 2-1-3-1-2 custom payouts place 3× in center; Presentation: Precision palette, cipher ambient, spark rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **PS-03 — Bumper Heat** (Advanced · light density) — Premise: Make bumper overload a tactical objective while ensuring the tenth contact changes the route rather than only the score; Geometry/materials: 29 pieces (3 bumper, 4 solid, 1 multiball, 18 standard, 2 armored, 1 bonus) led by 21 circle, 4 curved, 2 hexagon; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Precision palette, signal ambient, neon rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **PS-04 — Multiball Arbitration** (Expert · light density) — Premise: Force a choice among differently timed multiball releases instead of rewarding indiscriminate collection; Geometry/materials: 12 pieces (5 solid, 4 multiball, 1 bonus, 2 bumper) led by 6 circle, 5 rectangle, 1 star; Gutter intent: 1-3-2-3-1 custom payouts place 3× in left-center and right-center; Presentation: Precision palette, duel ambient, shock rail effects, and 4 independently moving targets; Strategy: choose multiball timing before committing the enlarged ball field to a payout lane.
- **PS-05 — Timed Dropper** (Advanced · light density) — Premise: Use a moving lower gate to convert aim into a combined timing-and-trajectory challenge; Geometry/materials: 49 pieces (6 armored, 40 standard, 1 bonus, 1 multiball, 1 bumper) led by 47 circle, 1 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Precision palette, scroll ambient, plasma rail effects, and 1 independently moving target; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **PS-06 — Crossfire** (Advanced · light density) — Premise: Cross two diagonal target lines so the safest clear and highest-value clear demand different angles; Geometry/materials: 27 pieces (6 armored, 18 standard, 1 bumper, 1 multiball, 1 bonus) led by 25 circle, 2 star; Gutter intent: 2-1-3-1-2 custom payouts place 3× in center; Presentation: Precision palette, grid ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **PS-07 — Risk Ladder** (Advanced · light density) — Premise: Escalate material value and gutter danger together as the player advances down a side ladder; Geometry/materials: 20 pieces (5 solid, 6 standard, 5 armored, 2 bumper, 1 multiball, 1 bonus) led by 11 circle, 7 rectangle, 2 star; Gutter intent: 3-1-2-1-1 custom payouts place 3× in far-left; Presentation: Precision palette, root ambient, spark rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **PS-08 — Sequence Gates** (Expert · light density) — Premise: Encode a four-step route in a compact cue, then make the ball bank through matching gate openings before the pattern clears away; Geometry/materials: 37 pieces (10 standard, 22 armored, 3 bumper, 1 multiball, 1 bonus) led by 28 rectangle, 5 circle, 2 star; Gutter intent: the center 3× approach is lightly guarded by 3 lower pieces; Presentation: Precision palette, matrix ambient, neon rail effects, and a deliberately static foreground; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.
- **PS-09 — Gatekeeper** (Expert · light density) — Premise: Guard the center with a moving armored door whose cycle is visible but unforgiving; Geometry/materials: 17 pieces (2 solid, 7 armored, 6 standard, 1 multiball, 1 bonus) led by 13 circle, 3 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Precision palette, beacon ambient, shock rail effects, and 1 independently moving target; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.
- **PS-10 — Five-Ball Plan** (Expert · light density) — Premise: Divide the board into five complementary shot objectives intended to be solved across the full starting-ball budget; Geometry/materials: 45 pieces (10 armored, 32 standard, 1 multiball, 1 bumper, 1 bonus) led by 41 circle, 2 star, 1 square; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Precision palette, stack ambient, plasma rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.

### Cascades & Calm

- **CC-01 — Bamboo Rain** (Relaxed · light density) — Premise: Let small drops cross through staggered openings in tilted bamboo stems before a gentle lower recovery sequence; Geometry/materials: 43 pieces (16 solid, 25 standard, 1 bonus, 1 bumper) led by 26 circle, 16 rectangle, 1 star; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Calm palette, rain ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **CC-02 — Zen Garden** (Relaxed · light density) — Premise: Mix destructible rake marks with spaced solid curves so the garden opens into a calm central drain over repeated shots; Geometry/materials: 30 pieces (22 standard, 6 solid, 1 armored, 1 bonus) led by 16 circle, 14 curved; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Calm palette, garden ambient, spark rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **CC-03 — Waterfall Steps** (Beginner · light density) — Premise: Guide the ball through offset ledges that produce a predictable stair-step cascade; Geometry/materials: 16 pieces (8 solid, 6 standard, 1 multiball, 1 bonus) led by 8 rectangle, 7 circle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Calm palette, pond ambient, neon rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **CC-04 — Snowfall** (Relaxed · light density) — Premise: Arrange sparse pale flakes in depth layers with no harsh traps or sudden multiball bursts; Geometry/materials: 38 pieces (3 armored, 34 standard, 1 bonus) led by 30 circle, 8 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Calm palette, stars ambient, shock rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **CC-05 — Wind Chimes** (Relaxed · light density) — Premise: Suspend staggered moving bars with exposed clappers, a lively center strike, and enough lower resonance to sustain the full descent; Geometry/materials: 21 pieces (2 armored, 12 standard, 2 solid, 3 bumper, 1 multiball, 1 bonus) led by 12 circle, 7 rectangle, 1 hexagon; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Calm palette, lotus ambient, plasma rail effects, and 7 independently moving targets; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **CC-06 — Petal Drift** (Relaxed · light density) — Premise: Move a few colorful petal targets slowly across open lanes to create serene timing choices; Geometry/materials: 23 pieces (4 armored, 14 standard, 3 bumper, 1 bonus, 1 multiball) led by 8 star, 8 pentagon, 6 circle; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Calm palette, kaleido ambient, ripple rail effects, and 16 independently moving targets; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **CC-07 — Slow Spiral** (Intermediate · light density) — Premise: Use a widely spaced spiral with one quiet bumper transition instead of a dense whirlpool; Geometry/materials: 38 pieces (33 standard, 1 bumper, 1 multiball, 1 bonus, 2 armored) led by 37 circle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Calm palette, tunnel ambient, spark rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **CC-08 — River Stones** (Relaxed · light density) — Premise: Place irregular rounded stones as deliberate stepping points across an open current; Geometry/materials: 19 pieces (3 armored, 13 standard, 2 bumper, 1 bonus) led by 18 circle, 1 star; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Calm palette, pond ambient, neon rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **CC-09 — Lantern Descent** (Beginner · light density) — Premise: Alternate glowing lanterns down the board so their zigzag sequence naturally teaches bank direction; Geometry/materials: 15 pieces (6 standard, 3 armored, 4 solid, 1 multiball, 1 bonus) led by 8 star, 7 rectangle; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Calm palette, moon ambient, shock rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **CC-10 — Soft Landing** (Relaxed · light density) — Premise: Finish a gentle funnel with absorbent lower shelves that settle trajectories before the wells; Geometry/materials: 29 pieces (24 standard, 4 solid, 1 bonus) led by 24 circle, 4 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Calm palette, mandala ambient, plasma rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.

### Familiar Icons

- **FI-01 — Smiley Drop** (Beginner · light density) — Premise: Turn a friendly face into a functional board whose eyes kick and whose smile releases the ball; Geometry/materials: 40 pieces (4 armored, 32 standard, 2 bumper, 1 multiball, 1 bonus) led by 39 circle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Icons palette, home ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **FI-02 — Heartline** (Beginner · light density) — Premise: Draw a clean heart loop around two multiball lobes and a heartbeat bumper that breaks symmetry on every descent; Geometry/materials: 38 pieces (4 armored, 30 standard, 2 multiball, 1 bumper, 1 bonus) led by 37 circle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Icons palette, lotus ambient, spark rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **FI-03 — Rocket Launch** (Intermediate · light density) — Premise: Use an upright rocket silhouette with a multiball ignition stage and bumper exhaust; Geometry/materials: 39 pieces (4 armored, 30 standard, 3 bumper, 1 multiball, 1 bonus) led by 27 circle, 10 triangle, 2 star; Gutter intent: the center 3× approach is deliberately contested by 4 lower pieces; Presentation: Icons palette, outrun ambient, neon rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **FI-04 — Pixel Visitor** (Intermediate · light density) — Premise: Translate an arcade alien into a square grid with readable gaps and material-coded features; Geometry/materials: 56 pieces (48 standard, 4 armored, 2 bumper, 1 multiball, 1 bonus) led by 54 square, 2 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Icons palette, invade ambient, shock rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **FI-05 — Crown Jewels** (Intermediate · medium density) — Premise: Make a crown outline support three distinct jewel rewards and several gutter choices; Geometry/materials: 64 pieces (12 armored, 47 standard, 2 multiball, 1 bonus, 2 bumper) led by 52 circle, 9 square, 3 star; Gutter intent: the narrow center 3× approach is intentionally open; Presentation: Icons palette, tokens ambient, plasma rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **FI-06 — Music Note** (Beginner · light density) — Premise: Build a large playable note with a tonal stem, beam, and bouncing note head; Geometry/materials: 23 pieces (2 solid, 3 bumper, 16 standard, 1 multiball, 1 bonus) led by 20 circle, 2 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 3 lower pieces; Presentation: Icons palette, tubes ambient, ripple rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **FI-07 — Lightning Bolt** (Intermediate · light density) — Premise: Use an angular bolt to create alternating banks down a fast central descent; Geometry/materials: 35 pieces (5 armored, 25 standard, 3 bumper, 1 multiball, 1 bonus) led by 30 circle, 3 triangle, 2 star; Gutter intent: the center 3× approach is deliberately contested by 4 lower pieces; Presentation: Icons palette, signal ambient, spark rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **FI-08 — Tree of Light** (Intermediate · light density) — Premise: Grow exposed scoring leaves around outward-shedding branches, then use knot bumpers to carry misses into the lower canopy; Geometry/materials: 25 pieces (7 solid, 1 multiball, 12 standard, 1 bonus, 2 armored, 2 bumper) led by 17 circle, 7 rectangle, 1 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Icons palette, garden ambient, neon rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **FI-09 — Butterfly** (Intermediate · light density) — Premise: Separate two colorful wings around a destructible body so their distinct rebound personalities stay physically readable; Geometry/materials: 47 pieces (2 bumper, 35 standard, 1 multiball, 7 armored, 2 bonus) led by 37 circle, 4 star, 4 rectangle; Gutter intent: the center 3× approach is deliberately contested by 4 lower pieces; Presentation: Icons palette, kaleido ambient, shock rail effects, and a deliberately static foreground; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **FI-10 — Labyrinth Key** (Advanced · light density) — Premise: Offset the scoring teeth from a solid key shaft so recognition, bank shots, and a real maze lane coexist; Geometry/materials: 30 pieces (3 armored, 19 standard, 1 multiball, 4 solid, 2 bumper, 1 bonus) led by 24 circle, 4 rectangle, 2 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Icons palette, cipher ambient, plasma rail effects, and a deliberately static foreground; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.

### Expert Experiments

- **EE-01 — Phase Serpent** (Expert · light density) — Premise: Use phase walls and a moving serpentine chain to make edge exits part of the intended route; Geometry/materials: 35 pieces (5 bumper, 27 standard, 2 multiball, 1 bonus) led by 29 circle, 5 hexagon, 1 star; Gutter intent: 3-1-2-1-3 custom payouts place 3× in far-left and far-right; Presentation: Experimental palette, glitch ambient, ripple rail effects, and 1 motion group, phase walls; Strategy: include edge re-entry in the route plan instead of treating side exits as misses.
- **EE-02 — Black Hole** (Expert · light density) — Premise: Combine rotating rings, a dark center, and outward jackpot wells to challenge normal center-seeking instincts; Geometry/materials: 31 pieces (4 bumper, 14 armored, 3 multiball, 9 standard, 1 bonus) led by 28 circle, 3 star; Gutter intent: 3-2-1-2-3 custom payouts place 3× in far-left and far-right; Presentation: Experimental palette, vortex ambient, spark rail effects, and 2 rotating groups, phase walls; Strategy: choose multiball timing before committing the enlarged ball field to a payout lane.
- **EE-03 — Quantum Split** (Expert · light density) — Premise: Continuously change a central splitter so two apparently identical entries resolve into different outcomes; Geometry/materials: 32 pieces (23 standard, 5 armored, 1 bumper, 2 multiball, 1 bonus) led by 29 circle, 1 triangle, 1 star; Gutter intent: 1-3-2-3-1 custom payouts place 3× in left-center and right-center; Presentation: Experimental palette, fractal ambient, neon rail effects, and 1 independently moving target; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **EE-04 — Moving Target** (Expert · light density) — Premise: Make valuable targets slide on separate safe tracks that can be predicted but not hit by a static solution; Geometry/materials: 51 pieces (2 multiball, 3 bonus, 5 armored, 41 standard) led by 48 circle, 3 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Experimental palette, trace ambient, shock rail effects, and 5 independently moving targets; Strategy: read the upper motif, collect the best-value targets, and protect the intended final descent.
- **EE-05 — Collapse Order** (Expert · light density) — Premise: Stack armored ledges so removing an early rebound surface can trade a rich multi-row traversal for a faster drop; Geometry/materials: 45 pieces (30 armored, 12 standard, 2 multiball, 1 bonus) led by 24 circle, 18 square, 3 star; Gutter intent: the center 3× approach is lightly guarded by 2 lower pieces; Presentation: Experimental palette, stack ambient, plasma rail effects, and a deliberately static foreground; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.
- **EE-06 — Mirror Maze** (Expert · light density) — Premise: Build a phase-enabled symmetric maze whose two halves look equivalent but use different material responses; Geometry/materials: 23 pieces (8 solid, 8 armored, 4 standard, 2 multiball, 1 bonus) led by 16 rectangle, 6 circle, 1 star; Gutter intent: 2-1-3-1-2 custom payouts place 3× in center; Presentation: Experimental palette, matrix ambient, ripple rail effects, and phase walls; Strategy: use charge or Perfect Beam to reduce the armor tax before chasing the richest exit.
- **EE-07 — Overload Cathedral** (Master · light density) — Premise: Turn tall bumper architecture into a deliberate overload engine with relief exits after each tenth hit; Geometry/materials: 53 pieces (20 standard, 20 bumper, 1 multiball, 11 armored, 1 bonus) led by 31 circle, 14 hexagon, 8 star; Gutter intent: 1-3-2-3-1 custom payouts place 3× in left-center and right-center; Presentation: Experimental palette, tunnel ambient, spark rail effects, and a deliberately static foreground; Strategy: manage bumper loops and overload windows, then preserve a clean lower release.
- **EE-08 — Chromatic Storm** (Master · light density) — Premise: Coordinate many colors and motion channels without sacrificing target separation or readable reward hierarchy; Geometry/materials: 57 pieces (4 multiball, 42 standard, 5 armored, 5 bumper, 1 bonus) led by 15 star, 14 circle, 14 triangle; Gutter intent: the center 3× approach is lightly guarded by 3 lower pieces; Presentation: Experimental palette, acid ambient, neon rail effects, and 8 independently moving targets; Strategy: choose multiball timing before committing the enlarged ball field to a payout lane.
- **EE-09 — Impossible Looking** (Expert · light density) — Premise: Present a seemingly sealed reward cage whose slow moving seam reveals a fair, repeatable solution; Geometry/materials: 20 pieces (6 solid, 3 armored, 9 standard, 1 multiball, 1 bonus) led by 12 circle, 6 rectangle, 2 star; Gutter intent: the center 3× approach is lightly guarded by 1 lower piece; Presentation: Experimental palette, cipher ambient, shock rail effects, and 1 independently moving target; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.
- **EE-10 — Grand Machine** (Master · light density) — Premise: Conclude the catalog with a staged mechanism combining timing, solids, bumpers, armor, multiball, and gutter routing; Geometry/materials: 46 pieces (7 armored, 24 standard, 6 solid, 6 bumper, 2 multiball, 1 bonus) led by 35 circle, 6 rectangle, 4 hexagon; Gutter intent: 2-1-3-1-2 custom payouts place 3× in center; Presentation: Experimental palette, orbit ambient, plasma rail effects, and 1 rotating group, 2 independently moving targets; Strategy: read the absorbent solid surfaces first and aim for the rebound sequence they imply.

<!-- END GENERATED LEVEL CATALOG -->
