import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';
import { QuizQuestion } from '../quizQuestion';
import { Answer } from '../answer';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  quizstarted: boolean = false;
  quizended: boolean = false;
  score: number = 0;
  progress: number = 1;
  question: any;
  previousQuestions: number[] = [];

  constructor(private quizService: QuizService) { }

  startQuiz(): void {
    this.quizstarted = true;
    this.showNextQuestion();
  }

  stopQuiz(): void {
    this.quizstarted = false;
    this.question = null;
    this.progress = 1;
    this.previousQuestions.splice(0);
    this.score = 0;
  }

  showNextQuestion(): void {
    this.question = this.quizService.GetQuestion();
    if (this.previousQuestions.includes(this.question.id)) {
      this.showNextQuestion();
    }
    else {
      this.previousQuestions.push(this.question.id);
    }
  }

  checkAnswer(answer: any): void {
    if (answer.isRightAnswer == false) {
      this.progress++;
      this.checkProgress();
    }
    else {
      this.score++;
      this.progress++;
      this.checkProgress();
    }
  }

  checkProgress(): void {
    if (this.progress == 6) {
      this.quizended = true;
    }
    else {
      this.showNextQuestion();
    }
  }

  playAgain(): void {
    this.progress = 1;
    this.score = 0;
    this.question = null;
    this.quizended = false;
    this.quizstarted = true;
    this.previousQuestions.splice(0);
    this.showNextQuestion();
  }
}
