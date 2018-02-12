import { Action } from '@ngrx/store';
import { Song } from '../songs/song.model';
import { TlTrack, TrackListSettings } from './mopidy.model';

/* Getters */
export const CONNECTION_CHANGE = '[Mopidy] Connection Change';
export const TRACKLIST_CHANGE = '[Mopidy] Tracklist Change';
export const PLAYBACK_CHANGE = '[Mopidy] Playback Change';
export const PLAYBACK_STATE_CHANGE = '[Mopidy] Playback State Change';
export const TRACKLIST_SETTINGS_CHANGE = '[Mopidy] Tracklist Settings Change';

/* Setters */
export const NEXT_TRACK = '[Mopidy] Next Track';
export const PREV_TRACK = '[Mopidy] Previous Track';
export const TOGGLE_PAUSE = '[Mopidy] Toggle Pause';
export const STOP = '[Mopidy] Stop';
export const PLAY = '[Mopidy] Play';
export const PLAY_URIS = '[Mopidy] Play URIs';
export const ADD_TO_QUEUE = '[Mopidy] Add to Queue';


export class ConnectionChange implements Action {
	readonly type = CONNECTION_CHANGE;

	constructor(public payload: string) {}
}

export class TrackListChange implements Action {
	readonly type = TRACKLIST_CHANGE;

	constructor(public payload: TlTrack[]) {}
}

export class PlaybackChange implements Action {
	readonly type = PLAYBACK_CHANGE;

	constructor(public payload: TlTrack) {}
}

export class PlaybackStateChange implements Action {
	readonly type = PLAYBACK_STATE_CHANGE;

	constructor(public payload: string) {}
}

export class TrackListSettingsChange implements Action {
	readonly type = TRACKLIST_SETTINGS_CHANGE;

	constructor(public payload: TrackListSettings) {}
}

export class NextTrack implements Action {
	readonly type = NEXT_TRACK;

	constructor() {}
}

export class PrevTrack implements Action {
	readonly type = PREV_TRACK;

	constructor() {}
}

export class TogglePause implements Action {
	readonly type = TOGGLE_PAUSE;

	constructor() {}
}

export class Stop implements Action {
	readonly type = STOP;

	constructor() {}
}

export class Play implements Action {
	readonly type = PLAY;

	constructor(public payload?: TlTrack) {}
}

export class PlayURIs implements Action {
	readonly type = PLAY_URIS;

	constructor(public payload: Song[]) {}
}

export class AddToQueue implements Action {
	readonly type = ADD_TO_QUEUE;

	constructor(public payload: Song[]) {}
}


export type Actions = 
	ConnectionChange |
	TrackListChange |
	PlaybackChange |
	PlaybackStateChange |
	TrackListSettingsChange |
	NextTrack |
	PrevTrack |
	TogglePause |
	Stop |
	Play |
	PlayURIs |
	AddToQueue;
