import {Component, OnInit} from '@angular/core';
import {QuestionsReaderService} from '../questions-reader.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  levels = [
    {
      id: 1,
      description: 'EASY'
    },
    {
      id: 2,
      description: 'MEDIUM'
    },
    {
      id: 3,
      description: 'HARD'
    }
  ];

  categories = [
    {
      id: 1,
      description: 'History',
      selected: true
    },
    {
      id: 2,
      description: 'Biology',
      selected: true
    },
    {
      id: 3,
      description: 'Geography',
      selected: true
    }
  ];

  selectedLevel: string;

  questions = [];

  constructor(private reader: QuestionsReaderService) {
  }

  ngOnInit() {
    this.selectedLevel = 'EASY';
  }

  onLevelSelectionChange(level) {
    this.selectedLevel = level.description;
  }

  startQuiz() {
    this.getAllQuestions();
    console.log(this.questions);
  }

  getAllQuestions() {
    this.categories
      .filter(category => category.selected)
      .forEach(category => this.reader.getQuestions(category.description).subscribe(data => {
        this.questions.push(data.questions.filter(question => question.level === this.selectedLevel));
      }));
  }
}
