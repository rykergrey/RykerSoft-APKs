# Updates

## 0.4.3 · version code 10 · 2026-10-30

- One RykerSoft sign-in connects Android YouTube search and Pro answer judging.
- Removes manual API-key entry from Android settings and media setup.
- Verifies the exact Close Call grant before every search, including cached queries; account changes and backgrounding invalidate pending results.
- Retires legacy personal YouTube key storage.
- Retains the production certificate for an in-place update from 0.4.2.

## 0.4.2 · version code 9 · 2026-10-30

First RykerSoft release with a dedicated production signing certificate.

- Unified family matches with image, video and song clues.
- Compact category and media selection, private handoffs and sealed visual guesses.
- Song hold-to-speak buzzers, speed-based title rewards and separate artist/album credit.
- Private Android song previews route to the earpiece, with proximity start/stop and media volume controls; public rounds request the speaker.
- Personal YouTube search key setup with AndroidKeystore encryption.
- Active song rounds keep running through the end-match confirmation; buzzing pauses for an answer.

Production signing differs from the earlier debug prototypes. Back up anything you need before removing a prototype; uninstalling removes its local data. Future RykerSoft releases will retain the production certificate.

## Earlier prototypes

0.4.1 (code 8) added on-device campaign persistence and offline starter pictures. Subsequent local development builds introduced the unified media game and Android audio refinements. Campaign saves remain supported in the code, but campaign is currently hidden on Home.
