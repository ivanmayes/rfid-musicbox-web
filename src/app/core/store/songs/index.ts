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
export const getSelectedPlaylistId = createSelector(
	getSearchState,
	fromSearch.getSelectedPlaylistId
);
export const getSelectedPlaylistSongIds = createSelector(
	getSearchState,
	fromSearch.getSelectedPlaylistSongIds
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

/**
 * TODO: Playlists still technically can come in as Songs right now, 
 * need to separate out before supporting other playlists
 */
export const getSelectedPlaylist = createSelector(
	getSongsEntities,
	getSelectedPlaylistId,
	(entries, selectedPlaylistId) => {
		console.log('Selected Playlist', selectedPlaylistId, entries[selectedPlaylistId]);
		return entries[selectedPlaylistId]
	}
);

export const getSelectedPlaylistSongs = createSelector(
	getSongsEntities,
	getSelectedPlaylistSongIds,
	(entries, songIds) => songIds.map(id => entries[id])
);
