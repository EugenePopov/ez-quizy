import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SetupComponent} from './setup/setup.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'setup', component: SetupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [WelcomeComponent];
