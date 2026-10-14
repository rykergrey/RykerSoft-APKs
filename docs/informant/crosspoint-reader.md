# Send content from INFORMANT to CrossPoint

The expanded item toolbar offers **Reader** on phones and **Send to reader** on larger screens. Tapping it opens a small menu: **Queue** saves the selected content for later; **Send now** opens the editable review; **Reader queue** opens pending items. It captures the selected article/Reddit post, transcript, notes, bookmarks, comments, chat, Info, or analysis/custom action. Project panels capture their current chat, action output, or selected Texts items. Current unsaved notes and transcript/rich-text edits are preserved. Empty tabs report no content; they never substitute another tab. A later tab change cannot change a queued snapshot or an open review, and closing a pending review invalidates its eventual response.

## Queue now, send later

Choose **Queue** to save an exact snapshot on this device without connecting or starting a transfer. You can queue multiple items while offline, close INFORMANT, and return another day. The queue uses IndexedDB with one record per reviewed snapshot and has no fixed item-count or aggregate-size limit; available device storage and the reader's per-item content limits still apply. Queueing the same unchanged snapshot twice keeps one pending entry; distinct items and edited revisions keep separate snapshots.

Open **Reader queue** from the home screen or the Send to reader menu. Wake the reader, open **Receive from phone**, connect on the same Wi-Fi, then choose **Send queued items**. Items send one at a time, oldest first. Each leaves the waiting list only after its transfer is verified; its receipt remains under **Saved for reader**. A failure or backgrounding pauses the batch and preserves all unsent items for retry. Items added during a batch wait for the next send. Direct queue sending runs in the foreground and cannot wake the reader.

Select a queued title to review its original snapshot, or choose **Remove from queue** to remove it from this device. **Queue for later** in an editable review saves the exact edited text. The queue is local to the device that saved it; it is separate from optional desktop Inbox publishing below.

## Direct from each app (Inbox is optional)

Direct sending is the default on Android (**Phone → reader**) and Windows/Linux (**Computer → reader**). Each app handles its own reader connection and verified transfer. You do not need CrossPoint Inbox, `publisher.json` or `inbox.json` for this flow. Wake the reader and open **Receive from phone**, join the same Wi-Fi, then open **Send to reader → Send now → Connect reader** or the home-screen **Reader queue** in INFORMANT. Acknowledge the trusted HTTP notice. On Android tap **Scan reader QR**, or enter the reader IP address. On Windows/Linux enter the address shown on the reader, such as **192.168.1.50**, then choose **Connect reader**. The bundled camera scanner works without Play Services. Manual reader address entry remains available. Pairing verifies the reader's stable identity before saving its address in private application storage; it cannot silently replace a saved reader with another one. **Forget this reader** requires an explicit confirmation before a different reader can be paired.

For manual entry, type the reader's address directly, for example **192.168.1.50**; `http://` is optional. Without a saved draft, the field shows the paired reader's bare address, or the editable **192.168.1.** prefix when no reader is paired. Each edit is saved immediately in the app's local settings, exactly as typed, including partial addresses, whitespace, and a deliberately blank field. Closing/reopening the review or app retains that draft. Pairing, QR results and changed-IP readiness checks keep their verified address separate and cannot overwrite an edited draft. Only **Connect reader** normalizes and validates the manual address, then verifies the reader identity; typing alone never pairs a reader. The same private IPv4 / `crosspoint.local`, HTTP port 80, no-path rules apply to bare and explicit HTTP input. QR validation remains strict.

The review shows **Reader saved · Unavailable** until a fresh identity-verified readiness request succeeds. **Ready to receive** expires after 15 seconds and is cleared when INFORMANT goes into the background. While the review is open, foreground checks repeat every 10 seconds, with bounded discovery only if the saved address is unavailable. Reopening/resuming the review and **Retry connection** also use bounded local discovery to find the same reader if its IP changes. Android Wi-Fi binding keeps direct transfers on the local Wi-Fi even when the reader hotspot has no Internet.

Opening the camera or phone Wi-Fi settings also safeguards the valid edited review in this shelf before launching the native scanner, so activity/process recreation cannot discard those edits. Cancelled scans never replace reader pairing.

