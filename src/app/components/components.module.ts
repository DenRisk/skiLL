import {NgModule} from "@angular/core";
import {HeaderModule} from "./header/header.module";
import { SplashStageComponent } from './splashstage/splash-stage.component';

@NgModule({
    imports: [
        HeaderModule
    ],
    exports: [
        SplashStageComponent
    ],
    declarations: [
        SplashStageComponent
    ]
})
export class ComponentsModule {}
