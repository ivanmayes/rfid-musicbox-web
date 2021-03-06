webpackJsonp([0],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* unused harmony export getMopidyFeatureState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMopidyState; });
/* unused harmony export getConnectionStatus */
/* unused harmony export getNowPlaying */
/* unused harmony export getTrackList */
/* unused harmony export getPlaybackState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mopidy_reducer__ = __webpack_require__(442);


;
var reducers = {
    mopidy: __WEBPACK_IMPORTED_MODULE_1__mopidy_reducer__["e" /* reducer */]
};
/* Selectors */
var getMopidyFeatureState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('mopidy');
var getMopidyState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getMopidyFeatureState, function (state) { return state.mopidy; });
var getConnectionStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getMopidyState, __WEBPACK_IMPORTED_MODULE_1__mopidy_reducer__["a" /* getConnectionStatus */]);
var getNowPlaying = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getMopidyState, __WEBPACK_IMPORTED_MODULE_1__mopidy_reducer__["b" /* getNowPlaying */]);
var getTrackList = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getMopidyState, __WEBPACK_IMPORTED_MODULE_1__mopidy_reducer__["d" /* getTrackList */]);
var getPlaybackState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getMopidyState, __WEBPACK_IMPORTED_MODULE_1__mopidy_reducer__["c" /* getPlaybackState */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_core_store_songs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_core_store_songs_actions_song_actions__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_navigation_view_controller__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_navigation_nav_params__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SearchPage = (function () {
    function SearchPage(navCtrl, params, viewCtrl, toastCtrl, rfidStore, songStore) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.rfidStore = rfidStore;
        this.songStore = songStore;
        this.addedPlaylist = false;
        this.action = params.get('action');
        this.searchResults$ = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].combineLatest(this.songStore.select(__WEBPACK_IMPORTED_MODULE_7__app_core_store_songs__["a" /* getSearchResults */]), this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid__["d" /* getSelectedRFIDObject */])).map(function (_a) {
            var results = _a[0], tracklist = _a[1];
            return _this.insertTracklistAddedInformation(results, tracklist);
        });
        this.searchState$ = this.songStore.select(__WEBPACK_IMPORTED_MODULE_7__app_core_store_songs__["b" /* getSearchState */]);
        this.selectedPlaylist$ = this.songStore.select(__WEBPACK_IMPORTED_MODULE_7__app_core_store_songs__["c" /* getSelectedPlaylist */]);
        this.selectedPlaylistSongs$ = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].combineLatest(this.songStore.select(__WEBPACK_IMPORTED_MODULE_7__app_core_store_songs__["d" /* getSelectedPlaylistSongs */]), this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid__["d" /* getSelectedRFIDObject */])).map(function (_a) {
            var results = _a[0], tracklist = _a[1];
            var songs = _this.insertTracklistAddedInformation(results, tracklist);
            var added = songs.filter(function (song) { return song.added; });
            // Have we added this playlist?
            if (added.length >= songs.length) {
                _this.addedPlaylist = true;
            }
            else {
                _this.addedPlaylist = false;
            }
            return songs;
        });
    }
    SearchPage.prototype.ionViewDidEnter = function () { };
    SearchPage.prototype.search = function (query) {
        console.log(query);
        if (query.target) {
            this.songStore.dispatch(new __WEBPACK_IMPORTED_MODULE_8__app_core_store_songs_actions_song_actions__["n" /* Search */]({
                query: query.target.value,
                type: undefined
            }));
        }
    };
    SearchPage.prototype.addSongsToList = function (songs) {
        this.rfidStore.dispatch(new this.action(songs));
    };
    // TODO: Playlist is still a Song type 
    // and dependent on Youtube types right now
    SearchPage.prototype.browsePlaylist = function (playlist) {
        this.songStore.dispatch(new __WEBPACK_IMPORTED_MODULE_8__app_core_store_songs_actions_song_actions__["i" /* PlaylistLoad */](playlist.id));
    };
    SearchPage.prototype.backToResults = function () {
        this.songStore.dispatch(new __WEBPACK_IMPORTED_MODULE_8__app_core_store_songs_actions_song_actions__["h" /* PlaylistClear */]());
    };
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.insertTracklistAddedInformation = function (songs, tracklist) {
        // Find any results that are already in our tracklist
        return songs.map(function (result) {
            if (tracklist && tracklist.payload && tracklist.payload.tracks) {
                for (var i = 0; i < tracklist.payload.tracks.length; i++) {
                    if (result.id === tracklist.payload.tracks[i].id) {
                        result = Object.assign({}, result, { added: true });
                    }
                }
            }
            return result;
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/search/search.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Add Songs to List\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Done</span>\n          <ion-icon name="md-close" showWhen="android,windows,core"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid class="search" *ngIf="!(selectedPlaylist$ | async)">\n        <ion-row>\n            <ion-col>\n                <!-- <h4>Search Youtube for videos to add to this card:</h4> -->\n                <ion-searchbar placeholder="Search Youtube videos" (ionInput)="search($event)"></ion-searchbar>\n            </ion-col>\n        </ion-row>\n    \n        <ion-row class="search-results">\n            <ion-col>\n                <p *ngIf="(searchState$ | async)?.loading">\n                    <ion-spinner name="dots"></ion-spinner>\n                </p>\n    \n                <ion-list *ngIf="searchResults$ | async; let results;">\n                    <ion-item *ngFor="let result of results;">\n                    <ion-thumbnail item-start>\n                        <div class="overlay">\n                        <i class="fa fa-plus"></i>\n                        </div>\n                        <img [src]="result.thumbnail">\n                    </ion-thumbnail>\n                    <h2>{{result.title}}</h2>\n                    <p>{{result.durationString}}</p>\n                    <button *ngIf="!result.added && result.type == \'youtube-video\'" ion-button item-end (click)="addSongsToList([result])">Add</button>\n                    <button *ngIf="!result.added && result.type == \'youtube-playlist\'" ion-button item-end (click)="browsePlaylist(result)">Browse Playlist</button>\n                    <button *ngIf="result.added" disabled ion-button color="light" item-end>Already Added</button>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    \n    </ion-grid>\n\n    <ion-grid class="search" *ngIf="(selectedPlaylist$ | async); let selectedPlaylist;">\n        <ion-row>\n            <ion-col>\n                <button ion-button small color="light" icon-left (click)="backToResults()">\n                        <ion-icon name="arrow-back"></ion-icon>\n                        Back to Results\n                </button>\n                <h4>{{ selectedPlaylist.title }}</h4>\n                <div *ngIf="selectedPlaylistSongs$ | async; let results;">\n                    <button *ngIf="!addedPlaylist" ion-button item-end (click)="addSongsToList(results)">Add Entire Playlist</button>\n                    <button *ngIf="addedPlaylist" disabled ion-button item-end>Already Added</button>\n                </div>\n                \n            </ion-col>\n        </ion-row>\n    \n        <ion-row class="search-results">\n            <ion-col>\n                <p *ngIf="(searchState$ | async)?.loading">\n                    <ion-spinner name="dots"></ion-spinner>\n                </p>\n    \n                <ion-list *ngIf="selectedPlaylistSongs$ | async; let results;">\n                    <ion-item *ngFor="let result of results;">\n                    <ion-thumbnail item-start>\n                        <div class="overlay">\n                            <i class="fa fa-plus"></i>\n                        </div>\n                        <img [src]="result.thumbnail">\n                    </ion-thumbnail>\n                    <h2>{{result.title}}</h2>\n                    <p>{{result.durationString}}</p>\n                    <button *ngIf="!result.added && result.type == \'youtube-video\'" ion-button item-end (click)="addSongsToList([result])">Add</button>\n                    <button *ngIf="result.added" disabled ion-button color="light" item-end>Already Added</button>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    \n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOAD_RFID_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SET_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return TOGGLE_SHUFFLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return TOGGLE_LOOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MODE_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return REMOVE_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAR_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LoadRFIDObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SetMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SetTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ToggleShuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ToggleLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ModeChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return RemoveSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ClearList; });
var LOAD = '[RFID] Load';
var LOAD_SUCCESS = '[RFID] Load Success';
var LOAD_RFID_OBJECT = '[RFID] Load RFID Object';
var SET_MODE = '[RFID] Set Mode';
var SET_TITLE = '[RFID] Set Title';
var TOGGLE_SHUFFLE = '[RFID] Toggle Shuffle';
var TOGGLE_LOOP = '[RFID] Toggle Loop';
var MODE_CHANGED = '[RFID] Mode Changed';
var SAVE = '[RFID] Save';
var ADD_SONG = '[RFID] Add Song';
var REMOVE_SONG = '[RFID] Remove Song';
var CLEAR_LIST = '[RFID] Clear List';
var Load = (function () {
    function Load() {
        this.type = LOAD;
    }
    return Load;
}());

var LoadSuccess = (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
    return LoadSuccess;
}());

