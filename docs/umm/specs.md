# Umm specifications

| Item | Requirement or behavior |
| --- | --- |
| Release | 0.4.1 |
| Android package | `com.oddly.app.release` |
| Minimum Android | Android 6.0 / API 23 |
| Target Android API | 35 |
| Account | Google sign-in and a unique username required before gameplay |
| Username | 3–20 letters, numbers, or underscores; start with a letter; unique without regard to case |
| Connection | Internet access to the hosted Firebase API over HTTPS |
| Quiz size | 1–20 questions |
| Question formats | Multiple choice, true/false, fill-in-the-blank, and open text |
| Multiple-choice options | 2–8 distinct choices |
| Workshop timer choices | 15 seconds, 30 seconds, 1 minute, or 2 minutes |
| Daily edition | Six questions; changes at the UTC date boundary |
| Starting wallet | 40 game coins for a new player |
| First answer reward | One coin per first submitted answer |
| Creator bonus | One coin per answer, awarded only on the creator's first thumbs-up |
| Quiz creation | One coin per question when saved |
| Timer pause | One coin each time a running timer is paused; resuming is free |
| Sticker books | Little guys: 8 coins; Cosmic club: 12 coins; Snack break: 8 coins |

## Data and permissions

Firebase Authentication manages sign-in. Firestore stores player profiles, coins, questions, answers, votes, shared themes, and activity. Workshop drafts and saved card looks are device-local; a workshop draft belongs to the selected player. Updating the same release package retains its local storage.

Internet access is required. Microphone permission is used only for voice typing. Android notification permission is requested when enabling background completion notifications. Declining either optional permission leaves manual input and in-app updates available.

Anonymous answers hide attribution from other players; the server retains private ownership records. Your own history includes anonymous contributions. Public profile views exclude anonymous contributions and unpublished questions. Another player's answer and the choices remain locked until you finish the corresponding card. The mystery pool hides question text until play, although published question text can be discovered in public profiles.

## Optional services

- AI assist uses server-configured OpenAI access to draft or refine questions and select a named palette from implemented presets. It does not generate arbitrary card artwork. No provider key is required on the player's device.
- Voice typing uses server-configured Groq transcription. Recordings stop after 60 seconds and uploads are limited to 2 MB. Audio is sent to the provider for transcription and is not persisted by the app's transcription route. Voice typing spends no game coins.
- Android completion notifications use Firebase Cloud Messaging. Delivery depends on permission, connectivity, and device settings; in-app activity remains available.

Provider-dependent controls may be unavailable when the hosted service is not configured or the provider cannot complete a request. Manual questions and normal gameplay do not depend on AI or transcription.

## Current limits

Offline use is limited to cached pool browsing. Timed play, saving quizzes, answer edits, ratings, and coin spending need a connection. Closing and reopening an active card does not reset its server timer. Skipped or expired cards cannot later be changed into submitted answers.

The daily question bank rotates and eventually repeats. Starter response examples are labeled and do not count as live players. Share codes can be copied from completed quizzes; this release's interface has no code-entry screen, so shared cards are discovered through the pool.

The release package is separate from the development package `com.oddly.app`; installing one does not update the other. Google provider configuration and automated onboarding checks have been completed, but physical-device interactive Google OAuth and live push delivery remain unverified. Moderation/reporting and operational backup and abuse controls remain further public-launch work.
