# Hyperscribe user guide

## Table of Contents

- [Getting started](#getting-started)
- [Inbox and recording](#inbox-and-recording)
- [Actions and chat](#actions-and-chat)
- [My knowledge in Chat](#my-knowledge-in-chat)
- [Text to speech](#text-to-speech)
- [Provider keys and privacy](#provider-keys-and-privacy)
- [Sharing and interoperability](#sharing-and-interoperability)
- [Sync between devices](#sync-between-devices)
- [Backup and restore](#backup-and-restore)
- [Platform differences](#platform-differences)
- [PRO Features](#pro-features)
- [Support](#support)

## Getting started

Install Hyperscribe Mobile through its Android entry in RykerSoft. Grant microphone and notification permissions only when the corresponding features are needed.

## Inbox and recording

Use Inbox for recordings, transcripts, saved text, files, and images. Inbox items are text without separate titles. Content has no forced Note, Journal, Task, or Voice Memo type: add any combination of tags as its purpose evolves. Tap text to edit it, use Copy for a quick copy, sort by added, copied, or retention date, and select several items to copy, tag, archive, run through an action, or add to Chat. Items approaching expiry show a retention indicator. Original audio defaults to 30 days while text remains separately retained. Transcribed audio lasts at most 30 days unless its Audio tab is set to keep it indefinitely. Create saved tag-driven views such as Journal or Family + Urgent, capture modes such as Work Reminder that preapply tags in the standard editor, and workflows such as auto-archiving Complete items that do not also have Journal. Tags can override the default text and audio retention periods within that transcribed-audio limit; the longest matching tag policy applies, and pinned text remains protected.

On each Inbox card, Copy sits next to the three-dot menu. The speaking-person icon plays text-to-speech; the Play triangle plays recorded audio. Tap the card's microphone to start recording into that item, then use the normal Stop or Cancel controls. Recording continues after you lift your finger or leave the screen. Stop attaches the audio to the original item and appends the transcript as a new paragraph. Tap its Recording chip to play the saved audio. See [Inbox dictation](inbox-dictation.md) for details.

Tap the central record control to create a voice note, or drag upward for a compact set of frequently used creation choices. Choose **All options…** to open the scrollable create-and-import sheet with every recording profile, capture mode, and import method. In the Markdown editor, use the image menu to extract text from one or more images or attach them without OCR. Use the microphone at the right edge of the toolbar to record and insert dictated text; the adjacent cancel control abandons that capture. The tag row and bottom Cancel/Save buttons hide while the on-screen keyboard is visible, leaving that space to the text input. Hide the keyboard to restore them; the draft and assigned tags are preserved. The Add tag dialog remains usable while typing a tag name.

In Settings, edit the built-in recording profiles or add custom profiles. Each profile can set its name, sample rate, mono/stereo mode, encoding, Opus bitrate, audio retention, noise suppression, echo cancellation, and automatic gain control.

## Actions and chat

Actions transform text or Inbox content. When one or more Inbox text items or recording transcripts are selected, the Actions page preserves and uses that selection. The Actions page shows an editable input panel, initially loaded from the clipboard when no Inbox items are selected. Selecting Inbox items automatically loads their text in selection order. Saving an Inbox item or transcript makes the saved text the input; copying text switches the panel to that copied text. This working copy stays unchanged when actions finish or you switch tabs; use Load current clipboard to load text copied outside the app. Successful text transformations replace the clipboard contents and are saved to the Inbox; snippets copy their own content and do not require an input item. Hyperscribe supports AI, Python, template, snippet, search, persona, TTS, and combo actions, including ordered Before, Combine, Main, and After stages. Chat keeps persistent threads, accepts one or several selected Inbox items as temporary question context, supports action stacks, and provides streaming, generation cancellation, edit/regenerate, fork, search, Personas, action context, and review-before-commit action proposals. Android posts a completion notification when the relevant Chat thread is not actively visible.

In **Settings → Text replacements**, create a rule with the spelling or phrase you want as its replacement, then add any number of spoken or misspelled variants. For example, a `Crystal` rule can include `Kristal`, `Krystal`, and `my wife`; every completed transcript converts those variants to `Crystal` before it is saved or routed elsewhere. Matching is case-insensitive and uses whole words or phrases. Replacements may also contain `{current_date}`, `{date_stamp}`, `{current_day}`, `{current_month}`, `{current_year}`, `{current_time}`, or `{timestamp}` to insert the current local date or time.

For a voice request such as “I need groceries tonight, so remind me in four hours to ask my wife what we need,” Chat creates a scheduled Inbox entry. The item keeps the spoken transcription, shows a short task title, and receives matching automatic tags. Open the item and choose **Alerts** to check or change the scheduled alert. Every saved item's viewer has an Alerts tab, so you can add one later too. If the request lacks a usable time, Chat asks for one before creating the alert.

## My knowledge in Chat

### Start with what you already save

1. Save text, record and transcribe a thought, or extract text from an image into Inbox. Saved text is available to Chat by default, including untagged and archived entries. Excluded and expired entries stay out of search.
2. Open Chat → **My knowledge** and leave **Use saved entries in Chat** enabled (the default). Configure a chat provider in Settings if you have not already.
3. Ask a specific question, such as “What did I save about the garden project?” Automatic search chooses a limited set of relevant passages; it does not send your entire Inbox.
4. Expand **Saved sources** under the answer and check the source before relying on the answer or changing an entry.

Saved material supplies context, not guaranteed facts or a record of everything you believe. A collected quote may express somebody else's opinion. If an answer misses an entry, try a distinctive phrase, open it directly, or explicitly attach it to Chat.

### Save, extend, and recall a list

You can say **Save a VR games to check out list with Beat Saber and Walkabout Mini Golf**, then later ask **What games did I put on that VR list?** The assistant uses your wording and recent conversation to identify the request. A list of things to try is saved information; it becomes an alert only when you ask to be notified at a time.

In the same thread, **Add Moss to that list** can find the earlier entry and append the new item while preserving its existing text. Already-present whole list lines are not added twice. If several entries could be the target, the assistant can ask which one you mean. For an edit such as **Change Beat Saber to Beat Saber on Quest**, it prepares a whole-entry replacement for your review before saving.

The assistant can search, adjust its query, and read successive pages of a note before answering. Recent thread context helps with follow-ups; saved-note search supplies the durable information in a later conversation. Requests are bounded, and unclear targets or incomplete results may need a narrower follow-up. An app receipt confirms a save; generated conversation alone does not. Editing or regenerating an earlier message does not repeat an Inbox change—send a new message for a new change.

### Search and browse from Chat

Ask **Search for Batman** or **Find notes mentioning Batman**. Chat creates a **Search results** card. Expand **Preview results** for five matching excerpts at a time; tap an entry to read its current text, or choose **Open in Inbox** for a larger, temporary search view. The query is already entered and active. **Next results** advances through matches without sending them to the AI provider. Previews use the entry's body text; entries do not need titles or tags under the default search scope.

Search includes available saved text, including untagged and archived entries, by default. Enable **Only include tagged items** to restrict it to cards with a tag you added or confirmed. Add **only active** or **in the archive** to the request, or use the Inbox search scope chips. Ordinary search requires all query words; quoted phrases, such as **Find notes containing "my favorite thing"**, match consecutive words. Enabled static text replacement aliases are included. Results are ordered by save date, newest first. This is text search; it does not promise every related idea or inspect attachments without extracted text.

**Back to Chat** returns to the conversation. Leaving this temporary search preserves your previous Inbox filters and view. The Chat preview and Inbox use the same search specification. Results are fetched live rather than saved as a permanent list. If the library changes between pages, use **Refresh results**. Deleted, expired, and excluded content is omitted; opening a result checks availability again. Older search cards retain the alias spellings used when created; send a new search after changing replacement rules.

Search results are navigation aids, separate from **Saved sources** supplied to an answer. The expandable list and internal identifiers are not part of the spoken response. Explicit navigation works even when automatic knowledge retrieval is off, and does not need a Chat provider call.

### Questions across multiple notes

Questions such as **What are my 10 favorite things?** or **Summarize all notes about Batman** can draw on several saved entries. The assistant can refine a search and read the relevant entries before answering. It does not exhaustively infer preferences from everything you have captured.

Search and reading remain bounded. A requested number does not guarantee that many supported findings, and a limited result does not prove that no other entries exist. If Chat reaches its reading limit, narrow the request to one list or topic; explicit **Search for…** commands let you browse more matches. Quotes, former preferences, plans, and conflicting notes should be distinguished from current preferences. Check **Saved sources**. Use **Stop response** to cancel while searching or generating.

### Control search and indexing

Inbox remains the place to capture and organize material. In **My knowledge**, **Only include tagged items** is off by default, so available untagged and archived entries can be found. Turn it on to require a tag you added or confirmed. Rule and assistant tags remain suggestions until confirmed.

Search scope and Inbox organization are separate controls. Confirmed tagged cards still archive automatically; removing the last confirmed tag restores a card archived for that reason. Untagged cards remain in Inbox and follow ordinary retention; pin a card to retain it while pinned. Open the compact **My knowledge** control in Chat to turn automatic retrieval on or off. Changes affect future messages and leave your current draft intact. Explicitly attached entries and excerpts already in the conversation remain available in that conversation.

The editable **Daily Inbox Review** Chat action starts a new dated thread at 8 p.m. local time. It includes today's captures, tags, archive state, and excerpts. In Actions, run it manually, edit its prompt and model settings, choose a different card selection or schedule, duplicate it, or delete it. Android runs scheduled actions through WorkManager, so battery and system scheduling can delay the exact start time. In the review thread, requests such as **tag source 2 with Family**, **confirm source 2**, and **pin source 2** change the named card and return a receipt.

**Find related ideas** is enabled by default when no preference has been saved. If you previously turned it off, that choice is preserved. It downloads a roughly 23 MB model over unmetered Wi-Fi and adds local search by meaning for English text on supported devices. Turn it off whenever you prefer keyword search only. The status shows whether the download is waiting, running, or indexing entries; keyword search remains available throughout. Search and embedding run on-device; selected excerpts are sent to your configured chat provider when you ask a question.

### Names and alternate spellings

Knowledge search also uses your enabled **Settings → Text replacements** rules as aliases. For example, if one rule connects **Alex** and **Alyx**, asking “What should I get Alex for Christmas?” can retrieve an older entry saying “Alyx wants a telescope.” Either spelling can find the other; a configured phrase such as “my wife” can also match. This works with keyword search alone, without a model download or index rebuild.

Both spellings must belong to the same enabled rule. Search uses matching rules, not every name in your settings; it does not guess that all similar names identify the same person. Dynamic date/time replacement rules are not identity aliases. Changing or disabling a rule affects subsequent searches. Your original Chat message and saved entries are not rewritten. Alias matches improve retrieval, but results are still bounded and incomplete; check **Saved sources** when an answer misses something.

### Create a replacement rule in Chat

Send **Whenever I say Alyx, I mean Alex** as a new Chat message. You can also use **Add a text replacement: Alyx -> Alex**. The app checks its current rules, creates a missing rule, or adds the spelling to the rule for Alex. An existing enabled mapping is reported without duplication; a matching disabled rule is enabled. Unrelated settings and variants are preserved.

A spelling already mapped to a different replacement is a conflict: the app leaves it unchanged and points you to **Settings → Text replacements**. Identical spellings do not create a redundant rule. These commands support static names and phrases; configure dynamic date/time replacements in Settings. Quoted examples and attached notes do not execute commands. Editing or regenerating an older Chat message does not change settings; send a new message to request a change. If a settings request is interrupted, check Settings before resending it.

### Ask about current project status

Name the project: for example, **What is the current status of project Aurora?** Current-status retrieval looks for recent topic matches as well as relevant excerpts, so an old note with the exact word “status” is less likely to crowd out a newer update. Historical questions such as **What was Aurora's status as of 2025?** use ordinary retrieval.

A saved date is not necessarily an event date. A new note can quote an old update, and a plan is not evidence that the work happened. Chat is instructed to compare dates, identify contradictions, cite the evidence, and describe unverified information as the **latest saved update found**. If your most recent evidence is old, it should say so and ask for an update rather than present it as today's status.

Retrieval remains bounded and can miss entries; Hyperscribe does not maintain a verified live project-state database. Use **Saved sources** to inspect the dated text, and save a fresh update when the situation changes. Old entries can remain useful history instead of being deleted.

### What Chat can do

Direct app handlers support saving notes, adding to existing entries, schedules and their controls, recording controls, library searches/counts, source reading, reviewed entry replacement, and the text replacement commands above. Chat receives guidance describing these supported routes. Other configuration and workflows still use the app's screens; a conversational claim alone is not proof that a setting or item changed. An app handler confirms an operation only after it runs.

### Read the sources

Answers use brief source descriptions, dates, or labels such as **source 1**, so read-aloud does not recite internal source IDs. Exact references remain attached to **Saved sources** for opening entries and reviewing changes. This applies to new replies; existing saved conversation text is not rewritten.

After an answer, expand **Saved sources** to see capture dates, archived status, and short previews. Tap a source to open its relevant passage, then use **Read next passage**, **Start of entry**, or **Open entry & history**. Source text is read fresh. If it changed since the answer, the viewer tells you; deleted, expired, and knowledge-excluded sources show as unavailable. Larger source lists page eight entries at a time.

You can also type `Read source 1` or `Read entry <id> from <offset>` to read saved text in passages.

### Review an entry change

To propose an entry replacement, type **Update source 1 to: replacement text**. Tap **Review change** to compare the current text and proposed replacement. **Apply change** replaces the entire text and retains the previous version in history; **Cancel change** dismisses the proposal without editing; **Review later** closes the sheet while leaving the proposal pending. If an entry changes in the meantime, the old proposal cannot overwrite it. Long current entries show their first part with a link to read the full entry before replacing it. These controls do not submit or clear your Chat draft.

### Choose what stays available

In a capture’s **Contents & history**, **Available to Chat** can exclude any card from future knowledge access. Turning it back on makes its saved text eligible under your current search scope; a confirmed tag is required only when **Only include tagged items** is enabled. Use a pin to keep a card as long as it remains pinned. Existing chat excerpts are not removed when an entry is excluded.

Only saved text and transcripts are searchable; transcribe audio or extract attachment text first. Generated Chat/library answers stay in Chat unless explicitly saved, reducing repeated assistant output in the collection. Archiving alone does not protect an entry from expiry; check its retention controls when you want to keep it.

If related-idea search is waiting, connect to unmetered Wi-Fi and ensure the battery is not low. Keyword search works while the English model downloads and indexing catches up. If status needs attention, open **My knowledge**, check its message, and use **Rebuild search index** when needed. Rebuilding recreates search data from existing entries; it does not restore deleted content. **Settings → Chat** also exposes knowledge settings; save changes made there.

Automatic retrieval is only one way to provide context. Turning it off does not disable explicit library commands, remove earlier excerpts from a thread, or exclude content you deliberately attach. Selected excerpts and conversation messages reach the configured cloud provider when you use cloud Chat; local search does not make cloud Chat offline.

## Text to speech

Choose Piper for downloaded on-device voices, the Android system speech engine on mobile, or a configured Gemini or ElevenLabs provider. Long text is divided into ordered sections so playback can begin while later sections are prepared. Paragraph mode treats bullet and numbered-list items as separate speech segments.

## Provider keys and privacy

Cloud features require either personal provider credentials or optional RykerSoft Pro Access. In Settings, sign in with Google to check the exact Hyperscribe Mobile entitlement, or add only the personal keys you need. Personal keys take priority and Android encrypts them with a non-exportable Keystore-backed key. Entitled family values stay in memory only and clear on sign-out, revocation, or access failure. Credentials are excluded from backups, diagnostics, source repositories, and released artifacts. Content is sent to a provider only when the user invokes that provider-backed operation.

## Sharing and interoperability

Use Android Sharesheet, Process Text, Copy, and Share commands to move content between Hyperscribe Mobile and other apps. Compatible action JSON can be imported or exported for use with a separate Hyperscribe Desktop installation.

Desktop **Computer** actions, such as opening a folder or capturing the desktop, are retained with their operation settings and show **Requires Desktop** on Android. They cannot run as AI actions on the phone. Their automatic triggers are skipped on Android while preserved for Desktop, and an explicitly selected pipeline containing a Desktop-only action reports the limitation before running any of its actions.

## Sync between devices

1. Install the current Hyperscribe releases on the devices you want to use. Sign in to RykerSoft and Hyperscribe with the same Google account. Sync requires an active administrator-managed Pro grant for the edition you are using; Google sign-in alone does not grant access.
2. Open **Settings → Sync**, sign in, and enable Sync. Choose **All tagged items**, **Only selected tags**, or **Everything except** for Inbox. Check the matching selection on every device. Newly configured installations can start with cloud settings; existing installations retain their own selections.
3. Choose whether to share Chat threads and text replacements, and select actions by tag, category, or all actions. Inbox tags and Action tags remain separate even when their names match. An item's **Sync on all devices** control explicitly includes it; **Keep only on this device** overrides tag selection and protects that local item from remote changes.
4. Tap **Sync now** and inspect the latest successful check and uploaded/downloaded counts. This confirms that this installation completed a server reconciliation. Open the receiving device, run Sync there if needed, and check that the item is visible under its chosen policy and Inbox filters. Pro Active describes access; it does not confirm that another device downloaded your content.

Leave **Automatic sync** enabled to schedule relevant local edits and check remote changes. Android periodic checks use a 15-minute interval, but battery restrictions, missing connectivity, and background limits can delay them. Opening the app also checks changes. Force-stopping Android prevents background work until you open the app again. Failed work retries; signing out, disabling Sync, or switching to manual-only mode stops automatic work.

Sync transfers text and compatible metadata, including selected actions, tags, conversations, and replacement rules. Audio, images, files, generated speech caches, and device-local paths remain on their original device. Use a portable backup to move that media. A synced note can therefore contain text while its original recording is unavailable on another device.

Removing an item from sharing removes its cloud copy and keeps another device's existing local copy. Deleting a previously shared item propagates a deletion marker. Sync protects revisions that changed while a pass was running, but it remains separate from a backup; keep backups for recovery. If content is missing, check the Google account, Pro access, enabled policy, selected tags/actions, archive filters, and latest successful check on both devices. Use **Sync now** for a full reconciliation after upgrading an older client or after an interrupted connection. A failed pass keeps its error visible and does not claim a new successful check.

## Backup and restore

Use the Android document picker to create a portable ZIP backup. Backups contain app-owned content, settings, actions, chat, and media, but never provider credentials. Restore validates the archive before merging it with local data. Back up before uninstalling, clearing app data, or moving devices.

## Platform differences

Modern Android does not allow continuous background clipboard monitoring, silent microphone startup, desktop global hotkeys, or automatic paste into another app. Hyperscribe Mobile uses Sharesheet, Process Text, launcher/widget/tile controls, a foreground recording service, explicit Copy/Share, and an optional permission-gated floating control.

## PRO Features

Hyperscribe Mobile offers optional RykerSoft Pro Access for trusted family use. Access is managed for your RykerSoft account; use that same Google identity in the app.

* Family provider access — sign in with Google in Settings. If the RykerSoft administrator granted Hyperscribe Mobile, configured Gemini, OpenAI, Groq, and ElevenLabs family providers become available without saving their values on the device.
* Hyperscribe Sync — enable selected-content cloud synchronization in **Settings → Sync** after the product backend verifies your active grant. See [Sync between devices](#sync-between-devices) for setup and limitations.

Personal keys remain supported and take priority. Free and local workflows do not require an account, entitlement, or provider key. A Pro grant does not automatically enable Sync or share the Inbox.

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

Use the type, audio-status, schedule, pin, and tag controls to customize the list. Saved views can also filter by schedule kind (reminder, timer, alarm), status (including upcoming, snoozed, paused, completed), and sort by Alert time.

Open an item’s menu → **Alarm, timer or reminder** to attach or edit a schedule without changing its content. Choose a date/time or timer duration; use the same editor for pause/resume, restart, snooze, completion, cancellation, or removal. Chat and Index understand requests such as “Set a timer for 10 minutes” and “Remind me every day at 9 am to stretch.” See [Inbox schedules](inbox-schedules.md) for commands, repeating schedules, and Android permission requirements.
Tags can match any, all, or none of the selected tags. The sort menu includes date
copied, date added, cleanup date, and title, with ascending/descending order. It
also controls day grouping, pinned items first, and expanding/collapsing groups.
Tap an individual day heading to expand or collapse it. Expanding a day smoothly
aligns its heading with the top of the list, including short groups at the end.
Advanced filters retain
archive scope, compound content rules, nested tag rules, and retention windows.

Open the three-dot menu at the right of the view strip and choose **Save current view as new** to name and save the current
settings. Search, filters, sorting, and individual group states are captured.
An asterisk marks unsaved changes. Tap the active tab to recall its saved settings;
long-press it to update, rename, edit, or delete the view. **All** restores the
standard active Inbox; long-press **All** to reset every query and display setting
to defaults. **Archive** remains a separate built-in view. Saved views and the last
selected view persist on this device. Opening a view also scrolls its tab into view. Pull down on the strip or tap its expand arrow to reveal all views in a wrapping, scrollable picker. Selecting a view collapses the picker. Names can include emoji or consist entirely of emoji.

**Text** shows text cards and voice transcripts, without audio cards or generated TTS entries. **Audio** shows recordings and existing standalone speech recordings. Reading a note with its play button or **Speak** saves speech on that note and does not create another Inbox item. The saved voice and audio are reused on replay; changing the note's text invalidates its old rendition. Chat/watch read-aloud and draft previews also avoid creating extra Inbox items.

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

The Actions input panel stays above the action library. Its floating expand button grows the panel from roughly one quarter to half of the available page; tap again to shrink it. Text scrolls and can be edited without changing the source clipboard or Inbox items. Selecting items in Inbox automatically loads their full text into the editable field in selection order. Use the input picker to add, remove, or reorder items; changing the selection refreshes the field. Saving a text item or transcript replaces the input with that saved item, including when you save changes to the same item. Copying text from Inbox or its editor switches to the exact copied text and clears the previous input selection. Items without available text remain listed until their text is ready.

Use Load current clipboard or choose Use clipboard in the input picker to replace the working copy explicitly. The Custom page retains its input picker beside the type selector. When a text action finishes, a brief completion message confirms that its result was saved and copied. Tap the message or View to open that new Inbox item in Preview; switch to Write to edit it. Ignoring the message leaves the current input and action library ready for another action.

In an action editor’s Basics tab, select Action tags or choose New tag. The pencil on a tag edits its name, color, and matching rules. Action tags and Inbox tags are independent; the same name may exist in both. Existing action assignments are preserved as independent copies when upgrading. Search actions by tag name. Manage categories from the Actions options menu and use the color wheel to choose a category color.

Choose Automation → Auto-run in an individual action editor to run it after transcription or for new clipboard items. Automatic execution must also be enabled in the applicable recording stop profile.

## Floating menu gestures (v2.8.1)

Tabs are arranged from the right edge outward: Input, Actions, then Inbox by default. A short left swipe opens the nearest tab; continue a little farther to select the next tab. Settings lists the tab order nearest-edge first, including custom tabs. Opening and remembered-tab preferences apply when opening the menu without a swipe.

Input shows recording profiles at the top, followed by clipboard, text, audio, and image imports. While recording it shows stop profiles and recording controls.

In the floating Inbox, tap an item to copy it. Long-press for Edit or Pin/Unpin. Pinned items move to the top immediately; unpinning returns them to normal recent-item order (or removes an older item outside the configured recent limit).

## Shared controls notification (2.9.7)

Recording, the floating button, and the Index receiver share one **Hyperscribe controls** notification. Expand it to see current status and action buttons. Tapping the card opens Actions. While recording, shortcuts become Pause/Resume, Stop, and Cancel; your selected shortcuts return afterward.

In Settings, customize up to three notification shortcuts. Enable **Persistent notification controls** to keep the card available even when no service is running. With this option disabled, the card still appears whenever recording, the floating button, or the Index receiver needs it. Stop or disable each feature to remove the card completely. Manage ring imports and its receiver from Settings → Readiness → Set up Index ring & Pebble watch.

Android may separately display its own “displaying over other apps” notice while the floating button is shown. Pebble’s own connection notification is managed by the Pebble app.