var LoadRFIDObject = (function () {
    function LoadRFIDObject(payload) {
        this.payload = payload;
        this.type = LOAD_RFID_OBJECT;
    }
    return LoadRFIDObject;
}());

var SetMode = (function () {
    function SetMode(payload) {
        this.payload = payload;
        this.type = SET_MODE;
    }
    return SetMode;
}());

var SetTitle = (function () {
    function SetTitle(payload) {
        this.payload = payload;
        this.type = SET_TITLE;
    }
    return SetTitle;
}());

var ToggleShuffle = (function () {
    function ToggleShuffle() {
        this.type = TOGGLE_SHUFFLE;
    }
    return ToggleShuffle;
}());

var ToggleLoop = (function () {
    function ToggleLoop() {
        this.type = TOGGLE_LOOP;
    }
    return ToggleLoop;
}());

var ModeChanged = (function () {
    function ModeChanged(payload) {
        this.payload = payload;
        this.type = MODE_CHANGED;
    }
    return ModeChanged;
}());

var Save = (function () {
    function Save() {
        this.type = SAVE;
    }
    return Save;
}());

var AddSong = (function () {
    function AddSong(payload) {
        this.payload = payload;
        this.type = ADD_SONG;
    }
    return AddSong;
}());

var RemoveSong = (function () {
    function RemoveSong(payload) {
        this.payload = payload;
        this.type = REMOVE_SONG;
    }
    return RemoveSong;
}());

var ClearList = (function () {
    function ClearList() {
        this.type = CLEAR_LIST;
    }
    return ClearList;
}());

//# sourceMappingURL=rfid.actions.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reducers; });
/* unused harmony export getSongsState */
/* unused harmony export getSongsEntitiesState */
/* unused harmony export getSongsIds */
/* unused harmony export getSongsEntities */
/* unused harmony export getAllSongs */
/* unused harmony export getTotalSongs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSearchState; });
/* unused harmony export getSearchEntriesIds */
/* unused harmony export getSearchParams */
/* unused harmony export getSearchLoading */
/* unused harmony export getSelectedPlaylistId */
/* unused harmony export getSelectedPlaylistSongIds */
/* unused harmony export getSearchError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSelectedPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSelectedPlaylistSongs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_song_reducer__ = __webpack_require__(703);



;
;
var reducers = {
    songs: __WEBPACK_IMPORTED_MODULE_2__reducers_song_reducer__["b" /* reducer */],
    search: __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__["g" /* reducer */]
};
/* Selectors */
var getSongsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('songs');
var getSongsEntitiesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSongsState, function (state) { return state.songs; });
var getSongsIds = (_a = __WEBPACK_IMPORTED_MODULE_2__reducers_song_reducer__["a" /* adapter */].getSelectors(getSongsEntitiesState), _a.selectIds), getSongsEntities = _a.selectEntities, getAllSongs = _a.selectAll, getTotalSongs = _a.selectTotal;
/* Search */
var getSearchState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSongsState, function (state) { return state.search; });
var getSearchEntriesIds = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSearchState, __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__["b" /* getIds */]);
var getSearchParams = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSearchState, __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__["d" /* getParams */]);
var getSearchLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSearchState, __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__["c" /* getLoading */]);
var getSelectedPlaylistId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSearchState, __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__["e" /* getSelectedPlaylistId */]);
var getSelectedPlaylistSongIds = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSearchState, __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__["f" /* getSelectedPlaylistSongIds */]);
var getSearchError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSearchState, __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__["a" /* getError */]);
var getSearchResults = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSongsEntities, getSearchEntriesIds, function (entries, searchIds) {
    return searchIds.map(function (id) { return entries[id]; });
});
/**
 * TODO: Playlists still technically can come in as Songs right now,
 * need to separate out before supporting other playlists
 */
var getSelectedPlaylist = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSongsEntities, getSelectedPlaylistId, function (entries, selectedPlaylistId) {
    console.log('Selected Playlist', selectedPlaylistId, entries[selectedPlaylistId]);
    return entries[selectedPlaylistId];
});
var getSelectedPlaylistSongs = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSongsEntities, getSelectedPlaylistSongIds, function (entries, songIds) { return songIds.map(function (id) { return entries[id]; }); });
var _a;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RFIDService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RFIDService = (function () {
    function RFIDService(socketService) {
        this.socketService = socketService;
        this.getRFIDObjectsSuccess$ = this.socketService.listen('getRFIDObjectsSuccess');
        this.rfidObjectFound$ = this.socketService.listen('rfidFound');
        this.rfidModeChanged$ = this.socketService.listen('rfidModeChanged');
        this.rfidObjectSaved$ = this.socketService.listen('saveRFIDObjectSuccess');
    }
    RFIDService.prototype.getRFIDObjects = function () {
        this.socketService.emit('getRFIDObjects');
    };
    RFIDService.prototype.setRFIDMode = function (mode) {
        this.socketService.emit('setRFIDMode', mode);
    };
    RFIDService.prototype.saveRFIDTrackList = function (rfidObject) {
        this.socketService.emit('saveRFIDObject', rfidObject);
    };
    RFIDService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]])
    ], RFIDService);
    return RFIDService;
}());

//# sourceMappingURL=rfid.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/find-device/find-device.module": [
		241
	],
	"../pages/home/home.module": [
		246
	],
	"../pages/rfid/rfid.module": [
		347
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 240;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindDevicePageModule", function() { return FindDevicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_device__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindDevicePageModule = (function () {
    function FindDevicePageModule() {
    }
    FindDevicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__find_device__["a" /* FindDevicePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_device__["a" /* FindDevicePage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__find_device__["a" /* FindDevicePage */]
            ]
        })
    ], FindDevicePageModule);
    return FindDevicePageModule;
}());

//# sourceMappingURL=find-device.module.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_store_mopidy__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_store_mopidy_mopidy_actions__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, mopidyStore, menuCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.mopidyStore = mopidyStore;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.searchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */], {
            action: __WEBPACK_IMPORTED_MODULE_5__app_core_store_mopidy_mopidy_actions__["b" /* AddToQueue */]
        });
        menuCtrl.enable(true);
        this.state$ = this.mopidyStore.select(__WEBPACK_IMPORTED_MODULE_4__app_core_store_mopidy__["a" /* getMopidyState */]);
    }
    HomePage.prototype.ionViewDidEnter = function () { };
    HomePage.prototype.ngOnDestroy = function () {
    };
    HomePage.prototype.play = function (track) {
        this.mopidyStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_core_store_mopidy_mopidy_actions__["n" /* Play */](track));
    };
    HomePage.prototype.stop = function () {
        this.mopidyStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_core_store_mopidy_mopidy_actions__["t" /* Stop */]());
    };
    HomePage.prototype.clearList = function () {
        this.mopidyStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_core_store_mopidy_mopidy_actions__["e" /* Clear */]());
    };
    HomePage.prototype.addSongs = function () {
        this.searchModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      Playlist\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf="state$ | async; let state;">\n\n    <ion-grid *ngIf="state.connectionStatus === \'online\'">\n\n      <ion-row>\n        <ion-col>\n          <h2>Track List</h2>\n        </ion-col>\n        <ion-col text-right>\n            <button ion-button color="danger" small (click)="clearList()">\n                Clear List\n            </button>\n            <button ion-button small (click)="addSongs()">\n                Add Songs\n            </button>\n        </ion-col>\n      </ion-row>\n      <ion-row class="tracklist">\n        <ion-col>\n          <ion-list>\n            <ion-item \n              *ngFor="let tltrack of state.trackList;" \n              [class.active]="state.nowPlaying && tltrack.tlid === state.nowPlaying.tlid"\n              (click)="play(tltrack)"\n            >\n\n                <ion-thumbnail class="thumb" item-start (click)="play(tltrack)">\n                    <img [src]="tltrack.track.album.images[0]">\n                </ion-thumbnail>\n                \n                <ion-thumbnail class="thumb-active" item-start>\n                    <img [src]="tltrack.track.album.images[0]">\n                </ion-thumbnail>\n              \n              <h2>{{ tltrack.track.name }}</h2>\n              <p>{{ tltrack.track.length }}</p>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid *ngIf="state.connectionStatus !== \'online\'">\n        <ion-row>\n          <ion-col>\n            <p>Couldn\'t find music server.  Reconnecting...</p>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n  </div>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RFIDPageModule", function() { return RFIDPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rfid__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RFIDPageModule = (function () {
    function RFIDPageModule() {
    }
    RFIDPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__rfid__["a" /* RFIDPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__rfid__["a" /* RFIDPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__rfid__["a" /* RFIDPage */]
            ]
        })
    ], RFIDPageModule);
    return RFIDPageModule;
}());

