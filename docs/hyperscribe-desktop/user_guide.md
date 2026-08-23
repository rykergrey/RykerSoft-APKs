# Hyperscribe user guide

## Table of Contents

- [Getting started](#getting-started)
- [Inbox and capture](#inbox-and-capture)
- [Actions and chat](#actions-and-chat)
- [Text to speech](#text-to-speech)
- [Provider keys and privacy](#provider-keys-and-privacy)
- [Clipboard palette](#clipboard-palette)
- [Backup and restore](#backup-and-restore)
- [Mobile interoperability](#mobile-interoperability)
- [PRO Features](#pro-features)
- [Support](#support)

## Getting started

Open the Hyperscribe Desktop entry in RykerSoft and download the portable Windows executable. Run it directly; application data is kept separately in `%USERPROFILE%\.hyperscribe-desktop\`.

## Inbox and capture

Use Inbox for recordings, transcripts, clipboard captures, saved text, files, and images. Record a voice note or import existing audio, then transcribe, edit, tag, search, play, copy, export, or delete it.

## Actions and chat

Actions transform selected text or Inbox content. Hyperscribe supports AI, Python, template, snippet, search, persona, TTS, and combo actions, including ordered Before, Combine, Main, and After stages. Chat keeps persistent threads and supports streaming, stop, edit/regenerate, fork, search, Personas, action context, and review-before-commit action-library proposals.

## Text to speech

Choose Piper for downloaded local voices, Windows speech where available, or a configured Gemini or ElevenLabs provider. Long text is divided into ordered sections so playback can begin while later sections are prepared.

## Provider keys and privacy

Cloud features require the user's own provider credentials. Open Settings, add only the keys you need, and use the Show/Hide control when reviewing a secret field. Credentials are excluded from backups, diagnostics, source repositories, and released artifacts. Content is sent to a provider only when the user invokes that provider-backed operation.

## Clipboard palette

Use the configurable global palette hotkey to transform or route clipboard text without leaving the foreground application. The palette preserves normal external auto-paste behavior unless Hyperscribe Chat is actively selected.

## Backup and restore

Use the backup tools to preserve app-owned content, settings, actions, chat, and media, but never provider credentials. Restore validates the archive before merging it with local data. Back up before deleting local application data or moving computers.

## Mobile interoperability

Hyperscribe Desktop and the separately listed Hyperscribe Mobile application use different platform-native interfaces. Compatible action-library JSON can be exported or imported between them; provider credentials are never included.

## PRO Features

Hyperscribe v2.1.0 has no RykerSoft Pro-only features. Cloud operations use bring-your-own provider credentials. Free and local workflows do not require a RykerSoft account.

## Support

Contact heavensounds@gmail.com and include the platform, Hyperscribe version, and a secret-free diagnostics export when available.
