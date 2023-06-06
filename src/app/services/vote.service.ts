import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private baseUrl: String = '';
  constructor(private http: HttpClient) {

  }

  setUrl(url: String) {
    this.baseUrl = url;
  }

  addVote(value: Number, u_id: Number, c_id: Number) {
    let createUrl = ''
    if(this.baseUrl.endsWith('Questions'))
      createUrl = `${this.baseUrl}/create/user/${u_id}/question/${c_id}`;
    else if(this.baseUrl.endsWith('Answers')) {
      createUrl = `${this.baseUrl}/create/user/${u_id}/answer/${c_id}`;
    }
    return this.http.post<any>(createUrl, value);
  }

  // getRating(c_id: Number) {
  //   let createUrl = ''
  //   if(this.baseUrl.endsWith('Questions'))
  //     createUrl = `http://localhost:8080/questions/getQuestionScore/${c_id}`;
  //   else if(this.baseUrl.endsWith('Answers')) {
  //     createUrl = `http://localhost:8080/answers/getAnswerScore/${c_id}`;
  //   }
  //   return this.http.get<Number>(createUrl);
  // }
}
