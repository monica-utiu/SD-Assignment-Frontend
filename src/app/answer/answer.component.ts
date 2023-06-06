import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../answer";
import {AnswerService} from "../services/answer.service";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit{
  @Input() qId!: Number;
  @Input() data!: Answer;
  userData : any = {
    id: Number,
    rol: ''
  };
  isOwner!: boolean;
  isMod!: boolean;
  showForm: boolean = false;
  isUpdated: boolean=false;
  oldAId: Number=0;

  constructor(private answerService: AnswerService, private router: Router) {
  }

  ngOnInit(): void {
    let data: any = localStorage.getItem("userData");
    this.userData = JSON.parse(data);
    console.log(this.data)
    this.isOwner = this.userData.id == this.data.author.userId;
    this.isMod = this.userData.rol == 'MODERATOR';
    console.log("Owner: ",this.isOwner)
    console.log("Mod: ", this.isMod)
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    this.isUpdated = true;
    this.oldAId = this.data.id;
  }
  edit() {
    this.toggleForm();
    //this.answerService.updateAnswer(this.data.id, )
  }

  delete() {
    this.answerService.deleteAnswer(this.data.id).subscribe(
      (response: HttpResponse<any>) => {
        console.log(response)
        if (response.status == 500) {
          alert('An error occurred while deleting the answer.')
          //           console.log('An error occurred while deleting the question.');

        } else {
          // Error
          // Success
          console.log('Answer deleted successfully.');
          alert('Answer deleted successfully.')
        }
      });
  }

}
