import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RFIDService, RFIDData } from '../../app/core/rfid.service';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/do';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rfidFound$: Observable<string>;
  public rfidMode$: Observable<string>;

  public rfidData: RFIDData;

  constructor(
    public navCtrl: NavController,
    private rfidService: RFIDService
  ) {
    this.rfidFound$ = this.rfidService.rfidFound$
      .do(rfidData => this.rfidData = rfidData);

    this.rfidMode$ = this.rfidService.rfidModeChanged$
      .do((mode) => console.log('Mode Changed', mode));
  }

  ionViewDidEnter() {
    
  }

  ngOnDestroy() {
    this.rfidService.setRFIDMode('get');
  }

  public setRFIDMode(mode: 'set' | 'get') {
    this.rfidService.setRFIDMode(mode);
  }

}
