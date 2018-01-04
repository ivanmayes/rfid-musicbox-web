import { NgModule,  Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { SocketService } from './socket.service';
import { YoutubeSearchService } from './youtube/youtube.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RFIDService } from './store/rfid/rfid.service';

import { reducers as songsReducers } from './store/songs';
import { SongsSearchEffects } from './store/songs/effects/search.effects';

import { reducers as rfidReducers } from './store/rfid';
import { RFIDEffects } from './store/rfid/rfid.effects';

import { reducers as mopidyReducers } from './store/mopidy';
import { MopidyEffects } from './store/mopidy/mopidy.effects';
import { MopidyService } from './store/mopidy/mopidy.service';



@NgModule({
	imports: [
		StoreModule.forFeature('songs', songsReducers),
		StoreModule.forFeature('rfid', rfidReducers),
		StoreModule.forFeature('mopidy', mopidyReducers),
		EffectsModule.forFeature([ SongsSearchEffects, RFIDEffects, MopidyEffects ])
	],
	exports: [

	],
	declarations: [

	],
	providers: [
		MopidyService,
		SocketService,
		RFIDService,
		YoutubeSearchService
	]
})
export class CoreModule {}
