import {Component, Input, OnInit} from '@angular/core';
import {NewQuestion} from "../new-question";
import {Question} from "../question";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question-create-page',
  templateUrl: './question-create-page.component.html',
  styleUrls: ['./question-create-page.component.scss']
})
export class QuestionCreatePageComponent implements OnInit{
  oldQuestion: NewQuestion = {
    picture: "",
    title: '',
    text: '',
    tags: []
  };

  isUpdated =  false;
  oldQId: Number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const questionData = history.state.question;
    console.log(questionData)
    if (questionData) {
      this.oldQuestion.title = questionData.title;
      this.oldQuestion.text = questionData.text;
      this.oldQuestion.picture = questionData.picture;
      this.oldQuestion.tags = questionData.tags;
      this.isUpdated = true;
      this.oldQId = questionData.id;
    }
  }

}
