Local workspace for researching YouTube videos, articles, and Reddit posts. Organize work into projects, keep notes and bookmarks on each item, and run chat or analysis against the material you collected. No YouTube account login — API keys go in Settings.

## Features
- Project-based workspace: create, search, sort, rename, export, and delete projects
- Import YouTube, article, and Reddit URLs (single links or mixed batches)
- Android share-target: share a link into INFORMANT to start or fill a project
- Per-item tabs for notes, bookmarks, transcripts, comments, chat, and custom AI actions
- Quote bookmarks in articles/Reddit; timestamp bookmarks on videos with jump-to
- Fetch and search YouTube captions; click a line to seek the player
- Clickable timestamp citations in chat and AI outputs (jump back into the video)
- Pull YouTube or Reddit comment threads, search/filter, and favorite comments
- Project-wide chat and AI actions across selected items, with a Texts tab for context
- One floating YouTube player (inline, expanded, or PiP) with saved playback position
- From expanded view, PiP fullscreenes the tabs so you can keep reading while the mini-player plays
- Compact text-to-speech mode on any tab including AI action results (ElevenLabs, offline Piper TTS, or System TTS) with stable section fencing, prev/next, and long-press clip options
- Segmented TTS generation with caching — first section plays quickly; unchanged text replays from cache; status colors stay applied while TTS mode is open
- Export/import portable RykerSoft project JSON with selectable resources and tabs, normalized for cross-app use while preserving INFORMANT restoration data
- Save a single video/article as its own INFORMANT JSON (pick which tabs to include) and import it into any other project
- On Android, Save opens the system Downloads / Save As dialog; Share remains available for Drive or messaging
- External search from highlighted text (Perplexity, Google, ChatGPT, and more)

## Content & tools
Open a card for tabs that match the content type:
- **YouTube** — Info, Comments, Transcript, Notes, Bookmarks, Chat / AI actions
- **Articles** — Reader, Notes, Bookmarks, Chat / AI actions
- **Reddit** — Post reader, Comments, Notes, Bookmarks, Chat / AI actions

Built-in AI actions include summary, analysis, key takeaways, and lists. You can add your own. Outputs can include mind maps when relevant.

## PRO Features
Items marked * require a RykerSoft pro unlock in App Manager, followed by Google sign-in to the same RykerSoft account inside this app.

* **AI chat** — Ask questions about the current video, article, or selected project items
* **AI actions** — Run summary, analysis, key takeaways, custom prompts, and related tools
* **Synced provider keys** — Gemini / Groq (and ElevenLabs when provided) pulled from the hub after unlock

## Platforms
- **Android** — Capacitor build; IndexedDB on device; native share import; System TTS via Android TextToSpeech
- **Desktop** — Windows portable / local server; projects as JSON; artifacts in SQLite (`informant.db`)

## Requirements
Transcripts, metadata, comments, notes, bookmarks, portable project exchange, and System/Piper TTS work without cloud AI. AI chat and AI actions require the RykerSoft pro unlock (unlock in App Manager, then use the same Google account under Settings → RykerSoft AI unlock) or your own keys in Settings. Legacy password users can sign in through the migration panel and link Google without changing their Firebase UID or entitlement data. ElevenLabs TTS needs an ElevenLabs key (Settings → TTS / Keys, or hub unlock when provided).
