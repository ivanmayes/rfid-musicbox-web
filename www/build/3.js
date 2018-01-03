webpackJsonp([3],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RFIDPageModule", function() { return RFIDPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rfid__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
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

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RFIDPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_store_rfid_rfid_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(302);
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
    function RFIDPage(navCtrl, toastCtrl, rfidService, rfidStore, modalCtrl, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.rfidService = rfidService;
        this.rfidStore = rfidStore;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.saveToast = this.toastCtrl.create({
            message: 'RFID Object Saved Successfully!',
            duration: 3000,
            position: 'top'
        });
        this.searchModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
        menuCtrl.enable(true);
        this.rfidObjectFound$ = this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid__["c" /* getSelectedRFIDObject */]);
        this.rfidMode$ = this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid__["b" /* getMode */]);
        this.rfidObjectIsDirty$ = this.rfidStore.select(__WEBPACK_IMPORTED_MODULE_5__app_core_store_rfid__["a" /* getDirty */]);
        this.rfidService.rfidObjectSaved$
            .subscribe(function () {
            _this.saveToast.present();
        });
    }
    RFIDPage.prototype.ionViewDidEnter = function () { };
    RFIDPage.prototype.ngOnDestroy = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["o" /* SetMode */]('get'));
    };
    RFIDPage.prototype.addSongs = function () {
        this.searchModal.present();
    };
    RFIDPage.prototype.removeSongFromList = function (id) {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["k" /* RemoveSong */](id));
    };
    RFIDPage.prototype.setRFIDMode = function (mode) {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["o" /* SetMode */](mode));
    };
    RFIDPage.prototype.saveRFIDTrackList = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["n" /* Save */]());
    };
    RFIDPage.prototype.clearTrackList = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["d" /* ClearList */]());
    };
    RFIDPage.prototype.toggleShuffle = function () {
        console.log('Shuffled!');
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["s" /* ToggleShuffle */]());
    };
    RFIDPage.prototype.toggleLoop = function () {
        this.rfidStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_core_store_rfid_rfid_actions__["r" /* ToggleLoop */]());
    };
    RFIDPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rfid',template:/*ion-inline-start:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/rfid/rfid.html"*/'<ion-header>\n        <ion-navbar>\n          <button ion-button menuToggle icon-only>\n            <ion-icon name=\'menu\'></ion-icon>\n          </button>\n          <ion-title>\n            RFID Configurator\n          </ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content padding>\n        <div *ngIf="(rfidMode$ | async) === \'get\'">\n          <button ion-button (click)="setRFIDMode(\'set\')">Turn on \'Edit\' Mode</button>\n        </div>\n        <div *ngIf="(rfidMode$ | async) === \'set\'">\n          <button ion-button small color="light" icon-left (click)="setRFIDMode(\'get\')">\n              <ion-icon name="arrow-back"></ion-icon>\n              I\'m Finished\n          </button>\n      \n          <button [disabled]="!(rfidObjectIsDirty$ | async)" ion-button small (click)="saveRFIDTrackList()" *ngIf="rfidObjectFound$ | async">\n              Save To RFID\n          </button>\n      \n          <button ion-button small (click)="addSongs()" *ngIf="rfidObjectFound$ | async">\n              Add Songs to Tracklist\n          </button>\n      \n          <br>\n          <br>\n      \n          <div *ngIf="!(rfidObjectFound$ | async)?.id">\n            Waiting for an RFID card to scan...\n          </div>\n      \n          <div *ngIf="rfidObjectFound$ | async; let rfidObject;">\n      \n            <h2>RFID ID: {{ rfidObject.id }}</h2>\n      \n            <div class="tracklist" *ngIf="rfidObject.payload">\n              <ion-list>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col>\n                          <h4>Settings:</h4>\n                      </ion-col>\n                    </ion-row>\n      \n                    <ion-row>\n                      <ion-col col-12>\n                          <ion-list>\n                              <ion-item>\n                                  <ion-label>Shuffle</ion-label>\n                                  <ion-toggle [ngModel]="rfidObject.payload.shuffle" (ngModelChange)="toggleShuffle()"></ion-toggle>\n                              </ion-item>\n                              <ion-item>\n                                  <ion-label>Loop</ion-label>\n                                  <ion-toggle [ngModel]="rfidObject.payload.loop" (ngModelChange)="toggleLoop()"></ion-toggle>\n                              </ion-item>\n                          </ion-list>\n                      </ion-col>\n                    </ion-row>\n      \n                    <ion-row>\n                      <ion-col>\n                        <h4>Track List:</h4>\n                      </ion-col>\n                      <ion-col text-right>\n                          <button ion-button small item-end color="danger" (click)="clearTrackList()">\n                              Clear List\n                          </button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                  \n                  \n      \n                  <ion-item *ngFor="let track of rfidObject.payload.tracks">\n                    <ion-thumbnail item-start>\n                      <div class="overlay">\n                        <i class="fa fa-plus"></i>\n                      </div>\n                      <img [src]="track.thumbnail">\n                    </ion-thumbnail>\n                    <h2>{{track.title}}</h2>\n                    <p>{{track.durationString}}</p>\n                    <button ion-button color="danger" item-end (click)="removeSongFromList(track.id)">Remove</button>\n                  </ion-item>\n              </ion-list>\n            </div>\n      \n            <!-- <p>{{ rfidObject | json }}</p> -->\n      \n          </div>\n          \n      \n        </div>\n      </ion-content>\n      '/*ion-inline-end:"/Users/imayes/Projects/rfid-musicbox-web/src/pages/rfid/rfid.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_core_store_rfid_rfid_service__["a" /* RFIDService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_core_store_rfid_rfid_service__["a" /* RFIDService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _f || Object])
    ], RFIDPage);
    return RFIDPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=rfid.js.map

/***/ })

});
//# sourceMappingURL=3.js.map