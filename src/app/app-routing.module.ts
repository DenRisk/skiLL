import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CssPageComponent} from "./components/pages/css-page/css-page.component";
import {HtmlPageComponent} from "./components/pages/html-page/html-page.component";
import {HomePageComponent} from "./components/pages/home-page/home-page.component";
import {JsPageComponent} from "./components/pages/javascript-page/js-page.component";
import {TsPageComponent} from "./components/pages/typescript-page/ts-page.component";

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'html', component: HtmlPageComponent },
  { path: 'css', component: CssPageComponent },
  { path: 'javascript', component: JsPageComponent },
  { path: 'typescript', component: TsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
