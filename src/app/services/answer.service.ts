import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {Answer} from "../answer";
import {Question} from "../question";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private questionsUrl = 'assets/data/questions.json';
  constructor(private http:HttpClient) {
    //this.questionsUrl = 'http://localhost:8080/questions';
  }

  getAnswersByQuestionId(id: Number): Observable<Answer[]> {
    return this.http.get<Question[]>(this.questionsUrl).pipe(
      map(questions => {
        const question = questions.find(question => question.id == id);
        return question ? question.answers.map(this.transformAnswer) : [];
      })
    );
  }

  private transformAnswer(answerData: any): Answer {
    // Perform any necessary transformations or mappings here
    // to convert the raw answer data to the Answer type.
    return {
      id: answerData.id,
      text: answerData.text,
      creation: answerData.creationDate,
      author: answerData.author,
      picture: answerData.picture,
      vote: answerData.vote
    };
  }
}
