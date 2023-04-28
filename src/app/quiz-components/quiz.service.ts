import { Injectable } from "@angular/core";
import { QuizQuestion } from "./quizQuestion";
import { Answer } from "./answer";

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    questions: QuizQuestion[] = [];

    getQuestions() {
        this.questions = [
            {
                id: 1, question: 'In what year did "Saving Private Ryan" release?', answers: [
                    { id: 1, possibleAnswer: '1996', isRightAnswer: false },
                    { id: 2, possibleAnswer: '1998', isRightAnswer: true },
                    { id: 3, possibleAnswer: '1999', isRightAnswer: false },
                    { id: 4, possibleAnswer: '2000', isRightAnswer: false }
                ]
            },
            {
                id: 2, question: 'Who directed "The Lord of the Rings: The Fellowship of the Ring"?', answers: [
                    { id: 1, possibleAnswer: 'Peter Jackson', isRightAnswer: true },
                    { id: 2, possibleAnswer: 'Peter Burgis', isRightAnswer: false },
                    { id: 3, possibleAnswer: 'James Cameron', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Ian McKellen', isRightAnswer: false }
                ]
            },
            {
                id: 3, question: 'Which film was directed by "Steven Spielberg"?', answers: [
                    { id: 1, possibleAnswer: 'Avatar', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'Forrest Gump', isRightAnswer: false },
                    { id: 3, possibleAnswer: 'E.T.', isRightAnswer: true },
                    { id: 4, possibleAnswer: 'The Truman Show', isRightAnswer: false }
                ]
            },
            {
                id: 4, question: 'In which film did "Leonardo DiCaprio" NOT appear?', answers: [
                    { id: 1, possibleAnswer: 'Django Unchained', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'The Wolf of Wall Street', isRightAnswer: false },
                    { id: 3, possibleAnswer: 'The Great Gatsby', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Inglourious Basterds', isRightAnswer: true }
                ]
            },
            {
                id: 5, question: 'Who played Batman in "The Batman (2022)"?', answers: [
                    { id: 1, possibleAnswer: 'Christian Bale', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'Robert Pattinson', isRightAnswer: true },
                    { id: 3, possibleAnswer: 'Michael Keaton', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Ben Affleck', isRightAnswer: false }
                ]
            },
            /*
            {
                id: 6, question: '', answers: [
                    { id: 1, possibleAnswer: '', isRightAnswer: false },
                    { id: 2, possibleAnswer: '', isRightAnswer: true },
                    { id: 3, possibleAnswer: '', isRightAnswer: false },
                    { id: 4, possibleAnswer: '', isRightAnswer: false }
                ]
            },
            {
                id: 7, question: '', answers: [
                    { id: 1, possibleAnswer: '', isRightAnswer: false },
                    { id: 2, possibleAnswer: '', isRightAnswer: true },
                    { id: 3, possibleAnswer: '', isRightAnswer: false },
                    { id: 4, possibleAnswer: '', isRightAnswer: false }
                ]
            },
            {
                id: 8, question: '', answers: [
                    { id: 1, possibleAnswer: '', isRightAnswer: false },
                    { id: 2, possibleAnswer: '', isRightAnswer: true },
                    { id: 3, possibleAnswer: '', isRightAnswer: false },
                    { id: 4, possibleAnswer: '', isRightAnswer: false }
                ]
            },*/

        ];
    }

    GetQuestion(){
        this.getQuestions();
        let amountOfQuestions = this.questions.length;
        let randomNumber = Math.floor(Math.random() * amountOfQuestions);
        let question = this.questions[randomNumber];
        return question;
    }
}