**Send to reader** saves an immutable copy of the exact edited review in the local queue before networking, then shows **Sending to reader…** during EPUB upload and **Verifying on reader…** during readback to verify length and SHA-256. Updated readers also confirm that the verified file is ready in Library before INFORMANT reports **Sent and verified**; the reader then displays **Received in Library** when its receive screen repaints. A failed Library confirmation retains the exact queued snapshot for safe retry, including when the unchanged file already exists. Older readers without that capability retain byte-verified success. Failed transfers can be retried individually or with **Send queued items** after reopening Receive from phone. Historical verified receipts include the reader identity under **Saved for reader**. Older saved reviews migrate safely and remain available there. Select a saved snapshot to reopen its original identity and exact reviewed text; subsequent changes in the source tab cannot replace it.

After sending, choose **Done**, then open **Home → Library** on the reader. Library shows phone transfers, desktop Inbox deliveries and ordinary books together. Use **Filter → Categories** or **Content types** to narrow the list; **Filter** also contains **Browse Files** and desktop **Sync now**. A direct phone transfer does not need the separate desktop Inbox sync.

Files use immutable `/PhoneInbox/<category_slug>/<stable_item_and_tab_id>-<sha256>.epub` paths. Repeating unchanged content is idempotent; changed content creates another file. Existing collisions and unknown files are preserved. The Library confirmation validates the reader identity, path, size and digest, durably requests a Library catalog refresh and acknowledges receipt. Opening Library performs any needed rebuild; the receive screen displays the confirmation after request handling finishes. It does not create a desktop Inbox ACK or take ownership of that Inbox index. The reader must remain awake in Receive from phone mode; neither app remotely wakes it.

For travel, expand **Away from home? Use a hotspot**. On the reader choose **Wi-Fi / hotspot → Create Hotspot**, then connect the phone to **CrossPoint-Reader**. Keep the Wi-Fi connection when Android says it has no Internet, then scan the reader QR again. **Open phone Wi-Fi** opens Android Wi-Fi settings.

Alternatively, enable the sending phone's hotspot in Android Settings, choose **Wi-Fi / hotspot** on the reader, and join that phone's network. When Receive from phone is ready, scan its numeric address QR. The shared SDK binds local transfer and discovery to the reader's matching Wi-Fi or tether subnet, including phones that keep their Wi-Fi connection while sharing a hotspot. INFORMANT never changes networks or enables a hotspot automatically. Physical phone hotspot behavior still needs checking on the user's device.

The chosen phone/desktop transport is remembered privately in native settings. Choosing direct transfer never redirects pending desktop publications or sends them to a different reader. Native text accepts up to 4 MiB UTF-8; generated EPUBs accept up to 2 MiB. Direct HTTP transfers are unencrypted and require an explicitly trusted local network.

## Explicit alternative: Desktop inbox

Android and the local desktop application publish to an always-on CrossPoint desktop Inbox. Start that companion service on the computer and export a **publisher** pairing JSON file there. In INFORMANT's review, acknowledge the trusted local HTTP notice, import that file (or paste its JSON), then choose **Send to inbox**. Producer credentials are separate from the reader's credentials. The reader pairs with the same desktop Inbox and downloads through its normal Inbox sync.

The Android system file picker reads the pairing file entirely in native code. Pasted JSON is cleared after pairing succeeds or fails; neither path writes credentials to JavaScript storage, returns the token, or logs it. Pairing first authenticates a read-only publisher role request, then saves app-private native configuration. Capacitor bridge payload logging is disabled, including debug builds. Android cloud-backup and device-transfer rules exclude publisher preferences and the outbox database/sidecars.

The desktop application relays publication through its same-origin `/api/reader-publisher/*` routes. These routes require a loopback socket and local Host; writes also require the matching Origin. Pairing configuration stays in a private native JSON file, and pending content stays in a native SQLite outbox. The browser receives safe settings and outbox metadata, never a token. Ordinary remote/unsupported browser builds keep **Export bridge file** and report it exported, without claiming delivery.

**Send to inbox** commits the exact reviewed content snapshot to the local outbox before HTTP. The application and tab identity stay stable. Newer snapshots coalesce into the same local entry with increasing revisions; a delayed old request cannot replace the newer revision. Changing pairing does not silently send snapshots to another inbox: restore the old pairing or explicitly send the current tab again.

The review and its **Phone outbox** or **Computer outbox** show:

- **Waiting to upload:** content is durably saved locally. Android uses a network-constrained WorkManager job with retry/backoff that survives process closure and restart. Desktop retries while INFORMANT runs and resumes its persisted queue when it starts again.
- **Queued:** the desktop Inbox durably accepted this revision. The reader can download it later without the sending application remaining open.
- **Downloaded:** the reader acknowledged the current EPUB SHA-256 through the Inbox protocol. Publication or an EPUB download alone is insufficient.
- **Needs attention:** pairing, a changed broker revision, or an archived broker item needs action. **Retry uploads** retries the currently paired connection; **Check delivery** reads the broker's reader acknowledgement state.

