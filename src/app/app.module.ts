import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import {AppComponent} from './app.component';
import {SetupComponent} from './setup/setup.component';
import {QuestionsReaderService} from './questions-reader.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {QuizComponent} from './quiz/quiz.component';
import {DataService} from './data.service';
import {QuestionsResolverGuard} from './questions-resolver.guard';
import {CountdownTimerModule} from 'ngx-countdown-timer';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SetupComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountdownTimerModule.forRoot()
  ],
  providers: [QuestionsReaderService, HttpClient, DataService, QuestionsResolverGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
