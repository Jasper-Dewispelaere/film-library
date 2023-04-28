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
            {
                id: 6, question: 'In what year did the first "Home Alone" Release?', answers: [
                    { id: 1, possibleAnswer: '1990', isRightAnswer: true },
                    { id: 2, possibleAnswer: '1995', isRightAnswer: false },
                    { id: 3, possibleAnswer: '1998', isRightAnswer: false },
                    { id: 4, possibleAnswer: '2000', isRightAnswer: false }
                ]
            },
            {
                id: 7, question: 'Which Marvel Superhero did "Brie Larson" play?', answers: [
                    { id: 1, possibleAnswer: 'Scarlet Witch', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'Black Widow', isRightAnswer: false },
                    { id: 3, possibleAnswer: 'Captain Marvel', isRightAnswer: true },
                    { id: 4, possibleAnswer: 'Gamora', isRightAnswer: false }
                ]
            },
            {
                id: 8, question: 'Where did "the Shining" take place', answers: [
                    { id: 1, possibleAnswer: 'Amusement Park', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'Haunted House', isRightAnswer: false },
                    { id: 3, possibleAnswer: 'Boat', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Hotel', isRightAnswer: true }
                ]
            },
            {
                id: 9, question: 'Which of these film ISN`T based on a true story?', answers: [
                    { id: 1, possibleAnswer: '1917', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'American Psycho', isRightAnswer: true },
                    { id: 3, possibleAnswer: 'The Imitation Game', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Titanic', isRightAnswer: false }
                ]
            },
            {
                id: 10, question: 'How many "The Fast and the Furious" films are there?', answers: [
                    { id: 1, possibleAnswer: '8', isRightAnswer: false },
                    { id: 2, possibleAnswer: '9', isRightAnswer: false },
                    { id: 3, possibleAnswer: '10', isRightAnswer: true },
                    { id: 4, possibleAnswer: '11', isRightAnswer: false }
                ]
            },
            {
                id: 11, question: 'What is the name of the rat in "Ratatouille"?', answers: [
                    { id: 1, possibleAnswer: 'Sulley', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'Linguini', isRightAnswer: false },
                    { id: 3, possibleAnswer: 'Woody', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Remy', isRightAnswer: true }
                ]
            },
            {
                id: 12, question: 'Did they find Nemo in "Finding Nemo"?', answers: [
                    { id: 1, possibleAnswer: 'No', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'Yes', isRightAnswer: true },
                    { id: 3, possibleAnswer: '', isRightAnswer: false },
                    { id: 4, possibleAnswer: '', isRightAnswer: false }
                ]
            },
            {
                id: 12, question: 'What film did Jasper watch on april 29 2022, at 20:18?', answers: [
                    { id: 1, possibleAnswer: 'The Dark Knight', isRightAnswer: true },
                    { id: 2, possibleAnswer: 'The Lord of The Rings: Return of the King', isRightAnswer: false },
                    { id: 3, possibleAnswer: 'Knives Out', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Ready Player one', isRightAnswer: false }
                ]
            },
            {
                id: 13, question: 'Who directed "Pulp Ficition"?', answers: [
                    { id: 1, possibleAnswer: 'Steven Spielberg', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'Martin Scorsese', isRightAnswer: false },
                    { id: 3, possibleAnswer: 'Quentin Tarantino', isRightAnswer: true },
                    { id: 4, possibleAnswer: 'Christopher Nolan', isRightAnswer: false }
                ]
            },
            {
                id: 14, question: 'Which car brand became iconic after being used as a time machine in the movie "Back to the Future" (1985)?', answers: [
                    { id: 1, possibleAnswer: 'Ford', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'DeLorean', isRightAnswer: true },
                    { id: 3, possibleAnswer: 'Chevrolet', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Mercedes', isRightAnswer: false }
                ]
            },
            {
                id: 15, question: 'In what year did the first released Star Wars "A new Hope" release?', answers: [
                    { id: 1, possibleAnswer: '1975', isRightAnswer: false },
                    { id: 2, possibleAnswer: '1977', isRightAnswer: true },
                    { id: 3, possibleAnswer: '1981', isRightAnswer: false },
                    { id: 4, possibleAnswer: '1984', isRightAnswer: false }
                ]
            },
            {
                id: 16, question: 'Which of these films did earn the most money?', answers: [
                    { id: 1, possibleAnswer: 'Avatar', isRightAnswer: true },
                    { id: 2, possibleAnswer: 'Titanic', isRightAnswer: false },
                    { id: 3, possibleAnswer: 'Avengers: Endgame', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Star Wars: Episode VII - The Force Awakens', isRightAnswer: false }
                ]
            },
            {
                id: 17, question: 'How many Harry Potter films are there?', answers: [
                    { id: 1, possibleAnswer: '6', isRightAnswer: false },
                    { id: 2, possibleAnswer: '7', isRightAnswer: false },
                    { id: 3, possibleAnswer: '8', isRightAnswer: true },
                    { id: 4, possibleAnswer: '9', isRightAnswer: false }
                ]
            },
            {
                id: 18, question: 'From where is this famous quote "My mama always said life was like a box of chocolates"', answers: [
                    { id: 1, possibleAnswer: 'The Truman Show', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'Forrest Gump', isRightAnswer: true },
                    { id: 3, possibleAnswer: 'The Shawshank Redemption', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Inside out', isRightAnswer: false }
                ]
            },
            {
                id: 19, question: 'What is the name of the Donkey in "Shrek"?', answers: [
                    { id: 1, possibleAnswer: 'Donkey', isRightAnswer: true },
                    { id: 2, possibleAnswer: 'Farquaad', isRightAnswer: false },
                    { id: 3, possibleAnswer: 'Kevin', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Mike', isRightAnswer: false }
                ]
            },
            {
                id: 20, question: 'What is the main murder weapon of Ghostface from "Scream"', answers: [
                    { id: 1, possibleAnswer: 'Chainsaw', isRightAnswer: false },
                    { id: 2, possibleAnswer: 'Knife', isRightAnswer: true },
                    { id: 3, possibleAnswer: 'Gun', isRightAnswer: false },
                    { id: 4, possibleAnswer: 'Axe', isRightAnswer: false }
                ]
            },
            {
                id: 21, question: 'In what year did "Frozen" release?', answers: [
                    { id: 1, possibleAnswer: '2009', isRightAnswer: false },
                    { id: 2, possibleAnswer: '2010', isRightAnswer: false },
                    { id: 3, possibleAnswer: '2013', isRightAnswer: true },
                    { id: 4, possibleAnswer: '2015', isRightAnswer: false }
                ]
            },
            /*{
                id: 20, question: '', answers: [
                    { id: 1, possibleAnswer: '', isRightAnswer: false },
                    { id: 2, possibleAnswer: '', isRightAnswer: false },
                    { id: 3, possibleAnswer: '', isRightAnswer: true },
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