import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  levels = [
    {
      id: 1,
      description: 'Easy'
    },
    {
      id: 2,
      description: 'Medium'
    },
    {
      id: 3,
      description: 'Hard'
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

  selectedLevel = this.levels[0];

  constructor() {
  }

  ngOnInit() {
  }

  onLevelSelectionChange(level) {
    this.selectedLevel = Object.assign({}, this.selectedLevel, level);
  }

  startQuiz() {

  }

  generateQuestions() {

  }
}
