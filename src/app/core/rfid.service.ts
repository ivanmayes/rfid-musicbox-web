import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';
import { SocketService } from './socket.service';

export interface RFIDObject {
    id: string;
    name: string;
    type: 'youtube-video' | 'youtube-playlist';
}

export interface RFIDData {
    id: string;
    payload: RFIDObject;
}

@Injectable()
export class RFIDService {
	public rfidFound$: Observable<any>;
	public rfidModeChanged$: Observable<any>;

	constructor(
		private socketService: SocketService
	) {
		this.rfidFound$ = this.socketService.listen('rfidFound');
		this.rfidModeChanged$ = this.socketService.listen('rfidModeChanged');
	}

	public setRFIDMode(mode: 'set' | 'get') {
		this.socketService.emit('setRFIDMode', mode);
    }

    public saveRFIDObject(rfidObject: RFIDObject) {
		this.socketService.emit('saveRFIDObject', rfidObject);
    }
}
