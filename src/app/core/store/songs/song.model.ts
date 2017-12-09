export interface Song {
	id: string;
	title: string;
	durationString: string;
	durationSeconds: number;
	thumbnail: string;
	type?: 'youtube-video' | 'youtube-playlist';
}

export interface SearchParams {
	query: string;
	type: string;
}