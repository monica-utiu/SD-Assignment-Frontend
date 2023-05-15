import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gallery-user',
  templateUrl: './gallery-user.component.html',
  styleUrls: ['./gallery-user.component.scss']
})
export class GalleryUserComponent implements OnInit{
  questionList: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {

  }
  getQuestions() {
  }

  goToQuestion() {

  }
}
