# Synthing

Synthing is an Android music sketchpad with a continuous arrangement timeline, dual synth voices, chord grids, scale-aware keyboards, and a piano-roll editor backed by a native low-latency Oboe engine.

## Features

- Continuous infinite-arrangement timeline with arrangement-wide loop IN/OUT markers
- Dual Synth A / Synth B subtractive engines with presets, modulators, LFO, and FX
- Play tab chord pads, scale-aware keys, and isomorphic grids with performance toggles
- Piano-roll editor with touchpads, snap/quantize, automation lanes, and note links
- Full-width ROLL bird's-eye overview above the control panel and editor grid, with one-finger playhead positioning/scrubbing and two-finger measure snapping
- Full-width Play-tab overview above Synth A/B for immediate punch-in positioning
- Exact ROLL playback from the placed playhead without stale clip-length wrapping
- Non-destructive overdub recording by default from any playhead position, with reliable pre-roll capture, live note display, dynamic synth arming, and two-stage Stop/return-to-start behavior
- Project manager with sections, clip launcher slots, templates, and JSON import/export
- Reliable background auto-save for arrangement and piano-roll notes, chord/arp assignments, note filters, Synth A/B parameters, and Play/Synth/Roll workspace state
- Crash-safe atomic project and synth files with a final save flush when the app pauses

## Platforms

- Android API 24+ (arm64-v8a / armeabi-v7a / x86 / x86_64)
- Projects and settings stored locally on device as JSON
- No account or network connection required
