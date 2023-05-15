import {Component, OnInit} from '@angular/core';
import {QuestionComponent} from "../question/question.component";
import {HttpClient} from "@angular/common/http";
import {Question} from "../question";
import {Router} from "@angular/router";
import {QuestionService} from "../services/question.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit{


  public items: Question[] = [];
  term!: string;

  constructor(private router:Router,
              private questionService: QuestionService) {
  }
  ngOnInit() {
    this.getItems();
  }

  // getItems() {
  //   this.http
  //     .get<Question[]>('assets/data/questions.json')
  //     .subscribe((item) => {
  //       this.items = item;
  //       console.log(item);
  //     });
  // }

  getItems() {
    this.questionService.getQuestions().subscribe(questions => {
      this.items = questions;
      console.log(this.items)});

  }

  setTerm(event: string) {
    this.term = event;
  }

}
