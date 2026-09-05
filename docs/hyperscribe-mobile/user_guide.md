# Hyperscribe user guide

## Table of Contents

- [Getting started](#getting-started)
- [Inbox and recording](#inbox-and-recording)
- [Actions and chat](#actions-and-chat)
- [Text to speech](#text-to-speech)
- [Provider keys and privacy](#provider-keys-and-privacy)
- [Sharing and interoperability](#sharing-and-interoperability)
- [Backup and restore](#backup-and-restore)
- [Platform differences](#platform-differences)
- [PRO Features](#pro-features)
- [Support](#support)

## Getting started

Install Hyperscribe Mobile through its Android entry in RykerSoft. Grant microphone and notification permissions only when the corresponding features are needed.

## Inbox and recording

Use Inbox for recordings, transcripts, saved text, files, and images. Content has no forced Note, Journal, Task, or Voice Memo type: add any combination of tags as its purpose evolves. Tap text to edit it, use Copy for a quick copy, sort by added or copied time, and select several items to copy, tag, archive, run through an action, or add to Chat. The editor always shows assigned tags beneath the text; remove a chip or type a name to reuse or create a tag. Create saved tag-driven views such as Journal or Family + Urgent, capture modes such as Work Reminder that preapply tags in the standard editor, and workflows such as auto-archiving Complete items that do not also have Journal. Pin and Reminder are ordinary behavior tags: scheduled items receive Reminder automatically, while both tags can also be assigned manually and used in filters or saved views. Tagged and archived content is retained beyond disposable clipboard history. Tap the central record control to create a voice note, or drag upward to add clipboard text, import a text document, open a blank text editor, choose a custom capture mode or another recording profile, or import existing audio.

## Actions and chat

Actions transform text or Inbox content. When one or more Inbox text items or recording transcripts are selected, the Actions page preserves and uses that selection. With no Inbox selection, an action reads the current clipboard instead. Successful text transformations replace the clipboard contents and are saved to the Inbox; snippets copy their own content and do not require an input item. Hyperscribe supports AI, Python, template, snippet, search, persona, TTS, and combo actions, including ordered Before, Combine, Main, and After stages. Chat keeps persistent threads, accepts one or several selected Inbox items as temporary question context, supports action stacks, and provides streaming, generation cancellation, edit/regenerate, fork, search, Personas, action context, and review-before-commit action proposals. Android posts a completion notification when the relevant Chat thread is not actively visible.

In **Settings → Text replacements**, create a rule with the spelling or phrase you want as its replacement, then add any number of spoken or misspelled variants. For example, a `Crystal` rule can include `Kristal`, `Krystal`, and `my wife`; every completed transcript converts those variants to `Crystal` before it is saved or routed elsewhere. Matching is case-insensitive and uses whole words or phrases. Replacements may also contain `{current_date}`, `{date_stamp}`, `{current_day}`, `{current_month}`, `{current_year}`, `{current_time}`, or `{timestamp}` to insert the current local date or time.

## Text to speech

Choose Piper for downloaded on-device voices, the Android system speech engine on mobile, or a configured Gemini or ElevenLabs provider. Long text is divided into ordered sections so playback can begin while later sections are prepared. Paragraph mode treats bullet and numbered-list items as separate speech segments.

## Provider keys and privacy

Cloud features require either personal provider credentials or optional RykerSoft Pro Access. In Settings, sign in with Google to check the exact Hyperscribe Mobile entitlement, or add only the personal keys you need. Personal keys take priority and Android encrypts them with a non-exportable Keystore-backed key. Entitled family values stay in memory only and clear on sign-out, revocation, or access failure. Credentials are excluded from backups, diagnostics, source repositories, and released artifacts. Content is sent to a provider only when the user invokes that provider-backed operation.

## Sharing and interoperability

Use Android Sharesheet, Process Text, Copy, and Share commands to move content between Hyperscribe Mobile and other apps. Compatible action JSON can be imported or exported for use with a separate Hyperscribe Desktop installation.

## Backup and restore

Use the Android document picker to create a portable ZIP backup. Backups contain app-owned content, settings, actions, chat, and media, but never provider credentials. Restore validates the archive before merging it with local data. Back up before uninstalling, clearing app data, or moving devices.

## Platform differences

Modern Android does not allow continuous background clipboard monitoring, silent microphone startup, desktop global hotkeys, or automatic paste into another app. Hyperscribe Mobile uses Sharesheet, Process Text, launcher/widget/tile controls, a foreground recording service, explicit Copy/Share, and an optional permission-gated floating control.

## PRO Features

Hyperscribe Mobile v2.4.2 offers optional RykerSoft Pro Access for personal family use.

- * Family provider access — sign in with Google in Settings. If the RykerSoft administrator granted `com.rykersoft.hyperscribemobile`, configured Gemini, OpenAI, Groq, and ElevenLabs family providers become available without saving their values on the device.
- Personal keys remain supported and take priority.
- Free and local workflows do not require an account, entitlement, or provider key.

## Support

Contact heavensounds@gmail.com and include the platform, Hyperscribe version, and a secret-free diagnostics export when available.
