import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as io from 'socket.io-client';

import { environment } from '../environments/environment';

@Injectable()
export class SocketService {
	public connected$ = new BehaviorSubject<boolean>(false);

	private user;
	private socket;
	private heartbeatInterval;

	constructor() {
		this.socket = io(environment.socket.server);
		this.socket.on('connect', () => this.connected$.next(true));
		this.socket.on('disconnect', () => this.connected$.next(false));
		//TODO remove
		this.socket.on('message', (m) => {
			console.log(m);
		});

		this.socket.on(environment.socket.namespace + ':user:joinSession', this.startHeartbeat.bind(this));
	}

	public joinSession() {
		this.connected$.subscribe(connected => {
			// This will handle reconnects automatically
			if(connected) {
				this.socket.emit(environment.socket.namespace + ':user:joinSession', { user: this.user });
			}
		})
	}

	// TODO, remove--probably
	public disconnect(): void {
		this.socket.disconnect();
		this.connected$.next(false);
	}

	public emit(event: string, data?: any): void {
		this.socket.emit(event, data);
	}

	public listen(event: string): Observable<any> {
		return new Observable(observer => {

			this.socket.on(event, data => {
				observer.next(data);
			});

			return () => this.socket.off(event);
		});
	}

	private startHeartbeat() {
		if(this.heartbeatInterval) {
			clearInterval(this.heartbeatInterval);
		}

		this.heartbeatInterval = setInterval(() => {
			this.socket.emit(environment.socket.namespace + ':user:heartbeat', this.user);
		}, environment.socket.heartbeatInterval);
	}
}
