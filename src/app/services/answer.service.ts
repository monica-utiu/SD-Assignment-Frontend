import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {Answer} from "../answer";
import {Question} from "../question";
import {HttpClient} from "@angular/common/http";
import {NewAnswer} from "../new-asnwer";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private answerUrl = '';
  constructor(private http:HttpClient) {
    this.answerUrl = 'http://localhost:8080/answers';
  }

  createAnswer(u_id: Number, q_id: Number, answer: NewAnswer) {
    const newAnswerUrl = `${this.answerUrl}/create/user/${u_id}/question/${q_id}`;
    return this.http.post<Answer>(newAnswerUrl, answer);
  }

  updateAnswer(a_id: Number, newAnswer: NewAnswer) {
    const editAnswerUrl = `${this.answerUrl}/update/${a_id}`;
    return this.http.put<any>(editAnswerUrl, newAnswer);
  }

  deleteAnswer(a_id: Number) {
    const answerUrl = `${this.answerUrl}/delete/${a_id}`;
    return this.http.delete<any>(answerUrl)
  }

  // getAnswersByQuestionId(id: Number): Observable<Answer[]> {
  //   return this.http.get<Question[]>(this.questionsUrl).pipe(
  //     map(questions => {
  //       const question = questions.find(question => question.id == id);
  //       return question ? question.answers.map(this.transformAnswer) : [];
  //     })
  //   );
  // }
  //
  // private transformAnswer(answerData: any): Answer {
  //   // Perform any necessary transformations or mappings here
  //   // to convert the raw answer data to the Answer type.
  //   return {
  //     question: answerData.question,
  //     id: answerData.id,
  //     text: answerData.text,
  //     creation: answerData.creationDate,
  //     author: answerData.author,
  //     picture: answerData.picture,
  //     vote: answerData.vote
  //   };
  // }
}
