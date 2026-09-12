# Hyperscribe user guide

## Table of Contents

- [Getting started](#getting-started)
- [Inbox and recording](#inbox-and-recording)
- [Actions and chat](#actions-and-chat)
- [Text to speech](#text-to-speech)
- [Floating TTS controls](#floating-tts-controls)
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

Tap the central record control to create a voice note, or drag upward for a compact set of frequently used creation choices. Choose **All options…** to open the scrollable create-and-import sheet with every recording profile, capture mode, and import method. In the Markdown editor, use the image menu to extract text from one or more images or attach them without OCR. Use the microphone at the right edge of the toolbar to record and insert dictated text; the adjacent cancel control abandons that capture. The tag row and bottom Cancel/Save buttons hide while the on-screen keyboard is visible, leaving that space to the text input. Hide the keyboard to restore them; the draft and assigned tags are preserved. The Add tag dialog remains usable while typing a tag name.

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

Hyperscribe Mobile v2.8.0 offers optional RykerSoft Pro Access for personal family use.

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

The Inbox opens with a horizontally scrollable view strip above the filter toolbar.
Titles keep their full text. Tap the search icon in that toolbar to expand
**Filter Inbox** below it; tap again to collapse the field. Typing filters immediately,
and the clear icon removes the query. Hiding the field keeps the filter applied.
The toolbar search icon stays colored whenever the field contains text, including
a search recalled from a saved view. Editing that text replaces the saved search
instead of adding a second hidden search.

Inbox cards place type/play, copy, and menu controls in their header so previews
can use the full card width. Retention controls and tags share a wrapping footer.
Tap a card to open it, long-press to select it, or use its header actions directly.
Copying gives the card a brief accent-colored outline and animates its change in
position. With the default newest-copied sort, it moves to the top; other saved
sort orders still apply. The list keeps your reading position so you can continue
copying nearby items. Successful Inbox copies do not show an app toast.

Use the type, audio-status, reminder, pin, and tag controls to customize the list.
Tags can match any, all, or none of the selected tags. The sort menu includes date
copied, date added, cleanup date, and title, with ascending/descending order. It
also controls day grouping, pinned items first, and expanding/collapsing groups.
Tap an individual day heading to expand or collapse it. Expanding a day smoothly
aligns its heading with the top of the list, including short groups at the end.
Advanced filters retain
archive scope, compound content rules, nested tag rules, and retention windows.

Tap the save icon at the right of the view strip to name and save the current
settings. Search, filters, sorting, and individual group states are captured.
An asterisk marks unsaved changes. Tap the active tab to recall its saved settings;
long-press it to update, rename, edit, or delete the view. **All** restores the
standard active Inbox; long-press **All** to reset every query and display setting
to defaults. **Archive** remains a separate built-in view. Saved views and the last
selected view persist on this device. Opening a view also scrolls its tab into view.

In the tag manager, tap **+** to open the New tag editor. Save adds the tag and returns to the manager; closing the editor cancels creation and returns to the same manager. Tapping an existing tag opens its editor.


## Recording and stop profiles

**Settings → Recording profiles** controls capture quality, codec, channels, audio processing, and retention. Voice Notes uses 16 kHz mono Opus at 32 kbps by default. Music Compact uses 48 kHz stereo Opus at 160 kbps; Music Lossless uses 48 kHz stereo PCM WAV. Stereo falls back to mono when the input cannot provide two channels. Existing edited quality settings are retained. Add your own profiles and choose the default capture profile for ordinary recording starts. An explicit navigation-button shortcut remains an explicit shortcut.

**Settings → Stop recording profiles** defines what happens after audio is saved. The default is Transcribe and copy. Save audio only and Transcribe without copying are also provided. Add and reorder profiles, choose a transcription provider or use the Transcription default, add actions in order, and choose whether to copy the final result. Each action receives the preceding output. Repeated steps are allowed. Image and browser-opening actions require the main app; stop profiles process transcript text and can run speech actions. Automatic transcript/Inbox actions are optional; new custom profiles run only their selected steps unless you enable them. The former Recording button tap setting and existing Auto Action are migrated into stop-profile preferences. Automatic execution is configured inside each action editor’s Automation tab; there is no Auto Action toolbar button. Recording stop profiles still control whether automatic actions are allowed.

Each capture profile can follow the default stop profile or choose another one. For performances, link Music Lossless or Music Compact to Save audio only. During a recording, use the stop menu or the floating button's Input tab to choose any stop profile for that recording. A normal Stop tap, including the recording notification, uses the capture profile's linked/default workflow. Saving audio only never transcribes or changes the clipboard, even if auto-transcription for imports is on. In-editor dictation retains its dedicated insert-text behavior.

The selected stop plan and provider are stored with the recording. If an action fails, the completed transcript and successful step outputs are retained; clipboard delivery waits until processing finishes. A retry resumes at the unfinished step. A process interruption between an external action response and saving its checkpoint can still repeat that unfinished action. Explicitly retranscribing a completed recording starts a new transcription request rather than rerunning its old stop macro. Provider fallback and text replacements remain in Transcription settings; auto-transcribe there controls imports and older recordings.

## Floating menu customization

**Settings → Floating control** includes Input, Actions, and Inbox tabs. Use Move up/down to arrange tabs, edit their titles, show or hide them, select the opening tab, remember the last tab, or place the tab bar below the content. Tabs scroll horizontally when they do not all fit. At least one tab remains visible.

Create custom action tabs and explicitly choose and reorder their actions. The built-in Actions tab can show all compatible actions or a selected list. Screenshot actions need the main app and are omitted from the floating action picker. You can also show/hide capture imports and action categories, change the recent Inbox item limit and pinned-item inclusion, and adjust menu width and height within the screen's available space. All capture profiles appear when idle; all stop profiles appear while recording, with Pause/Resume and Cancel. Settings persist and travel in portable backups.

## Action workspace (v2.8)

Drag up or long-press the Custom navigation button to choose any action type. Drag up or long-press Actions to filter the library by type. The full action picker remains available through All actions / manage.

Use the clipboard icon in the Actions toolbar or beside the Custom type selector to choose input. Select Use clipboard, or open Choose Inbox input to search and add captures without leaving the page. Reorder or remove selected captures in that picker. The icon shows how many captures are selected.

In an action editor’s Basics tab, select Action tags or choose New tag. The pencil on a tag edits its name, color, and matching rules. Action tags and Inbox tags are independent; the same name may exist in both. Existing action assignments are preserved as independent copies when upgrading. Search actions by tag name. Manage categories from the Actions options menu and use the color wheel to choose a category color.

Choose Automation → Auto-run in an individual action editor to run it after transcription or for new clipboard items. Automatic execution must also be enabled in the applicable recording stop profile.

## Floating menu gestures (v2.8.1)

Tabs are arranged from the right edge outward: Input, Actions, then Inbox by default. A short left swipe opens the nearest tab; continue a little farther to select the next tab. Settings lists the tab order nearest-edge first, including custom tabs. Opening and remembered-tab preferences apply when opening the menu without a swipe.

Input shows recording profiles at the top, followed by clipboard, text, audio, and image imports. While recording it shows stop profiles and recording controls.

In the floating Inbox, tap an item to copy it. Long-press for Edit or Pin/Unpin. Pinned items move to the top immediately; unpinning returns them to normal recent-item order (or removes an older item outside the configured recent limit).

## Floating TTS controls

Enable the floating control in Settings and grant display-over-other-apps access. Run a TTS action, swipe the floating button left and select **TTS**. Playback controls stay above the scrolling segment playlist. Use Play/Pause, Stop, Previous/Next, tap a segment, or seek within the current segment. Close the menu and return to another app to keep listening. Stop cancels queued speech but keeps the current playlist available for replay. Saved speech remains in the Inbox.

The menu now defaults to 380 × 640 dp, constrained to your screen, with compact rows and cyan selection highlights. Change menu size, tab visibility, names, order and placement in Settings → Floating menu.
