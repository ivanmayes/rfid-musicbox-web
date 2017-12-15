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
import * as fromSongs from '../../app/core/store/songs';
import * as songs from '../../app/core/store/songs/actions/song.actions';
import { Song } from '../../app/core/store/songs/song.model';



@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public searchResults$: Observable<Song[]>;
  public searchState$: Observable<fromSongs.SongsState['search']>;
  public selectedPlaylist$: Observable<Song>;
  public selectedPlaylistSongs$: Observable<Song[]>;
  public addedPlaylist: boolean = false;

  public addSong: Toast = this.toastCtrl.create({
    message: 'Song Added Successfully!',
    duration: 2000,
    position: 'top'
  });

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private rfidStore: Store<fromRFID.State>,
    private songStore: Store<fromSongs.State>
  ) {
    this.searchResults$ = Observable.combineLatest(
      this.songStore.select(fromSongs.getSearchResults),
      this.rfidStore.select(fromRFID.getSelectedRFIDObject)
    ).map(([results, tracklist]) => this.insertTracklistAddedInformation(results, tracklist));

    this.searchState$ = this.songStore.select(fromSongs.getSearchState);

    this.selectedPlaylist$ = this.songStore.select(fromSongs.getSelectedPlaylist);
    
    this.selectedPlaylistSongs$ = Observable.combineLatest(
      this.songStore.select(fromSongs.getSelectedPlaylistSongs),
      this.rfidStore.select(fromRFID.getSelectedRFIDObject)
    ).map(([results, tracklist]) => {
      let songs = this.insertTracklistAddedInformation(results, tracklist);
      let added = songs.filter(song => song.added);

      // Have we added this playlist?
      if (added.length >= songs.length) {
        this.addedPlaylist = true;
      } else {
        this.addedPlaylist = false;
      }

      return songs;
    });
  }

  ionViewDidEnter() {}


  public search(query: any) {
    console.log(query);
    if (query.target) {
      this.songStore.dispatch(new songs.Search({
        query: query.target.value,
        type: undefined
      }));
    }
  }
  
  public addSongsToList(songs: Song) {
    this.rfidStore.dispatch(new rfid.AddSong(songs));
  }

  // TODO: Playlist is still a Song type 
  // and dependent on Youtube types right now
  public browsePlaylist(playlist: Song) {
    this.songStore.dispatch(new songs.PlaylistLoad(playlist.id));
  }

  public backToResults() {
    this.songStore.dispatch(new songs.PlaylistClear());
  }

  private insertTracklistAddedInformation(songs: Song[], tracklist: RFIDObject): Song[] {
    // Find any results that are already in our tracklist
    return songs.map((result) => {
      if (tracklist.payload && tracklist.payload.tracks) {
        for(let i = 0; i < tracklist.payload.tracks.length; i++) {
          if(result.id === tracklist.payload.tracks[i].id) {
            result = Object.assign({}, result, { added: true });
          }
        }
      }
      
      return result;
    });
  }

}