The outbox holds up to 200 current identities. **Remove** requires confirmation and deletes only this application's local snapshot; it does not delete desktop or reader copies. Content already being published may still be accepted by the broker. Native text accepts up to 4 MiB UTF-8, generated EPUBs up to 2 MiB. The embedded Android SDK validates these limits again.

The computer must stay awake with the companion service running, and the phone and reader must be able to reach its configured LAN address. HTTP sends credentials and content unencrypted and is intended for an explicitly trusted local network. INFORMANT does not remotely wake the reader or force a sync; the reader owns its Inbox check-ins.

Unsupported browser exports preserve the v1 `.crosspoint.json` envelope. Export ingress text is bounded to 200 KiB UTF-8 and the whole JSON to 256 KiB. The exported status explicitly says the content has not been transferred.

## Source and checks

The protocol and reusable skill originate in `/home/ryker/Work/crosspoint-inbox/protocol/`. INFORMANT vendors the complete shared Android bridge in `android/crosspoint-content-bridge`; its checksum manifest supports safe refreshes without replacing unknown local files.

```sh
npm run lint
npm run test:reader
npm run test:reader:queue
node scripts/test-reader-browser.mjs
node scripts/test-reader-publisher-browser.mjs
node scripts/test-reader-direct-browser.mjs
node scripts/test-reader-address-browser.mjs
npm run build:capacitor
npx cap copy android
cd android
bash gradlew :crosspoint-content-bridge:testDebugUnitTest :app:assembleRelease :app:lintRelease
```

Browser checks use a Vite server at `http://127.0.0.1:4321` (override `INFORMANT_READER_TEST_URL`) and local synthetic fixtures. `INFORMANT_PLAYWRIGHT_MODULE`, `INFORMANT_CHROMIUM_PATH`, and `INFORMANT_READER_EVIDENCE` select test dependencies and screenshot output. The queue check covers offline queueing without bridge calls, exact source and edited-review snapshots, restart persistence, home-screen access, fresh readiness, sequential failure/retry, and pending/history separation on Android and desktop at 360px and 1280px in both themes. Storage tests cover migration and rollback, concurrent writes, more than 100 items, and queues exceeding the former 32 MiB aggregate cap. The publisher check mocks the native store or same-origin desktop relay and covers pairing privacy, exact review snapshots, waiting/queued/ACK status, reopening the local outbox, and the explicit Android direct choice at both widths. The direct check covers QR cancellation/pairing, exact offline reviews, failed transfers, retained snapshots after restart, foreground readiness expiry, changed-IP refresh, and verified receipts. The address check covers editable partial/blank drafts across close and restart, explicit validation/connect, failed connects, paired prefill, late settings/readiness responses and QR results in both themes at both widths.

The shared Android fixture suite has 30 passing tests covering manual bare/explicit address normalization and strict rejection, identity-aware readiness/discovery, Wi-Fi and source-bound phone-hotspot routes, offline QR decoding/cancellation, exact verification, negotiated Library receipts and safe retry, and durable publishing. INFORMANT **1.4.9 / version code 26** passed the TypeScript check, `build:capacitor` production build and root-level Capacitor copy, signed release compilation and release lint (zero fatal/error findings), using the existing release signing configuration with JDK 21. The address and existing direct browser matrices also passed for this version. Physical keyboard layout, camera scan, phone/reader hotspot behavior, and user-reviewed hardware transfer remain separate from these software checks.

## Reuse Send to reader in another app

Android applications can embed `android/crosspoint-bridge`; Node/Electron applications can embed `server/crosspoint-content-bridge`. Both are maintained snapshots of the shared CrossPoint Content Bridge SDK, with checksum manifests. The Node module has no third-party runtime dependencies and ships TypeScript declarations. See its README for `createReaderBridge`, explicit Connect, fresh readiness checks, deterministic EPUB generation, progress and verified receipts. Use a stable app/item/tab identity, review the exact text, and preserve a snapshot for failed-transfer retries.

The canonical sources and safe vendor scripts live in `/home/ryker/Work/crosspoint-inbox/protocol`. The installed `crosspoint-content-bridge` skill carries portable Android and Node copies so a new application can integrate independently. The standalone Inbox application is another optional consumer of the same transfer contract.
