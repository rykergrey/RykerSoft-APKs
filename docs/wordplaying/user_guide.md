# WordPlay.ing User Guide

Find words on a letter grid before time runs out — alone, pass-and-play, or against the community.

## Table of Contents

- [1. How to play](#1-how-to-play)
- [2. Match setup & modifiers](#2-match-setup--modifiers)
- [3. Community challenges](#3-community-challenges)
- [4. Local pass & play](#4-local-pass--play)
- [5. Live multiplayer](#5-live-multiplayer)
- [6. Accounts, seasons & leaderboards](#6-accounts-seasons--leaderboards)
- [7. Audio Lab & word gallery](#7-audio-lab--word-gallery)
- [8. Daily Board & practice](#8-daily-board--practice)
- [9. Wordbook, awards & progression](#9-wordbook-awards--progression)
- [10. Comfort & accessibility](#10-comfort--accessibility)
- [11. Windows desktop](#11-windows-desktop)

## 1. How to play

- From the main menu, start a new match.
- Drag across adjacent letters (including diagonals) to build a word, then release to submit.
- Words must be at least 3 letters and in the dictionary. The same word only scores once per round.
- A **Q** tile counts as **QU**. Longer words score more; some modifiers add boosts or combo multipliers.
- The round ends when the timer hits zero (or earlier under Strict / Super Strict rules).
- Follow the visible selection path and submission message to see whether a word scored, was too short, was already used, or was not in the dictionary.
- Keyboard users can focus tiles and build a connected path without a pointer.

## 2. Match setup & modifiers

- Select **Start New Match** to open **Match Options**, then choose **4×4** or **5×5**, timer length, and sound on/off.
- Enable modifiers (Gravity, Blind Mode, Combo Meter, Reroll, First Claim, Color Bonus, and others) or pick a preset such as Classic or Zenith of Chaos.
- **Color Bonus** adds three each of red, yellow, and blue tiles on 4×4 boards, or four each on 5×5 boards. A word using three tiles of one color earns +25% (at least 1 point), while four earns +50% (at least 2); different qualifying colors stack additively.
- **Word Grid** changes the objective: tap one tile and then any destination tile to swap them. There is no swipe-to-submit play. When time expires, every valid contiguous word of three or more tiles is scored left-to-right across rows and top-to-bottom down columns, with an ordered board reveal. Word Grid can be combined with Letter Boost, Letter Values, and Color Bonus; opposing modifiers are disabled while it is active.
- **Saved Modes** opens expanded. After changing any default match option, use **Save Mode** beside **Start Match** to name and save the setup.
- Load or share saved modes, import them from an image, or randomize a loadout.
- Open **About** for rules and modifier descriptions; **Changelog** for release notes.

## 3. Community challenges

- Sign in before starting a compatible solo game if you may want to post it. WordPlay.ing transparently reserves an eligible trusted draft before revealing the tiles; only that pre-reserved result can become a public challenge or best-of-three series.
- If the trusted draft cannot be reserved (for example, while offline), solo play still starts locally, but that completed board cannot be published afterward.
- A registered account is required before a community challenge board is shown.
- On the Matches tab, open **Playable** challenges for this week. Opening the board secures your one competitive attempt to that account.
- Your first result is recorded automatically. You may retry the board afterward for practice, but practice results never replace the competitive score or affect standings.
- Check **My Standings** for winning / outranked status and tap players to see their word lists.
- Challenges reset on a Monday weekly cadence with the season.

## 4. Local pass & play

- In **Match Options**, enable **Local Pass & Play**.
- Each player takes a turn on the same board seed; use the swap screen and initials tumbler between turns.
- Finish the match when everyone has played.

## 5. Live multiplayer

- Enable real-time multiplayer in **Match Options**, or use **Join Live Match**.
- Host creates a short room code; guests enter the code and ready up in the lobby.
- After countdown, everyone plays the same board; results are reconciled (important for First Claim).
- Only live-safe modifiers are available in this mode.

## 6. Accounts, seasons & leaderboards

- Select **Login**, choose **Continue with Google**, then create a separate public player name to use Daily Boards, Daily Missions, cloud scores, and community challenges.
- WordPlay.ing never publishes your Google name, Gmail address, email local-part, or provider profile. Only the player name you explicitly choose appears in leaderboards and multiplayer.
- Player names are 3–20 characters, are reserved case-insensitively, and may contain letters, numbers, spaces, periods, underscores, and hyphens.
- Reserved service names and abusive names are rejected. Player names are choose-once in the app; RykerSoft administrators handle moderation or account-recovery corrections against the same Firebase UID so a name cannot be reassigned by another client.
- While signed in, Wordbook entries, career totals, personal bests, Daily Mission progress, awards, and unlocked tile themes are stored with the account and load on other devices.
- Guest mode works for ordinary solo and local play without competitive cloud features.
- A competitive attempt remains bound to the account that started it. Switching accounts during a round does not transfer or reset the attempt.
- Public Daily, challenge, and leaderboard scores are recalculated by Firebase from the reserved board and submitted tile paths (or a Word Grid final arrangement); the app cannot write ranked scores directly.
- Browse **Today** and **This Week** leaderboards; open the season report for the previous week’s wrap-up.

### Migrating an older username account

- On the account screen, select **I have an older username account** and enter the existing WordPlay.ing username and password.
- After the legacy account is authenticated, select **Link Google and continue** and choose the Google account that should own future sign-ins.
- Linking happens while the original Firebase user is active, so its UID, Wordbook, progression, awards, and competitive history remain attached to the same account.
- If Google is already connected to a different WordPlay.ing account, the app stops without merging or overwriting data. Use the matching Google account or contact support before attempting a merge.
- The migration password remains hidden by default. Use the in-field **Show password** or **Hide password** button when needed.

## 7. Audio Lab & word gallery

- Mute from settings, or open **Audio Lab** to tweak melodies and sequencers.
- After games, open the **Word Gallery** to review found words and look up definitions.

## 8. Daily Board & practice

- Sign in, then select **Daily Board** to play the same deterministic board and ruleset as everyone else that day.
- The board stays hidden until Firebase secures the day’s one competitive attempt to your account.
- Your first result is recorded automatically, including a zero score. Logging out, clearing local data, switching devices, or signing into another account does not create another ranked attempt.
- Later attempts are clearly marked practice and cannot replace the trusted Daily leaderboard result; the app also excludes them from Daily Missions and streak progress.
- Complete the three rotating Daily Missions on the secured run and play on consecutive days to build a Daily Board streak.
- From eligible static-board results, retry the same letters and review high-value missed words.

## 9. Wordbook, awards & progression

- Every word found in a completed signed-in round is recorded in the account’s **My Wordbook** and synchronized through Firebase.
- Open the book icon from the menu to search collected words and review collection totals.
- The **Awards** tab tracks nine achievements. Career totals, Daily Board streaks, and personal bests update as you play.
- Completed matches use a unique receipt, so retrying a result upload does not duplicate career or Wordbook progress.
- Completing achievements unlocks additional tile themes, which can be selected in **Settings**.

## 10. Comfort & accessibility

- Select **Settings** beside Login or Logout on the home screen. Player Settings includes tile themes, effects volume, optional haptics, reduced motion, high contrast, and larger tile letters.
- The guided first-run tutorial introduces selection, scoring, Daily Board play, progression, and comfort options.
- Dialogs manage keyboard focus, tiles expose accessible labels, and live announcements describe the active selection.

## 11. Windows desktop

- Run the portable WordPlay.ing executable; no installer is required.
- Google sign-in opens from the packaged app's private loopback origin; no game server is exposed to the network.
- Use the custom title bar to minimize, maximize, or close the app.
- Windows may show a publisher warning because the portable desktop executable is not code-signed.
