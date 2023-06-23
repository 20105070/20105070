/*app.module.ts - Daniel Syrén (20105070)*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';

const appRoute: Routes = [
  { path: '', component: CountryComponent },
  { path: 'Country', component: CountryComponent },
  { path: 'City', component: CityComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
