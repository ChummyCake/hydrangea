Feature: Header Music Player

Goal: Create a Neocities-inspired music player integrated into the website header.

Architecture
- Build a standalone MusicPlayer.astro component and import it into Header.astro (You may remove the current Playlist.astro).
- Keep playlist data separate in src/data/playlist.ts.
- Keep playback logic independent of the website's theme system.
Functionality
- Since autoplay is not viable for modern browser, show a play button initally for the visitor to click and start playing music.
- Minimized playlist accessible from the header, extend on hover for operative options.
- Play / pause, previous / next track.
- Display current track title and artist (even when minimized).
- Progress bar with seeking.
- Volume control.
- Optional shuffle and repeat.
- Automatically play the next track when the current one ends.
- Persist playback across Astro page navigation using transition:persist where applicable.
- Store user preferences (volume, shuffle, etc.) in localStorage.
Audio implementation
- Use native HTML5 <audio> API.
- Use self-hosted MP3 files under public/music/.
- No Spotify, YouTube, SoundCloud, authentication, or external music SDKs.
- Do not force autoplay; playback starts after user interaction.
Styling
- Match the existing website design and customizable themes.
- Use existing CSS variables for colors, fonts, borders, and backgrounds.
- Keep the dropdown compact and visually consistent with the header.

Important: Keep the player modular, lightweight, and independent of the header implementation.