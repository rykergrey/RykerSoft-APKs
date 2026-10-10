# Field Recorder user guide

## Table of Contents

- [PRO Features](#pro-features)
- [Set up transcription](#set-up-transcription)
- [Start a game](#start-a-game)
- [Record an answer](#record-an-answer)
- [Review a match](#review-a-match)
- [Create a deck](#create-a-deck)
- [Troubleshooting](#troubleshooting)

## PRO Features

* **Managed speech transcription** — Open Transcription in the system menu and choose Sign in with Google. Use the same account as RykerSoft. Your administrator must enable the Field Recorder grant for that account in RykerSoft; access to another app alone does not enable Field Recorder. When the status says Pro transcription is ready, game answers and spoken deck questions work without entering a key.

Leave the personal key field empty and save to use the Pro service. A saved personal key always takes priority. Refresh access after an administrator enables your grant. Signing out, revocation, or a failed access check blocks new managed-service requests; it does not erase your personal key, decks, rosters, or match history.

## Set up transcription

Install Field Recorder from RykerSoft. Open the system menu's Transcription tab. Sign in with Google for Field Recorder Pro access, or enter your own Groq API key, tap Test, then Save. A successful test checks the audio transcription endpoint with a short silent WAV; it does not record your microphone. Allow microphone access before your first answer. Internet access and provider quota are required for Groq transcription.

A personal Groq key works without RykerSoft sign-in or Pro access. When you use that key, the app uses your provider account, including its usage limits and charges. Never share screenshots containing an unmasked key.

## Start a game

Place the device where all players can see it. Configure 2–8 players, enable the players taking part, select category packs, and choose a timed or round-based match. Start the match and read the displayed letter and category on each turn. Long-press a player to access roster actions.

## Record an answer

Hold the main A/microphone button and speak immediately. Keep holding while you speak, then release to submit. First-time microphone permission must be granted before capture works. The microphone stays ready while the recording surface is open, but only the button-held interval is saved. Closing that surface or losing focus stops warm-up; losing focus cancels the hold.

Recording always requires the device’s built-in microphone. Bluetooth, wired headset, and USB microphones are excluded. Keep the device close to the speakers even when headphones are connected. If the built-in input cannot be verified, recording stops rather than using an external microphone. Android prefers uncompressed 48 kHz capture when supported.

An answer should start with the displayed letter and fit the category. Hold the smaller B button for one second to pass. Supported keyboard controls use Space/Enter for push-to-talk. Transcription completes in the background; players review uncertain results after the match.

## Review a match

Open the debrief to inspect standings and recorded turns. Replay clips, tap a transcript to correct it, and hold a score to adjust points. Late transcription results update their original saved match and preserve player-reviewed results. The history view can clear stored match history after confirmation.

## Create a deck

Open the deck builder, choose a category and name, and add questions. Use push-to-talk for spoken question text after setting up a personal key or Pro access. Save the pack for later matches. Generated deck ideas require a separately configured Gemini API server; manually authored decks and personal-key Android transcription do not require that server.

## Troubleshooting

- Microphone unavailable: grant microphone permission in Android app settings, then reopen the game or voice editor.
- Built-in microphone unavailable: reopen the recording surface. In a browser, grant site microphone permission in browser settings; browsers that cannot identify an internal input cannot record. Use the Android app in that case.
- Pro service unavailable: reconnect and Refresh access. Confirm your administrator enabled Field Recorder for your Google account and configured its Groq service. You can still use a personal key.
- Invalid key, quota, or model errors: check the personal Groq key and provider account, then use Test in the Transcription tab.
- Server unavailable: standalone transcription needs a saved personal Groq key or verified Field Recorder Pro access. Optional Gemini features and web transcription without either credential path require the configured API server.
- Development installation conflicts: code-1 debug APKs have a different signer. Android will reject a production update to those installations. Preserve their data; do not uninstall or clear data as an automatic troubleshooting step.
- Saved data is local to this app installation. Clearing app data removes local settings and records.