//# sourceMappingURL=rfid.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketService = (function () {
    function SocketService() {
        var _this = this;
        this.connected$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].socket.server);
        this.socket.on('connect', function () { return _this.connected$.next(true); });
        this.socket.on('disconnect', function () { return _this.connected$.next(false); });
        //TODO remove
        this.socket.on('message', function (m) {
            console.log(m);
        });
        this.socket.on(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].socket.namespace + ':user:joinSession', this.startHeartbeat.bind(this));
    }
    SocketService.prototype.joinSession = function () {
        var _this = this;
        this.connected$.subscribe(function (connected) {
            // This will handle reconnects automatically
            if (connected) {
                _this.socket.emit(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].socket.namespace + ':user:joinSession', { user: _this.user });
            }
        });
    };
    // TODO, remove--probably
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
        this.connected$.next(false);
    };
    SocketService.prototype.emit = function (event, data) {
        this.socket.emit(event, data);
    };
    SocketService.prototype.listen = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on(event, function (data) {
                observer.next(data);
            });
            return function () { return _this.socket.off(event); };
        });
    };
    SocketService.prototype.startHeartbeat = function () {
        var _this = this;
        if (this.heartbeatInterval) {
            clearInterval(this.heartbeatInterval);
        }
        this.heartbeatInterval = setInterval(function () {
            _this.socket.emit(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].socket.namespace + ':user:heartbeat', _this.user);
        }, __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].socket.heartbeatInterval);
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeSearchService = (function () {
    function YoutubeSearchService(http) {
        this.http = http;
        this.searchResults$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]();
    }
    YoutubeSearchService.prototype.search = function (query) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        params = params.append('maxResults', '20');
        params = params.append('part', 'snippet');
        params = params.append('q', query);
        params = params.append('safeSearch', 'none');
        params = params.append('type', 'video,playlist');
        // params = params.append('videoDuration', 'any');
        // params = params.append('videoEmbeddable', 'true');
        params = params.append('order', 'viewCount');
        params = params.append('key', __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].youtubeAPIKey);
        return this.http
            .get('https://www.googleapis.com/youtube/v3/search', { params: params })
            .map(function (data) {
            var items = data['items'];
            if (items) {
                return items;
            }
        }, function (err) {
            console.log(err);
        });
    };
    YoutubeSearchService.prototype.getItemDetails = function (items) {
        var _this = this;
        // If the first result contains support, remove it?
        if (items[0] && items[0].snippet.title == 'https://youtube.com/devicesupport') {
            items.splice(0, 1);
        }
        var ids = items.map(function (i) {
            return i.id.videoId;
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        params = params.append('id', ids.join(','));
        params = params.append('part', 'contentDetails');
        params = params.append('fields', 'items(id,contentDetails/duration)');
        params = params.append('key', __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].youtubeAPIKey);
        return this.http
            .get('https://www.googleapis.com/youtube/v3/videos', { params: params })
            .map(function (data) {
            var durationItems = data['items'];
            var songs = items.map(function (item) {
                var song = {
                    id: item.id.videoId || item.id.playlistId,
                    title: item.snippet.title,
                    type: 'youtube-video'
                };
                if (item.snippet &&
                    item.snippet.thumbnails &&
                    item.snippet.thumbnails.default) {
                    song.thumbnail = item.snippet.thumbnails.default.url;
                }
                else {
                    song.thumbnail = 'https://i.stack.imgur.com/WFy1e.jpg';
                }
                if (!item.id.videoId) {
                    song.id = item.id.playlistId;
                    song.type = 'youtube-playlist';
                }
                for (var i = 0; i < durationItems.length; i++) {
                    var di = durationItems[i];
                    if (di.id === item.id.videoId) {
                        song.durationString = _this.getTimeString(di.contentDetails.duration);
                        song.durationSeconds = _this.getSeconds(di.contentDetails.duration);
                    }
                }
                return song;
            });
            return songs;
        }, function (err) {
            console.log(err);
        });
    };
    YoutubeSearchService.prototype.getPlaylistItems = function (playlistId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        params = params.append('playlistId', playlistId);
        params = params.append('part', 'snippet');
        params = params.append('maxResults', '50');
        params = params.append('key', __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].youtubeAPIKey);
        return this.http
            .get('https://www.googleapis.com/youtube/v3/playlistItems', { params: params })
            .map(function (data) {
            if (data['items']) {
                var items = data['items'].map(function (item) {
                    var song = {
                        id: item.snippet.resourceId.videoId,
                        title: item.snippet.title,
                        type: 'youtube-video',
                        playlistId: item.snippet.playlistId
                    };
                    if (item.snippet &&
                        item.snippet.thumbnails &&
                        item.snippet.thumbnails.default) {
                        song.thumbnail = item.snippet.thumbnails.default.url;
                    }
                    else {
                        song.thumbnail = 'https://i.stack.imgur.com/WFy1e.jpg';
                    }
                    return song;
                });
                return items;
            }
            return [];
        });
    };
    YoutubeSearchService.prototype.getTimeString = function (duration) {
        var string = duration.replace('PT', '').replace('H', ':').replace('M', ':').replace('S', '');
        // Look for single digit seconds
        var string_array = string.split(':');
        if (string_array[string_array.length - 1].length == 1) {
            string_array[string_array.length - 1] = '0' + string_array[string_array.length - 1];
        }
        return string_array.join(':');
    };
    // Expects ISO 8601 duration string
    YoutubeSearchService.prototype.getSeconds = function (duration) {
        var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
        var hours = 0, minutes = 0, seconds = 0, totalseconds;
        if (reptms.test(duration)) {
            var matches = reptms.exec(duration);
            if (matches[1])
                hours = Number(matches[1]);
            if (matches[2])
                minutes = Number(matches[2]);
            if (matches[3])
                seconds = Number(matches[3]);
            totalseconds = hours * 3600 + minutes * 60 + seconds;
            //console.log(duration);
            //console.log(hours, minutes, seconds, totalseconds);
        }
        return totalseconds;
    };
    YoutubeSearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], YoutubeSearchService);
    return YoutubeSearchService;
}());

