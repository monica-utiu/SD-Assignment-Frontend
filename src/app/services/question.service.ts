import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from "rxjs";
import {Question} from "../question";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionsUrl = 'assets/data/questions.json'; // Path to the JSON file
  private questions: Question[] = []
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  getQuestionById(id:string) {
    return this.getQuestions().pipe(
      map(questions => questions.find(question => question.id == id))
    );
  }

  // getQuestionById(id: string): Observable<Question> {
  //   return this.http.get<Question>(`${this.questionsUrl}?id=${id}`);
  // }

  // getQuestionById(id: string): Observable<Question | undefined> {
  //   if (this.questions.length === 0) {
  //     // Fetch the questions from the JSON file if not already loaded
  //     return this.fetchQuestions().pipe(
  //       map(questions => this.filterQuestionById(questions, id))
  //     );
  //   } else {
  //     // Filter the questions locally if already loaded
  //     return of(this.filterQuestionById(this.questions, id));
  //   }
  // }
  //
  // private fetchQuestions(): Observable<Question[]> {
  //   return this.http.get<Question[]>(this.questionsUrl).pipe(
  //     tap(questions => this.questions = questions)
  //   );
  // }
  //
  // private filterQuestionById(questions: Question[], id: string): Question | undefined {
  //   return questions.find(question => question.id === id);
  // }
}

