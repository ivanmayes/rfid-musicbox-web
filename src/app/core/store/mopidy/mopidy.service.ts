import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as Mopidy from 'mopidy';

import { environment } from '../../../environments/environment';
import { Track, Events, TlTrack } from './mopidy.model';

@Injectable()
export class MopidyService {
	public connected$: Observable<string>;

	private connected: BehaviorSubject<string>;
	private user;
	private mopidy;
	private heartbeatInterval;

	constructor() {
		this.mopidy = new Mopidy({
			webSocketUrl: environment.mopidy.server
		});

		this.connected = <BehaviorSubject<string>> new BehaviorSubject('offline');
		this.connected$ = this.connected.asObservable();
		this.mopidy.on('state:online', () => this.connected.next('online'));
		this.mopidy.on('state:offline', () => this.connected.next('offline'));
		this.mopidy.on('reconnectionPending', () => this.connected.next('reconnecting'));
		this.mopidy.on('reconnecting', () => this.connected.next('reconnecting'));

		// Debug
		// this.mopidy.on(console.log.bind(console));

		console.log('Mopidy Init', this.mopidy);
	}

	public listen(event: string): Observable<any> {
		return new Observable(observer => {

			this.mopidy.on(event, data => {
				console.log('OBSERVER', event, data);
				observer.next(data);
			});

			return () => this.mopidy.off(event);
		});
	}

	public getTrackList(): Promise<TlTrack[]> {
		return this.mopidy.tracklist.getTlTracks();
	}

	public getCurrentTrack(): Promise<TlTrack> {
		return this.mopidy.playback.getCurrentTlTrack();
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