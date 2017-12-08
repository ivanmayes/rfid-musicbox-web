import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RFIDService, RFIDData } from '../../app/core/rfid.service';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/do';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Toast } from 'ionic-angular/components/toast/toast';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rfidFound$: Observable<string>;
  public rfidMode$: Observable<string>;

  public rfidData: RFIDData;
  public saveToast: Toast = this.toastCtrl.create({
    message: 'RFID Object Saved Successfully!',
    duration: 3000,
    position: 'top'
  });

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private rfidService: RFIDService
  ) {
    this.rfidFound$ = this.rfidService.rfidFound$
      .do(rfidData => this.rfidData = rfidData);

    this.rfidMode$ = this.rfidService.rfidModeChanged$
      .do((mode) => console.log('Mode Changed', mode));

    this.rfidService.rfidDataSaved$
      .subscribe(() => {
        this.saveToast.present();
      });
  }

  ionViewDidEnter() {
    
  }

  ngOnDestroy() {
    this.rfidService.setRFIDMode('get');
  }

  public changeType(type: 'youtube-playlist' | 'youtube-video') {
    this.rfidData.payload = {
      id: undefined,
      type: type
    }
  }

  public setRFIDMode(mode: 'set' | 'get') {
    this.rfidService.setRFIDMode(mode);
  }

  public saveRFIDObject(rfidData: RFIDData) {
    if (
      rfidData.id &&
      rfidData.payload &&
      rfidData.payload.id &&
      rfidData.payload.type
    ) {
      this.rfidService.saveRFIDObject(rfidData);
    }
  }

}
