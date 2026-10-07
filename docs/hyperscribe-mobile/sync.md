# Hyperscribe Sync

Open Settings → Sync and sign in with Google. Sync is disabled until a policy is enabled. **All tagged items** shares Inbox items with at least one tag, subject to tag exclusions. **Only selected tags** shares items carrying a selected tag. **Everything except** shares all Inbox items, including untagged items, unless they have an excluded tag. Existing explicit selections are preserved.

Chat threads and transcription text replacements are optional. Actions can be synced in full, by category, or by tag. Inbox and Action tag catalogs stay separate, including tags with the same name. The tag editor's **Sync this tag** chip provides a quick opt-in.

Hyperscribe Sync is the app's primary Firebase connection and uses the dedicated `hyperscribe-bbe29` project. Data is stored under the signed-in user's private `users/{uid}` Firestore path. Optional Pro Access is isolated in the named `rykersoft-hub` Firebase connection to `rykersoft-abe84`, where the exact `com.rykersoft.hyperscribemobile` entitlement and package-scoped provider record are managed. Firebase UIDs are project-scoped and are never treated as interchangeable. Conflict resolution uses UTC update timestamps and deletions propagate with tombstones. Removing content from a sync list removes only its cloud copy rather than deleting another device's local copy.

Tag names identify one logical tag across devices without regard to capitalization. A cloud tag whose name already exists locally is aliased to the local tag before Room writes tag or item records, and every tag reference is remapped with it. Sync settings lists cloud-only tags and shows local/cloud item counts so selecting a tag makes the import scope clear.

Individual Inbox text items can be selected independently with **Sync on all devices** from the item menu. This explicit selection composes with the tag policy and is stored in the shared desktop-compatible payload. **Keep only on this device** records an explicit local exclusion that overrides tag selection and protects the item from remote imports.

Attachment bytes and local paths are not uploaded. The Inbox text can sync, but device-local files cannot be opened remotely.

When **Automatic sync** is enabled, relevant local edits schedule a coalesced network-constrained WorkManager request. Periodic work checks remote changes approximately every 15 minutes; Android battery restrictions can delay it. Foreground resume also checks changes. Disabled Sync, manual-only mode, and sign-out stop automatic work. Failed work retries with backoff; local records remain the durable source of pending edits. Android force-stop prevents background work until the app is opened again.

Manual **Sync now** requests a full server reconciliation. Automatic passes bootstrap each selected collection once, then read server-stamped changes into a private account-scoped cache. Unchanged records are not rewritten. Every upgraded content write, removal marker, and tombstone carries `serverChangedAt`, allowing Desktop to receive Android edits even when their client timestamps are older. Legacy clients without that field require manual full sync. Deletions use tombstones; removing a record from sharing uses `sync_removed` and preserves another device's existing local copy.

Sync requires server responses rather than accepting an offline cache as proof of completion. Conditional Firestore transactions protect unseen remote revisions. Account-scoped receipts compare acknowledged local and cloud revisions, preserve sequential edits made with a slow device clock, and prevent unchanged downloads from being uploaded again. Remote imports preserve timestamps and this device's attachment handles. Interrupted, failed, or disabled passes do not stamp a new completion time.

Completion shows this client's latest successful check and record counts; it does not prove another device has downloaded them. The shared policy is used for initial setup. Already configured installations retain local selection settings, so check compatible selections on every device.

Both Firebase projects contain the current canonical debug and production release certificate fingerprints for their corresponding Hyperscribe Android registrations. The checked-in `google-services.json` belongs only to `hyperscribe-bbe29`; public RykerSoft hub client configuration is kept under explicitly named `rykersoft_hub_*` resources so the two data planes cannot be confused.
