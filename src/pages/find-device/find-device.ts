import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Zeroconf } from '@ionic-native/zeroconf';

@IonicPage({
  name: 'find-device'
})
@Component({
  selector: 'page-find-device',
  templateUrl: 'find-device.html'
})
export class FindDevicePage {

  constructor(
    public navCtrl: NavController,
    private zeroconf: Zeroconf
  ) {
  }

  ionViewDidEnter() {

    console.log('Watching for services to connect to');
    this.zeroconf.getHostname()
      .then((hostname) => console.log('My Name is', hostname));

     // watch for services of a specified type
    this.zeroconf.watch('_http._tcp.', 'local.').subscribe(result => {
      if (result.action == 'added') {
        console.log('service added', result.service);
      } else {
        console.log('service removed', result.service);
      }
    });
  }

 

}
