import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';
import { SocketService } from './socket.service';

export interface Track {
    id: string;
    name?: string;
    type: 'youtube-video' | 'youtube-playlist';
}

export interface RFIDObject {
    tracks: Track[];
    shuffle?: boolean;
}

export interface RFIDData {
    id: string;
    payload: RFIDObject;
}

@Injectable()
export class RFIDService {
	public rfidFound$: Observable<any>;
    public rfidModeChanged$: Observable<any>;
    public rfidDataSaved$: Observable<any>;

	constructor(
		private socketService: SocketService
	) {
		this.rfidFound$ = this.socketService.listen('rfidFound');
        this.rfidModeChanged$ = this.socketService.listen('rfidModeChanged');
        this.rfidDataSaved$ = this.socketService.listen('saveRFIDDataSuccess');
	}

	public setRFIDMode(mode: 'set' | 'get') {
		this.socketService.emit('setRFIDMode', mode);
    }

    public saveRFIDObject(rfidData: RFIDData) {
		this.socketService.emit('saveRFIDData', rfidData);
    }
}
