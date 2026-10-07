# Hyperscribe Mobile

Hyperscribe Mobile is an Android capture workspace and personal knowledge assistant built around the material you save. Record thoughts, collect text, and keep transcripts in your Inbox. Over time, that collection becomes a growing source of context for Chat: ask about your saved information, inspect the original sources, and review proposed changes to your entries.

Inbox remains your everyday capture and organization space. **My knowledge** brings eligible saved text, including archived entries, into conversations through local search. You can collect broadly without manually attaching every relevant note or sending the whole Inbox with every question. Reusable actions, voice chat, reminders, and local or cloud speech support the same workflow.

## Features

- Ask Chat about saved text and transcripts. Automatic keyword search finds relevant passages; optional **Find related ideas** adds on-device search by meaning for English text.
- Ask **Search for Batman** to browse expandable, clickable result previews and open the same active search in Inbox. Local search navigation keeps the result list out of the AI context and spoken response.
- Gather bounded evidence across multiple notes for questions such as **What are my 10 favorite things?**, with explicit limits and a search card for further browsing.
- Find saved names under alternate spellings: matching enabled text replacement rules also act as search aliases, including for older entries.
- Say **Whenever I say Alyx, I mean Alex** to create or extend a text replacement rule directly in Chat. Existing matching rules are reused and conflicting mappings are left unchanged.
- Ask about project status with recent topic matches alongside relevant notes, dated sources, and explicit guidance to distinguish the last known update from current reality.
- Open **My knowledge** from Chat to control retrieval, check indexing progress, or rebuild the search index without losing your draft.
- Hear readable source references instead of long internal IDs when Chat speaks its replies.
- Ask for a reminder as part of a longer voice thought. Chat saves the spoken words as text without an Inbox title, applies matching tags, and schedules the requested alert. Every Inbox item has an Alerts tab for reviewing or adding alerts.
- Expand **Saved sources** beneath replies to inspect dated previews, read source passages, and open an entry with its history.
- Propose entry replacements in Chat, compare the proposed and current text, and choose **Apply change**, **Cancel change**, or **Review later**. Applying retains the previous version and checks for intervening edits.
- Control **Available to Chat** for individual entries separately from retention. Archive can keep material out of the active Inbox while leaving retained text searchable.

- Record with built-in or custom profiles, import audio and multi-image items, extract image text, attach images to notes, transcribe, edit, tag, search, archive, share, and back up voice and text items. Build tag-defined views, capture modes, retention policies, and automatic organization workflows without assigning rigid content types.
- Normalize every completed transcript with configurable replacement rules, including multiple spelling and phrase variants plus dynamic date and time tokens.
- Build AI, Python, template, snippet, search, persona, TTS, and combo actions. Run them against selected Inbox content or the clipboard, with text results copied back to the clipboard.
- Swipe inward from the right-edge floating button to open the first visible tab; continue sliding through your configured tabs. Hold to open the configured or remembered tab, and tap outside to close. Create multiple Capture, Actions, Inbox, and Listen tabs, including custom names, live saved Inbox views, tag filters, category filters, and ordered action shortcuts.
- Save provider, voice, and playback settings in reusable speech actions. Choose a default for Chat, Inbox, Listen, and spoken reminders, override it where needed, or run a complete workflow such as summarizing an article before reading it aloud.
- Keep persistent chat threads with streaming, cancellation, multi-item Inbox context, action stacks, completion notifications, editing, regeneration, action context, and TTS.
- Use Piper or system TTS locally, or configure Gemini and ElevenLabs speech.
- Use personal provider credentials protected by Android Keystore or optional Google-account-bound RykerSoft Pro Access.
- Move action libraries to or from Hyperscribe Desktop using compatible JSON exports.
- Retain Desktop-only Computer actions and their settings for round trips. Android labels them **Requires Desktop** and skips their automatic triggers.
- With an active RykerSoft Pro grant, optionally sync selected Inbox text, tags, actions, Chat threads, and text replacement rules between Android and Hyperscribe Desktop under the same Google account. Automatic checks and manual server reconciliation preserve local attachment handles and avoid rewriting unchanged content.

## Platforms

- Android 10 and newer.
- Native Kotlin and Jetpack Compose application.

## PRO Features

Hyperscribe Mobile supports optional RykerSoft Pro Access for trusted family members.

* Family provider access — after Google sign-in, an administrator-managed Hyperscribe Mobile grant can supply configured Gemini, OpenAI, Groq, and ElevenLabs credentials in memory. Sign in with the Google account granted access in RykerSoft.
* Hyperscribe Sync — an active grant and Google sign-in allow opt-in private cloud synchronization with other authorized Hyperscribe devices. Choose which content to share on each installation.

Personal bring-your-own keys remain supported and take priority. Recording, organization, local actions, backups, and available local TTS remain usable without a RykerSoft account or Pro grant.

## Privacy

Saved content and its search index are stored on your device. When you use cloud Chat with saved-entry retrieval enabled, selected relevant excerpts are sent to your configured provider along with the conversation; the entire Inbox is not attached automatically. Search and optional English embeddings run locally, but cloud Chat still needs a provider connection. The optional related-idea model downloads about 23 MB over unmetered Wi-Fi.

Turning retrieval off or excluding an entry affects future automatic retrieval; it does not remove excerpts already in conversations or explicitly attached content. Search availability does not override cleanup or expiry. Generated Chat answers stay in Chat unless you explicitly save them.

Personal and Pro provider credentials are excluded from backups, diagnostics, source control, and release artifacts; Pro values are cleared from memory when access is lost.

When you enable Sync, selected text and compatible metadata are stored in your account's private cloud collection. Audio, images, files, and device-local paths are not transferred by Sync. Use a portable backup when you need to move local media. A successful sync confirms this installation's server reconciliation; check the receiving device's selection and latest successful check to verify delivery there.

## Support

For support, contact heavensounds@gmail.com.