//# sourceMappingURL=youtube.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MopidyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mopidy__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mopidy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mopidy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MopidyService = (function () {
    function MopidyService() {
        var _this = this;
        this.mopidy = new __WEBPACK_IMPORTED_MODULE_3_mopidy__({
            webSocketUrl: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].mopidy.server
        });
        this.connected = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('offline');
        this.connected$ = this.connected.asObservable();
        this.mopidy.on('state:online', function () { return _this.connected.next('online'); });
        this.mopidy.on('state:offline', function () { return _this.connected.next('offline'); });
        this.mopidy.on('reconnectionPending', function () { return _this.connected.next('reconnecting'); });
        this.mopidy.on('reconnecting', function () { return _this.connected.next('reconnecting'); });
        // Debug
        this.mopidy.on(console.log.bind(console));
        console.log('Mopidy Init', this.mopidy);
    }
    MopidyService.prototype.listen = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.mopidy.on(event, function (data) {
                observer.next(data);
            });
            return function () { return _this.mopidy.off(event); };
        });
    };
    MopidyService.prototype.getTrackList = function () {
        return this.mopidy.tracklist.getTlTracks();
    };
    MopidyService.prototype.getCurrentTrack = function () {
        return this.mopidy.playback.getCurrentTlTrack();
    };
    MopidyService.prototype.getPlaybackState = function () {
        return this.mopidy.playback.getState();
    };
    MopidyService.prototype.getTrackListSettings = function () {
        var calls = [
            this.mopidy.tracklist.getRandom,
            this.mopidy.tracklist.getRepeat
        ];
        return Promise.all(calls)
            .then(function (_a) {
            var random = _a[0], repeat = _a[1];
            return {
                random: random,
                repeat: repeat
            };
        });
    };
    MopidyService.prototype.play = function (tlTrack, tlid) {
        return this.mopidy.playback.play(tlTrack, tlid);
    };
    MopidyService.prototype.next = function () {
        return this.mopidy.playback.next();
    };
    MopidyService.prototype.previous = function () {
        return this.mopidy.playback.previous();
    };
    MopidyService.prototype.stop = function () {
        return this.mopidy.playback.stop();
    };
    MopidyService.prototype.clear = function () {
        return this.mopidy.tracklist.clear();
    };
    MopidyService.prototype.togglePause = function () {
        var _this = this;
        this.mopidy.playback.getState()
            .then(function (state) {
            switch (state) {
                case 'playing':
                    _this.mopidy.playback.pause();
                    break;
                case 'paused':
                    _this.mopidy.playback.resume();
                    break;
                case 'stopped':
                    _this.mopidy.playback.play();
                    break;
            }
        });
    };
    MopidyService.prototype.setRandom = function (setting) {
        return this.mopidy.tracklist.setRandom(setting);
    };
    MopidyService.prototype.setRepeat = function (setting) {
        return this.mopidy.tracklist.setRepeat(setting);
    };
    MopidyService.prototype.playURIs = function (songs) {
        var _this = this;
        var uris = songs.map(function (song) { return _this.rfidToURI(song); });
        return this.mopidy.tracklist.clear()
            .then(function () { return _this.mopidy.tracklist.add(undefined, 0, undefined, uris); })
            .then(function () { return _this.play(); })
            .catch(function (err) { return console.log('playURIs Error:', err); });
    };
    MopidyService.prototype.addToQueue = function (songs) {
        var _this = this;
        var uris = songs.map(function (song) { return _this.rfidToURI(song); });
        return this.mopidy.tracklist.add(undefined, undefined, undefined, uris)
            .catch(function (err) { return console.log('addToQueue Error:', err); });
    };
    MopidyService.prototype.rfidToURI = function (song) {
        if (!song) {
            console.warn('No RFID Object Provided');
            return undefined;
        }
        switch (song.type) {
            case 'youtube-video':
                return 'youtube:video/shim.' + song.id;
            case 'youtube-playlist':
                return 'youtube:https://www.youtube.com/playlist?list=' + song.id;
            default:
                console.warn('Couldnt find a type for this Song');
                return undefined;
        }
    };
    MopidyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MopidyService);
    return MopidyService;
}());

//# sourceMappingURL=mopidy.service.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(411);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_reducers__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pages_module__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_zeroconf__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/find-device/find-device.module#FindDevicePageModule', name: 'find-device', segment: 'find-device', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rfid/rfid.module#RFIDPageModule', name: 'rfid', segment: 'rfid', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["i" /* StoreModule */].forRoot([], { metaReducers: __WEBPACK_IMPORTED_MODULE_11__app_reducers__["a" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25 //  Retains last 25 states
                }),
                __WEBPACK_IMPORTED_MODULE_12__pages_pages_module__["a" /* PagesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_zeroconf__["a" /* Zeroconf */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindDevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_zeroconf__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindDevicePage = (function () {
    function FindDevicePage(navCtrl, zeroconf) {
        this.navCtrl = navCtrl;
        this.zeroconf = zeroconf;
    }
    FindDevicePage.prototype.ionViewDidEnter = function () {
        console.log('Watching for services to connect to');
        this.zeroconf.getHostname()
            .then(function (hostname) { return console.log('My Name is', hostname); });
        // watch for services of a specified type
        this.zeroconf.watch('_http._tcp.', 'local.').subscribe(function (result) {
            if (result.action == 'added') {
                console.log('service added', result.service);
            }
            else {
                console.log('service removed', result.service);
            }
        });
    };
    FindDevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-device',template:/*ion-inline-start:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/find-device/find-device.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n      <ion-title>\n        Connect to Device\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content padding>\n\n    <h2>Connect to your device</h2>\n    \n</ion-content>\n  '/*ion-inline-end:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/find-device/find-device.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_zeroconf__["a" /* Zeroconf */]])
    ], FindDevicePage);
    return FindDevicePage;
}());

