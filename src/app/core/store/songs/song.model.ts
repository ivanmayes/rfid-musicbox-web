export interface Song {
	id: string;
	title: string;
	durationString?: string;
	durationSeconds?: number;
	thumbnail: string;
	type?: 'youtube-video' | 'youtube-playlist';
	playlistId?: string;
	added?: boolean;
}

export interface SearchParams {
	query: string;
	type: string;
}