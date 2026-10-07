# Hyperscribe Desktop updates

## v2.4.4 — 2026-10-07

- Make cross-device Sync use acknowledged revisions before device clocks, retain
  an unseen cloud edit during an offline deletion conflict, protect local edits
  made during a request, and reject writes or results after an account switch.
- Report completed Sync with a UTC check time and uploaded/downloaded record
  counts after server confirmation and durable local saves. Report disabled,
  changed-selection, deletion-conflict, and failed-save states explicitly.
- Coalesce automatic changes, read server-stamped deltas, avoid uploads of
  unchanged records and queries for ordinary untagged clipboard activity, and
  retry failures with bounded backoff. **Sync now** performs a full repair pass.
- Keep local attachment paths and speech caches out of shared payloads, preserve
  device-local caches when text changes remotely, and improve Desktop/Mobile
  interoperability for scoped tags, Chat payloads, removal markers, and text
  replacement rules. Attachment bytes remain local.

- Improve Windows Computer Action screenshots with DXGI capture and a native compatibility fallback. Recording selects a display and 30 or 60 fps, tries hardware encoding, reports its active backend, checks for encoded frames, and preserves completed MP4 fragments after interruptions.
- Detect HDR displays before Windows capture and give guidance when SDR capture would be unreliable. Keep the Linux capture backend and existing action libraries compatible.

- Add an offline searchable emoji picker beside the tag name, show chosen icons
  in tag menus and managers, and list tag menu choices alphabetically on both
  Linux and Windows.
- Use the same Qt color chooser on Linux and Windows for tags, action categories,
  and appearance accents. Keep nested editors responsive after color selection,
  cancellation, or Escape without leaving hidden modal dialogs behind.
- Keep manually tagged Inbox items visible and searchable. Allow tagged items
  to be archived or restored independently, and recover legacy automatic tag
  archives on startup while preserving deliberate archives.
- Reorganize the Action Editor into action steps, Inbox context, automatic runs,
  and result settings; move category beside action type and add Cancel by Save.
  Prevent scroll-wheel edits to closed selectors and time fields. Expand the
  action tag checklist and replace the Inbox dropdown with collapsed day groups,
  submitted search, and persistent multi-selection. Validate Chat schedules and
  retry launches that did not start generation without duplicating their thread.
- Add a Viewer Actions tab for ordered saved-action runs. Sequential runs save
  each completed action as an item version; combined runs compile compatible AI
  instructions into one request and save one version.
- Simplify Inbox item Chat to one Ask action that replies conversationally and
  attaches an unapplied edit proposal. Review changed lines and words in a
  side-by-side diff, apply from either the response or review dialog, and use
  line numbers in the Text editor and preview for reference.
- Apply voice transcription replacements and Inbox auto-tag rules locally before
  Chat provider calls. A Chat-created item retains tags triggered by the original
  request, even when the assistant rewrites its text. Show each Inbox item's
  next alert as hours/minutes within 24 hours or as a local date and time later.
- Route Chat recordings only to Chat, without automatic transcript or speech
  Inbox entries. Chat can save requested notes, set timed Inbox reminders, and
  list active alerts from current Inbox state, including archived entries.
  Explicit Chat requests can cancel or reschedule a matched alert and archive,
  restore, pin, or unpin an unambiguous Inbox item.
- Make the recording indicator's Inbox and Chat modes explicit. Chat can send
  the transcript to the active or a new thread and speaks that reply using the
  configured Chat TTS voice without changing the normal Chat speech setting.
- Add locally indexed saved knowledge to Chat with an explicit Knowledge toggle,
  bounded source excerpts, current-source navigation, and local search result cards.
- Add Inbox archive scope and per-entry Chat availability. Archived entries remain
  searchable while retained; temporary Chat searches restore the previous Inbox view.
- Add replacement-rule commands, dated source references, collection questions,
  and revision-checked whole-entry edits with a visible review step.

## v2.4.2

- Save custom Inbox and Actions views, with separate Action tags and independent Chat and Custom Action tabs.
- Edit Inbox items in a versioned Viewer with item chat, audio playback, and multiple alerts. Recordings, transcripts, and generated speech stay together.
- Choose Codex or Gemini CLI for text generation and use reviewed Agent mode for file tasks in allowed folders.
- Improve recording controls, action results, notifications, sync reconciliation, and local data recovery.
- Build Windows and Linux packages from one source revision with the same isolated test preflight.

