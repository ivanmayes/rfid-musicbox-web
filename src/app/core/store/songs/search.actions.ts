import { Action } from '@ngrx/store';

import { Song } from '../songs/song.model';

export const SEARCH = '[Search] Query dispatched';
export const SEARCH_UPDATED = '[Search] Search results changed';
export const SEARCH_CLEAR = '[Search] Clear search query';

export class Search implements Action {
	readonly type = SEARCH;

	constructor(public payload: string) {}
}

export class SearchUpdated implements Action {
	readonly type = SEARCH_UPDATED;

	constructor(public payload: Song[]) {}
}

export class SearchClear implements Action {
	readonly type = SEARCH_CLEAR;
}

export type Actions = Search | SearchUpdated | SearchClear;
