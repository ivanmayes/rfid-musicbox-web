import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { empty } from 'rxjs/observable/empty';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromEntries from '../';
import * as song from '../actions/song.actions';

import { YoutubeSearchService } from '../../../youtube/youtube.service';
import { Store } from '@ngrx/store';
import { Song } from '../song.model';

@Injectable()
export class SongsSearchEffects {
    private debounce: number = 700

	constructor(
		private actions$: Actions,
        private searchService: YoutubeSearchService,
        private store: Store<fromEntries.State>
	) {}
        
    // Load Effect
	@Effect()
	public load$: Observable<Action> = this.actions$
		.ofType<song.Load>(song.LOAD)
		.withLatestFrom(this.store.select(fromEntries.getSearchState))
		.map( ([action, store]) => {
			// Recreate our params from the state
			return {
				...store.params,
				offset: store.offset
			}
		})
        .switchMap(params => this.searchYoutube(params, song.LOAD))
        .map((songs) => new song.SearchSuccess(songs))
		.catch(err => Observable.of(new song.SearchFail(err)));
		
	 // Load Playlist Effect
	 @Effect()
	 public loadPlaylist$: Observable<Action> = this.actions$
		 .ofType<song.PlaylistLoad>(song.PLAYLIST_LOAD)
		 .map(action => action.payload)
		 .switchMap(playlistId => this.searchService.getPlaylistItems(playlistId))
		 .map((songs) => new song.PlaylistLoadSuccess(songs));
		//  .catch(err => Observable.of(new song.SearchFail(err)));
		// TODO Catch this

	// Search Effect
	@Effect()
	public search$: Observable<Action> = this.actions$
		.ofType<song.Search>(song.SEARCH)
		.debounceTime(this.debounce)
        .map(action => action.payload)
        .switchMap(params => this.searchYoutube(params, song.LOAD))
        .map((songs) => new song.SearchSuccess(songs))
        .catch(err => Observable.of(new song.SearchFail(err)));

	// Next Page Effect
	@Effect()
	public nextPage$: Observable<Action> = this.actions$
		.ofType<song.NextPage>(song.NEXT_PAGE)
		.debounceTime(2000)
		.withLatestFrom(this.store.select(fromEntries.getSearchState))
		.map( ([action, store]) => {
			// Recreate our params from the state
			return {
				...store.params,
				offset: store.offset
			}
        })
        .switchMap(params => this.searchYoutube(params, song.LOAD))
        .map((songs) => new song.NextPageSuccess(songs))
        .catch(err => Observable.of(new song.SearchFail(err)));
        
    
    private searchYoutube(params: any, action: string): Observable<Song[]> {
        if(!params.query || params.query === '') {
            return empty();
        }

        const nextSearch$ = this.actions$.ofType(action).skip(1);

        return this.searchService
            .search(params.query)
            .takeUntil(nextSearch$)
            .flatMap(items => this.searchService.getItemDetails(items));
    }

}