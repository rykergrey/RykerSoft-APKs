# Storytime Updates

## v1.7.0 — Android, Windows and Linux

- Read any saved story in one **reader**: chapters, find, reading settings, and a Your place button that is always one tap away. Adventures, parties, Story Table saves and studio manuscripts open in it with their recordings
- Play any story in the **cinema**: one paragraph at a time over a night sky, with words lighting as they are spoken
- A calmer page: each speaker is named like a cue in a script, your place glows on the edge of the page, and the player sits in one deck whose play button shows how far the paragraph has played
- **Voicehouse** is now the one narration engine: there is nothing to choose
- Choose a voice from a page of voices with portraits, details and a preview button, instead of a drop-down
- Give a character a new voice: pick one, let Voicehouse make one, or compare three designed options as they are made
- Add a **recording effect** to a voice or a single paragraph: Telephone, Radio, Cavern or Small room, kept in exported audio
- Pick a voice's **delivery**, such as angry or whispering, separately from its effect

## v1.6.0 — Android, Windows and Linux

- Redesign **Settings**: categories in a side rail, each page a set of clear sections, compact engine and model choices, and one-line provider keys
- Redesign the **World library** for desktop: the voice-actor list fills the page, search and filters share one toolbar, and the casting tools sit in a side column (folded above the list on phones)
- Rework **Home** on wide screens so new modes and your saved stories are both in view, with tighter mode and multiplayer cards
- Make Bedtime's story and paragraph menus easier to read, with named groups, and centre the reader and its controls on wide screens
- Turn a paused Bedtime story into an **audiobook editor**: edit paragraphs in place, give a paragraph its own voice, re-narrate, and export the story as one chaptered **MP3**
- Plan, draft and review each Bedtime chapter for stronger continuity, and let casting draw on unused ElevenLabs voices
- Add **Voicehouse** as a narration provider, with optional voice actors supplied from Voicehouse
- Fix screens whose top padding was lost on some layouts

## v1.5.3 — Android

- Add a unique **match link** for every online room. **Copy link** copies it, and **Invite** opens Android's share sheet so you can send it through any messaging app. Tapping the link opens Storytime straight to that room; friends without the app get a page with the room code and a download link
- Paste a match link into **Join with a code** to fill in the room code

## v1.5.2 — Android

- Redesign the Story Table reading screen: the visualizer becomes an orb framing the speaker's name, and the passage sits on its own card in larger type, with the sentence being read highlighted and followed automatically

## v1.5.1 — Android

- Fix Story Table screens that could not scroll on the table phone and on players' phones
- Keep the Story Table room code on one line so it is readable from across the table
- Always give players at least 20 seconds to send ideas for each part, even when a part is short
- Clear the idea box as soon as you send, so a quickly typed next idea is never wiped; a refused idea is put back
- Fix a crash when opening an online Anonymous Author or Pass the Pen game before the room had loaded

## v1.5.0 — Android

- Add **Story Table**, a multiplayer mode for one phone in the middle of the table. It shows a room code, reads each part aloud over a visualizer, and shows only the passage being read. Players join from their own phones (also mid-story), add premise ideas before the start, and send, edit or delete ideas for the next part until a countdown locks them. Every idea shapes the next part, which is written before the current one finishes. Players can read the whole story ahead on the Story tab.
- Add **Bedtime stories**: an endlessly unfolding audiobook with library performers, saved narration, a generation timer, motion standby and Android background playback
- Add a voice mixer with per-character volume

## v1.4.0 — Android

- Separate Solo and Multiplayer on Home, with direct **Write a story** and **Play an adventure** entries and **One device** / **Online** choices for each multiplayer mode
- Fix Firebase room creation, full eight-player writing-room starts, and response retries after a lost connection
- Add a notification bell with direct match links, pending-turn and host-action alerts that clear when resolved, and expiring chapter/activity notices
- Add Android push notifications and account-based room recovery across devices, backed by trusted notification functions and hourly cleanup of expired rooms
- Add update checks in the notification window and verified APK downloads that open Android's installer
- Improve Android Back behavior across dialogs, editors, setup, and saved stories, with an exit confirmation on Home
- Improve narration controls and unavailable-device-voice feedback, add a manuscript listening playlist, and make the mobile scene board easier to rearrange

This release updates Android only; the published Windows build remains v1.3.0. Online play still requires the host to continue the game, Android push requires notification permission, and Android controls final update installation approval.

## v1.3.0

- Add title-first scene insertion and full draft expansion on the board
- Add selective Pro Quick Start with source notes, character merging, and automatic recovery versions
- Add a solo-only floating writing assistant with screen-aware context and saved, automatically named conversations
- Add an idea inbox, browser dictation, editable manuscript, focus writing, and next-session notes
- Add character, viewpoint, story-thread, location, and chronology views plus linked continuity checks
- Add durable saved versions, alternative scene drafts, and passage-linked read-through revision notes
- Preserve the existing release signer and account, entitlement, and story-backup compatibility

## v1.2.0

- Add an offline story studio with movable scene cards, expanded drafts, character details, and production notes
- Add batch character editing and full-name renaming with before/after review and undo
- Add a story-scoped custodian with local search and commands, plus optional conversational editing
- Simplify Home, mode selection, adventure setup, game rules, and reader controls
- Add autosave conflict recovery, separate-copy saving, character draft recovery, and editable backups

- Fix Android Pro Google sign-in error 28444 by using the OAuth client registered with Storytime's package and release certificate
- Register Storytime's external web client in the RykerSoft Hub Google provider's safelist
- Show Google's underlying credential error when sign-in fails and a clear message when it is cancelled
- Preserve the separate RykerSoft Pro session and package-specific entitlement checks

## v1.1.0

- Add Director and Listener roles to online Story Party rooms
- Let one listener phone become the leased car speaker for the whole room
- Queue narration section by section, cache audio on the speaker device, and share playlist progress without duplicating TTS requests
- Automatically release or recover the speaker role after disconnects, with pause, resume, and retry controls
- Keep listeners synchronized with story text and choices without requiring them to vote or delaying the directors
- Harden Firestore rules so listeners cannot submit choice ballots and only the current listener lease can publish playback progress

## v1.0.2

- Restore a complete, source-backed release after an unreleased direct-device build advanced the Android version
- Recover and verify the original Android release signer so existing installations update in place
- Rebuild synchronized Android and Windows artifacts from the current stable source

## v1.0.0

- First RykerSoft Application Manager release for Android and Windows
- Separate the no-key standard experience from clearly marked Pro-assisted creation
- Add Google-account-bound Storytime entitlement at `com.superstorycraft.ing`
- Deliver Gemini, GPT, Kimi, and ElevenLabs credentials only from the exact package-scoped RykerSoft provider record
- Keep RykerSoft-managed credentials in memory and clear them on sign-out, revocation, missing entitlement, or refresh failure
- Replace packaged Windows Firebase OAuth code exchange with the temporary localhost Firebase browser helper
- Preserve optional personal provider-key overrides and existing local data
- Preserve app-owned Firebase online rooms, private UID authorization, and user-chosen public game names
