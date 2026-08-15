# WordPlay.ing

Boggle-style word game for Android with solo play, local pass-and-play, community challenges, Firebase live matches, weekly seasons, and a built-in Web Audio synth. Find words on a classic letter grid, chase combos and modifiers, then compete on shared boards.

## Key Features
- **Classic boards**: 4×4 or 5×5 dice grids with TWL06 dictionary validation (min 3 letters; Q expands to QU).
- **Modifiers & presets**: Strict modes, Gravity, Blind Mode, Combo Meter, Reroll, First Claim, Sabotage, and Word Grid's tile-swapping arrangement puzzle — plus Classic / Gravity Well / Ghost Grid / Zenith of Chaos presets.
- **Community challenges**: Start a compatible signed-in solo round to reserve a trusted publishable board, then post its validated result or a direct-link best-of-three series. Firebase recalculates scores and owns immutable per-board and combined standings; offline/local-only boards cannot be published after reveal.
- **Local pass & play**: Hand the device around with shared seeds, initials tumbler, and colored local players.
- **Live multiplayer**: Host or join a 4-character room code; lobby ready → countdown → simultaneous play with result reconciliation.
- **Seasons & leaderboards**: Today / This Week boards, season recaps, and lifetime profile stats via Firebase.
- **Private Google accounts & cloud progression**: Google sign-in keeps Wordbook entries, career totals, personal bests, Daily Missions, awards, and unlocked tile themes available across devices. A separate, user-chosen player name is the only identity shown publicly. Guest play remains available for ordinary solo games.
- **Audio Lab**: Synthesized melodies, success chords by word length, mute toggle, and an in-app sequencer workstation.
- **Word gallery**: Post-game collection with Free Dictionary API definitions.
- **Daily mastery**: One shared seeded board each day, comparable rankings, account-isolated daily skill goals, personal bests, and static-board missed-word analysis. Only the first secured run is competitive; retries are practice-only.
- **Persistent progression**: Every discovered word joins a searchable account Wordbook; career totals and nine achievements unlock new tile themes. Match receipts prevent the same completed round from being counted twice.
- **Responsive feedback**: Connected selection paths, precise submission results, scoring callouts, adjustable effects, and optional haptics.
- **Accessible play**: Guided onboarding, keyboard tile controls, reduced motion, high contrast, larger letters, focus-managed dialogs, and live selection announcements.
- **Focused setup**: Match Options contains match rules and saved modes, while a dedicated Player Settings screen contains theme, sound, haptics, motion, contrast, and letter-size preferences.
- **Reliable match completion**: Timer expiry is fail-safe even when a tile is selected, Android audio is unavailable, or post-match board analysis is still running.

## Platforms
- **Android** — Capacitor release APK for the RykerSoft hub (`com.rykersoft.wordplaying`)
- **Web** — Vite + React
- **Desktop** — Electron packaging from the same codebase
