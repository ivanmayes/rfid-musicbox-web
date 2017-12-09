import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRFID from './rfid.reducer';

export interface RFIDState {
	rfid: fromRFID.State
}

export interface State {
    'rfid': RFIDState
};

export const reducers = {
	rfid: fromRFID.reducer
};


/* Selectors */

export const getRFIDFeatureState = createFeatureSelector<RFIDState>('rfid');

export const getRFIDState = createSelector(
	getRFIDFeatureState,
	(state: RFIDState) => state.rfid
);

export const getSelectedRFIDObject = createSelector(
	getRFIDState,
	fromRFID.getSelectedRFID
);

export const getMode = createSelector(
	getRFIDState,
	fromRFID.getMode
);

export const getDirty = createSelector(
	getRFIDState,
	fromRFID.getDirty
);