//# sourceMappingURL=find-device.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getConnectionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNowPlaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTrackList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPlaybackState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mopidy_actions__ = __webpack_require__(66);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    connectionStatus: 'offline',
    playbackState: 'stopped',
    nowPlaying: undefined,
    trackList: undefined,
    trackListSettings: {
        random: false,
        repeat: false
    }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__mopidy_actions__["d" /* CONNECTION_CHANGE */]: {
            return __assign({}, state, { connectionStatus: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__mopidy_actions__["v" /* TRACKLIST_CHANGE */]: {
            return __assign({}, state, { trackList: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__mopidy_actions__["k" /* PLAYBACK_STATE_CHANGE */]: {
            return __assign({}, state, { playbackState: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__mopidy_actions__["w" /* TRACKLIST_SETTINGS_CHANGE */]: {
            return __assign({}, state, { trackListSettings: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__mopidy_actions__["j" /* PLAYBACK_CHANGE */]:
        case __WEBPACK_IMPORTED_MODULE_0__mopidy_actions__["i" /* PLAY */]: {
            if (action.payload) {
                return __assign({}, state, { nowPlaying: action.payload });
            }
            else {
                return state;
            }
        }
        default:
            return state;
    }
}
var getConnectionStatus = function (state) { return state.connectionStatus; };
var getNowPlaying = function (state) { return state.nowPlaying; };
var getTrackList = function (state) { return state.trackList; };
var getPlaybackState = function (state) { return state.playbackState; };
//# sourceMappingURL=mopidy.reducer.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CONNECTION_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return TRACKLIST_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PLAYBACK_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PLAYBACK_STATE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return TRACKLIST_SETTINGS_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NEXT_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return PREV_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return TOGGLE_PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return STOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PLAY_URIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ConnectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return TrackListChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PlaybackChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return PlaybackStateChange; });
/* unused harmony export TrackListSettingsChange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NextTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return PrevTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return TogglePause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Play; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return PlayURIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddToQueue; });
/* Getters */
var CONNECTION_CHANGE = '[Mopidy] Connection Change';
var TRACKLIST_CHANGE = '[Mopidy] Tracklist Change';
var PLAYBACK_CHANGE = '[Mopidy] Playback Change';
var PLAYBACK_STATE_CHANGE = '[Mopidy] Playback State Change';
var TRACKLIST_SETTINGS_CHANGE = '[Mopidy] Tracklist Settings Change';
/* Setters */
var NEXT_TRACK = '[Mopidy] Next Track';
var PREV_TRACK = '[Mopidy] Previous Track';
var TOGGLE_PAUSE = '[Mopidy] Toggle Pause';
var STOP = '[Mopidy] Stop';
var PLAY = '[Mopidy] Play';
var CLEAR = '[Mopidy] Clear';
var PLAY_URIS = '[Mopidy] Play URIs';
var ADD_TO_QUEUE = '[Mopidy] Add to Queue';
var ConnectionChange = (function () {
    function ConnectionChange(payload) {
        this.payload = payload;
        this.type = CONNECTION_CHANGE;
    }
    return ConnectionChange;
}());

var TrackListChange = (function () {
    function TrackListChange(payload) {
        this.payload = payload;
        this.type = TRACKLIST_CHANGE;
    }
    return TrackListChange;
}());

var PlaybackChange = (function () {
    function PlaybackChange(payload) {
        this.payload = payload;
        this.type = PLAYBACK_CHANGE;
    }
    return PlaybackChange;
}());

var PlaybackStateChange = (function () {
    function PlaybackStateChange(payload) {
        this.payload = payload;
        this.type = PLAYBACK_STATE_CHANGE;
    }
    return PlaybackStateChange;
}());

var TrackListSettingsChange = (function () {
    function TrackListSettingsChange(payload) {
        this.payload = payload;
        this.type = TRACKLIST_SETTINGS_CHANGE;
    }
    return TrackListSettingsChange;
}());

var NextTrack = (function () {
    function NextTrack() {
        this.type = NEXT_TRACK;
    }
    return NextTrack;
}());

var PrevTrack = (function () {
    function PrevTrack() {
        this.type = PREV_TRACK;
    }
    return PrevTrack;
}());

var TogglePause = (function () {
    function TogglePause() {
        this.type = TOGGLE_PAUSE;
    }
    return TogglePause;
}());

var Stop = (function () {
    function Stop() {
        this.type = STOP;
    }
    return Stop;
}());

var Play = (function () {
    function Play(payload) {
        this.payload = payload;
        this.type = PLAY;
    }
    return Play;
}());

var Clear = (function () {
    function Clear() {
        this.type = CLEAR;
    }
    return Clear;
}());

var PlayURIs = (function () {
    function PlayURIs(payload) {
        this.payload = payload;
        this.type = PLAY_URIS;
    }
    return PlayURIs;
}());

var AddToQueue = (function () {
    function AddToQueue(payload) {
        this.payload = payload;
        this.type = ADD_TO_QUEUE;
    }
    return AddToQueue;
}());

//# sourceMappingURL=mopidy.actions.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRFIDObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDirty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSelectedRFID; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rfid_actions__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rfid_model__ = __webpack_require__(701);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    mode: 'get',
    dirty: false,
    selectedRFID: undefined,
    objects: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["e" /* LOAD */]: {
            return __assign({}, initialState, { mode: state.mode });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["g" /* LOAD_SUCCESS */]: {
            return __assign({}, state, { objects: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["f" /* LOAD_RFID_OBJECT */]: {
            // Check to see if the card payload is empty, fill in if it is
            var rfid_1 = action.payload;
            if (!rfid_1.payload) {
                return __assign({}, state, { dirty: false, selectedRFID: __assign({}, action.payload, { payload: __assign({}, __WEBPACK_IMPORTED_MODULE_1__rfid_model__["a" /* RFIDTrackListInitialState */]) }) });
            }
            return __assign({}, state, { dirty: false, selectedRFID: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["k" /* MODE_CHANGED */]: {
            return __assign({}, state, { mode: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["q" /* SET_TITLE */]: {
            return __assign({}, state, { dirty: true, selectedRFID: __assign({}, state.selectedRFID, { payload: __assign({}, state.selectedRFID.payload, { title: action.payload }) }) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["v" /* TOGGLE_SHUFFLE */]: {
            return __assign({}, state, { dirty: true, selectedRFID: __assign({}, state.selectedRFID, { payload: __assign({}, state.selectedRFID.payload, { shuffle: !state.selectedRFID.payload.shuffle }) }) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["u" /* TOGGLE_LOOP */]: {
            return __assign({}, state, { dirty: true, selectedRFID: __assign({}, state.selectedRFID, { payload: __assign({}, state.selectedRFID.payload, { loop: !state.selectedRFID.payload.loop }) }) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["a" /* ADD_SONG */]: {
            // Long way to say add a track to that array
            return __assign({}, state, { dirty: true, selectedRFID: __assign({}, state.selectedRFID, { payload: __assign({}, state.selectedRFID.payload, { tracks: state.selectedRFID.payload.tracks.concat(action.payload) }) }) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["m" /* REMOVE_SONG */]: {
            // Long way to say remove a track from that array
            return __assign({}, state, { dirty: true, selectedRFID: __assign({}, state.selectedRFID, { payload: __assign({}, state.selectedRFID.payload, { tracks: state.selectedRFID.payload.tracks.filter(function (track) { return track.id !== action.payload; }) }) }) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["c" /* CLEAR_LIST */]: {
            // Long way to say clear the list
            return __assign({}, state, { dirty: true, selectedRFID: __assign({}, state.selectedRFID, { payload: __assign({}, state.selectedRFID.payload, { tracks: [] }) }) });
        }
        default:
            return state;
    }
}
var getMode = function (state) { return state.mode; };
var getRFIDObjects = function (state) { return state.objects; };
var getDirty = function (state) { return state.dirty; };
var getSelectedRFID = function (state) { return state.selectedRFID; };
//# sourceMappingURL=rfid.reducer.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RFIDTrackListInitialState; });
var RFIDTrackListInitialState = {
    shuffle: false,
    loop: false,
    tracks: []
};
//# sourceMappingURL=rfid.model.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSelectedPlaylistId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getSelectedPlaylistSongIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__ = __webpack_require__(95);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    ids: [],
    loading: false,
    canLoadMore: true,
    error: '',
    params: {},
    limit: 20,
    offset: 0,
    selectedPlaylistId: undefined,
    selectedPlaylistSongIds: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["a" /* LOAD */]: {
            return initialState;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["k" /* SEARCH */]: {
            var params = action.payload;
            if (!action.payload.query || action.payload.query.length < 1) {
                return state;
            }
            return __assign({}, state, { loading: true, ids: [], error: '', params: params, offset: 0, limit: 20, canLoadMore: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["m" /* SEARCH_SUCCESS */]: {
            return __assign({}, state, { ids: action.payload.map(function (entries) { return entries.id; }), loading: false, error: '', params: state.params, canLoadMore: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["l" /* SEARCH_FAIL */]: {
            return __assign({}, state, { loading: false, error: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["f" /* PLAYLIST_LOAD */]: {
            return __assign({}, state, { loading: true, selectedPlaylistId: action.payload, selectedPlaylistSongIds: [] });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["g" /* PLAYLIST_LOAD_SUCCESS */]: {
            return __assign({}, state, { loading: false, selectedPlaylistSongIds: action.payload.map(function (entries) { return entries.id; }) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["e" /* PLAYLIST_CLEAR */]: {
            return __assign({}, state, { loading: false, selectedPlaylistId: undefined, selectedPlaylistSongIds: [] });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["b" /* NEXT_PAGE */]: {
            if (state.loading) {
                return state;
            }
            return __assign({}, state, { loading: true, offset: state.offset + state.limit, canLoadMore: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["c" /* NEXT_PAGE_SUCCESS */]: {
            return __assign({}, state, { ids: state.ids.concat(action.payload.map(function (entries) { return entries.id; })), loading: false, error: '', params: state.params, canLoadMore: true });
        }
        default:
            return state;
    }
}
var getIds = function (state) { return state.ids; };
var getParams = function (state) { return state.params; };
var getLoading = function (state) { return state.loading; };
var getSelectedPlaylistId = function (state) { return state.selectedPlaylistId; };
var getSelectedPlaylistSongIds = function (state) { return state.selectedPlaylistSongIds; };
var getError = function (state) { return state.error; };
//# sourceMappingURL=search.reducer.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adapter; });
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_entity__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_song_actions__ = __webpack_require__(95);


var adapter = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_entity__["a" /* createEntityAdapter */])({
    selectId: function (song) { return song.id; },
    sortComparer: false
});
var initialState = adapter.getInitialState();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_song_actions__["m" /* SEARCH_SUCCESS */]:
        case __WEBPACK_IMPORTED_MODULE_1__actions_song_actions__["g" /* PLAYLIST_LOAD_SUCCESS */]: {
            return adapter.addMany(action.payload, state);
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=song.reducer.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RFIDPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_store_rfid_rfid_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_core_store_mopidy_mopidy_actions__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RFIDPage = (function () {
    function RFIDPage(navCtrl, toastCtrl, rfidService, rfidStore, mopidyStore, modalCtrl, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.rfidService = rfidService;
        this.rfidStore = rfidStore;
        this.mopidyStore = mopidyStore;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.searchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */], {
            action: __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["b" /* AddSong */]
        });
        menuCtrl.enable(true);
        this.rfidMode$ = this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid__["b" /* getMode */])
            .do(function (mode) {
            // Prevent box from changing to get while on this page
            if (mode === 'get') {
                console.log('DO: Setting Mode to set');
                _this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["s" /* SetMode */]('set'));
            }
        });
        this.rfidObjects$ = this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid__["c" /* getRFIDObjects */]);
        this.selectedRFIDObject$ = this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid__["d" /* getSelectedRFIDObject */]);
        this.rfidObjectIsDirty$ = this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid__["a" /* getDirty */]);
        this.rfidService.rfidObjectSaved$
            .subscribe(function () {
            _this.toastCtrl.create({
                message: 'RFID Object Saved Successfully!',
                duration: 3000,
                position: 'top'
            }).present();
        });
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["h" /* Load */]());
    }
    RFIDPage.prototype.ionViewDidEnter = function () { };
    RFIDPage.prototype.ngOnDestroy = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["s" /* SetMode */]('get'));
    };
    RFIDPage.prototype.addSongs = function () {
        this.searchModal.present();
    };
    RFIDPage.prototype.removeSongFromList = function (id) {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["n" /* RemoveSong */](id));
    };
    RFIDPage.prototype.setRFIDMode = function (mode) {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["s" /* SetMode */](mode));
    };
    RFIDPage.prototype.selectObject = function (obj) {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["i" /* LoadRFIDObject */](obj));
    };
    RFIDPage.prototype.resetView = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["h" /* Load */]());
    };
    RFIDPage.prototype.saveRFIDTrackList = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["r" /* Save */]());
    };
    RFIDPage.prototype.clearTrackList = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["d" /* ClearList */]());
    };
    RFIDPage.prototype.setTitle = function (title) {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["t" /* SetTitle */](title));
    };
    RFIDPage.prototype.toggleShuffle = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["x" /* ToggleShuffle */]());
    };
    RFIDPage.prototype.toggleLoop = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["w" /* ToggleLoop */]());
    };
    RFIDPage.prototype.addTrackListToQueue = function (songs) {
        this.mopidyStore.dispatch(new __WEBPACK_IMPORTED_MODULE_8__app_core_store_mopidy_mopidy_actions__["b" /* AddToQueue */](songs));
    };
    RFIDPage.prototype.playRFIDTrackList = function (songs) {
        this.mopidyStore.dispatch(new __WEBPACK_IMPORTED_MODULE_8__app_core_store_mopidy_mopidy_actions__["o" /* PlayURIs */](songs));
    };
    RFIDPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rfid',template:/*ion-inline-start:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/rfid/rfid.html"*/'<ion-header>\n        <ion-navbar>\n          <button ion-button menuToggle icon-only>\n            <ion-icon name=\'menu\'></ion-icon>\n          </button>\n          <ion-title>\n            RFID Configurator\n          </ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content padding>\n        <!-- Browse Mode -->\n        <div *ngIf="!(selectedRFIDObject$ | async)">\n          <p *ngIf="(rfidMode$ | async) === \'set\'">Select an RFID Object below or scan a card to edit</p>\n\n          <ion-list class="object-list">\n              <ion-item *ngFor="let obj of rfidObjects$ | async" (click)="selectObject(obj)">\n                <h2>{{obj.payload.title || obj.id}}</h2>\n                <p>{{obj.payload.tracks.length}} Tracks</p>\n                <ion-thumbnail item-end>\n                    <img [src]="track.thumbnail" *ngFor="let track of obj.payload.tracks">\n                </ion-thumbnail>\n              </ion-item>\n          </ion-list>\n        </div>\n        <!-- end Browse Mode -->\n\n        <!-- Edit Mode -->\n        <div *ngIf="selectedRFIDObject$ | async; let rfidObject;">\n          <div class="actions">\n              <button ion-button small color="light" icon-left (click)="resetView()">\n                  <ion-icon name="arrow-back"></ion-icon>\n                  I\'m Finished\n              </button>\n          \n              <button [disabled]="!(rfidObjectIsDirty$ | async)" ion-button small (click)="saveRFIDTrackList()" *ngIf="selectedRFIDObject$ | async">\n                  Save Changes\n              </button>\n\n              <div class="right">\n                  <button ion-button small class="addToQueue" (click)="addTrackListToQueue(rfidObject.payload.tracks)" *ngIf="selectedRFIDObject$ | async">\n                      Add To Queue\n                  </button>\n    \n                  <button ion-button color="secondary" small class="playNow" (click)="playRFIDTrackList(rfidObject.payload.tracks)" *ngIf="selectedRFIDObject$ | async">\n                      Play Now\n                  </button>\n              </div>\n          </div>\n          \n      \n          <br>\n          <br>\n      \n          <div *ngIf="!rfidObject.id">\n            Waiting for an RFID card to scan...\n          </div>\n      \n          <div *ngIf="rfidObject">\n      \n            <div class="tracklist" *ngIf="rfidObject.payload">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class="settings" col-12 col-md-4>\n                          <ion-row>\n                              <ion-col>\n                                  <h4>Settings:</h4>\n                              </ion-col>\n                            </ion-row>\n              \n                            <ion-row>\n                              <ion-col>\n                                  <ion-list>\n                                      <ion-item>\n                                          <ion-label>RFID ID:</ion-label>\n                                          <ion-input text-right [ngModel]="rfidObject.id" disabled type="text"></ion-input>\n                                      </ion-item>\n                                      <ion-item>\n                                          <ion-label>Title:</ion-label>\n                                          <ion-input text-right [ngModel]="rfidObject.payload.title" placeholder="Optional" (ngModelChange)="setTitle($event)" type="text"></ion-input>\n                                      </ion-item>\n                                      <ion-item>\n                                          <ion-label>Shuffle:</ion-label>\n                                          <ion-toggle [ngModel]="rfidObject.payload.shuffle" (ngModelChange)="toggleShuffle()"></ion-toggle>\n                                      </ion-item>\n                                      <ion-item>\n                                          <ion-label>Loop:</ion-label>\n                                          <ion-toggle [ngModel]="rfidObject.payload.loop" (ngModelChange)="toggleLoop()"></ion-toggle>\n                                      </ion-item>\n                                  </ion-list>\n                              </ion-col>\n                            </ion-row>\n                      </ion-col>\n                      <ion-col col-12 col-md-8 class="tracklist">\n                          <ion-grid>\n                              <ion-row>\n                                  <ion-col flex>\n                                    <h4>Track List:</h4>\n                                  </ion-col>\n                                </ion-row>\n            \n                                <ion-row>\n                                  <ion-col>\n                                      <button ion-button small (click)="addSongs()" *ngIf="rfidObject">\n                                          Add Songs\n                                      </button>\n                                  </ion-col>\n                                  <ion-col text-right>\n                                      <button ion-button small item-end color="danger" (click)="clearTrackList()">\n                                          Clear List\n                                      </button>\n                                  </ion-col>\n                                </ion-row>\n            \n                                <ion-row>\n                                  <ion-col>\n                                    <ion-list>\n                                        <ion-item *ngFor="let track of rfidObject.payload.tracks">\n                                            <ion-thumbnail item-start>\n                                              <div class="overlay">\n                                                <i class="fa fa-plus"></i>\n                                              </div>\n                                              <img [src]="track.thumbnail">\n                                            </ion-thumbnail>\n                                            <h2>{{track.title}}</h2>\n                                            <p>{{track.durationString}}</p>\n                                            <button ion-button color="danger" item-end (click)="removeSongFromList(track.id)">Remove</button>\n                                          </ion-item>\n                                    </ion-list>\n                                  </ion-col>\n                                </ion-row>\n                          </ion-grid>\n                      </ion-col>\n                    </ion-row>\n\n              </ion-grid>\n                  \n                  \n                \n                  \n            </div>\n\n          </div>\n        </div>\n        <!-- end Edit Mode -->\n\n      </ion-content>\n      '/*ion-inline-end:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/rfid/rfid.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__app_core_store_rfid_rfid_service__["a" /* RFIDService */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], RFIDPage);
    return RFIDPage;
}());

//# sourceMappingURL=rfid.js.map

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (pageName) {
        this.navCtrl.setRoot(pageName);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/imayes/Projects/rfid-musicbox-web/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button ion-item (click)="openPage(\'home\')">\n          Playlist\n        </button>\n        <button ion-item (click)="openPage(\'rfid\')">\n          RFID\n        </button>\n        <button ion-item (click)="openPage(\'find-device\')">\n            Find Device\n        </button>\n      </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n<ion-footer no-border>\n    <player-controls></player-controls>\n</ion-footer>'/*ion-inline-end:"/Users/imayes/Projects/rfid-musicbox-web/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtube_youtube_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_rfid_rfid_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_songs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_songs_effects_search_effects__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_rfid__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_rfid_rfid_effects__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_mopidy__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_mopidy_mopidy_effects__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_mopidy_mopidy_service__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('songs', __WEBPACK_IMPORTED_MODULE_6__store_songs__["e" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('rfid', __WEBPACK_IMPORTED_MODULE_8__store_rfid__["e" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('mopidy', __WEBPACK_IMPORTED_MODULE_10__store_mopidy__["b" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_7__store_songs_effects_search_effects__["a" /* SongsSearchEffects */], __WEBPACK_IMPORTED_MODULE_9__store_rfid_rfid_effects__["a" /* RFIDEffects */], __WEBPACK_IMPORTED_MODULE_11__store_mopidy_mopidy_effects__["a" /* MopidyEffects */]])
            ],
            exports: [],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__store_mopidy_mopidy_service__["a" /* MopidyService */],
                __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_5__store_rfid_rfid_service__["a" /* RFIDService */],
                __WEBPACK_IMPORTED_MODULE_2__youtube_youtube_service__["a" /* YoutubeSearchService */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsSearchEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__youtube_youtube_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(22);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SongsSearchEffects = (function () {
    function SongsSearchEffects(actions$, searchService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.searchService = searchService;
        this.store = store;
        this.debounce = 700;
        // Load Effect
        this.load$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["a" /* LOAD */])
            .withLatestFrom(this.store.select(__WEBPACK_IMPORTED_MODULE_6____["b" /* getSearchState */]))
            .map(function (_a) {
            var action = _a[0], store = _a[1];
            // Recreate our params from the state
            return __assign({}, store.params, { offset: store.offset });
        })
            .switchMap(function (params) { return _this.searchYoutube(params, __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["a" /* LOAD */]); })
            .map(function (songs) { return new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["p" /* SearchSuccess */](songs); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["o" /* SearchFail */](err)); });
        // Load Playlist Effect
        this.loadPlaylist$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["f" /* PLAYLIST_LOAD */])
            .map(function (action) { return action.payload; })
            .switchMap(function (playlistId) { return _this.searchService.getPlaylistItems(playlistId); })
            .map(function (songs) { return new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["j" /* PlaylistLoadSuccess */](songs); });
        //  .catch(err => Observable.of(new song.SearchFail(err)));
        // TODO Catch this
        // Search Effect
        this.search$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["k" /* SEARCH */])
            .debounceTime(this.debounce)
            .map(function (action) { return action.payload; })
            .switchMap(function (params) { return _this.searchYoutube(params, __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["a" /* LOAD */]); })
            .map(function (songs) { return new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["p" /* SearchSuccess */](songs); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["o" /* SearchFail */](err)); });
        // Next Page Effect
        this.nextPage$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["b" /* NEXT_PAGE */])
            .debounceTime(2000)
            .withLatestFrom(this.store.select(__WEBPACK_IMPORTED_MODULE_6____["b" /* getSearchState */]))
            .map(function (_a) {
            var action = _a[0], store = _a[1];
            // Recreate our params from the state
            return __assign({}, store.params, { offset: store.offset });
        })
            .switchMap(function (params) { return _this.searchYoutube(params, __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["a" /* LOAD */]); })
            .map(function (songs) { return new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["d" /* NextPageSuccess */](songs); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["o" /* SearchFail */](err)); });
    }
    SongsSearchEffects.prototype.searchYoutube = function (params, action) {
        var _this = this;
        if (!params.query || params.query === '') {
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__["empty"])();
        }
        var nextSearch$ = this.actions$.ofType(action).skip(1);
        return this.searchService
            .search(params.query)
            .takeUntil(nextSearch$)
            .flatMap(function (items) { return _this.searchService.getItemDetails(items); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], SongsSearchEffects.prototype, "load$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], SongsSearchEffects.prototype, "loadPlaylist$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], SongsSearchEffects.prototype, "search$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], SongsSearchEffects.prototype, "nextPage$", void 0);
    SongsSearchEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_8__youtube_youtube_service__["a" /* YoutubeSearchService */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["h" /* Store */]])
    ], SongsSearchEffects);
    return SongsSearchEffects;
}());

//# sourceMappingURL=search.effects.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RFIDEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rfid_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rfid_actions__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8____ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RFIDEffects = (function () {
    function RFIDEffects(actions$, rfidService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.rfidService = rfidService;
        this.store = store;
        /**
         * Listen Effects
         */
        this.modeChanged$ = this.rfidService.rfidModeChanged$
            .switchMap(function (mode) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__rfid_actions__["l" /* ModeChanged */](mode)); });
        this.rfidObjectFound$ = this.rfidService.rfidObjectFound$
            .switchMap(function (obj) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__rfid_actions__["i" /* LoadRFIDObject */](obj)); });
        this.getRFIDObjectsSuccess$ = this.rfidService.getRFIDObjectsSuccess$
            .switchMap(function (rfidObjects) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__rfid_actions__["j" /* LoadSuccess */](rfidObjects)); });
        /**
         * Set Effects
         */
        this.load$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__rfid_actions__["e" /* LOAD */])
            .do(function () { return _this.rfidService.getRFIDObjects(); });
        this.setMode$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__rfid_actions__["p" /* SET_MODE */])
            .map(function (action) { return action.payload; })
            .do(function (mode) { return _this.rfidService.setRFIDMode(mode); });
        this.save$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__rfid_actions__["o" /* SAVE */])
            .withLatestFrom(this.store.select(__WEBPACK_IMPORTED_MODULE_8____["d" /* getSelectedRFIDObject */]))
            .map(function (_a) {
            var action = _a[0], store = _a[1];
            return store;
        })
            .do(function (obj) { return _this.rfidService.saveRFIDTrackList(obj); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], RFIDEffects.prototype, "modeChanged$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], RFIDEffects.prototype, "rfidObjectFound$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], RFIDEffects.prototype, "getRFIDObjectsSuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RFIDEffects.prototype, "load$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RFIDEffects.prototype, "setMode$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RFIDEffects.prototype, "save$", void 0);
    RFIDEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_6__rfid_service__["a" /* RFIDService */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */]])
    ], RFIDEffects);
    return RFIDEffects;
}());

