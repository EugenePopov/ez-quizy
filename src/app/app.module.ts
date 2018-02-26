import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import {QuestionsReaderService} from './questions-reader.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuestionsReaderService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
