# INFORMANT User Guide

Research workspace for YouTube videos, articles, and Reddit posts — saved as individual home items or organized into projects, with notes, bookmarks, transcripts, and AI tools.

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
- [11. Send to a CrossPoint reader](#11-send-to-a-crosspoint-reader)

## 1. Getting started

1. Open INFORMANT, paste a URL on the home screen, and tap **Import**. The item is saved beside your projects; videos open full-screen with **Info** selected.
2. To organize a standalone video later, tap the folder-plus **Add to project** icon below the player, choose an existing project, and confirm with the folder-plus icon. Its saved work moves with it and the video stays open. Create an empty project with **New project** on the home screen when needed.
3. On Android, share a link into INFORMANT from another app to import and open it directly. For the original new/existing project chooser, select **Project-based import** under **Settings → General → URL import behavior**. Content added from inside a project stays in that project.
4. Provider-backed features require keys entered under **Settings → Keys**, or administrator-granted INFORMANT Pro access followed by the same Google account under **Settings → RykerSoft AI unlock** (see section 9). Notes, bookmarks, local save/import, and System/Piper TTS do not require provider access.

### Desktop downloads and storage

The latest packaged Windows and Linux editions are **1.4.13**, alongside Android **1.4.13 / versionCode 30**. Download the appropriate desktop file from INFORMANT's RykerSoft listing or the public [1.4.13 release](https://github.com/rykergrey/RykerSoft-APKs/releases/tag/informant-v1.4.13).

- **Windows x64:** keep the portable `.exe` in a writable folder and open it. The app runtime is included; no separate Node.js installation is needed.
- **Linux x64:** make the AppImage executable in your file manager and open it, or extract the `tar.gz` bundle and run its `informant` executable. The runtime is included; no separate Node.js installation is needed.

Close INFORMANT normally before updating. Windows portable library files remain in the portable folder; preserve `informant.db`, any SQLite sidecars, and `projects/`. If moving the executable, move the library files with it. New Linux libraries normally live in `~/.config/informant/`, separate from the downloaded application; keep that profile when replacing the app. An existing adjacent `informant.db` or legacy `supertube.db` continues using its original location.

Keep the separate application profile when updating so browser-based settings and local queues remain available, along with the Windows portable library folder or Linux data folder. For a backup, export items/projects inside INFORMANT, or close the app normally and copy the full data folder, including any SQLite sidecars still present. Reopen the updated app and check the saved library before removing an older app folder.

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

On Android, paste an article link and press **Import**, or share a link to INFORMANT. The app retrieves the article directly on your phone and displays cleaned paragraphs, captions and images. Article import does not require a transcript or proxy key and does not automatically fall back to a third-party scraping service. Sites requiring interactive verification or JavaScript rendering may still fail. Use **Re-scrape article** to retry.

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

- **General → URL import behavior** — **Single video (default)** for direct import and opening on Info, or **Project-based import** for the original chooser
- Dark mode, resume-at-furthest-bookmark, and default tabs
- **Models** — add Gemini or OpenAI models by retrieving the provider's current account-visible catalog or entering a model ID manually; assign defaults for chat, app functions, and each built-in/custom action
- External search engines for highlighted text
- **TTS** — default engine, System / Piper / ElevenLabs voice settings, Preview per provider
- **Keys** — optional local BYOK values (Gemini, OpenAI, YouTube Data, YouTube Transcript, ElevenLabs)
- **RykerSoft AI unlock** — Google sign-in, legacy account linking/recovery, sign-out, and entitlement refresh


## 11. Send to a CrossPoint reader

Use direct sending from Android, Windows or Linux. The standalone CrossPoint Inbox app and pairing JSON files are optional for this flow.

1. Connect the sending phone or computer and the reader to the **same Wi-Fi** first. Wake the reader and open **Receive from phone**; INFORMANT cannot wake it or start this mode remotely.
2. Select the exact content tab in INFORMANT. Open **Reader** on a phone or **Send to reader** on a larger screen, then choose **Send now**. Review the title, category, content type and text; only this snapshot is sent.
3. Keep the default **Phone → reader** on Android or **Computer → reader** on Windows/Linux. Acknowledge the local-network notice: direct HTTP transfers are unencrypted, so use a network you trust.
4. Enter the address shown on the reader, such as **192.168.1.50**, then choose **Connect reader**. No `http://` prefix is needed. Android also offers **Scan reader QR**; Windows and Linux use manual entry.
5. Wait for **Ready to receive**, then choose **Send to reader**. Keep the reader in Receive mode while INFORMANT sends and verifies the file.
6. Wait for **Sent and verified** before finishing. Readers supporting Library receipts also confirm **Received in Library**; a failed Library confirmation keeps the exact snapshot queued for retry. Older readers without that capability report exact-byte verification. On the reader, choose **Done**, then open **Home → Library**. Use **Filter → Categories** or **Content types** to find the item.

### Remembered reader address

INFORMANT remembers each app's verified reader connection and keeps the editable address draft separately. A fresh unpaired field starts with **192.168.1.**; replace or complete it with the reader's actual address. Each edit, including a partial address or a deliberately blank field, is retained when reopening the review or app. Typing does not connect: **Connect reader** validates the address and reader identity. A saved connection alone is not **Ready**; reopen Receive mode and use **Retry connection** if needed. Choose **Forget this reader** before connecting a different reader.

### Queue now, send later

Choose **Queue** from the reader menu to save the current tab's exact snapshot on this device without connecting or sending. **Queue for later** in the editable review saves that edited snapshot. The local queue remains after closing INFORMANT and is separate from desktop Inbox publishing.

Open **Reader queue** from the home screen or reader menu when ready. Connect the awake reader on the same Wi-Fi, then choose **Send queued items**. Items send one at a time, oldest first, and leave the waiting list only after a verified transfer; receipts remain under **Saved for reader**. Keep INFORMANT in the foreground. A failure or backgrounding pauses the batch and preserves unsent items for retry. Select a title to review its saved snapshot, or **Remove from queue** to remove the local entry.

### Away from home and optional desktop Inbox

Same Wi-Fi is the first choice. As an alternative, on the reader choose **Receive from phone → Wi-Fi / hotspot → Create Hotspot**, connect the sending phone or computer to **CrossPoint-Reader**, and enter the address shown on the reader. Android may scan its QR. Keep that Wi-Fi connection even if it has no Internet.

Choose **Desktop inbox (optional)** only when you want to publish to a separately configured CrossPoint desktop Inbox host for the reader's later Inbox sync. In the review, select that transport, acknowledge its HTTP notice, import the publisher pairing file exported by that host, then choose **Send to inbox**. The reader must be paired with the same host for its own Inbox sync, and the host computer must stay awake and reachable. Desktop upload retries run while INFORMANT is open and resume on reopening; Android retains its native background upload retries. The local Reader queue above sends directly in the foreground and needs neither that host nor its pairing file.
