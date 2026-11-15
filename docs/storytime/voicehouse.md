# Voicehouse narration and voice actors

Voicehouse is a self-hosted speech gateway and voice-actor library, and it is Storytime's one narration engine: Voicehouse holds the voice actors, the speech model and each actor's published performances; Storytime asks it for speech and keeps its own per-story adjustments. Other engines are no longer offered anywhere in the app. Their code remains so recordings and stories made with them still play.

## Connecting

**Storytime Pro:** sign in with the same Google account that has Storytime access in RykerSoft. The shared Voicehouse connection loads automatically for the current session, and its voices sync without entering a code. Settings → Narration → Voicehouse shows **Access: RykerSoft Pro**. This works everywhere narration is used, including Bedtime, adventures, Story Table, and the Character Library. Connecting does not replace existing actors by itself.

**Your own Voicehouse:** a personal connection remains available without Pro and takes priority over the included service. Under **Use your own Voicehouse**, or when not connected:

1. In Voicehouse, open **Studio → Applications** and copy the connection code for Storytime. The code holds every address of your Voicehouse and the application key.
2. In Storytime, open **Settings → Narration**, paste the code into **Connection code** and choose **Connect**.

Storytime tries the addresses in the code in order and uses the first that answers, so the same code works at the computer itself, on the home network and away from home. The section then shows the application name, the address in use, how many voices are ready, the model and its health, and when voices were last synced. **Enter the addresses and key by hand** is available for setups without a code.

Only a **personal** connection is stored with Storytime's settings and travels in a Drive backup. The included Pro connection is held in memory, is never bundled into the app, and is not written into settings or backups. Its directory cache is also session-only. Signing out, a failed Pro verification, or a revoked grant on refresh removes the Pro connection and cancels its pending work; it does not remove a personal connection, saved recordings, or library actors. **Use Pro connection** forgets a personal override and returns to the included service. The personal directory cache is not backed up; each device fetches its own.

An administrator configures the included service once, not each user: `appCapabilities/com.superstorycraft.ing` declares the optional `voicehouseConnection` credential and `providerKeys/com.superstorycraft.ing` holds its connection code under that exact field. Existing RykerSoft entitlement rules gate reads; no new unlock code or grant migration is required. The capability manifest is `.rykersoft/app-capabilities.json`. `scripts/configure-voicehouse-pro.mjs` uses authorized Google application-default credentials, accepts a secure connection-code file, verifies the Storytime application, and atomically merges only this credential and its capability declaration. An explicit `--skip-service-check` supports registering an administrator-supplied connection while the gateway is offline; this does not establish that narration works. It preserves other providers and all grants and prints no secret values. Pro uses the existing trusted-family credential-delivery model; entitled clients receive the credential in session memory, rather than through a new server-side speech proxy. The supplied addresses retain their network scope: private-network servers must be reachable from each device, and Android still requires a trusted HTTPS endpoint.

## Your roster

Voicehouse is the only source of new voice actors. In World library, **Add voice actor** opens the complete directory, including voices that are not ready yet. Preview plays a short recording without generating speech. Select actors individually; **Refresh** shows newly available voices and the last refresh time. Offline, you can select from the cached directory; refresh and previews need Voicehouse.

Only selected Voicehouse actors appear in the library and new casting pickers. Existing Voicehouse records remain selected on upgrade. Membership is stored with `voice_presets` in IndexedDB and travels in library exports and backups. Sync refreshes selected actors' metadata; it never adds every ready voice. Roles, local IDs, settings and repertoire stay intact.

**Remove from roster** hides the local actor without deleting its record or changing saved stories. Select it again to restore its repertoire and tuning. To delete an actor for good, open its actor page in the Voicehouse studio and choose **Delete actor**. Old actors from other engines stay stored for saved stories and playback; those engines' narration code is retained. Existing Bedtime stories and their automatic voice behavior continue to work.

## Create with the voice designer

Choose **Create voice actor**, enter the name, gender, age, short character description and what the voice sounds like. Edit the supplied passage (about 15 seconds) and language, then generate three options. Starting the designer can take a minute or more; you can cancel. Generate again reuses the actor created for this draft.

