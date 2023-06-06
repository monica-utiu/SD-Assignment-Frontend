import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../question";
import {subscriptionLogsToBeFn} from "rxjs/internal/testing/TestScheduler";
import {QuestionService} from "../services/question.service";
import {HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  @Input() data!: Question;
  @Input() showRoutingLink: boolean = true;
  userData : any = {
    id: Number,
    rol: ''
  };
  isOwner!: boolean;
  isMod!: boolean;

  constructor(private questionService: QuestionService, private router: Router) {
  }

  ngOnInit(): void {
    let data: any = localStorage.getItem("userData");
    this.userData = JSON.parse(data);
    console.log(this.userData)
    this.isOwner = this.userData.id == this.data.author.userId;
    this.isMod = this.userData.rol == 'MODERATOR';
    console.log("Owner: ",this.isOwner)
    console.log("Mod: ", this.isMod)
    console.log(this.data.author)
  }

  edit() {
    this.router.navigate(['/new-question'], { state: { question: this.data } });
  }

  delete() {
    this.questionService.deleteQuestion(this.data.id).subscribe(
      (response: HttpResponse<any>) => {
        console.log(response)
        if (response.status == 500) {
          alert('An error occurred while deleting the question.')
          //           console.log('An error occurred while deleting the question.');

        } else {
          // Error
          // Success
          console.log('Question deleted successfully.');
          alert('Question deleted successfully.')
        }
      });
  }

}
