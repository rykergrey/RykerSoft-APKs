# Synthing Updates

## v1.0.13

- Tap and release either arrangement overview to place the playhead at an absolute position
- Drag either overview to scrub relative to the current playhead without jumping to the finger-down position
- Keep two-finger scrubbing snapped by measure
- Start playback from the selected overview position on both PLAY and ROLL

## v1.0.12

- Use the arrangement overview across the complete ROLL width above both the control panel and piano-roll grid
- Place the playhead more precisely with the wider bird's-eye timeline
- Start ROLL playback at the exact placed playhead, including later arrangement positions that previously wrapped through a stale short clip length

## v1.0.11

- Record non-destructively by default, preserving earlier notes and replacing only an exact same-synth, same-pitch start
- Punch in beyond a short clip without wrapping onto measure 1; the timeline expands automatically to hold the new take
- Capture held and newly played notes reliably through pre-roll and at the punch-in boundary
- Long-press Record to configure pre-roll, pre-roll click, and optional overlap punch mode
- Tap or drag the arrangement overview to position the playhead; use two fingers to scrub by measure
- Use the full-width arrangement overview above Synth A/B on PLAY without switching to ROLL

## v1.0.10

- Record armed Synth A/B performances directly into the active project without requiring a legacy launcher slot
- Place the piano-roll playhead anywhere in the arrangement and begin recording from that exact punch-in point
- Count pre-roll before the selected punch-in point so held notes begin at the intended timeline position
- Press Stop once to stop in place, then press Stop again to return to arrangement IN/start

## v1.0.9

- Automatically save piano-roll and continuous-arrangement notes directly with the project, even when no section is selected
- Preserve Synth A/B parameters, chord and arpeggio assignments, note filters and colors, note links, and Play/Synth/Roll session state
- Finalize active recording before the lifecycle save and wait for the latest project/synth snapshot before shutdown
- Use conflated background writes during editing and crash-safe atomic files to avoid UI stalls and partial project files

## v1.0.8

- Hub user guide now includes a clickable Table of Contents so Application Manager jumps to each section
- Documentation continues to live under `docs/` on the app repo (description, updates, specs, user guide)

## v1.0.7

- Fix overview strip drag alignment so the blue viewport lens follows tap/drag across the full arrangement
- Gesture handlers use fresh scroll/zoom state (no stale maxScroll capture)

## v1.0.6

- Content-fitted piano-roll overview strip navigator (full arrangement stretched across the strip)
- Tap/drag navigates the editor viewport without moving the playhead
- Viewport lens tracks piano-roll zoom and scroll with correct tick math

## v1.0.5

- Fix transport Play button so piano-roll workspace notes start playback even before a launcher clip exists
- Preserve workspace notes when materializing a new clip from the piano roll

## v1.0.4

- Fix arrangement note playback when tapping Play
- Preserve notes across the full continuous timeline (no 4-bar truncation on unset OUT)
- Auto-reset playhead to IN when parked past the end of song notes
- Official RykerSoft package ID: `com.rykersoft.synthing`
