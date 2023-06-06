import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from "rxjs";
import {Question} from "../question";
import {HttpClient} from "@angular/common/http";
import {QuestionAnswer} from "../question-answer";
import {NewQuestion} from "../new-question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  //private questionsUrl = 'assets/data/questions.json'; // Path to the JSON file
  private questionsUrl = '';
  private allQuestionsUrl ='';
  private questions: Question[] = []
  constructor(private http: HttpClient) {
    this.questionsUrl = 'http://localhost:8080/questions';
    this.allQuestionsUrl = 'http://localhost:8080/questions/getAllQuestions';
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.allQuestionsUrl);
  }

  // frontend only req
  getQuestionById1(id:Number) {
    return this.getQuestions().pipe(
      map(questions => questions.find(question => question.id == id))
    );
  }

  getQuestionById(q_id:Number) {
    const questionUrl = `${this.questionsUrl}/getQuestion/${q_id}`;
    return this.http.get<Question>(questionUrl);
  }

  getQuestionByIdWithAnswers(q_id:Number) {
    const questionUrl = `${this.questionsUrl}/getQuestionAndAnswers/${q_id}`;
    return this.http.get<QuestionAnswer>(questionUrl);
  }

  createQuestion(u_id:Number, question: NewQuestion) {
    const questionUrl = `${this.questionsUrl}/create/user/${u_id}`;
    console.log("In service ",question.tags)
    return this.http.post<Question>(questionUrl, question);
  }

  editQuestion(q_id: Number, question: NewQuestion) {
    const questionUrl = `${this.questionsUrl}/update/${q_id}`;
    return this.http.put<any>(questionUrl,question);
  }

  deleteQuestion(q_id: Number) {
    const questionUrl = `${this.questionsUrl}/delete/${q_id}`;
    return this.http.delete<any>(questionUrl)
  }
}

