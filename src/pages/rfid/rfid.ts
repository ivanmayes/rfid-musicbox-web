import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, ModalController, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/do';
import { Toast } from 'ionic-angular/components/toast/toast';
import { RFIDService } from '../../app/core/store/rfid/rfid.service';
import { RFIDObject, RFIDMode } from '../../app/core/store/rfid/rfid.model';

import * as fromRFID from '../../app/core/store/rfid';
import * as rfid from '../../app/core/store/rfid/rfid.actions';
import { Song } from '../../app/core/store/songs/song.model';
import { Modal } from 'ionic-angular/components/modal/modal';
import { SearchPage } from '../search/search';

import * as fromMopidy from '../../app/core/store/mopidy';
import * as mopidy from '../../app/core/store/mopidy/mopidy.actions';


@IonicPage({
  name: 'rfid'
})
@Component({
  selector: 'page-rfid',
  templateUrl: 'rfid.html'
})
export class RFIDPage {
  public selectedRFIDObject$: Observable<RFIDObject>;
  public rfidMode$: Observable<string>;
  public rfidObjectIsDirty$: Observable<boolean>;
  public rfidObjects$: Observable<RFIDObject[]>;

  public searchModal: Modal = this.modalCtrl.create(SearchPage);

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private rfidService: RFIDService,
    private rfidStore: Store<fromRFID.State>,
    private mopidyStore: Store<fromMopidy.State>,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController
  ) {
    menuCtrl.enable(true);

    this.rfidMode$ = this.rfidStore.select(fromRFID.getMode)
      .do((mode) => {
        // Prevent box from changing to get while on this page
        if (mode === 'get') {
          console.log('DO: Setting Mode to set')
          this.rfidStore.dispatch(new rfid.SetMode('set'));
        }
      });

    this.rfidObjects$ = this.rfidStore.select(fromRFID.getRFIDObjects);
    this.selectedRFIDObject$ = this.rfidStore.select(fromRFID.getSelectedRFIDObject);
    this.rfidObjectIsDirty$ = this.rfidStore.select(fromRFID.getDirty);

    this.rfidService.rfidObjectSaved$
      .subscribe(() => {
        this.toastCtrl.create({
          message: 'RFID Object Saved Successfully!',
          duration: 3000,
          position: 'top'
        }).present();
      });

    this.rfidStore.dispatch(new rfid.Load());
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

  public selectObject(obj: RFIDObject) {
    this.rfidStore.dispatch(new rfid.LoadRFIDObject(obj));
  }

  public resetView() {
    this.rfidStore.dispatch(new rfid.Load());
  }

  public saveRFIDTrackList() {
    this.rfidStore.dispatch(new rfid.Save());
  }

  public clearTrackList() {
    this.rfidStore.dispatch(new rfid.ClearList());
  }

  public setTitle(title: string) {
    this.rfidStore.dispatch(new rfid.SetTitle(title));
  }

  public toggleShuffle() {
    this.rfidStore.dispatch(new rfid.ToggleShuffle());
  }

  public toggleLoop() {
    this.rfidStore.dispatch(new rfid.ToggleLoop());
  }

  public addTrackListToQueue(songs: Song[]) {
    this.mopidyStore.dispatch(new mopidy.AddToQueue(songs));
  }

  public playRFIDTrackList(songs: Song[]) {
    this.mopidyStore.dispatch(new mopidy.PlayURIs(songs));
  }

}
