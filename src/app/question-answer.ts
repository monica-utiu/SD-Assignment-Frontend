import {Question} from "./question";
import {Answer} from "./answer";

export interface QuestionAnswer {
  question: Question;
  answers: Answer[];
}