## v2.4.1

- Fix Pro verification after a successful Google login by reusing the Hyperscribe session.
- Desktop and Mobile now use the same shared provider keys, including future updates.

## v2.4.0

- Select recent Inbox items from matching Chat and Actions dropdowns, or right-click Inbox items to send them to Actions. Clear the Actions selection to return to clipboard input.
- Connect Google login to RykerSoft Pro for approved shared provider keys.
- Require Pro for cross-device sync of content, tags, actions, and chats.
- Add optional text replacement rule sync between Windows and Linux, including edits and deletions.
- Preserve personal keys and local workflows when signed out or without Pro.
- Include current Inbox-to-Chat selection, chat audio exports, action review, drag-and-drop, and responsiveness updates.
- Offer Windows and Linux downloads through RykerSoft.

## v2.3.0

- Replace the crowded Settings tab strip with a searchable section dropdown, while preserving direct links to individual settings pages.
- Make every global and per-action shortcut editor accept any number of alternate one-chord shortcuts, including comma-key combinations, with duplicate validation and safe capture while active hotkeys are suspended.
- Restore reliable Windows shortcut registration with fail-closed parsing, no-repeat native hotkeys, useful registration diagnostics, and robust recording toggle/cancel routing.
- Keep ordinary recording shortcuts active alongside Omarchy's Caps Lock Hyper layer. Show and customize the managed Hyper mappings in Settings, including `Hyper+E` for newer and `Hyper+D` for older clipboard-history entries, and expose install, refresh, status, and removal controls for the Omarchy integration.
- Add **Application & Updates** settings with the installed/latest version, a non-blocking update check and download, packaged Windows and Linux installation flows, release-page access, and a direct link to the Git repository for manual updates.
- Add automatic transcription replacement rules. Each rule can match multiple case-insensitive phrase variants, can be enabled independently, and can insert current date/time values through documented dynamic tokens.
- Refresh the visual system with a denser rectangular layout, clearer action/favorite/status affordances, consistent theme tokens, and automatic use of the active Omarchy color palette on Linux with a cross-platform fallback theme.
- Improve the compact palette and Inbox editing experience with better-sized controls, clearer navigation and metadata, and more consistent dialogs, toolbars, playback controls, and prompt fields.
- Reconcile same-name Firebase tags case-insensitively across devices, migrate item/action/policy references to one deterministic tag ID, show local and cloud tag item counts, and allow an individual Inbox item to opt into Sync independently of its tags.
- Improve Google sign-in state handling and allow the cloud tag catalog to refresh without first enabling Sync, while retaining local-first behavior and existing timestamp/tombstone conflict handling.
- Centralize release metadata at v2.3.0 and produce consistently named Windows and Linux packages for the update channel.

## v2.2.0

- Expand Python custom actions from clipboard-only transforms to guarded user-folder automations on Windows and Linux.
- Preview filesystem changes in a centered, scrollable confirmation dialog with stacked original and proposed filenames, then report completion with a compact desktop notification.
- Generate platform-aware Python for home-directory folders while rejecting system paths, path traversal, unconfirmed pipeline execution, and mutating preview functions.
- Add Firebase synchronization for the shared tag catalog and selected Inbox items, with cross-device conflict handling and deletion tombstones.
- Add global Inbox search and preserve the current search, tag, and action-library improvements from the reconciled desktop source trees.
- Add action tags and compact, backward-compatible tag editing while retaining compatibility with existing action JSON libraries.
- Keep Hyperscribe content in its dedicated Firebase project and preserve local-first operation when signed out or offline.

## v2.1.0

- First standalone RykerSoft release for Hyperscribe Desktop.
- Package the current Python/PySide6 application as a portable Windows executable.
- Include the action library, Inbox and recordings, transcription, persistent chat, screenshots, reminders, clipboard palette, and local/cloud TTS workflows.
- Keep provider access bring-your-own-key and explicitly exclude credentials from source, diagnostics, backups, and release artifacts.
- Add a private Desktop source repository and a separate public Desktop release entry.

Support: heavensounds@gmail.com.
