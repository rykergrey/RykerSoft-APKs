# Hyperscribe Sync

Hyperscribe Sync uses the `hyperscribe-bbe29` Firebase project and Google sign-in. Every cloud document is stored below `users/{uid}` and the Firestore rules permit access only when the signed-in user owns that UID.

Sync remains opt-in. The new default selection is **All tagged items**: after enabling Sync and automatic synchronization, any Inbox item with at least one tag travels between devices. Manual tags and automatic tag assignments both count. Optional tag exclusions narrow this automatic selection. Ordinary untagged clipboard captures stay local unless explicitly shared.

Existing **Only selected tags**, **Everything except**, disabled Sync, and manual-only preferences are preserved. **Everything except** includes untagged items. Chat threads and text replacements can be enabled independently. Actions can be kept local, synced in full, selected by category, or selected through the separate Action tag catalog.

The checkbox in the tag editor is a shortcut for adding that tag to the selected-tag policy. Action tags use the same manual assignments and automatic matching rules as Inbox tags.

Within each catalog, tag names identify the same logical tag across devices without regard to capitalization. If two devices created the same name with different internal IDs, Sync reconciles them and migrates references instead of creating a duplicate. An Inbox tag and an Action tag can share a name without being merged. Settings shows each Inbox tag's local and cloud item counts, including cloud-only tags that are available to import.

An individual Inbox item can be shared independently of its tags with **Sync on all devices** in its context menu. **Keep only on this device** sets an explicit local-only exclusion, which overrides every tag policy and protects the local copy from remote updates. Explicitly sharing it again clears that exclusion. Selecting an item while signed in enables Sync and starts a pass.

Google sign-in opens the system browser and returns through a temporary local callback protected by PKCE and a state value. After sign-in, Hyperscribe can refresh the cloud tag catalog and counts without enabling or applying Sync; content is transferred only after the user enables a policy or explicitly selects an item.

Records use desktop-compatible JSON payloads in the `tags`, `inboxItems`, `actions`, `chatThreads`, and `textReplacements` user subcollections. Tags carry an Inbox or Actions scope within the `tags` collection; older tags without a scope belong to Inbox. Canonical text, source relationships, provenance, and version metadata travel together. Search indexes and embeddings remain local and rebuildable.

Sync compares local and remote records with the last acknowledged revisions. A sequential local edit uploads even when that device's clock is behind; an unchanged local copy accepts an authoritative remote revision without uploading it again. UTC update timestamps and a deterministic content comparison decide genuinely concurrent edits. Desktop writes use Firestore document-version preconditions, so a concurrent remote edit causes a retry rather than an unseen overwrite. Changes made locally while a network request runs are protected during application of its result. An offline deletion does not erase an unseen remote edit: the new cloud revision is imported first. Deletions use tombstones. Removing the final tag or excluding an item replaces its cloud content with a small `sync_removed` marker, preserving other devices' existing local copies without automatically uploading those unchanged copies again. Previously shared tag definitions remain available even while temporarily unused.

File and image attachment bytes and local paths stay on the originating device. The Inbox text can sync, but another device cannot open the local-only attachment.

The desktop refresh token is stored in the operating system credential vault (Secret Service on Linux or Credential Manager through `keyring` on Windows), never in settings JSON.

Desktop Firebase identifiers are loaded from environment variables or an ignored local `app/firebase_config.json` copied from `app/firebase_config.example.json`. The build includes that local file when present; a build without it still succeeds, with Sync shown as unavailable until configured.


### Automatic delivery and cost control

With automatic Sync enabled, desktop changes are coalesced for three seconds before sending. Untagged clipboard activity causes no network request when the selected content is unchanged. Changes during an active request schedule one follow-up. Remote changes are checked every five to fifteen minutes while the desktop app is running, backing off while idle. Failed requests retry after thirty seconds, doubling up to one hour; pending content remains durable locally. Sign-out, disabled Sync, manual-only mode, or unavailable Pro access stop automatic requests. This is eventual synchronization, not instantaneous delivery or a service that runs after the app exits.

The first pass reads the selected collections once. Later automatic passes query the server-maintained `serverChangedAt` timestamp and merge changes into an account-scoped local cache. This handles late uploads of older offline edits without scanning the entire cloud library every minute. Unchanged records and policy documents are not rewritten. Unselected action/chat/replacement collections are not polled unless previous selection must be reconciled. Firestore still charges for query reads, including minimum reads on empty queries; this reduces unnecessary operations rather than making cloud sync free.

**Sync now** performs a full reconciliation and remains available in manual-only mode. It also repairs changes made by older clients that do not write `serverChangedAt`, including older hard cloud deletions. Upgrade both devices for automatic incremental delivery. A discarded or missing local cache safely triggers another bootstrap. The local cache contains source metadata, and uses the same private app-data storage as the Inbox.

**RykerSoft Pro active** describes account access. **Sync complete** confirms this client's pass: server requests completed, downloaded changes were saved locally, and its receipt was persisted. The status shows the UTC check time and uploaded/downloaded record counts. A disabled policy cannot produce a new successful sync status, and switching accounts clears the previous account's status. These counts include metadata records and deletion markers; they are not a count of visible Inbox items. Completion does not acknowledge receipt by another device.

The shared `syncConfig/policy` document supplies initial settings to a device that has not configured Sync. After initialization, each installation keeps its own selection settings and publishes explicit policy changes. Verify compatible selections on every device; a cloud policy change does not automatically replace an already configured device's local preferences. Separate account-wide sharing settings and device-specific download preferences remain a future improvement.

### Saved Pro access

After Google sign-in verifies Pro, the app saves account identity and Pro provider credentials in the operating system credential store, separately from personal API keys. Subsequent launches restore access locally without network requests. **Refresh RykerSoft Pro** explicitly checks access and updates saved keys. Temporary connectivity, authentication-service, quota, or server failures preserve previously verified credentials. Sign-out, switching Google accounts, or the access service explicitly returning `pro-required` clears them. Without an explicit successful check, cached entitlement does not expire locally; provider services still control whether their keys work.

If secure storage fails, Settings reports that credentials could not be saved. Unlock or repair the system credential store and refresh Pro before relying on an offline restart. Existing installations need one successful Pro check to populate this new cache. Cloud AI providers still require internet connectivity to process requests; retaining credentials does not make those providers run offline.

For operators: a Firestore HTTP 429 indicates resource/quota exhaustion, not failed Google sign-in. Inspect the Firebase project's usage, quotas, and billing to identify the exhausted limit. Older deployed clients continue their minute-based polling until updated. Monitor quota utilization and alert before exhaustion; this desktop change cannot restore an already exhausted server quota or guarantee a first-time sign-in during a service outage.
