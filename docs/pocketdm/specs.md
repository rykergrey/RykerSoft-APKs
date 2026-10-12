# Pocket DM specifications

- Package: `com.rykersoft.pocketdm`
- Version: 0.2.7; version code: 9
- Platform: standalone Android; minimum Android 8.0/API 26; target API 35
- Players: two local guest seats on one device
- Permissions: internet and microphone recording
- Runtime: React/Vite UI, Java Android shell, separate on-device authoritative WebView service
- Storage: native atomic local saves, separately stored portraits, Android Keystore-encrypted personal provider credentials
- Offline: Practice, basic character creation with portrait placeholders, saved fighters, and bundled Amy Piper commentary
- Online: OpenAI Live DM/custom identities/original art; optional OpenAI and ElevenLabs speech; extra voice downloads
- Accounts: no RykerSoft sign-in or Pro requirement; personal provider keys only
- No remote rooms, cloud saves, Firebase game ownership, or persistent progression

Custom creation and art are background jobs. Approved character identities and optional secrets remain fixed during an encounter. The backend owns state and duplicate-request protection. Narration and memory cannot grant powers or rewrite accepted effects.

Public releases use a dedicated production signer. Earlier debug installations must be removed before installing this production-signed release; removal erases their local data. The package includes speech-runtime and Amy model notices; the release also supplies the documented upstream runtime sources/build recipe. This source bundle does not assert a byte-identical rebuild of upstream npm binaries.

Verification for 0.2.7: 241 source tests, 15 deterministic evaluation scenarios, 90 replay-checked synthetic duels, and phone-width/desktop browser rehearsals. The synthetic portrait-cache benchmark is a desktop CPU measurement, not a phone frame-rate claim. The production release has not yet been installed on a physical device.

New installations have no starter cast. Test-only legacy mechanics fixtures are retained internally for regression/replay compatibility, but the normal API rejects selecting them for a new encounter and their portrait files are not packaged. Generated portraits follow the versioned Pocket Stage art bible; earlier accepted portraits are not automatically regenerated.
