import { environment } from './environments/environment';
import { MetaReducer } from '@ngrx/store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {

}

// console.log all actions
export function logger(reducer) {
  return function(state, action: any) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

// Only activate our dev meta reducers if we're not in production
export const metaReducers: MetaReducer<State>[] = !environment.production
? [logger, storeFreeze]
: [];

