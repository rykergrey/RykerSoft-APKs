# Computer actions

Choose **Computer Action** in the action editor for built-in desktop operations. Existing **Python Action** definitions remain unchanged and continue to support custom text processing and filesystem automation. Computer actions provide a fixed operation picker and folder chooser, so routine desktop work does not require generated code.

| Operation | Behavior |
| --- | --- |
| Take screenshot | Save a unique PNG in the chosen folder. Windows captures the focused display by default, with primary-display and all-display options. Omarchy captures all displays. The default destination is the operating system's Pictures folder, under `Hyperscribe`. |
| Open folder | Open an existing folder in the default file manager. |
| Start screen recording | Start silent MP4 video. Windows captures the focused display by default, with primary-display and all-display options and a choice of 30 or 60 fps. Omarchy captures the focused display at 30 fps. The default destination is the operating system's Videos folder, under `Hyperscribe`. |
| Stop screen recording | Finish and save the recording started by Hyperscribe. Other applications' recordings are unaffected. |
| Lock computer | Lock the current desktop session. |
| Sleep / Hibernate | Request the operating system's power mode after confirmation. |
| Restart / Shut down | Request restart or shutdown after confirmation. |

Save a Computer action in any category and run it from Actions, a shortcut, or a reviewed Chat action card. The Actions type filter includes **Computer**. Chat can draft the same built-in definitions and edit their operation or folder.

Screenshot and recording destinations are folders, not filenames. Hyperscribe creates the capture folder if needed and generates unique filenames. Opening a folder requires that it already exists. Screenshots remain in the chosen folder, are added to Inbox, and are copied to the system clipboard as images.

Recording does not capture microphone or system audio. After starting, the tray menu offers **Stop screen recording**; a saved Stop screen recording action works too. Stopping saves the MP4 and adds its file to Inbox. Normal application exit also finishes the active recording on disk, but does not add an Inbox item. Windows uses fragmented MP4 so completed fragments are less dependent on clean finalization; a forced termination or power loss can still lose the current fragment or unflushed data.

Computer actions run without clipboard text. They can participate in Before, Combo and After sequences, passing the existing text unchanged to the next step even when a screenshot updates the system clipboard. A capture's file path is reported separately; the screenshot is not fed into the next action as image input. To analyze the screen, use an AI action with screenshot input. Automatic triggers are disabled for Computer actions, and disruptive power actions request confirmation each time they execute, including inside a sequence.

## Windows 11 and Omarchy

The same operation names are used on both platforms. Folders are machine-specific; a synced absolute Windows path will need changing before execution on Linux, and vice versa. A path beginning with `~` uses the current user's home folder; leaving a capture destination empty follows the system's configured Pictures/Videos folders, including redirected Windows folders and Linux XDG folders.

| Capability | Windows 11 | Omarchy / Hyprland |
| --- | --- | --- |
| Screenshot | FFmpeg Desktop Duplication capture for the chosen display, with GDI compatibility fallback | Active Wayland session and `grim` |
| Screen recording | FFmpeg Desktop Duplication with runtime hardware-encoder selection; available through Settings → FFmpeg Engine | `gpu-screen-recorder` or `wf-recorder`; `hyprctl` identifies the focused display |
| Open folder | Windows default file manager | `xdg-open` |
| Lock | Windows lock API | Omarchy lock command, with a logind session fallback |
| Sleep / Hibernate | Windows power APIs and an enabled supported power mode | systemd power operations, supported hardware and configured hibernation |
| Restart / Shut down | Windows shutdown command | systemd power operations |

Missing dependencies, unavailable power modes, invalid local folders and failed commands produce an actionable error. Hyperscribe does not silently substitute another operation. Hibernation must already be configured by the operating system; this action does not set it up. These actions do not provide region/window capture, audio recording, or remote computer control.

### Windows capture behavior and limitations

**Focused display** is the default; **Primary display** fixes the target to the main Windows display. Both use FFmpeg's `ddagrab` filter, backed by DXGI Desktop Duplication, with explicit adapter and output selection. Capture output reports identify the backend and recording encoder. Hardware H.264 encoders are tried at runtime (NVENC, Quick Sync and AMF) rather than assumed available because they appear in FFmpeg's encoder list. Software H.264 remains a fallback when supported hardware encoding cannot start.

**All displays (compatibility mode)** captures the Windows virtual desktop using GDI and requires a CPU screen copy. The same compatibility backend can be used when Desktop Duplication cannot start; the result explicitly identifies this fallback. Hardware encoding can still reduce encoding work, but GDI capture has higher overhead and may not capture every exclusive-fullscreen game correctly. Selecting one display avoids processing unrelated monitors.

Display selection and HDR checks require successful DXGI display enumeration for both capture backends. A remote, legacy, or otherwise unavailable display session that cannot supply this information fails with an error rather than capturing an unidentified display.

Windows capture currently supports **SDR**. The native display check rejects a known HDR-enabled target with guidance to turn off Windows HDR or use an HDR-aware recorder. Unknown HDR status is reported. HDR preservation and tone mapping are not implemented. Protected video, secure desktops, and applications that exclude themselves from capture may be blank or unavailable; capture success does not certify that the content is visible.

Use a global action shortcut while the game retains focus. Opening an app window can cause some exclusive-fullscreen games to minimize or stop rendering. Desktop mode changes, disconnecting a monitor, switching GPUs, or a capture-process failure can interrupt recording. Failures are surfaced and any partial recording path is retained; automatic gapless recovery is not promised. Validate a short recording with the intended game, display mode and GPU before relying on a long recording. Linux capture behavior is unchanged by these Windows settings.

## Saved definition

```json
{
  "name": "Open Projects",
  "category": "Computer",
  "type": "computer",
  "description": "Open my project folder.",
  "computer_operation": "open_folder",
  "computer_path": "~/Projects",
  "auto_run": "none"
}
```

Supported `computer_operation` values are `screenshot`, `open_folder`, `start_recording`, `stop_recording`, `lock`, `sleep`, `hibernate`, `reboot` and `shutdown`. `computer_path` is required for `open_folder`, optional for screenshots and starting recordings, and unused for the other operations. Imports and Chat proposals reject unsupported operations or missing required folders. The application checks platform availability and path existence when the action runs.

Windows capture actions also accept `computer_capture_target`: `focused` (default), `primary`, or `all`. `computer_recording_fps` accepts the integer `30` (default) or `60` for `start_recording`. Invalid capture options are rejected on import or in Chat proposals. These fields are preserved through export, import and sync on either platform; Linux currently ignores them and uses the behavior described above.
