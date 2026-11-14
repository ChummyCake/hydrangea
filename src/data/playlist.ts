export type PlaylistTrack = {
	id: string;
	title: string;
	artist: string;
	kind: 'embed' | 'audio';
	src: string;
	credit?: string;
};

// Add provider embed URLs or audio files you own / have permission to distribute.
// For self-hosted audio, place the file under public/audio and use /audio/filename.mp3.
export const PLAYLIST: PlaylistTrack[] = [];
