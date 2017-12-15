import { Action } from '@ngrx/store';

import { Song, SearchParams } from '../song.model';


export const LOAD = '[Songs] Load';
export const PLAYLIST_LOAD = '[Songs] Playlist Load';
export const PLAYLIST_LOAD_SUCCESS = '[Songs] Playlist Load Success';
export const PLAYLIST_CLEAR = '[Songs] Playlist Clear';
export const SEARCH = '[Songs] Search';
export const SEARCH_SUCCESS = '[Songs] Search Success';
export const SEARCH_FAIL = '[Songs] Search Fail';
export const NEXT_PAGE = '[Songs] Load Next Page';
export const NEXT_PAGE_SUCCESS = '[Songs] Load Next Page Success';

export class Search implements Action {
	readonly type = SEARCH;

	constructor(public payload: SearchParams) {}
}

export class SearchSuccess implements Action {
	readonly type = SEARCH_SUCCESS;

	constructor(public payload: Song[]) {}
}

export class SearchFail implements Action {
	readonly type = SEARCH_FAIL;

	constructor(public payload: string) {}
}

export class Load implements Action {
	readonly type = LOAD;

	constructor() {}
}

export class PlaylistLoad implements Action {
	readonly type = PLAYLIST_LOAD;

	constructor(public payload: string) {}
}

export class PlaylistLoadSuccess implements Action {
	readonly type = PLAYLIST_LOAD_SUCCESS;

	constructor(public payload: Song[]) {}
}

export class PlaylistClear implements Action {
	readonly type = PLAYLIST_CLEAR;

	constructor() {}
}

export class NextPage implements Action {
	readonly type = NEXT_PAGE;

	constructor() {}
}

export class NextPageSuccess implements Action {
	readonly type = NEXT_PAGE_SUCCESS;

	constructor(public payload: Song[]) {}
}


export type Actions = Search | 
	SearchSuccess | 
	SearchFail | 
	Load | 
	PlaylistLoad | 
	PlaylistLoadSuccess | 
	PlaylistClear | 
	NextPage | 
	NextPageSuccess;
