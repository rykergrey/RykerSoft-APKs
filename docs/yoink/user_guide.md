# yoink. User Guide

## Contents

- [Getting started](#getting-started)
- [Downloading media](#downloading-media)
- [Editing in Studio](#editing-in-studio)
- [AI connections](#ai-connections)
- [PRO Features](#pro-features)
- [Privacy and credentials](#privacy-and-credentials)

## Getting started

Install the package for your operating system, then install `yt-dlp`, `ffmpeg`, and `ffprobe` and ensure all three commands are available on `PATH`. Open yoink. and paste a supported media URL, or open Studio and import a local media file.

## Downloading media

Choose Video or Audio, select a preset, and expand Advanced when you need an exact container, codec, resolution, frame rate, bitrate, subtitle, metadata, or transfer configuration. Video defaults to an H.264/AAC MP4 at up to 1080p without upscaling; audio defaults to a high-quality MP3. Active downloads can be stopped and retried.

## Editing in Studio

Open a completed download or import a local file. Use the timeline and exact time fields to create up to ten-second initial selections, split or add clips, then export precise or lossless versions. Metadata, track selection, joining, audio replacement, overlays, and other supported FFmpeg operations create new versions while preserving the original.

## AI connections

Open **AI connection** from Studio. You can enter personal OpenAI, Gemini, or Groq keys for the current app session. On desktop, the installed official Codex CLI can also connect an eligible ChatGPT plan for text planning and questions; transcription still needs OpenAI or Groq.

Every cloud request shows its provider, input route, uploads, warnings, and estimated cost before approval. Quotes expire and can be approved once.

## PRO Features

Items marked * require administrator-granted Yoink Pro access for your RykerSoft account.

* **Managed OpenAI access** — Assistant and supported transcription requests can use the package-scoped OpenAI credential.
* **Managed Gemini access** — Assistant, still-frame, and explicitly approved video requests can use the package-scoped Gemini credential.
* **Managed Groq transcription** — Speech transcription can use the package-scoped Groq credential.

To activate Pro access:

1. Open **AI connection → RykerSoft Pro access**.
2. Choose **Continue with Google**. Sign-in occurs in your system browser.
3. Use the same RykerSoft account that the administrator granted for `com.rykersoft.yoink`.
4. Return to yoink. and confirm that Pro is active and the needed providers show ready.
5. Use **Refresh access** after an administrator changes a grant or provider configuration.

An entitlement for another RykerSoft application does not unlock yoink. If access is revoked or cannot be verified, managed credentials are cleared and free mode remains available.

## Privacy and credentials

Personal and RykerSoft-managed provider credentials stay only in native process memory and clear when the app exits. Personal keys take priority. yoink. does not place provider credentials, Firebase refresh tokens, or entitlement state in browser storage, media history, exports, or project files.

Downloaded and imported media remains local unless you approve a provider route that uploads a transcript, sampled frames, or video. Full-video upload is Gemini-only and always requires explicit review.
