import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SetupComponent} from './setup/setup.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuestionsResolverGuard} from './questions-resolver.guard';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'setup', component: SetupComponent},
  {
    path: 'quiz', component: QuizComponent, resolve: {
      quiz: QuestionsResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [WelcomeComponent];
