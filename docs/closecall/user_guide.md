# User guide

- [Install](#install)
- [Play](#play)
- [YouTube search](#youtube-search)
- [PRO Features](#pro-features)

## Install

Install Close Call from RykerSoft. For an earlier debug prototype, first preserve any needed data and remove that prototype: the production signing certificate cannot update a debug-signed installation. Uninstalling removes local app data. Future production releases can update normally.

## Play

Choose Play and select two or three family avatars. Each player takes a turn setting a clue. Select Movie, TV Show, Place, Character or Song; visual categories offer Image or Video.

For images, search and select a picture, confirm what opponents should guess, and position its opening close-up. For videos, search YouTube, select a clip, choose the starting playhead and confirm the answer. Ready seals the clue. Pass the phone to each named guesser. I know it freezes the reveal for a timed typed answer. Visual answers stay private until the pass is complete. Wrong guesses add score time; retries resume each player's own position, for up to three passes.

For songs, confirm the title and optional artist/album fields. Optional catalog lookup suggests labels for your confirmation. Private previews use the Android earpiece; move the phone near your ear to start and away to stop/rewind, where supported. Manual preview controls remain available. Start Song begins the public speaker round. Hold your buzzer to answer, then release to transcribe. A wrong title locks that player out and resumes playback for the other player. Artist and album can each earn one point, including partial credit on a title miss. Correct title callers can answer remaining bonus questions. Song guessing has no manual pause button.

Song title points decline from 6 to 3 over the playback budget. For visual clues, the fastest correct player earns 3–5 points and the setter earns one per correct opponent. Final standings combine the match's rounds. Back during an active match asks before ending it. End-match confirmation does not pause an active song round.

## YouTube search

Open Settings → YouTube search. Enable YouTube Data API v3 in your Google Cloud project and create a personal API key. Restrict API access to that API and application access to Android package `com.rykersoft.closecall` with the production signing SHA-1 shown in the app. Save & connect validates the key before encrypted storage. Remove saved key deletes it. Search and playback require internet and available quota. Do not use browser referrer restrictions for the Android key.

## PRO Features

* Sign in with your existing RykerSoft account and use the administrator-granted Close Call Pro entitlement.
* Select an available configured provider before a visual match. Free local matches do not make paid requests; uncertain Pro calls send only category, confirmed answer and one guess.
* If Pro fails, retry the sealed call or restart the picture with free judging. Pictures, rosters and match history are not sent to the judge. Provider secrets stay native/server-side.

Pro is optional. Free matching needs no account. No separate Pro APK or shared unlock code is required. Gemini is unavailable until configured by an administrator.
