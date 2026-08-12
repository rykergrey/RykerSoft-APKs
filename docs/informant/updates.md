# Release notes

## v1.3.1
- Add a permanent bookmark action beside Share, Copy, and Export beneath the video player
- Generate each bookmark's default title from the complete transcript sentence nearest the exact playback timestamp
- Let users edit bookmark titles normally or open the bookmark/timestamp control to fine-tune fractional-second timing
- Preserve AI results more reliably when saving generated content into a new or existing custom tab
- Make public access BYOK while granting family-and-friends Pro by authenticated RykerSoft UID and exact package entitlement
- Load only INFORMANT's package-scoped provider keys into memory for an entitled session; clear them on sign-out and never embed them in distributable artifacts
- Keep the Pro access path on Firebase Auth + Firestore so it works on Spark without a Cloud Functions/Blaze dependency
- Remove bundled YouTube, transcript, Webshare, and other provider credentials from distributable client/server assets
- Route packaged Windows Google sign-in through a temporary loopback helper in the system browser while retaining context isolation, sandboxing, and web security

## v1.3.0
- Export full projects as RykerSoft Portable Project JSON with normalized resources, typed tabs, resumable chat history, analyses, and INFORMANT restoration extensions
- Import the portable format back into INFORMANT while preserving notes, bookmarks, transcripts, comments, chats, analyses, playback, and tab layout
- Standardize RykerSoft pro access on Google sign-in across Android, Electron, and web
- Add UID-preserving Google linking and password reset for migration-only legacy RykerSoft accounts; new password accounts can no longer be created in INFORMANT
- Add accessible in-field show/hide controls to the legacy password and every stored API-key field
- Register the release-signed Android client and certificate fingerprints in hub Firebase for native Google authentication
- Improve mobile action optimization, transcript fallback handling, article fetching, and project artifact round-tripping

## 1.2.6
- Save any single video or article as its own INFORMANT JSON (pick which tabs to include) from the card download button
- Import that item JSON into any other project via Workspace → Add content
- Exported JSON is tagged with `app: INFORMANT` / package id so files are recognizable offline
- Android Save uses the system Save As dialog (Downloads / other folders) instead of only the share sheet; Share remains a separate option
- Project save/export uses the same Android Save As flow

## 1.2.5
- Fixed TTS mode on AI action tabs (Summary, Key Takeaways, Analysis, custom actions)
- Timestamp seek chips no longer steal taps in TTS mode — paragraphs stay selectable for playback
- AI action content marks fenceable blocks and disables seek chips while TTS is open

## 1.2.4
- Fixed TTS mode race that flashed section fencing then snapped back to the default text UI
- TTS ownership + React-owned `data-tts-root` keep section colors, tap/long-press, and no-highlight mode stuck while the toolbar is open
- Notes tab switches to markdown preview in TTS mode so paragraphs can be fenced

## 1.2.3
- Fixed TTS section fencing so taps, long-press, and status colors work after React re-renders
- Word highlighting fully disabled in TTS mode (document-level); seekbar removed from TTS toolbar
- Transcript/button rows can be selected for TTS without triggering seek-on-tap

## 1.2.2
- Compact TTS toolbar: provider dropdown, generated/total counter, prev/next controls
- Tap a section to select the start point; Play continues from that section onward
- Word highlighting disabled in TTS mode — taps select text blocks, not word ranges
- Section text color reflects TTS status (pending, generated, selected, playing)
- Exit TTS mode with the tab speaker toggle (Exit button removed)

## 1.2.1
- TTS mode toolbar with section fencing: tap paragraphs to play, long-press for generate / regenerate / download clip
- Segmented Piper & ElevenLabs generation — plays the first section ASAP and queues the next; Stop cancels without freezing the UI
- Cached TTS audio is reused when text and voice settings are unchanged (no regenerate)
- Piper synthesis runs off the UI thread (Web Worker) so the app stays responsive
- Preview buttons for each TTS provider in Settings → TTS

## 1.2.0
- Text-to-speech on every content tab: tap the speaker button and choose **ElevenLabs**, **Piper TTS**, or **System TTS**
- Reads the current tab script, or only your highlighted selection when text is selected
- Smart scripts for comments (“Username said…”) and bookmarks (“bookmark at N minutes titled…”)
- New **Settings → TTS** section for voices, models, rates, Piper downloads, and ElevenLabs controls
- ElevenLabs API key can sync from RykerSoft hub unlock or be entered under Settings → Keys / TTS

## 1.1.0
- RykerSoft AI unlock: sign in with your RykerSoft account in **Settings → RykerSoft AI unlock** to sync Gemini and Groq keys after unlocking INFORMANT in the RykerSoft App Manager
- Gemini AI features (chat, AI actions, analyses) are now unlock-gated; transcripts, metadata, and comments remain free
- Manually entered keys in Settings → Keys still work and take priority

## 1.0.4
- Picture-in-Picture from an expanded video keeps the card open and fullscreenes the tabs, so you can watch in the mini-player while reading or running AI tools
- Closing the expanded card leaves PiP playing on the project workspace
- Chat and AI actions cite bare transcript timestamps that jump the player when tapped
- Video chat prefers transcript context when available so citations can seek
- Read-only chat/action text uses native selection on Android (long-press copy works more reliably)

## 1.0.3
- Package ID changed to `com.rykersoft.informant` (clean install may be required if you had `com.informant.app`)
- Hub screenshots added for the RykerSoft listing

## 1.0.2
- Installable release-signed APK for the RykerSoft hub

## 1.0.1
- Initial INFORMANT release for the RykerSoft hub
