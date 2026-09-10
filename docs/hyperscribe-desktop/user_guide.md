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

Open the Hyperscribe Desktop entry in RykerSoft and choose the Windows executable or Linux archive. On Windows, run the executable directly. On Linux, extract the archive and run `HyperscribeDesktop`. Application data is kept separately in your user profile.

## Inbox and capture

Use Inbox for Audio and Text items. The New button opens the split Markdown/editor preview for a blank Text item. Audio rows keep their recording and attached transcript; when that transcript enters the text workflow, its linked Text row can coexist beside the Audio row in All. Text source badges distinguish Manual, Clipboard, Voice transcript, Action, and other origins without creating more item types. Reminders, pins, search, and tag filters compose with both types. Offline keyword, exact-phrase, and guarded regular-expression rules automatically tag new Inbox content.

## Actions and chat

Actions transform selected text or Inbox content. Hyperscribe supports AI, Python, template, snippet, search, persona, TTS, and combo actions, including ordered Before, Combine, Main, and After stages. Chat keeps persistent threads and supports streaming, stop, edit/regenerate, fork, search, Personas, action and Inbox-item context, and review-before-commit action-library proposals.

In Chat or Actions, the Inbox button opens a dropdown with an **Inbox Items** submenu showing the ten latest entries. Check multiple items, remove selected entries, clear all, or choose **Open Inbox**. In Inbox, select one or more rows and right-click → **Send Items to Actions**. Actions opens with a selection count beside Run; those items replace clipboard input until you press **Clear**.

## Text to speech

Choose Piper for downloaded local voices, Windows speech where available, or a configured Gemini or ElevenLabs provider. Long text is divided into ordered sections so playback can begin while later sections are prepared.

## Provider keys and privacy

Open Settings → API Keys → Connect RykerSoft Pro with Google to use an approved account’s shared provider access. Without Pro, add your own provider keys in the same settings page. Personal keys are preserved when you connect or disconnect Pro. Credentials are excluded from backups, diagnostics, source repositories, and released artifacts. Content is sent to a provider only when the user invokes that provider-backed operation.

## Clipboard palette

Use the configurable global palette hotkey to transform or route clipboard text without leaving the foreground application. The palette preserves normal external auto-paste behavior unless Hyperscribe Chat is actively selected.

## Backup and restore

Use the backup tools to preserve app-owned content, settings, actions, chat, and media, but never provider credentials. Restore validates the archive before merging it with local data. Back up before deleting local application data or moving computers.

## Mobile interoperability

Hyperscribe Desktop and the separately listed Hyperscribe Mobile application use different platform-native interfaces. Compatible action-library JSON can be exported or imported between them; provider credentials are never included.

## PRO Features

RykerSoft Pro is required for shared provider keys and cross-device sync. Existing Hyperscribe Mobile Pro users have been granted Desktop Pro. Sign in with that same Google account. Existing signed-in users are verified automatically. Desktop and Mobile use one shared Hyperscribe provider-key record; changing those shared keys in RykerSoft applies to both editions.

Under Settings → Cross-device Sync, enable sync and choose the content to include: tags, Inbox content, actions, chats, and text replacement rules. Enable **Sync text replacement rules** on your Windows and Linux installations to share rule edits, enabled states, and deletions. Cloud data stays in Hyperscribe’s Firebase project under your account. Recording files and other local file contents are not uploaded by content sync. Android’s existing content sync remains compatible; this release adds replacement-rule sync between desktop installations.

Signing out or losing Pro removes shared provider access and disables cloud sync. Your local content and personal keys remain available.

## Support

Contact heavensounds@gmail.com and include the platform, Hyperscribe version, and a secret-free diagnostics export when available.
