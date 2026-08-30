# Hyperscribe user guide

## Table of Contents

- [Getting started](#getting-started)
- [Inbox and recording](#inbox-and-recording)
- [Actions and chat](#actions-and-chat)
- [Text to speech](#text-to-speech)
- [Provider keys and privacy](#provider-keys-and-privacy)
- [Sharing and interoperability](#sharing-and-interoperability)
- [Backup and restore](#backup-and-restore)
- [Platform differences](#platform-differences)
- [PRO Features](#pro-features)
- [Support](#support)

## Getting started

Install Hyperscribe Mobile through its Android entry in RykerSoft. Grant microphone and notification permissions only when the corresponding features are needed.

## Inbox and recording

Use Inbox for recordings, transcripts, saved text, files, and images. Tap the central record control to create a voice note, or drag upward to add clipboard text, import a text document, open a blank text editor, choose another recording profile, or import existing audio. Imported audio is saved without automatic transcription; transcribe it on demand from its Inbox controls. Recording can continue through a visible foreground notification. Android Sharesheet imports remain supported, and saved items can be edited, tagged, searched, played, copied, shared, or deleted. Automatic tag rules also apply when multiple selected text items or transcripts are copied into one combined Inbox item.

## Actions and chat

Actions transform text or Inbox content. When one or more Inbox text items or recording transcripts are selected, the Actions page preserves and uses that selection. With no Inbox selection, an action reads the current clipboard instead. Successful text transformations replace the clipboard contents and are saved to the Inbox; snippets copy their own content and do not require an input item. Hyperscribe supports AI, Python, template, snippet, search, persona, TTS, and combo actions, including ordered Before, Combine, Main, and After stages. Action editors provide selectors for LLM models, thinking levels, speech providers, voices, and speech models, using the provider catalogs configured in Settings. Chat keeps persistent threads and supports streaming, stop, edit/regenerate, fork, search, Personas, action context, and review-before-commit action-library proposals.

## Text to speech

Choose Piper for downloaded on-device voices, the Android system speech engine on mobile, or a configured Gemini or ElevenLabs provider. Long text is divided into ordered sections so playback can begin while later sections are prepared.

## Provider keys and privacy

Cloud features require either personal provider credentials or optional RykerSoft Pro Access. In Settings, sign in with Google to check the exact Hyperscribe Mobile entitlement, or add only the personal keys you need. Personal keys take priority and Android encrypts them with a non-exportable Keystore-backed key. Entitled family values stay in memory only and clear on sign-out, revocation, or access failure. Credentials are excluded from backups, diagnostics, source repositories, and released artifacts. Content is sent to a provider only when the user invokes that provider-backed operation.

## Sharing and interoperability

Use Android Sharesheet, Process Text, Copy, and Share commands to move content between Hyperscribe Mobile and other apps. Compatible action JSON can be imported or exported for use with a separate Hyperscribe Desktop installation.

## Backup and restore

Use the Android document picker to create a portable ZIP backup. Backups contain app-owned content, settings, actions, chat, and media, but never provider credentials. Restore validates the archive before merging it with local data. Back up before uninstalling, clearing app data, or moving devices.

## Platform differences

Modern Android does not allow continuous background clipboard monitoring, silent microphone startup, desktop global hotkeys, or automatic paste into another app. Hyperscribe Mobile uses Sharesheet, Process Text, launcher/widget/tile controls, a foreground recording service, explicit Copy/Share, and an optional permission-gated floating control.

## PRO Features

Hyperscribe Mobile v2.2.0 offers optional RykerSoft Pro Access for personal family use.

- * Family provider access — sign in with Google in Settings. If the RykerSoft administrator granted `com.rykersoft.hyperscribemobile`, configured Gemini, OpenAI, Groq, and ElevenLabs family providers become available without saving their values on the device.
- Personal keys remain supported and take priority.
- Free and local workflows do not require an account, entitlement, or provider key.

## Support

Contact heavensounds@gmail.com and include the platform, Hyperscribe version, and a secret-free diagnostics export when available.
