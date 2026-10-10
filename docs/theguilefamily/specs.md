# The Guile Family — Specifications

* Release: 3.3.0 / Android version code 15.
* Android 8.0 or newer; package com.rykersoft.somethingsoff.
* One shared phone, exactly three named characters. Bluffer: three players; Party Guests and Same Again: two or three.
* Bundled offline HTML, CSS, JavaScript, fonts and original painted artwork. No frontend build or game server is needed to play.
* Local preferences and up to forty saved source packs. Unsaved drafts and live-round state remain in session memory. No account is required for offline play.
* Pack files: version-1 .somethingsoff.json, one validated pack, maximum 32 KiB UTF-8 import.
* Optional AI: RykerSoft Google account, an exact app-specific Pro grant, internet and administrator-managed OpenAI configuration. Firebase Auth/Firestore verify access; native code uses the OpenAI Responses API with strict schemas, gpt-4.1-mini and store:false. Provider values are never embedded in game assets or sent to JavaScript. This trusted-family model delivers authorized provider configuration into native memory; it is not a server proxy.
* AI receives only public pre-game source content. OpenAI service retention policies can still apply despite store:false.
* Optional Android TextToSpeech narration and system SpeechRecognizer dictation. Microphone permission follows an explicit tap. System dictation may process audio remotely; the app does not retain audio.
* Release signing identity and legacy storage/package identifiers are preserved. Private cards, ballots, final guesses and background thumbnails use screenshot protection.
