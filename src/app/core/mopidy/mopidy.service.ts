import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as Mopidy from 'mopidy';

import { environment } from '../../environments/environment';
import { Track, Events } from './mopidy.model';

@Injectable()
export class MopidyService {
	public connected$ = new BehaviorSubject<boolean>(false);

	private user;
	private mopidy;
	private heartbeatInterval;

	constructor() {
		this.mopidy = new Mopidy({
			webSocketUrl: environment.mopidy.server
		});

		// this.socket = io(environment.socket.server);
		this.mopidy.on('state:online', () => this.connected$.next(true));
		this.mopidy.on('state:offline', () => this.connected$.next(false));
		this.mopidy.on('reconnectionPending', () => this.connected$.next(false));
		this.mopidy.on('reconnecting', () => this.connected$.next(false));

		this.mopidy.on('on_event', (m) => {
			console.log(m);
		});

		console.log('Mopidy Init', this.mopidy);
	}

	public listen(event: Events): Observable<any> {
		return new Observable(observer => {

			this.mopidy.on(event, data => {
				observer.next(data);
			});

			return () => this.mopidy.off(event);
		});
	}

	public getTrackList(): Promise<any> {
		return this.mopidy.tracklist.getTracks();
	}

	public getCurrentTrack(): Promise<any> {
		return this.mopidy.playback.getCurrentTrack();
	}

	public play(tlTrack?: Track, tlid?: number) {
		return this.mopidy.playback.play(tlTrack, tlid);
	}

	public next() {
		return this.mopidy.playback.next();
	}

	public previous() {
		return this.mopidy.playback.previous();
	}

	public stop() {
		return this.mopidy.playback.stop();
	}

	public togglePause() {
		this.mopidy.playback.getState()
			.then(state => {
				switch(state) {
					case 'PLAYING':
						this.mopidy.playback.pause();
					break;

					case 'STOPPED':
						this.mopidy.playback.play();
					break;

					case 'PAUSED':
						this.mopidy.playback.resume();
					break;
				}
			});
	}

}
