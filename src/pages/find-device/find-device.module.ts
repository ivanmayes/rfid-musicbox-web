import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FindDevicePage } from "./find-device";


@NgModule({
    declarations: [
      FindDevicePage
    ],
    imports: [
      IonicPageModule.forChild(FindDevicePage)
    ],
    entryComponents: [
      FindDevicePage
    ]
})
export class FindDevicePageModule {}