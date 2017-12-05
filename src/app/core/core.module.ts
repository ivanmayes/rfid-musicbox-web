import { NgModule,  Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { SocketService } from './socket.service';
import { RFIDService } from './rfid.service';

@NgModule({
	imports: [
	],
	exports: [

	],
	declarations: [

	],
	providers: [
		SocketService,
		RFIDService
	]
})
export class CoreModule {}
