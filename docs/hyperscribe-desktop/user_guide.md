# Hyperscribe user guide

Current release: **2.4.4**.

## Table of Contents

- [Getting started](#getting-started)
- [Inbox and capture](#inbox-and-capture)
- [Actions and chat](#actions-and-chat)
- [Saved knowledge in Chat](#saved-knowledge-in-chat)
- [Text to speech](#text-to-speech)
- [Provider keys and privacy](#provider-keys-and-privacy)
- [Clipboard palette](#clipboard-palette)
- [Settings and shortcuts](#settings-and-shortcuts)
- [Transcription replacements](#transcription-replacements)
- [Sync](#sync)
- [Application updates](#application-updates)
- [Backup and restore](#backup-and-restore)
- [Mobile interoperability](#mobile-interoperability)
- [PRO Features](#pro-features)
- [Support](#support)

## Getting started

Download the portable Windows executable or Linux bundle from the Hyperscribe
release page. Windows can run the executable directly. Linux users can run the
bundle in place or use the Omarchy installer described in the
[Linux and Omarchy quick reference](linux-omarchy.md). Application data remains
separate from the program under `%USERPROFILE%\.hyperscribe-desktop\` on Windows
or `~/.hyperscribe-desktop/` on Linux.

## Inbox and capture

Use Inbox for Audio and Text items. The New button opens the Viewer for a blank Text item. A recording, its linked transcript, and generated speech appear as one Inbox item. Open its Viewer to read or edit the transcript and play each available audio file. Text source badges distinguish Manual, Clipboard, Action, and other origins without creating more item types. Reminders, pins, search, and tag filters compose with both types. In the Tag Manager, each line in the bulk rule editor is a word or phrase trigger. A rule can also match an existing tag, so assigning that tag automatically applies related tags. Advanced regular-expression rules remain available.

View tabs keep their full titles and scroll horizontally when more space is needed.

Choose the **Save view** icon at the right of the Inbox tabs to save the current query, filters,
selected tags and tag matching mode, sorting, day grouping, pinned-first setting,
and expanded/collapsed groups. The tabs above search recall saved views. An
asterisk marks unsaved changes; click the active tab to restore it or right-click
it to update its settings. The same menu can rename or delete a view. **All**
resets the Inbox. Views stay on this desktop and the last selected view is
restored on startup. The sort menu offers newest/oldest and title order; title
sorting operates within each day when grouping is enabled.

Archive moves an item out of the active Inbox without deleting its saved text.
Use the **Archive** scope menu to show active items, archived items, or both.
Archived items do not count against the active Inbox item limit, but a configured
calendar retention period can still remove them. Right-click an item to archive
or restore it. The same menu can exclude one entry from Chat knowledge.

Add text or import audio from the bottom footer, or right-click the recording
button for either option. During recording, pause and cancel occupy those footer
positions; the right-click options remain available. The recording indicator
starts in **Inbox** mode, which transcribes and saves the recording. Select
**Chat** there to send the transcript to the active Chat thread and hear the
assistant's reply. Right-click **Chat** to choose a new thread for this
recording. Chat mode saves an Inbox item only when you ask it to, and this
spoken reply does not change the ordinary Chat **Speak responses** preference.
Click an Inbox item’s checkbox to select it. Clicking the rest of a row does
not change its checkbox, so double-clicking can open or copy the item without
selecting it. Right-click a day group for **Select All** or **Deselect All**.
Checked items are the Inbox
selection used for Send to Chat, Send to Actions, Ctrl+C stacks, and recording
targets; keyboard focus alone does not select an item. **Clear selection** above
the list deselects everything. Checked rows have a blue outline; active recording
targets have a red outline. The recording button and title show **Inbox (N)**
when targets are active. The recording popup has a green Inbox target button
with the same count. Open it to select items from the last 24 hours or choose
**Deselect all** to create a new item. Checked Inbox items are used automatically
only while the Inbox tab is visible; switching away drops those inherited
targets. Targets chosen explicitly in the popup remain active across tabs.
Double-clicking a row checks it before opening its Viewer. Opening a Viewer
through another route does not change the Inbox selection.
Each update is appended under a divider and a dated timestamp heading.
Set a TTS voice in Settings → Chat to hear replies. `Hyper+S` opens the same
Viewer. The Viewer opens to the Text tab in preview mode; click Text again to
edit, and click it once more to return to preview. Find and replace stays in
the Text tab beside the raw Markdown copy button. Audio, Chat, Actions, and
Alerts tabs sit beside Text. Right-click a tab to open it in a separate
right column; the
tab choices and column widths are remembered for each item. The Audio tab lists
recordings, copied audio, and generated speech in the same compact playlist.
Each row shows its duration and date/time when available, with icon controls
for playback, opening the folder, saving a copy, and copying the audio file.
Hover over an icon or shortened row to see its full details. Regenerate on a
recording regenerates its transcript; on a TTS segment it regenerates speech.
**Generate missing** and **Regenerate all** apply to the TTS playlist. Alerts
can be one-time or recurring notifications, alarms, timers, and reminders; an
item can have several schedules.
Inbox rows show the next enabled alert at the far right: hours and minutes
when it is less than 24 hours away, or the local date and time when farther
away. Hover over it for the alert's exact schedule.
Each item's chat uses the selected version's
text or transcript, including unsaved edits, and keeps its own conversation.
Ask a question or describe a change in the item's Chat tab. Each reply includes
a proposed complete revision when an edit is appropriate. The proposal stays
pending until you choose **Apply edit** on that response. **Review changes**
opens a side-by-side comparison with source line numbers and highlighted words;
you can apply it there as well. Text panes show line numbers for reference
(the formatted preview counts rendered blocks). Saving or applying an edit
updates the same Inbox item.

Chat messages use a shared email-thread layout, including the item's Chat:
sender and timestamp above the text, with a three-dot menu at the bottom right.
Click that menu or right-click a message's background to open its actions at
the pointer. Selected text and links keep their native context menus.
The menu offers **Copy**, **Copy raw Markdown**, **Speak**, **Regenerate**,
**Edit**, and **Delete** where supported. Main Chat also includes **Fork** and
**Download audio**. Editing your question saves
it and regenerates the response; editing an assistant reply saves the text and
clears its old edit proposal. Use **Options** to choose a model and its generation settings, **Actions** to
attach one or several saved actions, and **Inbox** to attach other items to the
next message. **Search** enables grounding when the provider supports it.
**Voice** routes recorded transcripts to the active viewer's Chat composer;
right-click it or drag upward to enable **Auto-send routed voice**. **Speak**
beside the composer reads new responses using Settings → Chat. These preferences
are saved with the item and shared between its left and right Chat panes.
Press Enter to send, or Shift+Enter for a new line.

Copied images and other non-audio attachments open in the **Files** tab. Each
file has **Open file** and **Extract text** controls; multiple files also offer
**Extract all text**. Audio attachments stay in **Audio**. Images include a
preview when the format supports it. Text extraction runs in the background
and opens the result in **Text**, saving a History version on the same Inbox
item while preserving its original files. Existing notes and edits are kept
above newly extracted text.

Images and PDFs use Gemini document extraction with the Gemini API key from
Settings, including scanned PDF pages. Plain text, source files, and Word
`.docx` documents are read locally. Missing files, unsupported formats, size
limits, and extraction failures are shown beside the affected file; one
failed file does not discard successful results from the others.

The **Actions** tab runs saved text actions on the selected version's current
content. Check one or more actions and use **Move up** or **Move down** to set
their order. **Sequentially** passes each result into the next action and saves
each successful step as a separate History version. **As one** combines selected
AI instruction actions into one request using the configured combined-action
model and settings, then saves one result. Actions with non-AI behavior or
their own before/after pipelines require Sequentially. If a step fails, earlier
saved versions remain available in History.

**History** opens a version tree on the left. Select
an older version to inspect it without changing the latest version. Edit and
save to create a new version linked to the one you selected, or use **Make current
as new version** to restore its text without deleting newer versions. The Audio
tab plays the original recording and generated speech linked to the selected
text version. Alerts remain attached to the item across versions. An audio item
needs a transcript before its contents can inform chat. Send selected items to
the main chat from their right-click menu.
When an alert appears, **Open in Viewer** closes the alert and opens its Inbox item.

## Actions and chat

Use the **Agent** toggle in Chat to work with local files through your installed
Codex CLI and ChatGPT login. Agent settings lets you choose allowed folders;
each batch of file changes has a selectable preview before it runs. See
[Agent mode](agent-mode.md) for setup, supported operations, and limits.

Actions transform selected text or Inbox content. Hyperscribe supports AI, Python, template, snippet, search, persona, TTS, and combo actions, including ordered Before, Combine, Main, and After stages. Python actions can also automate files within the current user's home/profile folders on Windows and Linux. Filesystem actions show a read-only preview and require confirmation before changes are applied; their completion report appears as a desktop notification instead of becoming an Inbox item. Chat keeps persistent threads and supports streaming, stop, edit/regenerate, fork, search, Personas, action context, and review-before-commit action-library proposals.

Choose **Computer Action** in the action editor for screenshots, opening folders,
silent screen recordings, locking, and power operations on Windows 11 and Omarchy.
These actions can run without text and fit into action sequences. See
[Computer actions](computer-actions.md) for setup, capture destinations, recording
controls, and platform requirements. Existing Python actions remain available.

The **All** Actions view shows every action in A–Z order, grouped by category.
Search, action type, favorites, and action tag filters can narrow the list; the
sort and display controls can change the order, grouping, and tag visibility.
Use **Save view** to keep those settings as another Actions tab. Right-click a
saved tab to update, rename, or delete it. Action tags have their own catalog,
separate from Inbox tags, and can be assigned to actions from the Actions list.

Grouped Actions default to **Auto** expansion: opening a category closes the
previous category. The expansion control cycles through **Auto**, **Expanded**
(all open), and **Collapsed** (all closed). Check an action's checkbox to add it
to the run selection. Checks keep their order when you open another category,
filter the list, or switch grouping. Number badges show the order for sequential
processing; the Run menu also supports combining the checked actions. Use
**Clear selection** to uncheck everything. Clicking a row leaves the checks
unchanged, and double-clicking runs that action directly. Favorite stars use the
Favorites category color and update when you change that color.
If **Auto-action** is enabled for transcription, it uses the most recently
checked action that is still selected.

Custom Actions has a tab for each supported draft type. A draft on one tab keeps
its own content and settings when you switch to another type. The **TTS** tab's
**Text to speak** box starts with the clipboard contents. Edit or replace that
text, then choose **Run** to speak it. Your edits stay when switching tabs;
**Use clipboard** replaces them with the current clipboard contents. **Save**
stores the voice preset without saving the text being spoken.

Active Chat
threads appear as tabs. Right-click a thread tab or use the thread menu to
archive it, or middle-click a tab to archive it immediately. Archived threads
move to the **Archived chat threads** list. Select
one there to restore and open it. Archived threads remain saved until deleted.
The list also has a separate delete control,
and the thread menus offer **Delete thread…** to remove a conversation entirely.
The three-dot thread menu also offers **Archive all threads**, **Archive other**
(keep the current tab), and **Delete all threads…**. These bulk actions apply
only to open chat tabs; existing archived chats stay in the archive list.
Deleting all open threads asks for confirmation. Archiving or deleting every
open tab leaves a fresh empty chat ready to use.
Right-click a tab to rename it from its message context, rename all threads, or
fill in names for threads still showing their default date and time.

## Saved knowledge in Chat

The recording indicator defaults to **Inbox**: a recording is transcribed and
saved. Click its magnifying glass to check one or more configured search
providers. When the transcript is ready, each selected provider opens in your
browser with that transcript as its search query. These choices apply to this
recording only and also work in Chat mode. Selecting search providers enables
transcription for that recording and skips automatic paste when it opens the
search tabs. The search and Inbox-item picker
buttons use the same small icon size without dropdown arrows.
Choose **Chat** to send the transcript to the active Chat thread, or
choose **New Chat** from the Chat button's menu. Chat mode speaks the assistant
reply using the configured voice. It does not automatically save the transcript
or reply to Inbox. Ask “Remind me to eat in five minutes” to create an Inbox
item with a scheduled alert, “What are my active reminders?” to list enabled
alerts across active and archived items, or “Save a note that ...” to create a
plain Inbox item. Chat can also cancel or reschedule a uniquely matched alert
and archive, restore, pin, or unpin a uniquely matched Inbox item. It asks for
a more specific name when several items match. Chat can toggle saved knowledge,
spoken replies, and streaming replies from an explicit request.
For voice requests, enabled transcription replacements run first. Inbox auto-tag
rules then match the original and replacement-processed request locally, before
the assistant receives it. If Chat creates an item with different wording, that
item keeps the matching request tags. Rule lists are not sent to the provider.

Chat's **Knowledge** button controls automatic retrieval from saved Inbox text.
It starts on. Only cards with a tag confirmed by the user enter knowledge;
automatic rule suggestions wait for confirmation. Adding or confirming tags
keeps cards in their current Inbox scope. Use Archive or Restore from archive
separately; both active and archived tagged cards can supply Chat knowledge.
A pin keeps a card retained while it remains pinned.
Turn Knowledge on or off to control retrieval on each normal provider Chat turn.
Only selected excerpts, within a bounded context, are sent to the configured
Chat provider. The entire Inbox is not attached. Audio and files need a saved
transcript or extracted text before their contents can be searched. Agent mode
continues to use its existing file and conversation context.
Generated action and speech outputs are omitted from automatic retrieval.

Ask **Search for Batman** or **Find notes mentioning Batman** to create a local
Search results card without a provider request. Open it for five current
previews at a time, or choose **Open in Inbox**. That temporary view includes
active and archived entries and restores your prior Inbox view when you leave.
Add **only active** or **in the archive** to the request to narrow its scope.
Enabled static text replacement rules act as search aliases; changing a rule
does not rewrite saved text. Right-click **Knowledge** to enable **Find related
ideas** for local search by meaning or rebuild the index from current entries.

**Daily Inbox Review** is a built-in Chat action scheduled for 8 p.m. local time.
It creates a dated Chat thread with a short visible request. Today's captured
cards, their tags, archive state, and bounded excerpts are supplied as hidden
review context. The assistant groups likely scratch captures and asks which
representative untagged cards deserve a tag or other change. Open Actions to
run it early, edit its instructions and model, change its schedule or card
selection, duplicate it, or delete it. The action has an automatically created
Inbox card headed **Daily Inbox Review memory** with a **Memory** tag. Explicit
standing preferences such as “Anytime you see a standalone number below five,
ignore it” are saved there and used in future reviews. Action settings can
attach other saved Inbox items to Chat context as well.
Scheduled Desktop actions run while Hyperscribe is open in the foreground or tray.
The Action Editor separates **Action steps**, **Inbox context**, and **Automatic
runs**. Before and After steps run in order; Combine adds AI instructions to one
request. Add a saved TTS action under **After** to read the result aloud with
that preset's voice. Speech preserves the text result; multiple speech steps
play in order after the action succeeds. The action choosers refresh when the
library changes and when opened, preserving unsaved steps and selections.
Settings appear only for action types that support them. Category is
beside Action Type, and Cancel closes the editor without saving changes.

Use **Choose Inbox items…** to browse collapsed day groups. Expand one day or
all days, type a search and press Search or Enter, then click an item to add it
or check several and choose **Use selected items**. Search runs only when
submitted, and checked items stay selected across searches. The chosen items
appear by title in the editor and can be removed there. Items under **Always
include** supply reference context when the action is used in Chat.

Chat actions can run manually, daily, or once at a local date and time. Scheduled
runs use today's Inbox or explicitly saved items; temporary Inbox checkboxes
are for manual runs. A busy Chat delays a scheduled run. An overdue one-time run,
or today's daily run after its set time, starts when Hyperscribe is available.
Starting a scheduled Chat preserves your current draft, and a launch that cannot
start generation remains eligible to retry. Action tags have a larger checklist
and a find field; filtering tags does not clear checked tags. Scrolling over a
closed dropdown or time field scrolls the editor without changing that setting.

In the review thread, commands such as **tag source 2 with Family**, **confirm
source 2**, and **pin source 2** change saved cards and return a receipt.
Long user messages collapse behind **Show more**; assistant answers stay open.

Normal questions use up to eight retrieved excerpts. Explicit collection
questions can use up to forty, with a larger but still bounded context. Answers
show **Saved sources** when excerpts were supplied. A brief follow-up can reread
the preceding answer's still-available sources when a fresh query finds none.
Open a source to inspect
its current entry and version history; changed or unavailable sources are
marked. `Read source 1` reads current text, and `Update source 1 to: ...`
creates a whole-entry replacement proposal. **Review change** shows the current
and proposed text; **Apply** checks the source revision again and preserves the
previous text in history. Editing an old Chat message does not execute a source
change.

You can also send **Whenever I say Alyx, I mean Alex** or **Add a text
replacement: Alyx -> Alex** as a new Chat message. The app checks existing
rules before saving a static replacement and reports conflicts. These local
search and settings commands stay out of provider conversation history.

Saved material is reference material. How an item arrived does not establish
who wrote it, whether you agree with it, or whether it is true. An Inbox
timestamp can change when an item is copied again; it is not a verified event
date. Retrieval can miss relevant entries, especially
implied preferences and content without text. Check the current sources when
an answer matters.

## Text to speech

Choose Piper for downloaded local voices, Windows speech where available, or a configured Gemini or ElevenLabs provider. Long text is divided into ordered sections so playback can begin while later sections are prepared.

## Provider keys and privacy

Provider operations use personal credentials or approved RykerSoft Pro shared
access. Open Settings to connect Pro or add only the personal keys you need, and
use Show/Hide when reviewing a secret field. Credentials are excluded from
action exports, diagnostics, source repositories, and released artifacts.
Content is sent to a provider when you invoke that provider-backed operation;
selected source records also go to account-owned cloud storage when Sync is
enabled. Local-only exclusions and Sync selection controls are separate from
provider Chat context.

## Clipboard palette

Use the configurable global palette hotkey to transform or route clipboard text without leaving the foreground application. The palette preserves normal external auto-paste behavior unless Hyperscribe Chat is actively selected.

On Omarchy, the managed Caps Lock Hyper layer also provides clipboard-history
cycling: `Hyper+E` selects a newer item and `Hyper+D` selects an older item.
These mappings appear in the Shortcuts section and can be changed or given
additional alternatives.

## Settings and shortcuts

Open Settings and choose a page from the **Settings section** dropdown. The
**Find a setting** field narrows that list and jumps to matching content.

In **Shortcuts**, each global command and saved action has an **Edit shortcuts**
control. Add as many alternate one-chord combinations as needed, remove only the
ones you no longer want, and then apply the Settings dialog. An empty list leaves
that command unassigned. Windows registers valid combinations as native
system-wide shortcuts; unsupported or conflicting combinations are reported
instead of degrading into an unsafe bare-key shortcut.

Linux/Omarchy shortcuts are desktop-owned. The same page shows the managed
Hyprland integration, its current installation status, and the separate
Caps Lock/Hyper mappings. Ordinary shortcuts remain available when Hyper mode is
enabled, so a recording action can have both `Hyper+R` and any additional keys.

## Transcription replacements

Use **Text Replacements** to clean up every completed transcript before it enters
the normal Inbox and clipboard workflow. One rule can contain several spoken or
misspelled variants that all become the same replacement. Matching ignores case,
prefers the longest phrase, and respects word boundaries. Rules can be disabled
without deleting them.

Replacement text can include `{current_date}`, `{date_stamp}`, `{current_day}`,
`{current_month}`, `{current_year}`, `{current_time}`, or `{timestamp}`. The
value is expanded when the transcript finishes.

## Sync

Sync remains opt-in. Select Inbox tags, action categories, Action tags, and chat-thread
behavior in **Sync**, or choose **Sync on all devices** for an individual Inbox
item regardless of its tags. The Settings catalog shows how many items for each
Inbox tag exist locally and in the cloud, including cloud-only tags available to
import. Action tags remain separate from Inbox tags, including when both catalogs
contain the same name. Same-name tags within each catalog are reconciled
case-insensitively across devices.

To set up delivery between devices:

1. Open **Settings → Sync** and sign in with the same Google account on each
   device. Connect or refresh approved RykerSoft Pro access. **RykerSoft Pro
   active** confirms account access; it does not confirm a content transfer.
2. Enable Sync and select compatible content on every device. **All tagged
   items** shares tagged Inbox records; ordinary untagged clipboard captures stay
   local. **Only selected tags** narrows sharing. **Everything except** also
   includes untagged items. An explicit **Keep only on this device** exclusion
   overrides every tag and per-item sharing choice.
3. Enable Chat threads and text replacement rules if needed, and choose which
   actions to share. An Inbox tag and an Action tag with the same name remain
   separate. Open the Desktop Chat workspace if its saved thread library has not
   loaded yet. Existing configured devices keep their own selection preferences;
   checking a choice on one device does not replace another device's choices.
4. Enable automatic Sync or press **Sync now** on each device. Desktop combines
   selected edits for three seconds and checks cloud updates every five to fifteen
   minutes while running. Mobile uses scheduled background work subject to
   Android's connectivity and background limits. Delivery is not instantaneous.

**Sync complete** shows the UTC check time and uploaded/downloaded record counts
after this client's server requests, local saves, and sync receipts have completed.
Counts include tags and deletion markers, so they can differ from visible Inbox
item counts. They confirm this device's pass, not receipt by another device. To
check both directions, share a tagged note, run Sync on the other device and verify
its text, then edit it there and Sync back. Use the full **Sync now** pass after
updating older clients or when a periodic refresh appears stale.

Selected text, source relationships, versions, and supported metadata travel
together. File, image, and audio attachment bytes and local paths remain on the
originating device; another device cannot open those local files through Sync.
Search indexes, embeddings, speech caches, provider keys, and device shortcuts
are not transferred.

An edit on a slow-clock device can sync when the cloud still matches its last
acknowledged revision. If an offline deletion conflicts with an unseen cloud edit,
Sync keeps and imports that cloud record; review it before deleting again. Removing
sharing leaves existing copies on other devices intact. Failures retain local
content and retry with backoff when automatic Sync is enabled. A failed local save
or server request reports a failure rather than a new completed pass.

Further storage and conflict details are in [Hyperscribe Sync](sync.md).

## Application updates

Open **Application & Updates** to see the installed version and check the public
RykerSoft release registry. Packaged Windows and Linux builds can download and
install a compatible release from this page; follow the restart prompt to finish
the replacement. Development checkouts use the repository workflow instead.
The same section has buttons for the release page and the Hyperscribe Git
repository when a manual update is preferred.

## Backup and restore

Full portable backup and restore is not currently available in this Desktop build.
Action-library JSON export does not back up Inbox content, Chat history, or media.
Preserve the complete application data directory before deleting local data or
moving computers. Cloud Sync also does not replace a complete local backup,
particularly because attachment bytes remain local.

## Mobile interoperability

Hyperscribe Desktop and the separately listed Hyperscribe Mobile application use different platform-native interfaces. Compatible action-library JSON can be exported or imported between them; provider credentials are never included.

For account-based sharing, update both applications and use the same Google
account with approved Pro access and compatible Sync selections. Text and
supported source metadata can travel between Windows, Linux, and Android.
Computer actions, shortcuts, installed CLIs, and local media depend on the device.
Google Sheets Chat editing is planned and is not part of this release.

## PRO Features

* Shared provider access — connect approved Gemini, OpenAI, Groq, and ElevenLabs access with Google.
* Cross-device Sync — share selected Inbox content, tags, actions, Chat threads, and text replacement rules between signed-in devices.

RykerSoft Pro provides approved shared Gemini, OpenAI, Groq, and ElevenLabs access
and cross-device Sync. Use the same Google account as RykerSoft and choose
**Connect RykerSoft Pro** or **Refresh RykerSoft Pro** in Settings. Successful
checks save account identity and shared credentials in the system credential
store, separately from personal keys. A temporary verification outage preserves
previously verified access; signing out, switching accounts, or an explicit
access denial clears it. If saving credentials fails, unlock the credential store
and refresh Pro before relying on a restart.

Personal provider keys remain available independently. Recording, organization,
local actions, Chat with personal keys, and local TTS do not require Pro. Cloud
provider requests still require internet access, and provider plan limits or
billing remain applicable.

## Support

Contact heavensounds@gmail.com and include the platform, Hyperscribe version, and a secret-free diagnostics export when available.
