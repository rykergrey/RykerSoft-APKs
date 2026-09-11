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

Use Inbox for recordings, transcripts, saved text, files, and images. Content has no forced Note, Journal, Task, or Voice Memo type: add any combination of tags as its purpose evolves. Tap text to edit it, use Copy for a quick copy, sort by added, copied, or retention date, and select several items to copy, tag, archive, run through an action, or add to Chat. Items approaching expiry show a retention indicator. Create saved tag-driven views such as Journal or Family + Urgent, capture modes such as Work Reminder that preapply tags in the standard editor, and workflows such as auto-archiving Complete items that do not also have Journal. Tags can override the default text and audio retention periods; the longest matching tag policy applies, and pinned content remains protected.

Tap the central record control to create a voice note, or drag upward for a compact set of frequently used creation choices. Choose **All options…** to open the scrollable create-and-import sheet with every recording profile, capture mode, and import method. In the Markdown editor, use the image menu to extract text from one or more images or attach them without OCR. Use the microphone at the right edge of the toolbar to record and insert dictated text; the adjacent cancel control abandons that capture. The tag controls collapse while the on-screen keyboard is visible so the editor retains usable height.

In Settings, edit the built-in recording profiles or add custom profiles. Each profile can set its name, sample rate, mono/stereo mode, encoding, Opus bitrate, audio retention, noise suppression, echo cancellation, and automatic gain control.

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

Hyperscribe Mobile v2.6.0 offers optional RykerSoft Pro Access for personal family use.

- * Family provider access — sign in with Google in Settings. If the RykerSoft administrator granted `com.rykersoft.hyperscribemobile`, configured Gemini, OpenAI, Groq, and ElevenLabs family providers become available without saving their values on the device.
- Personal keys remain supported and take priority.
- Free and local workflows do not require an account, entitlement, or provider key.

## Support

Contact heavensounds@gmail.com and include the platform, Hyperscribe version, and a secret-free diagnostics export when available.

## Inbox views, selected input, and speech playlists (v2.6)

Use the Inbox content dropdown to show text, audio, images, or files; mixed captures can match more than one content category. Saved views occupy the horizontal strip. Drag upward or long press the Inbox navigation button for pinned views, then use All/manage to create or manage views. Saved rules support all/any/excluded tags, nested groups, archive scope, and retention windows such as the next 24 hours. Temporary search and tag filters can be saved as a new view. Full date dividers follow the chosen sort, including cleanup date.

Select several Inbox captures and use Copy to create an independent combined text note while retaining the originals. Open Actions or Custom to see the Inbox input count; tap it to inspect, reorder, or remove inputs. Speak in the selection menu uses the configured default voice. Captures without usable text must be transcribed or have their text extracted before text-based operations.

Adding captures to Chat opens a contents review. Text is selected by default where available. Original audio and images are separate choices, and audio transcription or image text extraction require an explicit choice. Choose the destination thread and attach; sending remains a separate step. Tap Inbox context to reorder captures or remove text/media parts before sending. Local attachment snapshots are included in native backups; they are not automatically transferred to other devices through text sync.

During speech, Previous and Next move between paragraphs or list sections. The playlist button opens the section list upward, showing generation and playback states. Tap a generated section to replay it, or choose a waiting section to prioritize it. Pause also holds playback while generation finishes. Saved speech uses the same controls. When sharing partially generated speech, only available sections can be shared.

Tap a capture's retention summary for policy controls and Contents & history. Previous working-text versions can be restored without changing the source capture. Audio-only expiry preserves available text; recording-profile and tag retention settings remain supported. Kept captures and history-count limits are distinguished from timed cleanup.

Settings search can jump to individual controls. Unsaved edits remain while switching sections or when background catalogs refresh. Save waits for persistence and displays errors instead of dismissing the editor. Interface settings include preview lines, visible tag count, sticky dates, and whether text-only Chat attachments require review.

## Saved Inbox views

The Inbox opens with a horizontally scrollable view strip above the live search
field. Titles keep their full text. Type in **Filter Inbox** to filter immediately;
the clear icon removes the query. Recalling a saved view fills this field, so
editing it replaces the saved search instead of adding a second hidden search.

Use the type, audio-status, reminder, pin, and tag controls to customize the list.
Tags can match any, all, or none of the selected tags. The sort menu includes date
copied, date added, cleanup date, and title, with ascending/descending order. It
also controls day grouping, pinned items first, and expanding/collapsing groups.
Tap an individual day heading to expand or collapse it. Advanced filters retain
archive scope, compound content rules, nested tag rules, and retention windows.

Tap the save icon at the right of the view strip to name and save the current
settings. Search, filters, sorting, and individual group states are captured.
An asterisk marks unsaved changes. Tap the active tab to recall its saved settings;
long-press it to update, rename, edit, or delete the view. **All** restores the
standard active Inbox; long-press **All** to reset every query and display setting
to defaults. **Archive** remains a separate built-in view. Saved views and the last
selected view persist on this device. Opening a view also scrolls its tab into view.
