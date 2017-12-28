import { Action } from '@ngrx/store';
import { Song } from '../songs/song.model';
import { RFIDObject } from './rfid.model';

export const LOAD_RFID_OBJECT = '[RFID] Load';
export const SET_MODE = '[RFID] Set Mode';
export const TOGGLE_SHUFFLE = '[RFID] Toggle Shuffle';
export const MODE_CHANGED = '[RFID] Mode Changed';
export const SAVE = '[RFID] Save';
export const ADD_SONG = '[RFID] Add Song';
export const REMOVE_SONG = '[RFID] Remove Song';
export const CLEAR_LIST = '[RFID] Clear List';

export class LoadRFIDObject implements Action {
	readonly type = LOAD_RFID_OBJECT;

	constructor(public payload: RFIDObject) {}
}

export class SetMode implements Action {
	readonly type = SET_MODE;

	constructor(public payload: string) {}
}

export class ToggleShuffle implements Action {
	readonly type = TOGGLE_SHUFFLE;

	constructor() {}
}

export class ModeChanged implements Action {
	readonly type = MODE_CHANGED;

	constructor(public payload: 'get' | 'set') {}
}

export class Save implements Action {
	readonly type = SAVE;

	constructor() {}
}

export class AddSong implements Action {
	readonly type = ADD_SONG;

	constructor(public payload: Song) {}
}

export class RemoveSong implements Action {
	readonly type = REMOVE_SONG;

	constructor(public payload: string) {}
}

export class ClearList implements Action {
	readonly type = CLEAR_LIST;

	constructor() {}
}


export type Actions = LoadRFIDObject | SetMode | ToggleShuffle | ModeChanged | Save | AddSong | RemoveSong | ClearList;