While the three options are being designed they appear as three cards with a moving wave and a running clock, with Cancel beside it. Play each option and choose **Use this voice**. Voicehouse clones that option and records an audition. Read the displayed audition passage and listen to the cloned voice, then **Add to my roster** to publish its neutral performance and select it, or **Try other options**. Closing keeps the draft for this app session and stops playback and requests. An unpublished actor stays in Voicehouse and can be managed in the studio.

If creation is disabled: Turn on 'May create voice actors with the voice designer' for Storytime under Applications in Voicehouse. Voice design requires a reachable Voicehouse server. Storytime no longer creates local Manual/Smart actors or uploads recordings from this flow; manage recordings in the studio.

## Adjusting a voice

Voice settings for a Voicehouse voice show the voice, its **Performance** (when the voice has more than one published), and **Adjust**, which lists the controls the speech model offers.

- **For one story or one character:** change a control under **Adjust**. Storytime stores only the values that differ from what Voicehouse published and sends them with each request. They never change the voice in Voicehouse. **Use the Voicehouse settings** clears them.
- **Everywhere:** choose **Open … in Voicehouse**, edit the voice there and publish. The change arrives with the next sync, and adjustments made in Storytime stay on top of it.

## Sync

Storytime syncs when it starts, when the Character Library or the Narration settings open, and when you choose **Sync voices**. A sync costs almost nothing when Voicehouse has not changed. If Voicehouse cannot be reached, Storytime keeps using the last synced copy and says so quietly beside **Sync voices**.

## Recordings

Voicehouse narration is saved as MP3, so it works with saved recordings, seeking, Android Bedtime playback and exports. Passages longer than about 500 characters are sent in several parts, split between sentences, and joined into one recording without re-encoding.

## Android

The Android app cannot use a plain `http://` address or the home-network address, which uses a private certificate. On a phone, Voicehouse needs its away-from-home (public HTTPS) address. The other addresses in the connection code are skipped automatically.

## Desktop

The home-network address uses Voicehouse's own certificate authority. Install its root certificate (download `lan-ca.crt` from the Voicehouse address) on the computer running Storytime, or the desktop app and browser will refuse that address.

## Checking a connection from a terminal

```
VOICEHOUSE_CONNECTION='vh1.…' node --experimental-strip-types scripts/voicehouse-check.ts
```

It connects, lists the voices, narrates one line to a temporary MP3 and prints timings. It never prints the key. For the home-network address, also set `NODE_EXTRA_CA_CERTS` to the downloaded `lan-ca.crt`.

In Bedtime stories and Story Table, the storyteller knows each actor's live deliveries and uses them where the story calls for it. Most paragraphs use the everyday voice. To change one paragraph, open its Voice settings, choose a **Performance**, and narrate that paragraph again. This paragraph's choice takes precedence over its generated delivery.

The same delivery-aware cast is used in interactive Audio Drama, Audiobook, Storyteller and Comic stories, Story Party and its Road Trip speaker. Setup and review casting can take each actor’s recorded range into account. Delivery is independent of the visual emotion or mood; unavailable recordings fall back to the character’s ordinary performance.

## Choosing a voice

Wherever a voice is chosen (a story character, one paragraph, the default voice, a library actor) the control shows the current voice as a person; pressing it opens the voice page. It lists every voice Voicehouse lets Storytime use: **Your roster** first, then **More in Voicehouse**. Each row has the actor's portrait (or initial), gender, sounding age, playable ages and accent, the voice description, who already plays with it in this story, and a round button that plays the actor's recorded preview without generating speech. Tapping the row chooses it. Choosing a voice from **More in Voicehouse** for a character adds it to your roster. Voices that are not published yet are listed, marked, and cannot be chosen.

If a voice you made in the Voicehouse studio is missing here, the application is not allowed to see it: under Applications in Voicehouse, either allow all actors for Storytime or add that actor to its list.

## New character voices

In Bedtime stories and Story Table the storyteller first looks for an unused roster actor who fits a new character. If none fits, Voicehouse designs, clones, auditions and publishes a voice, then adds the actor to your roster. This is always on. **Design a voice for every character** (the new-story form, or Story settings → Voices) skips the roster and makes a voice for each new character; a character returning from an actor's repertoire keeps that actor. Allow “May create voice actors with the voice designer” for Storytime under Applications in Voicehouse; the server must also have the designer installed.

