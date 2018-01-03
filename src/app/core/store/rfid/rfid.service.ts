import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../../socket.service';
import { RFIDObject } from './rfid.model';

@Injectable()
export class RFIDService {
	public rfidObjectFound$: Observable<any>;
    public rfidModeChanged$: Observable<any>;
    public rfidObjectSaved$: Observable<any>;
    public getRFIDObjectsSuccess$: Observable<RFIDObject[]>;

	constructor(
		private socketService: SocketService
	) {
        this.getRFIDObjectsSuccess$ = this.socketService.listen('getRFIDObjectsSuccess');
        this.rfidObjectFound$ = this.socketService.listen('rfidFound');
        this.rfidModeChanged$ = this.socketService.listen('rfidModeChanged');
        this.rfidObjectSaved$ = this.socketService.listen('saveRFIDObjectSuccess');
    }
    
    public getRFIDObjects() {
        this.socketService.emit('getRFIDObjects');
    }

	public setRFIDMode(mode: 'set' | 'get') {
		  this.socketService.emit('setRFIDMode', mode);
    }

    public saveRFIDTrackList(rfidObject: RFIDObject) {
		  this.socketService.emit('saveRFIDObject', rfidObject);
    }
}
