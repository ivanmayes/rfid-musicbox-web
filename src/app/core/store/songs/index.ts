import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromSearch from './reducers/search.reducer';
import * as fromSongs from './reducers/song.reducer';

export interface SongsState {
    search: fromSearch.State,
    songs: fromSongs.State
};

export interface State {
    'songs': SongsState
};

export const reducers = {
	songs: fromSongs.reducer,
	search: fromSearch.reducer
};


/* Selectors */
export const getSongsState = createFeatureSelector<SongsState>('songs');

export const getSongsEntitiesState = createSelector(
	getSongsState,
	state => state.songs
);

export const {
	selectIds: getSongsIds,
	selectEntities: getSongsEntities,
	selectAll: getAllSongs,
	selectTotal: getTotalSongs,
} = fromSongs.adapter.getSelectors(getSongsEntitiesState);


/* Search */
export const getSearchState = createSelector(
	getSongsState,
	(state: SongsState) => state.search
);

export const getSearchEntriesIds = createSelector(
	getSearchState,
	fromSearch.getIds
);
export const getSearchParams = createSelector(
	getSearchState,
	fromSearch.getParams
);
export const getSearchLoading = createSelector(
	getSearchState,
	fromSearch.getLoading
);
export const getSearchError = createSelector(
	getSearchState,
	fromSearch.getError
);

export const getSearchResults = createSelector(
	getSongsEntities,
	getSearchEntriesIds,
	(entries, searchIds) => {
		return searchIds.map(id => entries[id]);
	}
);
