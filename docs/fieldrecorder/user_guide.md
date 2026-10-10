# Field Recorder user guide

## Table of Contents

- [Set up transcription](#set-up-transcription)
- [Start a game](#start-a-game)
- [Record an answer](#record-an-answer)
- [Review a match](#review-a-match)
- [Create a deck](#create-a-deck)
- [Troubleshooting](#troubleshooting)

## Set up transcription

Install Field Recorder from RykerSoft. Open the system menu's Transcription tab. Enter your own Groq API key, tap Test, then Save. A successful test checks the audio transcription endpoint with a short silent WAV; it does not record your microphone. Allow microphone access before your first answer. Internet access and provider quota are required for Groq transcription.

No RykerSoft login or Pro unlock is required. The app uses your provider account, including its usage limits and charges. Never share screenshots containing an unmasked key.

## Start a game

Place the device where all players can see it. Configure 2–8 players, enable the players taking part, select category packs, and choose a timed or round-based match. Start the match and read the displayed letter and category on each turn. Long-press a player to access roster actions.

## Record an answer

Hold the main A/microphone button and speak immediately. Keep holding while you speak, then release to submit. First-time microphone permission must be granted before capture works. The microphone stays ready while the recording surface is open, but only the button-held interval is saved. Closing that surface or losing focus stops warm-up; losing focus cancels the hold.

An answer should start with the displayed letter and fit the category. Hold the smaller B button for one second to pass. Supported keyboard controls use Space/Enter for push-to-talk. Transcription completes in the background; players review uncertain results after the match.

## Review a match

Open the debrief to inspect standings and recorded turns. Replay clips, tap a transcript to correct it, and hold a score to adjust points. Late transcription results update their original saved match and preserve player-reviewed results. The history view can clear stored match history after confirmation.

## Create a deck

Open the deck builder, choose a category and name, and add questions. Use push-to-talk for spoken question text after setting up Groq. Save the pack for later matches. Generated deck ideas require a separately configured Gemini API server; manually authored decks and personal-key Android transcription do not require that server.

## Troubleshooting

- Microphone unavailable: grant microphone permission in Android app settings, then reopen the game or voice editor.
- Invalid key, quota, or model errors: check the personal Groq key and provider account, then use Test in the Transcription tab.
- Server unavailable: standalone Android transcription needs a saved personal Groq key. Web builds and optional Gemini features require the configured API server.
- Development installation conflicts: code-1 debug APKs have a different signer. Android will reject a production update to those installations. Preserve their data; do not uninstall or clear data as an automatic troubleshooting step.
- Saved data is local to this app installation. Clearing app data removes local settings and records.
