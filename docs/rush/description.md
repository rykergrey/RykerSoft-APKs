# Rush

Unofficial companion app for Rush — discography, lyrics, band history, and a personal collection, with content sourced from [Rush.com](https://www.rush.com/albums).

## Features

- Home with explore shortcuts, featured content, and spotlight into the catalog
- Discography with album artwork, decade grouping (including solo), and studio / live / solo filters
- Album pages with About, Tracks, Videos, Credits, Liner Notes, and Awards
- Track list shows duration, pin/rating status, and per-track YouTube video counts when present
- Album Videos tab lists official and user-added YouTube links grouped by track
- Flip album art between front and back covers where available
- Song pages with Lyrics, Appears On, and Videos tabs
- Save selectable lyric excerpts; pin and rate albums, songs, and covers; add personal notes
- Add custom YouTube links on songs; open official catalog videos in YouTube
- Long-press tracks for quick actions: pin, rate, play via default player, or open external search
- My Collection — search/filter saved items; export and import your library as JSON (merge or replace on import)
- The Band — history plus Geddy, Alex, and Neil member pages
- Studio album Timeline (1974–2016)
- Search albums and songs by title or lyrics
- Random Song and Random Video
- Offline bundled catalog; collection data stored on device

## Platforms

- Android (Jetpack Compose), `minSdk` 26
- Package ID: `com.rykersoft.rush`
- Data is bundled on-device (`discography.json` and assets); collection data is stored locally

## Build

### Prerequisites

- Android Studio Ladybug or newer, or JDK 17+ and Android SDK 35
- Python 3 (optional, for regenerating data)

### App

```powershell
.\gradlew.bat assembleDebug
# signed release (needs keystore.properties + release keystore):
.\gradlew.bat assembleRelease
```

Release APKs are published on [GitHub Releases](https://github.com/rykergrey/Rush/releases).

### Regenerate discography data

See [docs/FETCHING_LYRICS.md](docs/FETCHING_LYRICS.md) and [docs/FETCHING_IMAGES.md](docs/FETCHING_IMAGES.md).

```powershell
cd scripts
pip install -r requirements.txt
playwright install chromium
python fetch_images.py --all --resume
python fetch_lyrics.py --resume
python scrape_rush.py
```

Edit album extras in `scripts/enriched_content.json`, then re-run `scrape_rush.py`. Related scripts: `fetch_band.py`, `fetch_youtube.py`.

## Data & attribution

Album metadata and copy are derived from the official Rush discography at https://www.rush.com/albums. Lyrics and album text cover select albums and can be expanded via the scraper pipeline. Screens link out to rush.com for buy/stream options. This app is unofficial and not affiliated with Rush or Anthem Entertainment.

## Project layout

```
app/src/main/
  assets/                 # discography.json, covers, band assets
  java/com/rush/companion/
    data/                 # models, repositories, user library
    ui/screens/           # Compose screens
    ui/theme/             # Rush brand colors
scripts/                  # scrapers and catalog merge
docs/                     # fetch guides
screenshots/              # hub screenshots for RykerSoft
```
