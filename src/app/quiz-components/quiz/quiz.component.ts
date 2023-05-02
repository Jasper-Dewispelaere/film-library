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
  correctAnswer: any;
  correct: boolean = false;
  wrong: boolean = false;
  questionAnswered: boolean = false;
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
    this.wrong = false;
    this.correct = false;
    this.questionAnswered = false;
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
      this.wrong = true;
      this.questionAnswered = true;

      for (let i = 0; i < 4; i++) {
        if (this.question.answers[i].isRightAnswer == true) {
          this.correctAnswer = this.question.answers[i];
        }
      }
    }
    else {
      this.score++;
      this.correct = true;
      this.questionAnswered = true;
    }
  }

  checkProgress(): void {
    this.questionAnswered = false;
    this.progress++;
    if (this.progress == 6) {
      this.quizended = true;
      this.wrong = false;
      this.correct = false;
    }
    else {
      this.wrong = false;
      this.correct = false;
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
