# Hyperscribe Desktop

Hyperscribe Desktop is a local-first voice, text, action, chat, and speech
workspace for Windows and Linux. Capture clipboard text or audio, organize an
Inbox, transform content with reusable actions and pipelines, chat with
configurable AI providers, and read content aloud with local or cloud speech.

Current release: **2.4.4**.

## Features

- Record, import, transcribe, edit, tag, search, and organize voice and text items.
- Correct completed transcripts with reusable multi-phrase replacement rules and dynamic date/time values.
- Build AI, Python, template, snippet, search, persona, TTS, and combo actions.
- Keep persistent chat threads with streaming, editing, regeneration, action context, and TTS.
- Search saved knowledge locally and review proposed Inbox edits before applying them.
- Use the versioned Inbox Viewer for text, audio playlists, item Chat, saved actions, and multiple alerts.
- Sync selected Inbox content, tags, actions, Chat threads, and text replacements between signed-in Desktop and Mobile devices with approved RykerSoft Pro access.
- Use Piper locally, Windows speech where available, or configure Gemini and ElevenLabs speech.
- Use personal provider keys or connect approved RykerSoft Pro access with Google. Securely stored credentials are kept separate from ordinary settings and release artifacts.
- Move action libraries between Android and Windows using compatible JSON exports.
- Assign unlimited alternate global and per-action shortcuts through native Windows hotkeys or managed Omarchy/Hyprland bindings.
- Check for and install packaged updates in the application, or open the source repository and releases for a manual update.

## Platforms

- Windows 10/11 on x86-64.
- Linux x86-64, including first-class Omarchy/Hyprland integration.
- Portable PyInstaller executable or onedir bundle; no Python installation required.

## PRO Features

* Shared provider access — approved Gemini, OpenAI, Groq, and ElevenLabs credentials through Google sign-in.
* Cross-device Sync — opt-in sharing of selected source records between signed-in Desktop and Mobile devices.

RykerSoft Pro provides approved shared Gemini, OpenAI, Groq, and ElevenLabs access
plus cross-device synchronization. Connect with the same Google account used for
RykerSoft. Personal provider keys remain available independently. Recording,
organization, local actions, Chat with personal keys, and local TTS do not require
Pro. Automatic Sync is optional, and the status reports the time and record
counts of each completed pass.

## Privacy

Content is stored locally unless the user invokes a configured cloud provider,
enables cloud Sync, or shares/exports it. Ordinary untagged clipboard captures
stay local under the tagged-item Sync policy. Explicit local-only exclusions
override other sharing choices. File, image, and audio attachment bytes remain
on their originating device; synced text and metadata do not transfer those
files. Search indexes and embeddings stay local. Provider credentials are
excluded from action exports, diagnostics, source control, and release artifacts.

## Support

For support, contact heavensounds@gmail.com.
