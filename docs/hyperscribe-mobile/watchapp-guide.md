# Hyperscribe for Pebble

Native C chat reader for Pebble 2 Duo (`flint`, 144 × 168) and Pebble Time 2 (`emery`, 200 × 228). Select opens Chats and the reply options. Chats lists the phone's recent conversations in batches of 20. Selecting a chat shows its messages newest first. Up/down scroll the current page; hold Down/Up or use Select → Next/Previous page to continue through long threads. The current page stays visible if the phone disconnects.

While a chat detail page is open and the phone is connected, new Index 01 captures are submitted to that chat and their replies are read aloud with the chat's TTS voice. Opening Chats or leaving the watch app ends that watch selection. When Global voice chat mode is enabled on the phone, its assigned thread takes priority across the ring, phone recorder, and floating button, even while the watch browses another thread.

This app is a display for Hyperscribe. The phone retains the full answer and its source notes. The ring's recording/ingestion path stays on the phone; this watch app does not record audio, run an LLM, or require PebbleKit JavaScript.

## Build and check

Use the [current official SDK installation instructions](https://developer.repebble.com/sdk/). This project was compiled with `pebble-tool 5.0.40` and SDK `4.33.1` on September 15, 2026.

```sh
uv tool install pebble-tool==5.0.40
pebble sdk install 4.33.1
cd watchapp
./test.sh
./build.sh
```

The output is `build/watchapp.pbw`, containing both targets. The build reports approximately 6 KiB of static RAM footprint and 4,092 bytes of resources per target; UI and AppMessage buffers also consume heap at runtime. The message inbox is 768 bytes and outbox is 128 bytes. The host tests exercise UTF-8 boundaries, duplicate pages, invalid counts, stale pages, and the envelope size budget.

For the isolated SDK installed during this development session:

```sh
XDG_DATA_HOME="$PWD/.sdk" PEBBLE_BIN=/tmp/hyperscribe-pebble-sdk-venv/bin/pebble ./build.sh
```

`.sdk/` and `build/` are ignored caches. The test script requires a host C compiler, Python 3, and AddressSanitizer/UndefinedBehaviorSanitizer support. It disables LeakSanitizer because that sanitizer cannot run under the development sandbox's tracing; the tested protocol core allocates no heap.

## Android setup

The official developer guide recommends [PebbleKit Android 2](https://developer.repebble.com/guides/communication/using-pebblekit-android/). The published dependency is:

```kotlin
implementation("io.rebble.pebblekit2:client:1.2.0")
```

It is available from Maven Central. Although [1.3.0](https://github.com/pebble-dev/PebbleKitAndroid2/releases/tag/1.3.0) is current, its Android metadata requires compile SDK 37; Hyperscribe uses SDK 36. This integration pins 1.2.0, whose published metadata is compatible and whose Kotlin dependency matches 2.3.20. The source constructor is `DefaultPebbleSender(context)`; the README example omits the required context. The bridge uses the published API, including per-watch result maps. Published PebbleKit 1.1.0, 1.2.0, and 1.3.0 use Java 21 class files, so JVM tests that load the library need a Java 21 test runtime; the app source can retain its Java/Kotlin target 17.

Hyperscribe's manifest must contain:

```xml
<service
    android:name=".platform.wearable.PebbleListenerService"
    android:exported="true">
    <intent-filter>
        <action android:name="io.rebble.pebblekit2.RECEIVE_DATA_FROM_WATCH" />
    </intent-filter>
</service>
```

`AppContainer` owns `val pebbleWatchBridge = PebbleWatchBridge(context)` and closes it at shutdown. After saving an assistant reply, call `publish(title, text, responseId)` from a coroutine. Observe `state` for connection/delivery feedback. A normal notification can remain the fallback when the bridge returns `UNAVAILABLE`.

The watch manifest explicitly allows `com.rykersoft.hyperscribemobile` first, followed by `com.rykersoft.hyperscribemobile.debug`. If both are installed, the release package wins. No Bluetooth permissions or direct ring pairing are added by this bridge: the Pebble phone app owns the watch connection.

The library's base listener verifies that the caller is the selected Pebble companion app. Hyperscribe additionally validates the watchapp UUID, protocol version, message type, reply identity and page bounds. Received numbers are promoted to `UInt32` or `Int32` by PebbleKit; the decoder accepts these forms.

## Protocol version 1

Watchapp UUID: `d68814f3-0666-4b22-9698-75595741518a`.

| Key | Name | Value |
| --- | --- | --- |
| 0 | VERSION | Unsigned integer, `1` |
| 1 | TYPE | Unsigned integer; types below |
| 2 | RESPONSE_ID | UTF-8 string, at most 36 bytes |
| 3 | TITLE | UTF-8 string, at most 64 bytes |
| 4 | BODY | UTF-8 string, at most 512 bytes |
| 5 | PAGE | Unsigned integer, zero-based |
| 6 | PAGE_COUNT | Unsigned integer, 1–256 |
| 7 | STATUS | Unsigned integer; 0 success, 1 invalid, 2 stale |
| 8 | MAX_BODY | Unsigned integer, watch capability; currently 512 |
| 9 | ACTION_ID | Nonzero UInt32 identifying one watch button action |

String limits exclude the terminating NUL. A PAGE requires keys 0–6. The phone sends UInt8 for version/type and UInt16 for page/count. The watch accepts unsigned integer tuple widths 1, 2, and 4. Both sides reject an invalid envelope before changing the displayed answer.

| Type | Direction | Meaning |
| --- | --- | --- |
| 1 READY | Watch → phone | UI and messaging are ready; includes MAX_BODY, current page, and cached response ID if present |
| 2 PAGE | Phone → watch | One immutable page; a new response starts at page 0 |
| 3 PAGE_REQUEST | Watch → phone | Fetch the requested page of the current response |
| 4 DISPLAYED | Watch → phone | A matching page was validated and assigned to the UI; includes response ID and page |
| 5 ERROR | Watch → phone | Rejected message; status and page explain the failure; ID refers to the currently displayed response |
| 6 HELLO | Phone → watch | Request READY; only version/type required |
| 7 READ_TTS | Watch → phone | Read the saved reply using its Chat voice; response ID, page and ACTION_ID required |
| 8 STOP_TTS | Watch → phone | Stop reading that reply; same identity fields |
| 9 ACTION_RESULT | Phone → watch | Matching ACTION_ID and response ID; status 0 = service request accepted, 1 = unavailable/stale |
| 10 THREADS_REQUEST | Watch → phone | Request a recent chat by zero-based index |
| 11 THREAD_ITEM | Phone → watch | One chat's stable 36-byte wire ID, title, index, and total count |
| 12 THREAD_PAGE_REQUEST | Watch → phone | Open or page through the selected chat |
| 13 THREAD_PAGE | Phone → watch | One page of chat history, newest messages first |

The phone first starts the watch app and sends HELLO, then waits for READY before sending PAGE. HELLO also recovers when the Android process restarted while the watch app remained open. On reconnect, READY reports the cached page, allowing a duplicate resend and acknowledgement without resetting scroll position.

The phone serializes transmissions per watch and keeps only the latest response snapshot. Its wire ID is derived from the caller's response ID plus the content, so changing an answer creates a new immutable snapshot. Page requests must match the current snapshot. Duplicate identical pages are acknowledged again, while unsolicited pages of an existing response are rejected. The sender must serialize complete response replacements as well; an obsolete page-0 retransmission must not be queued after a newer response.

An AppMessage transport ACK is separate from DISPLAYED. The latter means the watch UI accepted the page, **not** that the user read it. Android reports success only after matching DISPLAYED. It retries transient delivery a bounded number of times and keeps the latest snapshot in an atomic private file under `noBackupFilesDir/pebble/` for restart/reconnect recovery. This is a presentation cache; Inbox is authoritative.

The watch stores one page in RAM. Closing the watch app removes that cache. It has no offline browse-all-notes database. Long answers use phone-side pagination; content beyond 256 pages ends with an explicit instruction to continue on the phone. The initial version uses buttons on both platforms and does not depend on Time 2 touch APIs.

## Device verification

Compilation and host tests cannot verify the installed Pebble phone app's permission routing or background lifecycle. After coordinating a device test, install the PBW through the Pebble app or [Dev Connect](https://developer.repebble.com/sdk/), then check:

1. Publish a saved answer and observe READY → PAGE → DISPLAYED.
2. Scroll and request next/previous pages; verify response IDs and page numbers remain paired.
3. Disconnect/reconnect Bluetooth while reading a later page.
4. Kill/restart Hyperscribe while the watch app remains open; HELLO must restore the handshake.
5. Leave the watch app and publish another answer; ensure launch failure/timeout falls back to the saved phone answer without claiming display.

No physical phone or watch was changed by the watch-app build. The local Flint emulator accepted a synthetic response and returned its matching DISPLAYED acknowledgement. Full bidirectional Android/physical-watch verification remains a separate device test.

## Primary references

- [AppMessage lifecycle and size limits](https://developer.repebble.com/docs/c/Foundation/AppMessage/)
- [ScrollLayer UI](https://developer.repebble.com/docs/c/User_Interface/Layers/ScrollLayer/)
- [Current hardware targets](https://developer.repebble.com/guides/tools-and-resources/hardware-information/)
- [SDK 4.33.1 release notes](https://developer.repebble.com/sdk/changelogs/4.33.1/)
- [PebbleKit Android 2 usage](https://github.com/pebble-dev/PebbleKitAndroid2/blob/1.2.0/README.MD)
- [Actual sender API](https://github.com/pebble-dev/PebbleKitAndroid2/blob/1.2.0/client-api/src/main/kotlin/io/rebble/pebblekit2/client/PebbleSender.kt)
- [Listener validation and numeric conversion](https://github.com/pebble-dev/PebbleKitAndroid2/blob/1.2.0/client/src/main/kotlin/io/rebble/pebblekit2/client/BasePebbleListenerService.kt)

## Reading a reply with the phone locked

For a normal mirrored Chat notification, open its watch actions and choose **Read with TTS**. Actions declare `showsUserInterface=false` so Pebble includes them without its optional UI-action setting. Their immutable PendingIntents start a private Android media-playback foreground service; they do not launch an activity or require phone authentication. **Stop reading** addresses the same reply.

In the Hyperscribe watch application, press **Select → Read with TTS**. The watch sends the immutable response ID and an action ID through the authenticated PebbleKit listener. The phone checks the current snapshot and resolves the original Chat thread/message, including a content digest. Changed, deleted and presentation-only test replies cannot silently become another reading. Duplicate watch transport commands are suppressed. A successful watch status says **Speech requested**, which means service startup was accepted; it does not claim synthesis or playback has already succeeded. Provider failures are reported by a phone notification. If Android restricts a direct watch-app start, the mirrored notification action is the supported fallback.

The same `AppContainer.speakChatMessage` function serves Chat's button and the background service. It selects the thread's TTS preset, then its action-context voice, then the default voice, and preserves preprocessing, segmentation, cache and history behavior. Audio uses the phone's current media route, including connected headphones. A foreground notification and bounded wake lock keep requested speech running with the screen off. No automatic readout occurs when a new answer arrives.

Android background-start behavior: [foreground service restrictions](https://developer.android.com/develop/background-work/services/fgs/restrictions-bg-start). Watch UI: [Pebble ActionMenu](https://developer.repebble.com/docs/c/User_Interface/Window/ActionMenu/).
