import { NgModule } from "@angular/core";
import { MopidyPlayerControls } from "./player-controls/player-controls";
import { IonicModule } from "ionic-angular";


@NgModule({
    declarations: [
        MopidyPlayerControls
    ],
    imports: [
      IonicModule
    ],
    exports: [
        MopidyPlayerControls
    ]
})
export class SharedModule {}