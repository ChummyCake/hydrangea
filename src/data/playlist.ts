export type PlaylistTrack = {
	id: string;
	title: string;
	artist: string;
	src: string;
};

// Place MP3 files you own or have permission to distribute in public/music/.
// Reference them with root-relative paths, such as /music/song-title.mp3.
export const PLAYLIST: PlaylistTrack[] = [
	{
		id: "1",
		title: "bee.",
		artist: "GroovyDominoes52",
		src: "/music/bee.mp3",
	},
	{
		id: "2",
		title: "tohiko",
		artist: "Eve",
		src: "/music/tohiko.mp3",
	},
	{
		id: "3",
		title: "Dramaturgy",
		artist: "Eve",
		src: "/music/dramaturgy.mp3",
	},
];
