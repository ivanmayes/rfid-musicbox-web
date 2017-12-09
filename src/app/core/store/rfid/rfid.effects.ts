import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { RFIDService } from './rfid.service';
import * as rfid from './rfid.actions';
import * as fromRFID from './';
import { RFIDMode, RFIDObject } from './rfid.model';

@Injectable()
export class RFIDEffects {
	constructor(
		private actions$: Actions,
		private rfidService: RFIDService,
		private store: Store<fromRFID.State>,
	) {}

    /**
     * Listen Effects
     */

	@Effect()
	modeChanged$: Observable<Action> =
		this.rfidService.rfidModeChanged$
			.switchMap(mode => {
				return Observable.of(new rfid.ModeChanged(mode));
            });

    @Effect()
    rfidObjectFound$: Observable<Action> =
        this.rfidService.rfidObjectFound$
            .switchMap(obj => {
                console.log('Found Object');
                return Observable.of(new rfid.LoadRFIDObject(obj));
            });
    

    /**
     * Set Effects
     */

	@Effect({ dispatch: false })
	setMode$ = this.actions$
        .ofType<rfid.SetMode>(rfid.SET_MODE)
        .map((action: rfid.SetMode) => action.payload)
		.do((mode: RFIDMode) => this.rfidService.setRFIDMode(mode));

	@Effect({ dispatch: false })
	save$ = this.actions$
		.ofType<rfid.Save>(rfid.SAVE)
		.withLatestFrom(this.store.select(fromRFID.getSelectedRFIDObject))
		.map( ([action, store]) => store )
		.do((obj: RFIDObject) => this.rfidService.saveRFIDTrackList(obj));

}