The cast says what Voicehouse is doing while you wait (waiting for the speech engine, designing, cloning, recording an audition; usually 10–30 seconds per voice, longer on the first use). Other speakers continue preparing, and anything already recorded for the character still plays. Listening waits at the character's first unrecorded line. If creation fails or takes longer than five minutes, the fallback actor stays and the cast explains why. Pending creations are saved: reopening the story asks for the same creation, rather than a second actor. Added actors stay in the local library and its exports.

A character's **Voice** section in Story settings offers three ways to get a voice, all on the voice page:

- **Choose** a voice that already exists.
- **Create one automatically**: Voicehouse designs a voice from the character's name, age and gender, how they speak (and, for the narrator, the storytelling voice), and casts it when ready. **Stop creating this voice** keeps the current one.
- **Create a custom voice**: the designer opens with those same details filled in. Generate three options, play them (each shows its real waveform), choose **Use this voice**, listen to the cloned audition, then **Use for** the character.

Below that, **Voice settings** follows the actor's library settings or customizes them for this story. Recordings already made keep the voice they were made with; narrate a paragraph again from its Voice settings to hear the new one.

Setup's review page offers **Create a voice** for uncast characters or characters the casting assistant could not fit. Interactive stories, Story Party and Road Trip still use their established cast/narrator for later undeclared speakers.

## The speech engine

Voicehouse has two separate workers: the **designer** (makes the three options and their recordings) and the **speech engine** (clones a voice and speaks). Designing and playing options can work while the engine is stopped; keeping an option and all narration need the engine.

Voicehouse starts its own engine whenever a request needs it: narration is accepted and waits in its queue while the engine loads, **Use this voice** waits for it, and automatic voice creation reports “Waiting for the speech engine” until it is up. An engine set aside after a failed clip is restarted the same way. If the engine will not come up after three tries in ten minutes, Voicehouse stops trying until someone chooses **Start** under **Engine** in its studio.

Storytime reads the engine's state from Voicehouse and says it in plain words: Settings → Narration shows a live line (ready, loading, or stopped and started on demand), and when Voicehouse has given up starting the engine the message says so with **Open Voicehouse** beside it. Storytime carries on by itself once the engine is running.

## Vocal effects in Storytime

Voice controls include Natural, Telephone, Radio, Cavern and Small room. Bedtime's paragraph Voice settings can apply one to just that paragraph or to the character. Preview uses the selected effect. Existing recordings retain their sound until explicitly narrated again.

Effects are processed locally after Voicehouse generates speech and before Storytime saves the MP3. Saved playback and audiobook exports therefore retain the effect, including the reverberation tail. Reference clips and published actor performances are not modified. This is a recording treatment independent of Qwen's voice-cloning conditioning. The Voicehouse studio itself requires a separate server-side implementation; Storytime's effect choice is not sent as a model parameter.

## Choosing a delivery and an effect

Open a character’s **Voice** controls (or a Bedtime paragraph’s **Voice settings**). Choose the actor, then choose a **Delivery** from that actor’s published deliveries on the selected provider. Neutral is the default. Delivery keys come from the directory; Storytime does not assume every actor can whisper, shout, or sound angry. Provider readiness appears beside the delivery control.

**Vocal effect** is independent: Natural, Telephone, Radio, Cavern, or Small room. Angry + Telephone and Whisper + Cavern are valid combinations. **Preview voice** generates a short line with the same delivery, adjustments and local effect used for narration. The round preview in the actor picker instead plays the existing **neutral source reference** without generation or effects; it demonstrates the actor’s natural voice.

For Bedtime and Story Table, the story writer can assign effects to individual paragraphs when the scene calls for them. Adventures and Story Party generation also carry line effects, including to the Road Trip speaker. Natural is the default; mentioning a telephone or a cave does not itself justify filtering narration. An explicit paragraph voice override wins over the generated delivery and effect. Use **This paragraph only** to change one line, or the character scope to set a voice for the story. Existing saved audio retains its sound until you explicitly narrate it again.

Studio manuscripts save narrator and screenplay character assignments, delivery/effect settings, revision pins, and reading pace with the manuscript. Their **Voices & reading pace** controls use the same Voicehouse controls. The shared reader plays existing recordings; it does not generate new speech merely by opening a story. Single-take narration uses the chosen settings for that entire take.

### Add a missing delivery in Voicehouse

