# Linux and Omarchy quick reference

Hyperscribe supports Linux through a portable PyInstaller build. Omarchy uses
Wayland and Hyprland, so the desktop owns global shortcuts while Hyperscribe
exposes commands to its running instance.

## Run the app

```bash
chmod +x HyperscribeDesktop-v2.3.0-linux-x86_64/HyperscribeDesktop
./HyperscribeDesktop-v2.3.0-linux-x86_64/HyperscribeDesktop
```

User data remains in `~/.hyperscribe-desktop/`. For the complete native feature
set, install the Omarchy packages used by the Wayland backends:

```bash
omarchy pkg add wtype grim slurp wl-clipboard tesseract ffmpeg speech-dispatcher espeak-ng
```

These dependencies are Linux-only. Windows continues to use its existing
Win32 capture, shortcut, input, clipboard, and speech implementations.

## First-class desktop installation

The Omarchy installer installs the release into a stable user location,
creates the `hyperscribe` command and application launcher, enables one
graphical-session user service for the resident app, and then installs
Hyprland bindings. No root access
is required. Running it again updates those managed files.

## Install Omarchy shortcuts

Run this once from the folder containing the executable:

```bash
./HyperscribeDesktop-v2.3.0-linux-x86_64/HyperscribeDesktop --install-omarchy-shortcuts
```

The installer:

- installs a stable `~/.local/bin/hyperscribe` command;
- creates an application-menu entry and one restartable user service;
- backs up `~/.config/hypr/bindings.lua`;
- adds one clearly marked, managed block;
- updates that block instead of duplicating it when run again;
- reloads Hyprland and checks `hyprctl configerrors`;
- restores the backup automatically if validation fails.

Installed shortcuts:

| Shortcut | Action |
|---|---|
| `Ctrl+Space` | Show the palette |
| `Ctrl+Shift+R` | Start or stop recording |
| `Ctrl+Shift+Escape` | Cancel recording |
| `Ctrl+Alt+Up` | Select an older clipboard-history entry |
| `Ctrl+Alt+Down` | Select a newer clipboard-history entry |

These are defaults, not a fixed limit. In **Settings → Shortcuts**, every
ordinary global command and per-action command can have any number of alternate
one-chord shortcuts. Saving the page refreshes the managed Hyprland block. The
page also reports whether the Omarchy integration is installed and provides
controls to install, refresh, or remove it.

When the Omarchy Hyper-key option is enabled in Settings, holding Caps Lock sends
`Ctrl+Alt+Shift+Super` system-wide. Tapping Caps Lock does nothing.

This uses `keyd`, because an XKB Caps Lock option cannot emit all four modifiers.
On Omarchy, install `keyd`, place the following in `/etc/keyd/hyperscribe.conf`,
then enable `keyd.service`:

```ini
[ids]
*

[main]
capslock = layer(hyper)

[hyper:C-A-M-S]
c = C-c
v = C-v
a = C-a
```

The explicit C/V/A mappings produce native Ctrl shortcuts, including inside GTK
file dialogs. The remaining keys expose the complete Hyper chord for application
and Hyprland shortcuts.

| Shortcut | Action |
|---|---|
| `Hyper+1` through `Hyper+4` | Show the corresponding palette tab in the order saved in Settings |
| `Hyper+R` | Start or stop recording |
| `Hyper+W` | Show or hide Hyperscribe (the app keeps running in the system tray) |
| `Hyper+S` | Open a blank editor for a new Inbox text item |
| `Hyper+Q` | Cancel recording |
| `Hyper+E` | Select a newer clipboard-history entry |
| `Hyper+D` | Select an older clipboard-history entry |
| `Hyper+C` | Native copy (`Ctrl+C`) |
| `Hyper+V` | Native paste (`Ctrl+V`) |
| `Hyper+A` | Native select all (`Ctrl+A`) |
| `Hyper+F` | Open Find, then paste |
| `Hyper+G` | Open the editable search-provider menu |

Press both Shift keys together to toggle actual Caps Lock.

The Hyper rows are shown separately from ordinary shortcuts in Settings. Each
mapping can be changed or given additional alternatives, including the
`Hyper+E`/`Hyper+D` entries shown beside clipboard-history cycling. Enabling the
Hyper layer does not disable ordinary recording toggle/cancel shortcuts.

Check or remove the integration:

```bash
./HyperscribeDesktop-v2.3.0-linux-x86_64/HyperscribeDesktop --omarchy-shortcut-status
./HyperscribeDesktop-v2.3.0-linux-x86_64/HyperscribeDesktop --uninstall-omarchy-shortcuts
./HyperscribeDesktop-v2.3.0-linux-x86_64/HyperscribeDesktop --uninstall-linux-integration
```

## Command reference

