import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/do';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Toast } from 'ionic-angular/components/toast/toast';
import { RFIDService } from '../../app/core/store/rfid/rfid.service';
import { RFIDObject, RFIDMode } from '../../app/core/store/rfid/rfid.model';

import * as fromRFID from '../../app/core/store/rfid';
import * as rfid from '../../app/core/store/rfid/rfid.actions';
import { Song } from '../../app/core/store/songs/song.model';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Modal } from 'ionic-angular/components/modal/modal';
import { SearchPage } from '../search/search';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rfidObjectFound$: Observable<RFIDObject>;
  public rfidMode$: Observable<string>;
  public rfidObjectIsDirty$: Observable<boolean>;

  public saveToast: Toast = this.toastCtrl.create({
    message: 'RFID Object Saved Successfully!',
    duration: 3000,
    position: 'top'
  });

  public searchModal: Modal = this.modalCtrl.create(SearchPage);

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private rfidService: RFIDService,
    private rfidStore: Store<fromRFID.State>,
    private modalCtrl: ModalController
  ) {
    this.rfidObjectFound$ = this.rfidStore.select(fromRFID.getSelectedRFIDObject);
    this.rfidMode$ = this.rfidStore.select(fromRFID.getMode);
    this.rfidObjectIsDirty$ = this.rfidStore.select(fromRFID.getDirty);

    this.rfidService.rfidObjectSaved$
      .subscribe(() => {
        this.saveToast.present();
      });
  }

  ionViewDidEnter() {}

  ngOnDestroy() {
    this.rfidStore.dispatch(new rfid.SetMode('get'));
  }

  public addSongs() {
    this.searchModal.present();
  }

  public removeSongFromList(id: string) {
    this.rfidStore.dispatch(new rfid.RemoveSong(id));
  }

  public setRFIDMode(mode: RFIDMode) {
    this.rfidStore.dispatch(new rfid.SetMode(mode));
  }

  public saveRFIDTrackList() {
    this.rfidStore.dispatch(new rfid.Save());
  }

  public clearTrackList() {
    this.rfidStore.dispatch(new rfid.ClearList());
  }

  public toggleShuffle() {
    console.log('Shuffled!');
    this.rfidStore.dispatch(new rfid.ToggleShuffle());
  }

  public toggleLoop() {
    this.rfidStore.dispatch(new rfid.ToggleLoop());
  }

}
