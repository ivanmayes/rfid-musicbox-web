import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Song } from '../song.model';
import * as song from '../actions/song.actions';

export interface State extends EntityState<Song> {}

export const adapter: EntityAdapter<Song> = createEntityAdapter<Song>({
	selectId: (song: Song) => song.id,
	sortComparer: false
});

export const initialState: State = adapter.getInitialState();

export function reducer(
	state = initialState,
	action: song.Actions
): State {
	switch (action.type) {
		case song.SEARCH_SUCCESS: {
			return adapter.addMany(action.payload, state);
		}

		default: {
			return state;
		}
	}
}