import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as Mopidy from 'mopidy';

import { environment } from '../../../environments/environment';
import { Track, Events, TlTrack } from './mopidy.model';
import { Song } from '../songs/song.model';

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
		this.mopidy.on(console.log.bind(console));

		console.log('Mopidy Init', this.mopidy);
	}

	public listen(event: string): Observable<any> {
		return new Observable(observer => {

			this.mopidy.on(event, data => {
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

	public getPlaybackState(): Promise<string> {
		return this.mopidy.playback.getState();
	}

	public getTrackListSettings(): Promise<any> {
		let calls = [
			this.mopidy.tracklist.getRandom,
			this.mopidy.tracklist.getRepeat
		];

		return Promise.all(calls)
			.then(([random, repeat]) => {
				return {
					random: random,
					repeat: repeat
				}
			});
	}

	public play(tlTrack?: TlTrack, tlid?: number) {
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

	public clear() {
		return this.mopidy.tracklist.clear();
	}

	public togglePause() {
		this.mopidy.playback.getState()
			.then(state => {
				switch(state) {
					case 'playing':
						this.mopidy.playback.pause();
					break;

					case 'paused':
						this.mopidy.playback.resume();
					break;

					case 'stopped':
						this.mopidy.playback.play();
					break;
				}
			});
	}

	public setRandom(setting: boolean) {
		return this.mopidy.tracklist.setRandom(setting);
	}

	public setRepeat(setting: boolean) {
		return this.mopidy.tracklist.setRepeat(setting);
	}

	public playURIs(songs: Song[]) {
		let uris = songs.map(song => this.rfidToURI(song));

		return this.mopidy.tracklist.clear()
			.then(() => this.mopidy.tracklist.add(undefined, 0, undefined, uris))
			.then(() => this.play())
			.catch((err) => console.log('playURIs Error:', err));
	}

	public addToQueue(songs: Song[]) {
		let uris = songs.map(song => this.rfidToURI(song));

		return this.mopidy.tracklist.add(undefined, undefined, undefined, uris)
			.catch((err) => console.log('addToQueue Error:', err));
	}

	public rfidToURI(song: Song) {
		if (!song) {
			console.warn('No RFID Object Provided');
			return undefined;
		}
	
		switch(song.type) {
			case 'youtube-video':
				return 'youtube:video/shim.' + song.id;
	
			case 'youtube-playlist':
				return 'youtube:https://www.youtube.com/playlist?list=' + song.id;
	
			default:
				console.warn('Couldnt find a type for this Song');
				return undefined;
		}
	}

}
