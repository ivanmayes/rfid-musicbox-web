import { NgModule } from "@angular/core";
import { IonicModule, IonicPageModule } from "ionic-angular";
import { HomePageModule } from './home/home.module';
import { SearchPage } from "./search/search";
import { RFIDPageModule } from "./rfid/rfid.module";


@NgModule({
    imports: [
        IonicModule,
        HomePageModule,
        RFIDPageModule
    ],
    declarations: [
        SearchPage
    ],
    entryComponents: [
        SearchPage
    ]
  })
  export class PagesModule {}