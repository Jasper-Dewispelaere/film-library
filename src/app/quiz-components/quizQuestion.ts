import { Answer } from "./answer";

export interface QuizQuestion{
    id: number;
    question: string;
    answers: Answer[];
}