1. Choose **Open … in Voicehouse** and select the actor’s delivery.
2. Add recordings spoken in that delivery, record them, or design a suitable option. Selecting an emotion alone does not make Qwen perform it. Do not put stage directions into the spoken text.
3. Adjust the performance controls, generate an audition, **Save**, then **Go live**.
4. Back in Storytime, choose **Refresh available deliveries** or **Settings → Narration → Sync voices**.

A missing/unpublished delivery remains selected and is labeled unavailable. Voicehouse falls back to Neutral where available; Storytime explains this and retains the requested and actual delivery in the recording’s metadata. **Use Neutral** explicitly clears the unavailable choice. An unavailable actor is not silently replaced: publish that actor and sync, or choose a replacement. Provider failures likewise keep your work and do not switch to a hosted engine or a device voice.

### Keep a particular voice version

**Keep this published revision** pins the selected performance for future narration. Clear it to follow future Voicehouse publications. New recordings retain the actor ID, requested and resolved delivery, published revision, provider/model, resolved settings/seed when returned, job IDs, artifact duration, and local effect revision. Audio and its metadata travel in generated-audio backups; story exports retain the metadata attached to their paragraphs.

A changed delivery, effect, revision or supported override has a different request/cache identity. Saved finished audio remains a snapshot; changing an actor in the library does not silently regenerate it. Old settings without an effect mean Natural. Existing recordings are not reprocessed during upgrade, playback, backup restore, or export.

### Processing ownership and service compatibility

Storytime owns effect DSP (`storytime-vocal-effects-v2`). It requests natural speech, omits the server’s top-level `vocal_effect`, and processes once before saving the MP3. The SDK’s optional `vocalEffect` maps to HTTP `vocal_effect`; neither spelling belongs inside provider overrides. Storytime does not enable server DSP or inherit effects from the actor/application. If an unexpected server response says an effect was already applied, Storytime fails rather than processing it twice.

This deliberately supports the currently running server: a read-only authenticated check on 2026-11-14 found Voicehouse 0.4.0 with WAV/MP3 support and Qwen ready, but its deployed `SpeechInput` schema did **not** include `vocal_effect`. The desktop source SDK/schema does include it. No restart or production configuration change was made. Switching processing to the server later requires a deliberate migration that disables local DSP; it is not automatic.

Telephone and Radio filter/saturate the generated recording. Cavern and Small room add local reverberation; complete tails remain in playback, saved audio and audiobook exports. Duration is measured from the actual output, rather than estimated from text. Local effects are stylistic treatments and need not sound identical to the server’s separate FFmpeg presets.

### Troubleshooting

- **Authentication / origin:** reconnect with an application code from Voicehouse → Applications. Permit the browser’s exact origin under **Edit permissions**. Never use a studio password or private worker URL.
- **Missing actor or delivery:** open the actor, audition, Save, Go live, then sync. Your saved casting is retained. Clear an obsolete revision pin if the server can no longer serve it.
- **Unsupported adjustments:** reset adjustments and sync to load the active provider’s schema. Settings outside the schema or numeric limits are not sent.
- **Queued / loading:** cold starts can take time. Storytime waits with bounded timeouts, retries queue/rate congestion, and reuses a stable idempotency key for the same logical request. Stop preview or leave playback preparation to cancel outstanding waits. Cancellation can drain provider compute rather than immediately stop the GPU.
- **Interrupted, expired or failed job:** keep the story and existing recordings; retry after the engine is ready. A processed take is never replaced silently with raw speech.
- **Effect/encoding failure:** retry, or deliberately choose Natural and narrate again. Confirm that the device supports Web Audio; server normalization failures require repair in Voicehouse.
- **Voice creation:** both actor-creation and designer permissions are checked. Designing/cloning/auditioning progress is shown. Automatic creation has durable keys so reopening a story resumes the same creation. Recordings, extra delivery setup and deletion remain studio tasks.

## Validation

Run `npm run check` for the project checks and `npm run test:voicehouse-ui` after a build for Chromium interaction/audio tests. The latter uses synthetic audio and mocked application HTTP, verifies each effect, exactly one local DSP render, retained room tails, saved-audio/backup/export consistency, and desktop/mobile reader and voice-control interactions. It never contacts Voicehouse or generates AI content. The harness defaults to `/usr/bin/chromium`; set `CHROMIUM_PATH` to another installed Chromium executable.

Read-only live verification does not prove a real Qwen take or physical-phone playback. Those remain separate acceptance checks; no paid generation, service restart or deployment is part of these checks.
