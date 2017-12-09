import { Action } from '@ngrx/store';

import { Song, SearchParams } from '../song.model';


export const LOAD = '[Songs] Load';
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

export class NextPage implements Action {
	readonly type = NEXT_PAGE;

	constructor() {}
}

export class NextPageSuccess implements Action {
	readonly type = NEXT_PAGE_SUCCESS;

	constructor(public payload: Song[]) {}
}


export type Actions = Search | SearchSuccess | SearchFail | Load | NextPage | NextPageSuccess;
