# Floating control menu

Tap the floating button for the default recording action. Drag vertically to reposition it. Swipe inward or hold to reveal a grid of configured destinations. Tap a destination to open it; selecting a destination never starts recording or executes an action. The **Tabs** control returns to the grid. Back returns to the grid from a module, then closes the menu.

The category grid fits its contents up to the configured height, then scrolls when more tabs are present. Modules use the configured workspace height. Closing the panel restores the floating button's saved position. The panel follows the app’s light or dark theme, uses cyan emphasis, and offers controls with at least 48 dp touch targets. Settings → Floating control → Floating menu configures dimensions and modules. Tabs can be added, duplicated, renamed, reordered, hidden, and removed. Capture, Actions, Inbox, and Listen are module types, so multiple tabs of the same type can use different settings.

## Capture

Choose all recording profiles or a selected set, and choose which import shortcuts appear. Import from clipboard adds text without opening the app. New text, text-file import, audio-file import, and image import open the existing app editors or pickers. Capture and stop workflow profiles remain distinct.

Active recording controls remain available while browsing other modules. Closing the menu does not stop recording.

## Actions

An Actions tab can show all eligible clipboard actions or an ordered selection. Apply a category filter, selected tags, or both. When both are configured, an action must match the category and at least one selected tag. Image-input actions require the main app.

## Inbox

An Inbox tab can show all Inbox content, bind to an existing saved view, and restrict results to selected tags. Saved view bindings follow future edits to that view. Missing saved views produce an empty state instead of silently showing unrelated content. Filtering occurs before the recent-item limit or inclusion of pinned items.

Text previews copy their full text on tap. Non-text content opens its existing editor. Long-press exposes Edit and Pin/Unpin. The list updates as content and view settings change.

## Listen

Choose a speech action from the dropdown and tap **Play clipboard**. The initial **Default** selection follows the application's current default speech action. Selecting another action applies only to that playback choice.

The complete action runs on the clipboard text before playback. For example, a TTS action with a summarizer in its Before steps summarizes the entire article once, then speaks the transformed text. Chains containing multiple TTS steps play their speech outputs in execution order.

The current speech session appears as an ordered segment playlist with generation and playback state. Controls remain visible while the playlist scrolls. Very short configured panels allow the full Listen surface to scroll so controls remain reachable:

- Play/pause suspends or resumes speech, including while generating.
- Previous/next selects an adjacent segment; tap a row to jump directly to it.
- Seek and elapsed/total time apply to the current segment.
- Stop cancels active and queued speech while retaining the current playlist for replay. Cached audio is reused where available.

Close the panel or return to another app to keep listening. The playlist is the live session; saved speech remains available in the main Inbox. These controls do not operate unrelated recording playback.

## Default speech actions

Settings → Text to speech chooses the default speech action. The TTS action editor also offers **Use as default speech action**. Provider, voice, model, output settings, and processing steps belong to the action.

Existing effective default TTS settings migrate into a **Default speech** action. Existing per-chat voice presets migrate into equivalent speech actions. Migration preserves settings and existing actions, and is safe to resume after an interrupted start.

Chat has a per-conversation speech-action selector used by manual and automatic reading. Inbox Listen, text editors, and spoken reminders offer the same default-or-specific-action choice. Choosing Default runs the current default pipeline; explicit playback of previously generated audio reuses that audio.

Invalid or missing actions produce an actionable error rather than silently switching voices. An action used as the default, a chat speech selection, or a spoken reminder cannot be deleted until its references are changed.
