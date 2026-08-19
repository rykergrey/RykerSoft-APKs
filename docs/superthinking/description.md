SuperThink.ing is a multimodal knowledge workspace built around cards and tabs (text, chat, image, audio, video). Transform content with reusable AI actions, write with markdown/song/mind-map tools, link audio into lyrics or notes, transcribe speech, and work in guest local mode or synced cloud mode when signed in.

## Features

- **Cards & tabs**: every card holds tabs of type TEXT, CHAT, IMAGE, AUDIO, or VIDEO
- **Workspace**: vault sidebar with search and category grouping; list, grid, and kanban views; pinning, floating pop-out cards, dual-pane layouts, batch operations, and a Card Chat Editor for plain-language batch edits
- **Markdown editing**: formatting toolbar, undo/redo, find/replace, GFM preview, dictation, read-aloud, Word Lab (rhymes/related words), cross-card wiki links, print/PDF, standalone HTML export
- **Song tools**: fenced song blocks with chords, transpose, variation syntax, teleprompter auto-scroll, and HTML exports with metronome/loop/section navigation
- **Diagrams**: Markmap mind maps and Mermaid diagrams with SVG/PNG export
* **Chat provider operations**: per-tab model, temperature, system prompt, and history; context references; tab-edit proposals with Apply/Undo; TTS replies into audio tabs
* **AI actions**: built-in library (summarize, mind map, OCR, web research, image/video generation, TTS presets, code refactor) plus a custom Action Builder/Editor with favorites and categories
- **Media**: image upload/camera/crop; responsive audio playback, live green recording-level feedback, waveform trim, and MP3/WAV export (FFmpeg); video upload and YouTube entries
* **Provider-backed media tools**: OCR, transcription, generation, and TTS through Gemini, Groq, OpenAI, or ElevenLabs
- **Linked audio**: link audio regions into lyrics or notes with inline playback, queues, repeat, and auto-scroll
- **Import/export/share**: adaptive JSON/ZIP project import with content selection, RykerSoft portable-project support, card and batch ZIP export, Android share-intent import, and a native Downloads saver
- **Guest mode** (local-only) or **signed-in mode** with a local vault for instant reopen plus background Firestore/Firebase Storage sync, including offline notes and recordings

## PRO Features

* AI actions — transform, summarize, research, generate, and reorganize content with reusable actions.
* AI chat and tab editing — chat with card context and apply assistant-proposed edits.
* AI media and transcription — generate media, run OCR, transcribe speech, and create TTS audio.

PRO provider access is granted by the RykerSoft administrator for this exact app package. Sign into RykerSoft App Manager first, then continue with the same Google account under **Settings → RykerSoft AI unlock**. Editing, organizing, songs, diagrams, media storage, import/export, and sync remain available without PRO. Advanced users may instead supply their own Gemini, Groq, OpenAI, or ElevenLabs keys in Settings.

## Platforms

- **Android** — Capacitor APK via the RykerSoft hub (`com.rykersoft.superthinking`)
- **Web** — Vite + React
- **Windows** — Capacitor Electron portable build
