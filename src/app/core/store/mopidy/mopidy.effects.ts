import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { MopidyService } from './mopidy.service';
import * as mopidy from './mopidy.actions';
import * as fromMopidy from './';

@Injectable()
export class MopidyEffects {
	constructor(
		private actions$: Actions,
		private mopidyService: MopidyService,
		private store: Store<fromMopidy.State>
	) {}

    /**
     * Mopidy Listen Effects
     */
	@Effect()
	connected$: Observable<Action> =
		this.mopidyService.connected$
			.switchMap(status => Observable.of(new mopidy.ConnectionChange(status)));

	@Effect()
	trackListChange$: Observable<Action> =
		this.mopidyService.listen('event:tracklistChanged')
			.flatMap(() => this.mopidyService.getTrackList())
			.map(tracks => new mopidy.TrackListChange(tracks));

	@Effect()
	playbackStarted$: Observable<Action> =
		this.mopidyService.listen('event:trackPlaybackStarted')
			.flatMap(() => this.mopidyService.getCurrentTrack())
			.map(track => new mopidy.PlaybackChange(track));

	@Effect()
	playbackStateChanged$: Observable<Action> =
		this.mopidyService.listen('event:playbackStateChanged')
			.switchMap(state => Observable.of(new mopidy.PlaybackStateChange(state.new_state)));			


	/**
     * Get Effects
     */
	@Effect()
	initalTracks$ = this.actions$
		.ofType<mopidy.ConnectionChange>(mopidy.CONNECTION_CHANGE)
		.filter((action: mopidy.ConnectionChange) => action.payload === 'online')
		.switchMap(() => this.mopidyService.getTrackList())
		.map((tracks) => new mopidy.TrackListChange(tracks));

	@Effect()
	initialCurrentTrack$ = this.actions$
		.ofType<mopidy.ConnectionChange>(mopidy.CONNECTION_CHANGE)
		.filter((action: mopidy.ConnectionChange) => action.payload === 'online')
		.switchMap(() => this.mopidyService.getCurrentTrack())
		.map((track) => new mopidy.PlaybackChange(track));

	@Effect()
	initialPlaybackState$ = this.actions$
		.ofType<mopidy.ConnectionChange>(mopidy.CONNECTION_CHANGE)
		.filter((action: mopidy.ConnectionChange) => action.payload === 'online')
		.switchMap(() => this.mopidyService.getPlaybackState())
		.map((state) => new mopidy.PlaybackStateChange(state));
    

    /**
     * Set Effects
     */
	@Effect({ dispatch: false })
	play$ = this.actions$
		.ofType<mopidy.Play>(mopidy.PLAY)
		.map(action => action.payload)
		.do(track => this.mopidyService.play(track));

	@Effect({ dispatch: false })
	stop$ = this.actions$
		.ofType<mopidy.Stop>(mopidy.STOP)
		.do(track => this.mopidyService.stop());
	
	@Effect({ dispatch: false })
	next$ = this.actions$
		.ofType<mopidy.NextTrack>(mopidy.NEXT_TRACK)
		.do(track => this.mopidyService.next());

	@Effect({ dispatch: false })
	prev$ = this.actions$
		.ofType<mopidy.PrevTrack>(mopidy.PREV_TRACK)
		.do(track => this.mopidyService.previous());

	@Effect({ dispatch: false })
	togglePause$ = this.actions$
		.ofType<mopidy.TogglePause>(mopidy.TOGGLE_PAUSE)
		.do(track => this.mopidyService.togglePause());
	

		
	// @Effect({ dispatch: false })
	// setMode$ = this.actions$
    //     .ofType<rfid.SetMode>(rfid.SET_MODE)
    //     .map((action: rfid.SetMode) => action.payload)
	// 	.do((mode: RFIDMode) => this.rfidService.setRFIDMode(mode));

	// @Effect({ dispatch: false })
	// save$ = this.actions$
	// 	.ofType<rfid.Save>(rfid.SAVE)
	// 	.withLatestFrom(this.store.select(fromRFID.getSelectedRFIDObject))
	// 	.map( ([action, store]) => store )
	// 	.do((obj: RFIDObject) => this.rfidService.saveRFIDTrackList(obj));

}
