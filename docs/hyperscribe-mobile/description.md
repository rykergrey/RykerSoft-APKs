# Hyperscribe Mobile

Hyperscribe Mobile is an Android capture workspace and personal knowledge assistant built around the material you save. Record thoughts, collect text, and keep transcripts in your Inbox. Over time, that collection becomes a growing source of context for Chat: ask about your saved information, inspect the original sources, and review proposed changes to your entries.

Inbox remains your everyday capture and organization space. **My knowledge** brings eligible saved text, including archived entries, into conversations through local search. You can collect broadly without manually attaching every relevant note or sending the whole Inbox with every question. Reusable actions, voice chat, reminders, and local or cloud speech support the same workflow.

## Features

- Ask Chat about saved text and transcripts. Automatic keyword search finds relevant passages; optional **Find related ideas** adds on-device search by meaning for English text.
- Open **My knowledge** from Chat to control retrieval, check indexing progress, or rebuild the search index without losing your draft.
- Expand **Saved sources** beneath replies to inspect dated previews, read source passages, and open an entry with its history.
- Propose entry replacements in Chat, compare the proposed and current text, and choose **Apply change**, **Cancel change**, or **Review later**. Applying retains the previous version and checks for intervening edits.
- Control **Available to Chat** for individual entries separately from retention. Archive can keep material out of the active Inbox while leaving retained text searchable.

- Record with built-in or custom profiles, import audio and multi-image items, extract image text, attach images to notes, transcribe, edit, tag, search, archive, share, and back up voice and text items. Build tag-defined views, capture modes, retention policies, and automatic organization workflows without assigning rigid content types.
- Normalize every completed transcript with configurable replacement rules, including multiple spelling and phrase variants plus dynamic date and time tokens.
- Build AI, Python, template, snippet, search, persona, TTS, and combo actions. Run them against selected Inbox content or the clipboard, with text results copied back to the clipboard.
- Keep persistent chat threads with streaming, cancellation, multi-item Inbox context, action stacks, completion notifications, editing, regeneration, action context, and TTS.
- Use Piper or system TTS locally, or configure Gemini and ElevenLabs speech.
- Use personal provider credentials protected by Android Keystore or optional Google-account-bound RykerSoft Pro Access.
- Move action libraries to or from Hyperscribe Desktop using compatible JSON exports.

## Platforms

- Android 10 and newer.
- Native Kotlin and Jetpack Compose application.

## PRO Features

Hyperscribe Mobile supports optional RykerSoft Pro Access for trusted family members.

- Family provider access — after Google sign-in, the exact Hyperscribe Mobile package entitlement can supply configured Gemini, OpenAI, Groq, and ElevenLabs credentials in memory.
- Personal bring-your-own keys remain supported and take priority.
- Recording, organization, local actions, backups, available local TTS, and every other free workflow remain usable without a RykerSoft account or Pro grant.

## Privacy

Saved content and its search index are stored on your device. When you use cloud Chat with saved-entry retrieval enabled, selected relevant excerpts are sent to your configured provider along with the conversation; the entire Inbox is not attached automatically. Search and optional English embeddings run locally, but cloud Chat still needs a provider connection. The optional related-idea model downloads about 23 MB over unmetered Wi-Fi.

Turning retrieval off or excluding an entry affects future automatic retrieval; it does not remove excerpts already in conversations or explicitly attached content. Search availability does not override cleanup or expiry. Generated Chat answers stay in Chat unless you explicitly save them.

Personal and Pro provider credentials are excluded from backups, diagnostics, source control, and release artifacts; Pro values are cleared from memory when access is lost.

## Support

For support, contact heavensounds@gmail.com.