//# sourceMappingURL=rfid.effects.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MopidyEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mopidy_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mopidy_actions__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MopidyEffects = (function () {
    function MopidyEffects(actions$, mopidyService, toastCtrl, store) {
        var _this = this;
        this.actions$ = actions$;
        this.mopidyService = mopidyService;
        this.toastCtrl = toastCtrl;
        this.store = store;
        /**
         * Mopidy Listen Effects
         */
        this.connected$ = this.mopidyService.connected$
            .switchMap(function (status) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["f" /* ConnectionChange */](status)); });
        this.trackListChange$ = this.mopidyService.listen('event:tracklistChanged')
            .flatMap(function () { return _this.mopidyService.getTrackList(); })
            .map(function (tracks) { return new __WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["y" /* TrackListChange */](tracks); });
        this.playbackStarted$ = this.mopidyService.listen('event:trackPlaybackStarted')
            .flatMap(function () { return _this.mopidyService.getCurrentTrack(); })
            .map(function (track) { return new __WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["p" /* PlaybackChange */](track); });
        this.playbackStateChanged$ = this.mopidyService.listen('event:playbackStateChanged')
            .switchMap(function (state) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["q" /* PlaybackStateChange */](state.new_state)); });
        /**
         * Get Effects
         */
        this.initalTracks$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["d" /* CONNECTION_CHANGE */])
            .filter(function (action) { return action.payload === 'online'; })
            .switchMap(function () { return _this.mopidyService.getTrackList(); })
            .map(function (tracks) { return new __WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["y" /* TrackListChange */](tracks); });
        this.initialCurrentTrack$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["d" /* CONNECTION_CHANGE */])
            .filter(function (action) { return action.payload === 'online'; })
            .switchMap(function () { return _this.mopidyService.getCurrentTrack(); })
            .map(function (track) { return new __WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["p" /* PlaybackChange */](track); });
        this.initialPlaybackState$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["d" /* CONNECTION_CHANGE */])
            .filter(function (action) { return action.payload === 'online'; })
            .switchMap(function () { return _this.mopidyService.getPlaybackState(); })
            .map(function (state) { return new __WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["q" /* PlaybackStateChange */](state); });
        /**
         * Set Effects
         */
        this.play$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["i" /* PLAY */])
            .map(function (action) { return action.payload; })
            .do(function (track) { return _this.mopidyService.play(track); });
        this.stop$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["s" /* STOP */])
            .do(function (track) { return _this.mopidyService.stop(); });
        this.clear$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["c" /* CLEAR */])
            .do(function (track) { return _this.mopidyService.clear(); });
        this.next$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["g" /* NEXT_TRACK */])
            .do(function (track) { return _this.mopidyService.next(); });
        this.prev$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["m" /* PREV_TRACK */])
            .do(function (track) { return _this.mopidyService.previous(); });
        this.togglePause$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["u" /* TOGGLE_PAUSE */])
            .do(function (track) { return _this.mopidyService.togglePause(); });
        this.playURIs$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["l" /* PLAY_URIS */])
            .map(function (action) { return action.payload; })
            .do(function (uris) {
            _this.toastCtrl.create({
                message: 'Playing Now...',
                duration: 1000,
                position: 'top'
            }).present();
            _this.mopidyService.playURIs(uris);
        });
        this.addToQueue$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__mopidy_actions__["a" /* ADD_TO_QUEUE */])
            .map(function (action) { return action.payload; })
            .do(function (uris) {
            _this.toastCtrl.create({
                message: 'Adding to Queue.',
                duration: 3000,
                position: 'top'
            }).present();
            _this.mopidyService.addToQueue(uris);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], MopidyEffects.prototype, "connected$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], MopidyEffects.prototype, "trackListChange$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], MopidyEffects.prototype, "playbackStarted$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"])
    ], MopidyEffects.prototype, "playbackStateChanged$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "initalTracks$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "initialCurrentTrack$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "initialPlaybackState$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "play$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "stop$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "clear$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "next$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "prev$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "togglePause$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "playURIs$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], MopidyEffects.prototype, "addToQueue$", void 0);
    MopidyEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_6__mopidy_service__["a" /* MopidyService */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */]])
    ], MopidyEffects);
    return MopidyEffects;
}());

