# Recording into an Inbox item

Each card keeps Copy immediately to the left of its three-dot menu. The playback button uses a speaking-person icon for read-aloud and generated speech, and a Play triangle for recorded audio.

Tap the microphone on a card to start a recording associated with that item. You can lift your finger, switch screens, or put the app in the background; recording continues through the normal foreground recording service. Use the usual Stop, Pause, Resume, and Cancel controls. The card microphone is disabled while another recording is active. Microphone permissions use the normal recording permission flow and preserve the selected destination.

Stopping saves an audio attachment on the original item immediately, then transcribes it with the configured provider and appends the result as a new paragraph. Play attached audio using the Recording chip on the card. Multiple recordings remain separate playable attachments. Cancelling discards the current take and leaves the item unchanged.

The destination is saved with the recording so delayed transcription and retries update the right item once. Tags, pins, alerts, retention, and existing attachments are preserved. Previous text is kept in revision history, and cached speech is cleared because the text changed. The audio attachment belongs to the destination independently of temporary transcription-source cleanup. Transcription source rows are archived so no extra Inbox card remains. If the destination was deleted while recording or transcription was pending, the recording/transcript stays separately in Inbox. Recording into an item does not copy text to the system clipboard or run automatic actions.
