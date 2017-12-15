import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Song } from '../song.model';
import * as song from '../actions/song.actions';

export interface State {
    ids: string[];
    loading: boolean;
    canLoadMore: boolean;
    error: string;
    params: any;
    offset: number;
    limit: number;
    selectedPlaylistId: string;
    selectedPlaylistSongIds: string[];
}
  
const initialState: State = {
    ids: [],
    loading: false,
    canLoadMore: true,
    error: '',
    params: {},
    limit: 20,
    offset: 0,
    selectedPlaylistId: undefined,
    selectedPlaylistSongIds: []
};

export function reducer(
	state = initialState,
	action: song.Actions
): State {
	switch(action.type) {

		case song.LOAD: {
            return initialState;
        }
    
        case song.SEARCH: {
          const params = action.payload;

          if (action.payload.query.length < 1) {
            return state;
          }
    
          return {
            ...state,
            loading: true,
            ids: [],
            error: '',
            params,
            offset: 0,
            limit: 20,
            canLoadMore: false
          };
        }
    
        case song.SEARCH_SUCCESS: {
          return {
            ...state,
            ids: action.payload.map(entries => entries.id),
            loading: false,
            error: '',
            params: state.params,
            canLoadMore: true
          };
        }
    
        case song.SEARCH_FAIL: {
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        }

        case song.PLAYLIST_LOAD: {
            return {
                ...state,
                loading: true,
                selectedPlaylistId: action.payload,
                selectedPlaylistSongIds: []
            }
        }

        case song.PLAYLIST_LOAD_SUCCESS: {
            return {
                ...state,
                loading: false,
                selectedPlaylistSongIds: action.payload.map(entries => entries.id),
            }
        }

        case song.PLAYLIST_CLEAR: {
            return {
                ...state,
                loading: false,
                selectedPlaylistId: undefined,
                selectedPlaylistSongIds: []
            }
        }
    
        case song.NEXT_PAGE: {
            if (state.loading) {
                return state;
            }
    
            return {
                ...state,
                loading: true,
                offset: state.offset + state.limit,
                canLoadMore: false
            };
        }
    
        case song.NEXT_PAGE_SUCCESS: {
            return {
                ...state,
                ids: state.ids.concat(action.payload.map(entries => entries.id)),
                loading: false,
                error: '',
                params: state.params,
                canLoadMore: true
            };
        }

		default:
			return state;
	}
}

export const getIds = (state: State) => state.ids;

export const getParams = (state: State) => state.params;

export const getLoading = (state: State) => state.loading;

export const getSelectedPlaylistId = (state: State) => state.selectedPlaylistId;
export const getSelectedPlaylistSongIds = (state: State) => state.selectedPlaylistSongIds;

export const getError = (state: State) => state.error;
