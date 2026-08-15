# SuperThink.ing User Guide

A multimodal knowledge workspace built around cards and tabs — write, chat, transform with AI actions, work with songs and diagrams, and link audio into your notes.

## Table of Contents

- [1. Getting started](#1-getting-started)
- [2. Cards, tabs & the vault](#2-cards-tabs--the-vault)
- [3. Writing & markdown](#3-writing--markdown)
- [4. Song & music tools](#4-song--music-tools)
- [5. Diagrams & mind maps](#5-diagrams--mind-maps)
- [6. Chat tabs](#6-chat-tabs)
- [7. AI actions](#7-ai-actions)
- [8. Media, linked audio & transcription](#8-media-linked-audio--transcription)
- [PRO Features](#pro-features)
- [9. Import, export & share](#9-import-export--share)
- [10. Settings](#10-settings)

## 1. Getting started

1. Open SuperThink.ing. **Guest mode** works immediately — everything stays on your device.
2. Optionally continue with Google to sync cards, actions, templates, and Firebase Storage media across devices. An empty cloud vault offers to migrate your guest cards.
3. Create a card, add tabs (text, chat, image, audio, video), and start working.
4. For PRO provider access, unlock SuperThink.ing in RykerSoft App Manager and continue with the same Google account under **Settings → RykerSoft AI unlock**, or enter your own keys in Settings.

## 2. Cards, tabs & the vault

- The **vault sidebar** searches and groups cards by category with adjustable density.
- Switch between **list, grid, and kanban** views; kanban columns support drag, collapse, and per-column sorting.
- Pin cards; collapse, expand, or maximize them; pop cards out as **floating windows**; split a card into a **dual-pane** layout.
- Batch-select cards for duplicate, delete, metadata edits, or ZIP download. The **Card Chat Editor** applies plain-language batch edits across selected cards.
- Tabs can be created, renamed, hidden, duplicated, reordered, and colored. The Tab Manager modal (and its natural-language AI mode) handles bigger reorganizations.

## 3. Writing & markdown

- Markdown editor with a formatting toolbar, undo/redo, and find/replace; preview renders GitHub-flavored markdown.
- **Dictate** into text tabs and **read aloud** any selection or the full content.
- **Word Lab** finds rhymes, near rhymes, related words, and descriptors for a selected word.
- Link across cards with `[[Exact Card Title]]` wiki links — linked cards can feed AI context.
- Insert songs, mind maps, Mermaid diagrams, tab links, or code fences from the editor.
- Print / save as PDF from preview, or export standalone HTML (optionally zipped with linked audio).

## 4. Song & music tools

- Write songs in fenced `song` blocks with chord tokens, section headers, and stage directions.
- Show/hide chords, transpose ±1 semitone, and use `{option1|option2}` variation syntax with colors.
- The section jumper dock navigates between song sections; preview auto-scroll works like a teleprompter with speed control.
- HTML exports include section navigation, a metronome, section looping, transpose, and audio playback controls.

## 5. Diagrams & mind maps

- **Markmap** mind-map blocks and the Full Tab Map view support pan, zoom, fit, and expand/collapse.
- **Mermaid** diagrams (including mermaid mindmaps) render in preview.
- Export any diagram as SVG or PNG. A built-in Mind Map AI action drafts maps from your content.

## 6. Chat tabs

- Each chat tab has its own model, temperature, system prompt, and history limit.
- Reference other tabs as context and attach media to messages; drafts persist across tab switches.
* The assistant can propose **tab edits** you Apply or Undo, regenerate responses, and speak replies into an audio tab.

## 7. AI actions

* Provider-backed actions transform content between types: text-to-text, text-to-image, image-to-text (OCR), text-to-audio (TTS), audio-to-text, text-to-video, and web research.
- Local JavaScript utility actions remain available without provider access.
* Use the provider-backed built-in library (summarize, mind map, grammar, web research, visualize, speech summarize, code refactor, TTS presets) or build your own with the **Action Builder** and **Action Editor**.
- Organize actions with favorites, categories, and tags; results go to a new tab or an existing tab (replace/append/prepend).
* Actions can also hand prompts to external providers such as Perplexity, Gemini, ChatGPT, or Claude.

## 8. Media, linked audio & transcription

- **Images**: upload or capture, crop, send to other tabs, download/share.
* **Image OCR**: extract text from an image through a configured provider.
- **Audio**: record with configurable quality and device routing, trim on the waveform, export MP3/WAV, and play through the global player. On narrow screens, previous/play/next controls share the seek row to keep every action accessible. While recording, that same track becomes a live green input-level meter and returns to seek mode when recording stops.
- **Video**: upload files or add YouTube/URL entries.
* **Transcription**: transcribe audio and video through Groq Whisper, OpenAI Whisper, or Gemini; YouTube captions use a multimodal fallback when needed.
- **Linked audio**: attach audio regions to lyrics or notes with inline playback controls, queue, repeat, and auto-scroll.
- When signed in, newly saved media is uploaded to Firebase Storage before its cloud record is accepted. A visible error means the upload was not durable; retry while online rather than relying on a device-only preview.

## PRO Features

* AI actions — summarize, transform, research, generate, and reorganize card content.
* AI chat and tab editing — use card context and apply assistant-proposed edits.
* AI media and transcription — run generation, OCR, speech-to-text, and TTS provider operations.

Editing, organizing, songs, diagrams, media storage, import/export, and vault sync work without PRO. Provider-backed operations need a RykerSoft entitlement or your own provider keys.

1. In **RykerSoft App Manager**, continue with your Google account.
2. Ask the RykerSoft administrator to grant PRO access to SuperThink.ing for that account. Grants are account-bound and apply only to this app package.
3. In SuperThink.ing, go to **Settings → RykerSoft AI unlock** and continue with the **same Google account**.
4. Provider access loads after the app verifies the grant. Use **Refresh keys** if PRO features do not become available right away.

Notes:
- There is no reusable family code. Only the administrator can grant or revoke this app's entitlement for a signed-in account.
- RykerSoft entitlement sign-in is separate from the SuperThink.ing app-data account that syncs your vault, even when both use the same Google identity.
- Existing password accounts can use the legacy migration panel, reset the password if necessary, and then link Google without changing the existing UID or cloud data.
- Keys entered manually in Settings take priority over synced keys.
- Hub-supplied provider keys are used only in memory and are not copied into app preferences or the app-data database.

## 9. Import, export & share

- Choose **Import** from the vault/card/kanban creation controls to inspect a JSON or ZIP first, select compatible cards/tabs/resources, and then import.
- Import formats include SuperThink.ing JSON/ZIP, loose compatible ZIP files, adaptable structured JSON, and RykerSoft portable-project v1 exports (including Informant text/chat/articles/video resources).
- Export single cards or batches as ZIP (content + media) for use on another device.
- Export templates as ZIP from Settings.
- On Android, share text, images, video, audio, or files from other apps straight into a chosen card/tab; exports save to the public Downloads folder.

## 10. Settings

- **API keys**: RykerSoft AI unlock sign-in, plus optional manual Gemini, Groq, OpenAI, and ElevenLabs keys.
- **Models**: Gemini model catalog or custom model IDs; default text and Tab Manager models; dictation model choice.
- **Personas/boilerplates** for text, mindmap, image, video, audio, utility, and chat actions.
- **UI**: fonts, long-press duration, tab swipe, maximize behavior, category colors, selection-search targets.
- **Storage**: usage analysis, Firebase Storage toggle, template management.
