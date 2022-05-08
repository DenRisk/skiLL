import {NgModule} from "@angular/core";
import {CssPageModule} from "./pages/css-page/css-page.module";
import {HeaderModule} from "./header/header.module";
import {HomePageModule} from "./pages/home-page/home-page.module";
import {HtmlPageModule} from "./pages/html-page/html-page.module";
import {JsPageModule} from "./pages/javascript-page/js-page.module";
import {TsPageModule} from "./pages/typescript-page/ts-page.module";

@NgModule({
  imports: [
    HeaderModule,
    HomePageModule,
    HtmlPageModule,
    CssPageModule,
    JsPageModule,
    TsPageModule
  ],
})
export class ComponentsModule {
}