//# sourceMappingURL=mopidy.effects.js.map

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaReducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__);

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

// console.log all actions
function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
// Only activate our dev meta reducers if we're not in production
var metaReducers = !__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production
    ? [logger, __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__["storeFreeze"]]
    : [];
//# sourceMappingURL=app.reducers.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_module__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rfid_rfid_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_device_find_device_module__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__rfid_rfid_module__["RFIDPageModule"],
                __WEBPACK_IMPORTED_MODULE_5__find_device_find_device_module__["FindDevicePageModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_controls_player_controls__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__player_controls_player_controls__["a" /* MopidyPlayerControls */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__player_controls_player_controls__["a" /* MopidyPlayerControls */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MopidyPlayerControls; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_store_mopidy__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_store_mopidy_mopidy_actions__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MopidyPlayerControls = (function () {
    function MopidyPlayerControls(mopidyStore) {
        this.mopidyStore = mopidyStore;
        this.state$ = this.mopidyStore.select(__WEBPACK_IMPORTED_MODULE_2__core_store_mopidy__["a" /* getMopidyState */]);
    }
    MopidyPlayerControls.prototype.stop = function () {
        this.mopidyStore.dispatch(new __WEBPACK_IMPORTED_MODULE_3__core_store_mopidy_mopidy_actions__["t" /* Stop */]());
    };
    MopidyPlayerControls.prototype.prev = function () {
        this.mopidyStore.dispatch(new __WEBPACK_IMPORTED_MODULE_3__core_store_mopidy_mopidy_actions__["r" /* PrevTrack */]());
    };
    MopidyPlayerControls.prototype.togglePause = function () {
        this.mopidyStore.dispatch(new __WEBPACK_IMPORTED_MODULE_3__core_store_mopidy_mopidy_actions__["x" /* TogglePause */]());
    };
    MopidyPlayerControls.prototype.next = function () {
        this.mopidyStore.dispatch(new __WEBPACK_IMPORTED_MODULE_3__core_store_mopidy_mopidy_actions__["h" /* NextTrack */]());
    };
    MopidyPlayerControls = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'player-controls',template:/*ion-inline-start:"/Users/imayes/Projects/rfid-musicbox-web/src/app/shared/player-controls/player-controls.html"*/'<ion-toolbar *ngIf="state$ | async; let state;">\n    <div class="current-track" *ngIf="state.nowPlaying">\n        <p>{{ state.nowPlaying.track.name }}</p>\n    </div>\n    <!-- <button ion-button item-end (click)="prev()">Prev</button> -->\n    <div class="buttons">\n        <button ion-button *ngIf="state.playbackState === \'playing\'" (click)="togglePause()">\n            <ion-icon name="pause"></ion-icon>\n            <label showWhen="core">&nbsp;Pause</label>\n        </button>\n        <button ion-button *ngIf="state.playbackState !== \'playing\'" (click)="togglePause()">\n            <ion-icon name="play"></ion-icon>\n            <label showWhen="core">&nbsp;Play</label>\n        </button>\n        <button ion-button (click)="next()">\n            <ion-icon name="skip-forward"></ion-icon>\n            <label showWhen="core">&nbsp;Next</label>\n        </button>\n    </div>\n    \n</ion-toolbar>\n'/*ion-inline-end:"/Users/imayes/Projects/rfid-musicbox-web/src/app/shared/player-controls/player-controls.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], MopidyPlayerControls);
    return MopidyPlayerControls;
}());

//# sourceMappingURL=player-controls.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reducers; });
/* unused harmony export getRFIDFeatureState */
/* unused harmony export getRFIDState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRFIDObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSelectedRFIDObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDirty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__ = __webpack_require__(700);


;
var reducers = {
    rfid: __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__["e" /* reducer */]
};
/* Selectors */
var getRFIDFeatureState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('rfid');
var getRFIDState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getRFIDFeatureState, function (state) { return state.rfid; });
var getRFIDObjects = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getRFIDState, __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__["c" /* getRFIDObjects */]);
var getSelectedRFIDObject = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getRFIDState, __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__["d" /* getSelectedRFID */]);
var getMode = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getRFIDState, __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__["b" /* getMode */]);
var getDirty = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getRFIDState, __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__["a" /* getDirty */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PLAYLIST_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PLAYLIST_LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PLAYLIST_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SEARCH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NEXT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NEXT_PAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SearchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SearchFail; });
/* unused harmony export Load */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PlaylistLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PlaylistLoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PlaylistClear; });
/* unused harmony export NextPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NextPageSuccess; });
var LOAD = '[Songs] Load';
var PLAYLIST_LOAD = '[Songs] Playlist Load';
var PLAYLIST_LOAD_SUCCESS = '[Songs] Playlist Load Success';
var PLAYLIST_CLEAR = '[Songs] Playlist Clear';
var SEARCH = '[Songs] Search';
var SEARCH_SUCCESS = '[Songs] Search Success';
var SEARCH_FAIL = '[Songs] Search Fail';
var NEXT_PAGE = '[Songs] Load Next Page';
var NEXT_PAGE_SUCCESS = '[Songs] Load Next Page Success';
var Search = (function () {
    function Search(payload) {
        this.payload = payload;
        this.type = SEARCH;
    }
    return Search;
}());

var SearchSuccess = (function () {
    function SearchSuccess(payload) {
        this.payload = payload;
        this.type = SEARCH_SUCCESS;
    }
    return SearchSuccess;
}());

var SearchFail = (function () {
    function SearchFail(payload) {
        this.payload = payload;
        this.type = SEARCH_FAIL;
    }
    return SearchFail;
}());

var Load = (function () {
    function Load() {
        this.type = LOAD;
    }
    return Load;
}());

var PlaylistLoad = (function () {
    function PlaylistLoad(payload) {
        this.payload = payload;
        this.type = PLAYLIST_LOAD;
    }
    return PlaylistLoad;
}());

var PlaylistLoadSuccess = (function () {
    function PlaylistLoadSuccess(payload) {
        this.payload = payload;
        this.type = PLAYLIST_LOAD_SUCCESS;
    }
    return PlaylistLoadSuccess;
}());

var PlaylistClear = (function () {
    function PlaylistClear() {
        this.type = PLAYLIST_CLEAR;
    }
    return PlaylistClear;
}());

var NextPage = (function () {
    function NextPage() {
        this.type = NEXT_PAGE;
    }
    return NextPage;
}());

var NextPageSuccess = (function () {
    function NextPageSuccess(payload) {
        this.payload = payload;
        this.type = NEXT_PAGE_SUCCESS;
    }
    return NextPageSuccess;
}());

//# sourceMappingURL=song.actions.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    youtubeAPIKey: 'AIzaSyB41MomupoaLtgaIkTN-HvtiUyHeF64Y7E',
    socket: {
        server: 'http://' + window.location.hostname + ':3000',
        namespace: 'rfid',
        heartbeatInterval: 5000
    },
    mopidy: {
        server: 'ws://' + window.location.hostname + ':6680/mopidy/ws/'
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[406]);
//# sourceMappingURL=main.js.map