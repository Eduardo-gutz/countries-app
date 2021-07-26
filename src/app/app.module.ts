import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { InputComponent } from './input/input.component';
import { FilterComponent } from './filter/filter.component';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { DetailCountryComponent } from './detail-country/detail-country.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    InputComponent,
    FilterComponent,
    CountryComponent,
    HomeComponent,
    DetailCountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
