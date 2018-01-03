import { NgModule } from "@angular/core";
import { RFIDPage } from "./rfid";
import { IonicPageModule } from "ionic-angular";


@NgModule({
    declarations: [
      RFIDPage
    ],
    imports: [
      IonicPageModule.forChild(RFIDPage)
    ],
    entryComponents: [
      RFIDPage
    ]
})
export class RFIDPageModule {}