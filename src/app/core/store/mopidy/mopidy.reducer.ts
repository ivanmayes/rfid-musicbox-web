import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as mopidy from './mopidy.actions';
import { TlTrack } from './mopidy.model';

export interface State {
    connectionStatus: string;
    nowPlaying: TlTrack,
    trackList: TlTrack[]
}
  
const initialState: State = {
    connectionStatus: 'offline',
    nowPlaying: undefined,
    trackList: undefined
};

export function reducer(
	state = initialState,
	action: mopidy.Actions
): State {
	switch(action.type) {

        case mopidy.CONNECTION_CHANGE: {
            return {
                ...state,
                connectionStatus: action.payload
            }
        }

        case mopidy.TRACKLIST_CHANGE: {
            return {
                ...state,
                trackList: action.payload
            }
        }

        case mopidy.PLAYBACK_CHANGE: {
            return {
                ...state,
                nowPlaying: action.payload
            }
        }

		default:
			return state;
	}
}

export const getConnectionStatus = (state: State) => state.connectionStatus;
export const getNowPlaying = (state: State) => state.nowPlaying;
export const getTrackList = (state: State) => state.trackList;
