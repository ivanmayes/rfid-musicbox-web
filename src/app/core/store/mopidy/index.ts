import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMopidy from './mopidy.reducer';

export interface MopidyState {
	mopidy: fromMopidy.State
}

export interface State {
    'mopidy': MopidyState
};

export const reducers = {
	mopidy: fromMopidy.reducer
};


/* Selectors */

export const getMopidyFeatureState = createFeatureSelector<MopidyState>('mopidy');

export const getMopidyState = createSelector(
	getMopidyFeatureState,
	(state: MopidyState) => state.mopidy
);

export const getConnectionStatus = createSelector(
	getMopidyState,
	fromMopidy.getConnectionStatus
);

export const getNowPlaying = createSelector(
	getMopidyState,
	fromMopidy.getNowPlaying
);

export const getTrackList = createSelector(
	getMopidyState,
	fromMopidy.getTrackList
);

export const getPlaybackState = createSelector(
	getMopidyState,
	fromMopidy.getPlaybackState
);