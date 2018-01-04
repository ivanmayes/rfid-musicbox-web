import { Component } from '@angular/core';
import { IonicPage, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromMopidy from '../../core/store/mopidy';
import * as mopidy from '../../core/store/mopidy/mopidy.actions';
import { Song } from '../../core/store/songs/song.model';
import { TlTrack } from '../../core/store/mopidy/mopidy.model';


@Component({
  selector: 'player-controls',
  templateUrl: 'player-controls.html'
})
export class MopidyPlayerControls {
  public state$: Observable<fromMopidy.MopidyState['mopidy']>;

  constructor(
    private mopidyStore: Store<fromMopidy.State>
  ) {
    this.state$ = this.mopidyStore.select(fromMopidy.getMopidyState)
  }

  public stop() {
    this.mopidyStore.dispatch(new mopidy.Stop());
  }

  public prev() {
    this.mopidyStore.dispatch(new mopidy.PrevTrack());
  }

  public togglePause() {
    this.mopidyStore.dispatch(new mopidy.TogglePause());
  }

  public next() {
    this.mopidyStore.dispatch(new mopidy.NextTrack());
  }

}