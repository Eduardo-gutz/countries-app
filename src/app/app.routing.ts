import { RouterModule, Routes } from "@angular/router";
import { DetailCountryComponent } from "./detail-country/detail-country.component";
import { HomeComponent } from "./home/home.component";

const appRoutes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'country/:code', component: DetailCountryComponent, pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'});