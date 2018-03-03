import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = [];
  correctAnswers = 0;
  currentQuestion;
  idx = 0;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.questions = this.route.snapshot.data['quiz'];
  }

  getNextQuestion() {
    this.questions = this.flatterQuestions(this.questions);
    console.log(this.questions);
    this.currentQuestion = this.questions[this.idx++];
  }

  finishQuiz() {
    this.questions.forEach(q => {
      if (q.choices.find(c => c.isCorrect).selected) {
        this.correctAnswers++;
      }
    });
    alert('You answered ' + this.correctAnswers + ' correctly !');
  }

  private flatterQuestions(data: any[]): any[] {
    // transform an array of arrays in a plain array
    return [].concat.apply([], data);
  }

}
