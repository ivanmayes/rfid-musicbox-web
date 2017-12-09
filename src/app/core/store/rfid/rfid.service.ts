import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SocketService } from '../../socket.service';
import { RFIDObject } from './rfid.model';

@Injectable()
export class RFIDService {
	public rfidObjectFound$: Observable<any>;
    public rfidModeChanged$: Observable<any>;
    public rfidObjectSaved$: Observable<any>;

	constructor(
		private socketService: SocketService
	) {
        this.rfidObjectFound$ = this.socketService.listen('rfidFound');
        this.rfidModeChanged$ = this.socketService.listen('rfidModeChanged');
        this.rfidObjectSaved$ = this.socketService.listen('saveRFIDObjectSuccess');
	}

	  public setRFIDMode(mode: 'set' | 'get') {
		  this.socketService.emit('setRFIDMode', mode);
    }

    public saveRFIDTrackList(rfidObject: RFIDObject) {
      
		  this.socketService.emit('saveRFIDObject', rfidObject);
    }
}
