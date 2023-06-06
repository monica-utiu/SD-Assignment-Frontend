import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tags} from "../tags";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private tagsUrl='';
  constructor(private http:HttpClient) {
    this.tagsUrl = 'http://localhost:8080/tags'
  }

  getTags(): Observable<Tags[]>{
    const allTagsUrl = `${this.tagsUrl}/getAllTags`;
    return this.http.get<Tags[]>(allTagsUrl);
  }

  createTag(tag: String): Observable<any>{
    console.log(tag)
    const newTagsUrl = `${this.tagsUrl}/create`;
    console.log(newTagsUrl)
    return this.http.post<any>(newTagsUrl, tag);
  }

}
