import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QuestionsReaderService {

  constructor(private http: HttpClient) {

  }

  public getQuestions(category): Observable<any> {
    switch (category) {
      case 'Biology':
        return this.http.get('./assets/biology-questions.json');
      case 'History':
        return this.http.get('./assets/history-questions.json');
      case 'Geography':
        return this.http.get('./assets/geography-questions.json');

    }
  }
}
