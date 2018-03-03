import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private questionsSource = new BehaviorSubject<any[]>([]);
  currentQuestions = this.questionsSource.asObservable();

  constructor() { }

  passQuestions(questions: any[]) {
    this.questionsSource.next(questions);
  }

}
