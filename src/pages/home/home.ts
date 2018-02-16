import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/do';

import * as fromMopidy from '../../app/core/store/mopidy';
import * as mopidy from '../../app/core/store/mopidy/mopidy.actions';
import { Song } from '../../app/core/store/songs/song.model';
import { Modal } from 'ionic-angular/components/modal/modal';
import { SearchPage } from '../search/search';
import { TlTrack } from '../../app/core/store/mopidy/mopidy.model';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public state$: Observable<fromMopidy.MopidyState['mopidy']>;
  public searchModal: Modal = this.modalCtrl.create(SearchPage, {
    action: mopidy.AddToQueue
  });

  constructor(
    public navCtrl: NavController,
    private mopidyStore: Store<fromMopidy.State>,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
  ) {
    menuCtrl.enable(true);
    this.state$ = this.mopidyStore.select(fromMopidy.getMopidyState);
  }

  ionViewDidEnter() {}

  ngOnDestroy() {
    
  }

  public play(track?:TlTrack) {
    this.mopidyStore.dispatch(new mopidy.Play(track));
  }

  public stop() {
    this.mopidyStore.dispatch(new mopidy.Stop());
  }

  public clearList() {
    this.mopidyStore.dispatch(new mopidy.Clear());
  }

  public addSongs() {
    this.searchModal.present();
  }

}
