import { NgModule } from "@angular/core";
import { IonicModule, IonicPageModule } from "ionic-angular";
import { HomePageModule } from './home/home.module';
import { SearchPage } from "./search/search";
import { RFIDPageModule } from "./rfid/rfid.module";
import { FindDevicePageModule } from "./find-device/find-device.module";


@NgModule({
    imports: [
        IonicModule,
        HomePageModule,
        RFIDPageModule,
        FindDevicePageModule
    ],
    declarations: [
        SearchPage
    ],
    entryComponents: [
        SearchPage
    ]
  })
  export class PagesModule {}