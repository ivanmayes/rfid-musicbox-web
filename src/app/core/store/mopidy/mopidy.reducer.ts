import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as mopidy from './mopidy.actions';
import { TlTrack, TrackListSettings } from './mopidy.model';

export interface State {
    connectionStatus: string;
    nowPlaying: TlTrack;
    trackList: TlTrack[];
    playbackState: string;
    trackListSettings: TrackListSettings;
}
  
const initialState: State = {
    connectionStatus: 'offline',
    playbackState: 'stopped',
    nowPlaying: undefined,
    trackList: undefined,
    trackListSettings: {
        random: false,
        repeat: false
    }
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

        case mopidy.PLAYBACK_STATE_CHANGE: {
            return {
                ...state,
                playbackState: action.payload
            }
        }

        case mopidy.TRACKLIST_SETTINGS_CHANGE: {
            return {
                ...state,
                trackListSettings: action.payload
            }
        }

        case mopidy.PLAYBACK_CHANGE:
        case mopidy.PLAY: {
                if (action.payload) {
                    return {
                        ...state,
                        nowPlaying: action.payload
                    }
                }
            }
        break;

        

		default:
			return state;
	}
}

export const getConnectionStatus = (state: State) => state.connectionStatus;
export const getNowPlaying = (state: State) => state.nowPlaying;
export const getTrackList = (state: State) => state.trackList;
export const getPlaybackState = (state: State) => state.playbackState;