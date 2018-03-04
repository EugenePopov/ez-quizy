import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import * as shuffle from 'shuffle-array';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = [];
  correctAnswers = 0;
  currentQuestion;
  finished = false;
  idx = 0;
  quizTime;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.questions = this.route.snapshot.data['quiz'];
  }

  start() {
    this.questions = shuffle(this.flatterQuestions(this.questions));
    this.currentQuestion = this.questions[this.idx++];
    this.getQuizTime();
  }

  getNextQuestion() {
    this.currentQuestion = this.questions[this.idx++];
    console.log(this.quizTime);

  }

  finishQuiz() {
    this.finished = true;
    this.questions.forEach(q => {
      if (q.choices.find(c => c.isCorrect).selected) {
        this.correctAnswers++;
      }
    });
  }

  private flatterQuestions(data: any[]): any[] {
    // transform an array of arrays in a plain array
    return [].concat.apply([], data);
  }

  private computePercentage(): string {
    return ((this.correctAnswers / this.questions.length) * 100).toFixed(2);
  }

  getQuizTime() {
    const level = this.questions[0].level;

    switch (level) {
      case 'EASY':
        this.quizTime = moment().add(10, 'minutes').toISOString();
        break;
      case 'MEDIUM':
        this.quizTime = moment().add(7, 'minutes').toISOString();
        break;
      case 'HARD':
        this.quizTime = moment().add(1, 'minutes').toISOString();
        break;
    }
  }
}
