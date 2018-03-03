import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {DataService} from './data.service';

@Injectable()
export class QuestionsResolverGuard implements Resolve<any[]> {

  private questions;

  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    this.dataService.currentQuestions.subscribe(data => this.questions = data);
    return this.questions;
  }
}