Desktop shortcuts and automation tools can call these directly:

```bash
hyperscribe --command show-palette
hyperscribe --command toggle-window
hyperscribe --command show-clipboard
hyperscribe --command show-search
hyperscribe --command show-tab-1
hyperscribe --command show-tab-2
hyperscribe --command show-tab-3
hyperscribe --command show-tab-4
hyperscribe --command toggle-recording
hyperscribe --command cancel-recording
hyperscribe --command clipboard-older
hyperscribe --command clipboard-newer
hyperscribe --command copy
hyperscribe --command paste
hyperscribe --command select-all
hyperscribe --command find-paste
```

If Hyperscribe is running, the command is sent to that instance. If it is not
running, the same command starts the app and then performs the action.

## Linux differences

- Windows continues to use `RegisterHotKey`; Linux shortcuts are desktop-owned.
- Wayland capture uses `grim` and Omarchy's frozen `slurp` selectors. Window
  mode selects real Hyprland windows, while monitor and multi-monitor capture
  use compositor-native geometry instead of Qt's blocked screen-grab API.
- Screenshot OCR keeps Gemini as the primary engine and automatically falls
  back to Omarchy's local Tesseract pipeline when cloud OCR is unavailable.
- Qt system speech needs Speech Dispatcher plus eSpeak NG on Linux. Piper and
  cloud TTS remain independent alternatives.
- Large native hover tooltips are suppressed inside the palette on Wayland
  because some compositors position those popup surfaces in the screen center.
- Clipboard and action toasts use Omarchy's built-in notification service, so
  they inherit the current Omarchy theme, placement, animation, and notification
  history, and its overlay layer keeps them visible above fullscreen apps. Rapid
  clipboard cycling replaces one notification instead of stacking a new popup for
  every key press. The card shows newer, selected, and older rows plus the current
  history position, and clicking it opens the Clipboard tab. Shortcut-triggered
  feedback is treated as a user action, so it remains visible during Do Not Disturb;
  passive clipboard-capture notifications continue to respect Do Not Disturb.
- On Wayland, Hyperscribe uses `wl-paste --watch` for background text, image,
  and local-file changes.
  This avoids Qt's focus-dependent clipboard delivery, so history and notifications
  update while another application remains active. Qt remains the fallback.
- Hyperscribe's Qt toast windows are retained only as a fallback when a Linux
  desktop notification service is unavailable.
- The palette is pinned across workspaces and the non-activating recording OSD
  stays bottom-center while recording or transcribing.
- Repeated Wayland announcements of unchanged clipboard contents are ignored,
  so focusing Hyperscribe does not create another clipboard capture toast.
- If a shortcut conflicts with another desktop binding, change or remove it in
  **Settings → Shortcuts**, then refresh the Omarchy integration. The marked
  block in `~/.config/hypr/bindings.lua` is generated and may be replaced.

## Local transcription

Select **Local Voxtype (Omarchy, private)** in Settings > Transcription. This
uses Voxtype's existing model, accelerator selection, and local inference while
Hyperscribe continues to own the recording file, transcript history, clipboard
entry, auto-actions, and auto-paste behavior.

```bash
voxtype --version
voxtype config
```

If it is missing, install it with `omarchy voxtype install`. Hyperscribe sends
the completed WAV file to `voxtype transcribe`; it does not use the Voxtype
daemon or its cursor-typing output. The cloud-only experimental 2x audio option
is intentionally ignored for local transcription because local speed comes
from the inference backend, not by accelerating the speech audio.

## Build from source

Use Python 3.12:

```bash
python -m venv .venv
.venv/bin/python -m pip install -r requirements-lock.txt
.venv/bin/python build_linux.py
```

The output is the onedir bundle
`dist/HyperscribeDesktop-v2.3.0-linux-x86_64/`. Unlike a PyInstaller one-file
binary, the installed resident app does not unpack hundreds of megabytes into
Omarchy's RAM-backed `/tmp` at each launch.

The release build also creates the archive consumed by **Settings → Application
& Updates**. A packaged update is downloaded, validated against its published
SHA-256 value when available, safely extracted, and installed by atomically
replacing the application bundle. The service is restarted to complete the
update. A source checkout instead links to the Git repository for manual updates.

## Linux privacy and lifecycle

Hyperscribe stores its content under `~/.hyperscribe-desktop/` with directory
mode `0700` and file mode `0600`. On Linux, provider credentials are migrated
to Secret Service when `secret-tool` and an unlocked session keyring are
available; the private settings file remains the fallback on other systems.

The command socket lives under `$XDG_RUNTIME_DIR/hyperscribe/` with user-only
access. The graphical-session service sends SIGTERM through the application's
graceful Qt cleanup path so microphone streams, workers, and `wl-paste --watch`
are stopped together.
