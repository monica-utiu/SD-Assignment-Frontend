import {Component, OnInit} from '@angular/core';
import {QuestionComponent} from "../question/question.component";
import {HttpClient} from "@angular/common/http";
import {Question} from "../question";
import {Router} from "@angular/router";
import {QuestionService} from "../services/question.service";
import {User} from "../user";
import {AuthService} from "../services/auth.service";
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit{


  public items: Question[] = [];
  term!: string;

  userData : any = {
    id: Number,
    rol: ''
  };

  constructor(private router:Router,
              private questionService: QuestionService,
              private authService: AuthService) {
  }
  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.questionService.getQuestions().subscribe(questions => {
      this.items = questions.sort((a, b) => new Date(b.creation).getTime() - new Date(a.creation).getTime());
      console.log(this.items)});
  }

  setTerm(event: string) {

    this.term = event;
    if(this.term == '@me') {
      let data: any = localStorage.getItem("userData");
      this.userData = JSON.parse(data);
      this.authService.getUser(this.userData.id).subscribe(user => {
        this.term = user.firstName
        console.log(this.term)
      });
      console.log(this.term)
    }
  }


}
