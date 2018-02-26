import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
