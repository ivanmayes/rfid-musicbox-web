import { NgModule,  Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { SocketService } from './socket.service';
import { RFIDService } from './rfid.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers as songsReducers } from './store/songs';
import { SongsSearchEffects } from './store/songs/effects/search.effects';
import { YoutubeSearchService } from './youtube/youtube.service';

@NgModule({
	imports: [
		StoreModule.forFeature('songs', songsReducers),
		EffectsModule.forFeature([ SongsSearchEffects ])
	],
	exports: [

	],
	declarations: [

	],
	providers: [
		SocketService,
		RFIDService,
		YoutubeSearchService
	]
})
export class CoreModule {}
