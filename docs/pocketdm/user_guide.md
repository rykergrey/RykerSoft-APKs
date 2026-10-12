# Pocket DM user guide

## Table of Contents

- [Install and update](#install-and-update)
- [Create your characters](#create-your-characters)
- [Play an encounter](#play-an-encounter)
- [Configure the DM and voice](#configure-the-dm-and-voice)
- [Privacy and saved games](#privacy-and-saved-games)
- [Troubleshooting](#troubleshooting)

## Install and update

Install Pocket DM from RykerSoft on Android 8.0 or later with a current Android System WebView. A computer is not needed to play.

This first public release uses a new dedicated production signer. Earlier debug builds cannot update directly to it. If you are using an earlier debug build, remove that build before installing this production-signed release. This erases its local game data. There is no in-place update from a debug signer to the production signer. Future public releases will retain this production signer.

## Create your characters

Open Create and select the private player seat. Describe an appearance, personality, or strange concept. Include a name or secret if you want; otherwise the creator can imagine them. Submit the idea, conceal the private screen, and pass the phone so the other player can enter theirs.

Live identity interpretation and original portrait generation require a configured OpenAI key and internet. Practice can create simpler identities offline with an honest portrait placeholder. Jobs continue in the background. Open the owner’s private roster to inspect, edit, or remove the secret during setup. Pending or failed art shows its own status and never borrows another character’s portrait.

Begin the encounter after both ideas are received. Scroll through player A’s public introduction and portrait, then continue to player B. The opening dice determine the first acting seat and stay fixed after reload. No starter fighters are included. Practice can create and use your own characters offline. Their original portraits require OpenAI access; otherwise they retain an honest placeholder.

## Play an encounter

Pass the phone to the indicated player and unlock their guest seat. Speak or type what the character attempts, edit the text, and submit. You can improvise without selecting a move from a menu. A longer description does not grant extra actions or stronger consequences.

Read the illustrated reply using Continue the comic or the scene controls. Reveal consequences shows the already accepted result and unlocks the next turn. Skip to consequences is an explicit shortcut. Complete spoken commentary may reveal automatically; Skip voice & read stops speech and returns to captions. Pause preserves the pending story for later.

The DM interprets an attempt; declaring success does not guarantee it. Identity, context, and accepted state guide the result. Unknown or impossible Practice ideas may become a neutral story beat with no combat benefit. A new one-character encounter is one duel; legacy sample matches use their saved best-of-three rules. The in-app table rules explain the current turn limit and tie rule.

## Configure the DM and voice

Settings → Dungeon master selects Practice or Live DM, model, and style. Live needs a personal OpenAI key. Current settings apply to the next fresh attempt without rewriting stored outcomes.

Settings → Commentator selects Piper, ElevenLabs, or OpenAI. Piper’s bundled Amy voice works offline; extra voices require a one-time download. Cloud voices need the relevant personal key and internet. Enable optional captions, adjust volume/pace/delivery, or leave narration off. Reduced motion and calm effects are available.

Voice typing uses Android’s speech recognizer. It may use a system network service. Its transcript remains editable and never submits a turn automatically.

## Privacy and saved games

Game state and portraits are stored locally. Provider credentials are encrypted with Android Keystore and are not included in this APK. Live requests send the relevant character or action text to the selected provider; original-art requests use public appearance descriptions. Public introductions omit the owner-only secret.

Back, backgrounding, and handoffs conceal private sheets and stop obsolete narration. Reopening requires unlocking the appropriate guest seat again. Saved pending comics resume before effects are revealed. Local guest privacy is not account-based ownership. Clearing app data or uninstalling can remove saves and provider settings; there is no cloud restore.

## Troubleshooting

- For delayed speech, use Skip voice & read; the comic and accepted result remain available.
- For a failed custom portrait, inspect its status in the owner’s roster. Do not assume an unknown paid request was retried automatically.
- For Live or cloud-voice failures, check internet, the configured provider key, and that account’s quota. Practice and typed input remain available.
- If microphone access is denied, type the attempt or grant microphone access through Android settings.
- If an older debug installation reports a signature conflict, remove the old debug build before installing this production release. This erases its local saves and settings.
- The 0.2.7 reveal fixes have passed source checks, but sustained phone responsiveness, real speaker playback, and microphone accuracy still need device testing.
