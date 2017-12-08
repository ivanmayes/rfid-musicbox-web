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
}
  
const initialState: State = {
    ids: [],
    loading: false,
    canLoadMore: true,
    error: '',
    params: {},
    limit: 20,
    offset: 0
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

export const getError = (state: State) => state.error;
