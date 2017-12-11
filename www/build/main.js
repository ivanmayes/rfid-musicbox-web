webpackJsonp([0],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RFIDService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(286);
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
        this.rfidObjectFound$ = this.socketService.listen('rfidFound');
        this.rfidModeChanged$ = this.socketService.listen('rfidModeChanged');
        this.rfidObjectSaved$ = this.socketService.listen('saveRFIDObjectSuccess');
    }
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

/***/ 165:
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
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducers; });
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
/* unused harmony export getSearchError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSearchResults; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_song_reducer__ = __webpack_require__(727);



;
;
var reducers = {
    songs: __WEBPACK_IMPORTED_MODULE_2__reducers_song_reducer__["b" /* reducer */],
    search: __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__["e" /* reducer */]
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
var getSearchError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSearchState, __WEBPACK_IMPORTED_MODULE_1__reducers_search_reducer__["a" /* getError */]);
var getSearchResults = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSongsEntities, getSearchEntriesIds, function (entries, searchIds) {
    return searchIds.map(function (id) { return entries[id]; });
});
var _a;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 234:
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
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid_rfid_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_core_store_rfid_rfid_actions__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_modal_modal_controller__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search__ = __webpack_require__(300);
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
    function HomePage(navCtrl, toastCtrl, rfidService, rfidStore, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.rfidService = rfidService;
        this.rfidStore = rfidStore;
        this.modalCtrl = modalCtrl;
        this.saveToast = this.toastCtrl.create({
            message: 'RFID Object Saved Successfully!',
            duration: 3000,
            position: 'top'
        });
        this.searchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__search_search__["a" /* SearchPage */]);
        this.rfidObjectFound$ = this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid__["c" /* getSelectedRFIDObject */]);
        this.rfidMode$ = this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid__["b" /* getMode */]);
        this.rfidObjectIsDirty$ = this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid__["a" /* getDirty */]);
        this.rfidService.rfidObjectSaved$
            .subscribe(function () {
            _this.saveToast.present();
        });
    }
    HomePage.prototype.ionViewDidEnter = function () { };
    HomePage.prototype.ngOnDestroy = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_7__app_core_store_rfid_rfid_actions__["l" /* SetMode */]('get'));
    };
    HomePage.prototype.addSongs = function () {
        this.searchModal.present();
    };
    HomePage.prototype.removeSongFromList = function (id) {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_7__app_core_store_rfid_rfid_actions__["h" /* RemoveSong */](id));
    };
    HomePage.prototype.setRFIDMode = function (mode) {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_7__app_core_store_rfid_rfid_actions__["l" /* SetMode */](mode));
    };
    HomePage.prototype.saveRFIDTrackList = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_7__app_core_store_rfid_rfid_actions__["k" /* Save */]());
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      RFID Configurator\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="(rfidMode$ | async) === \'get\'">\n    <button ion-button (click)="setRFIDMode(\'set\')">Turn on \'Edit\' Mode</button>\n  </div>\n  <div *ngIf="(rfidMode$ | async) === \'set\'">\n    <button ion-button small color="light" icon-left (click)="setRFIDMode(\'get\')">\n        <ion-icon name="arrow-back"></ion-icon>\n        I\'m Finished\n    </button>\n\n    <button [disabled]="!(rfidObjectIsDirty$ | async)" ion-button small (click)="saveRFIDTrackList()" *ngIf="rfidObjectFound$ | async">\n        Save To RFID\n    </button>\n\n    <button ion-button small (click)="addSongs()" *ngIf="rfidObjectFound$ | async">\n        Add Songs to Tracklist\n    </button>\n\n    <br>\n    <br>\n\n    <div *ngIf="!(rfidObjectFound$ | async)?.id">\n      Waiting for an RFID card to scan...\n    </div>\n\n    <div *ngIf="rfidObjectFound$ | async; let rfidObject;">\n\n      <h2>RFID Found: {{ rfidObject.id }}</h2>\n\n      <div class="tracklist" *ngIf="rfidObject.payload">\n        <ion-list>\n            <h4>Track List:</h4>\n            <ion-item *ngFor="let track of rfidObject.payload.tracks">\n              <ion-thumbnail item-start>\n                <div class="overlay">\n                  <i class="fa fa-plus"></i>\n                </div>\n                <img [src]="track.thumbnail">\n              </ion-thumbnail>\n              <h2>{{track.title}}</h2>\n              <p>{{track.durationString}}</p>\n              <button ion-button color="danger" item-end (click)="removeSongFromList(track.id)">Remove</button>\n            </ion-item>\n        </ion-list>\n      </div>\n\n      <p>{{ rfidObject | json }}</p>\n\n    </div>\n    \n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid_rfid_service__["a" /* RFIDService */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(165);
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

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_core_store_rfid_rfid_actions__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_core_store_songs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_core_store_songs_actions_song_actions__ = __webpack_require__(97);
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
    function SearchPage(navCtrl, toastCtrl, rfidStore, songStore) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.rfidStore = rfidStore;
        this.songStore = songStore;
        this.addSong = this.toastCtrl.create({
            message: 'Song Added Successfully!',
            duration: 2000,
            position: 'top'
        });
        this.searchResults$ = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].combineLatest(this.songStore.select(__WEBPACK_IMPORTED_MODULE_8__app_core_store_songs__["a" /* getSearchResults */]), this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid__["c" /* getSelectedRFIDObject */])).map(function (_a) {
            var results = _a[0], tracklist = _a[1];
            // Find any results that are already in our tracklist
            return results.map(function (result) {
                if (tracklist.payload && tracklist.payload.tracks) {
                    for (var i = 0; i < tracklist.payload.tracks.length; i++) {
                        if (result.id === tracklist.payload.tracks[i].id) {
                            result = Object.assign({}, result, { added: true });
                        }
                    }
                }
                return result;
            });
        });
        this.searchState$ = this.songStore.select(__WEBPACK_IMPORTED_MODULE_8__app_core_store_songs__["b" /* getSearchState */]);
    }
    SearchPage.prototype.ionViewDidEnter = function () { };
    SearchPage.prototype.search = function (query) {
        console.log(query);
        if (query.target) {
            this.songStore.dispatch(new __WEBPACK_IMPORTED_MODULE_9__app_core_store_songs_actions_song_actions__["h" /* Search */]({
                query: query.target.value,
                type: undefined
            }));
        }
    };
    SearchPage.prototype.addSongToList = function (song) {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_7__app_core_store_rfid_rfid_actions__["b" /* AddSong */](song));
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/search/search.html"*/'<ion-content padding>\n    <ion-grid class="search">\n            \n        <ion-row>\n            <ion-col>\n                <h4>Search Youtube for videos to add to this card:</h4>\n                <ion-searchbar placeholder="Search Youtube videos" (ionInput)="search($event)"></ion-searchbar>\n            </ion-col>\n        </ion-row>\n    \n        <ion-row class="search-results">\n            <ion-col>\n                <p *ngIf="(searchState$ | async)?.loading">\n                    <ion-spinner name="dots"></ion-spinner>\n                </p>\n    \n                <ion-list *ngIf="searchResults$ | async; let results;">\n                    <ion-item *ngFor="let result of results;">\n                    <ion-thumbnail item-start>\n                        <div class="overlay">\n                        <i class="fa fa-plus"></i>\n                        </div>\n                        <img [src]="result.thumbnail">\n                    </ion-thumbnail>\n                    <h2>{{result.title}}</h2>\n                    <p>{{result.durationString}}</p>\n                    <button *ngIf="!result.added" ion-button item-end (click)="addSongToList(result)">Add</button>\n                    <button *ngIf="result.added" disabled ion-button color="light" item-end>Already Added</button>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    \n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(165);
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
                    id: item.id.videoId,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.high.url,
                    type: 'youtube-video'
                };
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
    YoutubeSearchService.prototype.getPlaylistInfo = function (playlists) {
        var _this = this;
        // If the first result contains support, remove it?
        if (playlists[0] && playlists[0].snippet.title == 'https://youtube.com/devicesupport') {
            playlists.splice(0, 1);
        }
        var ids = playlists.map(function (i) {
            return i.id.playlistId;
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
            var songs = playlists.map(function (item) {
                var song = {
                    id: item.id.videoId,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.high.url,
                    type: 'youtube-video'
                };
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

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(399);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_reducers__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(300);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["i" /* StoreModule */].forRoot([], { metaReducers: __WEBPACK_IMPORTED_MODULE_12__app_reducers__["a" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25 //  Retains last 25 states
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(280);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/imayes/Projects/rfid-musicbox-web/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/imayes/Projects/rfid-musicbox-web/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDirty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSelectedRFID; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rfid_actions__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rfid_model__ = __webpack_require__(469);
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
    selectedRFID: undefined
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["c" /* LOAD_RFID_OBJECT */]: {
            // Check to see if the card payload is empty, fill in if it is
            var rfid_1 = action.payload;
            if (!rfid_1.payload) {
                rfid_1.payload = __WEBPACK_IMPORTED_MODULE_1__rfid_model__["a" /* RFIDTrackListInitialState */];
            }
            return __assign({}, state, { dirty: false, selectedRFID: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["e" /* MODE_CHANGED */]: {
            return __assign({}, state, { mode: action.payload });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["a" /* ADD_SONG */]: {
            // Long way to say add a track to that array
            return __assign({}, state, { dirty: true, selectedRFID: __assign({}, state.selectedRFID, { payload: __assign({}, state.selectedRFID.payload, { tracks: state.selectedRFID.payload.tracks.concat(action.payload) }) }) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__rfid_actions__["g" /* REMOVE_SONG */]: {
            // Long way to say remove a track from that array
            return __assign({}, state, { dirty: true, selectedRFID: __assign({}, state.selectedRFID, { payload: __assign({}, state.selectedRFID.payload, { tracks: state.selectedRFID.payload.tracks.filter(function (track) { return track.id !== action.payload; }) }) }) });
        }
        default:
            return state;
    }
}
var getMode = function (state) { return state.mode; };
var getDirty = function (state) { return state.dirty; };
var getSelectedRFID = function (state) { return state.selectedRFID; };
//# sourceMappingURL=rfid.reducer.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RFIDTrackListInitialState; });
var RFIDTrackListInitialState = {
    shuffle: false,
    tracks: []
};
//# sourceMappingURL=rfid.model.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__ = __webpack_require__(97);
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
    offset: 0
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["a" /* LOAD */]: {
            return initialState;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["e" /* SEARCH */]: {
            var params = action.payload;
            if (action.payload.query.length < 1) {
                return state;
            }
            return __assign({}, state, { loading: true, ids: [], error: '', params: params, offset: 0, limit: 20, canLoadMore: false });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["g" /* SEARCH_SUCCESS */]: {
            return __assign({}, state, { ids: action.payload.map(function (entries) { return entries.id; }), loading: false, error: '', params: state.params, canLoadMore: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_song_actions__["f" /* SEARCH_FAIL */]: {
            return __assign({}, state, { loading: false, error: action.payload });
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
var getError = function (state) { return state.error; };
//# sourceMappingURL=search.reducer.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adapter; });
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_entity__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_song_actions__ = __webpack_require__(97);


var adapter = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_entity__["a" /* createEntityAdapter */])({
    selectId: function (song) { return song.id; },
    sortComparer: false
});
var initialState = adapter.getInitialState();
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_song_actions__["g" /* SEARCH_SUCCESS */]: {
            return adapter.addMany(action.payload, state);
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=song.reducer.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtube_youtube_service__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_rfid_rfid_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_songs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_songs_effects_search_effects__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_rfid__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_rfid_rfid_effects__ = __webpack_require__(731);
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
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('songs', __WEBPACK_IMPORTED_MODULE_6__store_songs__["c" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('rfid', __WEBPACK_IMPORTED_MODULE_8__store_rfid__["d" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_7__store_songs_effects_search_effects__["a" /* SongsSearchEffects */], __WEBPACK_IMPORTED_MODULE_9__store_rfid_rfid_effects__["a" /* RFIDEffects */]])
            ],
            exports: [],
            declarations: [],
            providers: [
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

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsSearchEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__youtube_youtube_service__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(26);
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
            .map(function (songs) { return new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["j" /* SearchSuccess */](songs); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["i" /* SearchFail */](err)); });
        // Search Effect
        this.search$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["e" /* SEARCH */])
            .debounceTime(this.debounce)
            .map(function (action) { return action.payload; })
            .switchMap(function (params) { return _this.searchYoutube(params, __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["a" /* LOAD */]); })
            .map(function (songs) { return new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["j" /* SearchSuccess */](songs); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["i" /* SearchFail */](err)); });
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
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_song_actions__["i" /* SearchFail */](err)); });
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

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RFIDEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rfid_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rfid_actions__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8____ = __webpack_require__(89);
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
            .switchMap(function (mode) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__rfid_actions__["f" /* ModeChanged */](mode));
        });
        this.rfidObjectFound$ = this.rfidService.rfidObjectFound$
            .switchMap(function (obj) {
            console.log('Found Object');
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__rfid_actions__["d" /* LoadRFIDObject */](obj));
        });
        /**
         * Set Effects
         */
        this.setMode$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__rfid_actions__["j" /* SET_MODE */])
            .map(function (action) { return action.payload; })
            .do(function (mode) { return _this.rfidService.setRFIDMode(mode); });
        this.save$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__rfid_actions__["i" /* SAVE */])
            .withLatestFrom(this.store.select(__WEBPACK_IMPORTED_MODULE_8____["c" /* getSelectedRFIDObject */]))
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

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaReducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__ = __webpack_require__(734);
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reducers; });
/* unused harmony export getRFIDFeatureState */
/* unused harmony export getRFIDState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSelectedRFIDObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDirty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__ = __webpack_require__(468);


;
var reducers = {
    rfid: __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__["d" /* reducer */]
};
/* Selectors */
var getRFIDFeatureState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('rfid');
var getRFIDState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getRFIDFeatureState, function (state) { return state.rfid; });
var getSelectedRFIDObject = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getRFIDState, __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__["c" /* getSelectedRFID */]);
var getMode = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getRFIDState, __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__["b" /* getMode */]);
var getDirty = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getRFIDState, __WEBPACK_IMPORTED_MODULE_1__rfid_reducer__["a" /* getDirty */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_RFID_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MODE_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_SONG; });
/* unused harmony export CLEAR_LIST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadRFIDObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SetMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ModeChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RemoveSong; });
/* unused harmony export ClearList */
var LOAD_RFID_OBJECT = '[RFID] Load';
var SET_MODE = '[RFID] Set Mode';
var MODE_CHANGED = '[RFID] Mode Changed';
var SAVE = '[RFID] Save';
var ADD_SONG = '[RFID] Add Song';
var REMOVE_SONG = '[RFID] Remove Song';
var CLEAR_LIST = '[RFID] Clear List';
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

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SEARCH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NEXT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NEXT_PAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SearchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SearchFail; });
/* unused harmony export Load */
/* unused harmony export NextPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NextPageSuccess; });
var LOAD = '[Songs] Load';
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

/***/ })

},[394]);
//# sourceMappingURL=main.js.map