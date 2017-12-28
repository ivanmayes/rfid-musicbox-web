import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as rfid from './rfid.actions';
import { RFIDObject, RFIDTrackListInitialState } from './rfid.model';

export interface State {
    mode: 'get' | 'set';
    dirty: boolean;
    selectedRFID: RFIDObject;
}
  
const initialState: State = {
    mode: 'get',
    dirty: false,
    selectedRFID: undefined
};

export function reducer(
	state = initialState,
	action: rfid.Actions
): State {
	switch(action.type) {

		case rfid.LOAD_RFID_OBJECT: {
            // Check to see if the card payload is empty, fill in if it is
            let rfid = action.payload;
            if (!rfid.payload) {
                return {
                    ...state,
                    dirty: false,
                    selectedRFID: {
                        ...action.payload,
                        payload: {
                            ...RFIDTrackListInitialState
                        }
                    }
                }
            }

            return {
                ...state,
                dirty: false,
                selectedRFID: action.payload
            }
        }

        case rfid.MODE_CHANGED: {
            return {
                ...state,
                mode: action.payload
            }
        }

        case rfid.TOGGLE_SHUFFLE: {
            return {
                ...state,
                dirty: true,
                selectedRFID: {
                    ...state.selectedRFID,
                    payload: {
                        ...state.selectedRFID.payload,
                        shuffle: !state.selectedRFID.payload.shuffle
                    }
                }
            }
        }

        case rfid.TOGGLE_LOOP: {
            return {
                ...state,
                dirty: true,
                selectedRFID: {
                    ...state.selectedRFID,
                    payload: {
                        ...state.selectedRFID.payload,
                        loop: !state.selectedRFID.payload.loop
                    }
                }
            }
        }

        case rfid.ADD_SONG: {

            // Long way to say add a track to that array
            return {
                ...state,
                dirty: true,
                selectedRFID: {
                    ...state.selectedRFID,
                    payload: {
                        ...state.selectedRFID.payload,
                        tracks: state.selectedRFID.payload.tracks.concat(action.payload)
                    }
                }
            }
        }

        case rfid.REMOVE_SONG: {
           // Long way to say remove a track from that array
           return {
                ...state,
                dirty: true,
                selectedRFID: {
                    ...state.selectedRFID,
                    payload: {
                        ...state.selectedRFID.payload,
                        tracks: state.selectedRFID.payload.tracks.filter(track => track.id !== action.payload)
                    }
                }
            }
        }

        case rfid.CLEAR_LIST: {
            // Long way to say clear the list
            return {
                ...state,
                dirty: true,
                selectedRFID: {
                    ...state.selectedRFID,
                    payload: {
                        ...state.selectedRFID.payload,
                        tracks: []
                    }
                }
            }
        }

		default:
			return state;
	}
}

export const getMode = (state: State) => state.mode;

export const getDirty = (state: State) => state.dirty;

export const getSelectedRFID = (state: State) => state.selectedRFID;
