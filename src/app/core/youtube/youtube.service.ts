import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';
import { Song } from '../store/songs/song.model';

@Injectable()
export class YoutubeSearchService {
	public searchResults$: Observable<any> = new Observable<any>();

	constructor(
		private http: HttpClient
	) {}

	public search(query: string): Observable<Song[]> {
		let params = new HttpParams();
		params = params.append('maxResults', '20');
		params = params.append('part', 'snippet');
		params = params.append('q', query);
		params = params.append('safeSearch', 'none');
		params = params.append('type', 'video,playlist');
		// params = params.append('videoDuration', 'any');
		// params = params.append('videoEmbeddable', 'true');
		params = params.append('order', 'viewCount');
		params = params.append('key', environment.youtubeAPIKey);

		return this.http
			.get('https://www.googleapis.com/youtube/v3/search', { params: params })
			.map(data => {
				let items = data['items'];

				if(items) {
					return items;
				}
			}, (err) => {
				console.log(err);
			})
	}

	public getItemDetails(items): Observable<Song[]> {
		// If the first result contains support, remove it?
		if(items[0] && items[0].snippet.title == 'https://youtube.com/devicesupport') {
			items.splice(0,1);
		}

		let ids = items.map((i) => {
			return i.id.videoId;
		});

		let params = new HttpParams();
		params = params.append('id', ids.join(','));
		params = params.append('part', 'contentDetails');
		params = params.append('fields', 'items(id,contentDetails/duration)');
		params = params.append('key', environment.youtubeAPIKey);

		return this.http
			.get('https://www.googleapis.com/youtube/v3/videos', { params: params })
			.map(data => {
				let durationItems = data['items'];

				let songs = items.map((item) => {
					let song: any = {
						id: item.id.videoId || item.id.playlistId,
						title: item.snippet.title,
						thumbnail: item.snippet.thumbnails.high.url,
						type: 'youtube-video'
					};

					if (!item.id.videoId) {
						song.id = item.id.playlistId;
						song.type = 'youtube-playlist';
					}

					for(let i = 0; i < durationItems.length; i++) {
						let di = durationItems[i];

						if(di.id === item.id.videoId) {
							song.durationString = this.getTimeString(di.contentDetails.duration);
							song.durationSeconds = this.getSeconds(di.contentDetails.duration);
						}
					}
					return song;
				});

				return songs;
			}, (err) => {
				console.log(err);
			});
	}

	public getPlaylistItems(playlistId: any): Observable<any> {

		let params = new HttpParams();
		params = params.append('playlistId', playlistId);
		params = params.append('part', 'snippet');
		params = params.append('maxResults', '50');
		params = params.append('key', environment.youtubeAPIKey);

		return this.http
			.get('https://www.googleapis.com/youtube/v3/playlistItems', { params: params })
			.map(data => {
				if (data['items']) {
					let items = data['items'].map((item) => {
						let song: any = {
							id: item.snippet.resourceId.videoId,
							title: item.snippet.title,
							thumbnail: item.snippet.thumbnails.high.url,
							type: 'youtube-video',
							playlistId: item.snippet.playlistId
						};

						return song;
					});

					return items;
				}

				return [];
			});

	}

	private getTimeString(duration) {
		var string = duration.replace('PT','').replace('H',':').replace('M',':').replace('S','');
		// Look for single digit seconds
		var string_array = string.split(':');
		if(string_array[string_array.length - 1].length == 1) {
			string_array[string_array.length - 1] = '0' + string_array[string_array.length - 1];
		}

		return string_array.join(':');
	}

	// Expects ISO 8601 duration string
	private getSeconds(duration) {
		var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
		var hours = 0, minutes = 0, seconds = 0, totalseconds;

		if (reptms.test(duration)) {
			var matches = reptms.exec(duration);
			if (matches[1]) hours = Number(matches[1]);
			if (matches[2]) minutes = Number(matches[2]);
			if (matches[3]) seconds = Number(matches[3]);
			totalseconds = hours * 3600  + minutes * 60 + seconds;
			//console.log(duration);
			//console.log(hours, minutes, seconds, totalseconds);
		}

		return totalseconds;
	}
}
