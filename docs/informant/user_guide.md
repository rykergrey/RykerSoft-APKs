# INFORMANT User Guide

Research workspace for YouTube videos, articles, and Reddit posts — organized into projects with notes, bookmarks, transcripts, and AI tools.

## Table of Contents

- [1. Getting started](#1-getting-started)
- [2. Working with a video](#2-working-with-a-video)
- [3. Picture-in-Picture while working](#3-picture-in-picture-while-working)
- [4. Articles and Reddit](#4-articles-and-reddit)
- [5. Project-wide tools](#5-project-wide-tools)
- [6. Save and import items](#6-save-and-import-items)
- [7. Text to speech](#7-text-to-speech)
- [PRO Features](#pro-features)
- [9. RykerSoft pro unlock](#9-rykersoft-pro-unlock)
- [10. Settings](#10-settings)

## 1. Getting started

1. Open INFORMANT and create a project (or open an existing one).
2. Paste one or more YouTube, article, or Reddit URLs.
3. On Android, you can also share a link into INFORMANT from another app.
4. Provider-backed features require keys entered under **Settings → Keys**, or administrator-granted INFORMANT Pro access followed by the same Google account under **Settings → RykerSoft AI unlock** (see section 9). Notes, bookmarks, local save/import, and System/Piper TTS do not require provider access.

## 2. Working with a video

1. Tap a video card to open expanded view.
2. Use the tabs (Info, Comments, Transcript, Notes, Bookmarks, Chat, AI actions).
3. Tap a transcript line or a timestamp citation to seek the player.
4. Tap the permanent **Bookmark** action beside Share, Copy, and Export while watching. INFORMANT uses the complete transcript sentence nearest the playback position as the default title.
5. Edit a bookmark's title with **Edit**, or tap its bookmark/timestamp control to open the exact fractional-second timestamp editor. Jump back from the Bookmarks tab later.

## 3. Picture-in-Picture while working

1. Open a video and start playback.
2. Tap the **Picture-in-Picture** button in the expanded header.
3. The video moves to the mini-player and the tab area goes fullscreen so you can keep reading or generating content.
4. Close the expanded card when you want the workspace grid back — PiP keeps playing.
5. Use the tab fullscreen control anytime to hide/show the main video area without entering PiP.

## 4. Articles and Reddit

- Articles open a reader tab; highlight text to bookmark quotes.
- Reddit posts show the post body plus comments when available.
- Notes, chat, and AI actions work the same way as on videos.

## 5. Project-wide tools

- Use the project grid to browse everything in the project.
- Open project chat / AI actions to work across selected items.
- Use the Texts tab to pull transcripts or article bodies into context.
- Save a full project as RykerSoft Portable Project JSON (choose which items and tabs to include). The portable file can move between supported RykerSoft apps and imports back into INFORMANT without losing app-specific artifacts.

## 6. Save and import items

Move a single video or article (and its tabs) between projects without exporting the whole project.

1. On a collapsed card, tap the **download / save** icon in the action bar.
2. Choose which tabs to include (notes, bookmarks, transcript, comments, chat, AI analyses, playback, tab layout). Link & metadata is always included.
3. Tap **Save JSON**.
   - **Android:** the system Save As dialog opens (usually in Downloads). Rename the file or pick another folder, then confirm.
   - **Share** (Android): optional — send the file to Drive, messaging, or another app.
   - **Desktop:** the file downloads normally.
4. To bring an item into another project, open that project → **Add content** → upload icon → pick the INFORMANT item JSON file.

Full-project exports use `rykersoft.portable-project` version 1. Resources and typed tabs are normalized for other RykerSoft apps; INFORMANT-specific restoration data stays in `extensions`. Single-item files remain tagged with INFORMANT's app/package/export metadata.

## 7. Text to speech

Every content tab has a speaker button. Opening it turns on **TTS mode** for that tab (compact toolbar + section fencing). Tap the speaker again to leave TTS mode. While TTS mode is open, the tab text stays in section-select UI (colors + tap targets) until you close it.

1. Tap the speaker icon to open the TTS toolbar.
2. Pick a provider from the dropdown (**ElevenLabs**, **Piper TTS**, or **System TTS**).
3. **Tap** a paragraph/section to select where playback should start. Word highlighting is disabled in TTS mode so taps always pick blocks, not text ranges. (Notes switch to preview so sections are available. AI action tabs temporarily hide timestamp seek chips so taps select sections.)
4. Press **Play** — generation/playback begins from the selected section onward. Use **Prev** / **Next** to move between sections.
5. The counter shows **generated / total** sections and updates as audio is queued.
6. Section text color shows status: muted = pending, green = generated, indigo = selected/playing.
7. **Long-press** a section for options:
   - Play from here
   - Play this section only
   - Generate this section only
   - Regenerate this section
   - Download TTS clip (Piper / ElevenLabs)
   - Stop / cancel generation
8. Tap **Stop** anytime to cancel playback and queued generation without freezing the app.
9. Unchanged Piper/ElevenLabs text is replayed from cache — it is not regenerated.

Tab scripts (when playing the whole tab from the start):
- **Comments** — “Username said…” / “Username replied…”
- **Bookmarks** — “You have a bookmark at … titled …”
- **Chat** — “You said…” / “Assistant said…”
- **Transcript, article, notes, AI tabs** — cleaned plain text of the tab

Configure voices, Piper downloads, and ElevenLabs models under **Settings → TTS**. Each provider has a **Preview** button. System TTS uses Android’s voices on mobile and the browser speech engine on desktop. Piper downloads a neural voice once, then works offline. ElevenLabs uses your locally stored key or the package key loaded for an entitled RykerSoft session.

## PRO Features

Items marked * require administrator-granted RykerSoft Pro access for INFORMANT, followed by Google sign-in to the same RykerSoft account inside this app.

* **AI chat** — Ask questions about the current item or selected project items
* **AI actions** — Run built-in or custom analysis prompts on your material
* **Family-and-friends provider access** — INFORMANT loads its package-scoped Gemini, OpenAI, YouTube, transcript, Webshare, and ElevenLabs keys after verifying the signed-in UID's exact app entitlement

Manual BYOK remains available without Pro. Notes, bookmarks, System/Piper TTS, and save/import work without provider access.

## 9. RykerSoft pro unlock

1. In the **RykerSoft App Manager**, continue with Google so the administrator can identify the correct hub UID.
2. Ask the RykerSoft administrator to grant `com.rykersoft.informant` on that UID. Only the administrator can change entitlements.
3. Install and open INFORMANT, go to **Settings → RykerSoft AI unlock**, and tap **Continue with Google** using the **same** Google account.
4. INFORMANT verifies the exact package entitlement and loads the package's provider keys for that signed-in session. Use **Refresh access** if a new grant is not visible yet.

If you already have a password-based RykerSoft account, expand **Legacy password account migration**, sign in to that existing account, then tap **Link Google**. Linking preserves the original Firebase UID, entitlement data, and provider access. The migration panel also offers password reset; it cannot create a new password account. If Google is already attached to a different RykerSoft account, INFORMANT stops and asks you to use that account or contact support rather than choosing a data owner silently.

Notes:
- INFORMANT and App Manager never ask users for a reusable family unlock code. Entitlements are administrator-granted against the authenticated hub UID.
- Keys you enter manually in **Settings → Keys** take priority and remain local. RykerSoft Pro package keys stay in process memory and are cleared on sign-out.
- Passwords and API keys start hidden. Use the in-field eye button to reveal or hide each value without losing focus or selection.

## 10. Settings

- Dark mode, resume-at-furthest-bookmark, and default tabs
- **Models** — add Gemini or OpenAI models by retrieving the provider's current account-visible catalog or entering a model ID manually; assign defaults for chat, app functions, and each built-in/custom action
- External search engines for highlighted text
- **TTS** — default engine, System / Piper / ElevenLabs voice settings, Preview per provider
- **Keys** — optional local BYOK values (Gemini, OpenAI, YouTube Data, YouTube Transcript, ElevenLabs)
- **RykerSoft AI unlock** — Google sign-in, legacy account linking/recovery, sign-out, and entitlement refresh
