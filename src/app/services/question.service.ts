import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from "rxjs";
import {Question} from "../question";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  //private questionsUrl = 'assets/data/questions.json'; // Path to the JSON file
  private questionsUrl = '';
  private questions: Question[] = []
  constructor(private http: HttpClient) {
    this.questionsUrl = 'http://localhost:8080/questions';
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  getQuestionById(id:Number) {
    return this.getQuestions().pipe(
      map(questions => questions.find(question => question.id == id))
    );
  }

}

