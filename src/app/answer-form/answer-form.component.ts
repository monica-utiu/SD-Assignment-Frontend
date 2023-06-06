import {Component, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AnswerService} from "../services/answer.service";
import {NewAnswer} from "../new-asnwer";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent {
  @Input() newAnswer: NewAnswer= {
    text: '',
    picture: ''
  };
  @Input() q_id!: Number;
  @Input() isUpdate!: boolean;
  @Input() a_id!: Number;
  userData : any = {
    id: Number,
    rol: ''
  };
  userId!: Number;
  constructor(private answerService: AnswerService) {}

  ngOnInit(): void {
    let data: any = localStorage.getItem("userData");
    this.userData = JSON.parse(data);
    console.log(data)
    this.userId = this.userData.id;
    console.log(this.userId);
  }
  refreshPage() {
    //this.location.reload();
  }

  submitAnswer(form: NgForm) {
    if (form.valid) {

      // Perform actions with the form values (e.g., save to backend)
      console.log('Text:', this.newAnswer.text);
      console.log('Picture:', this.newAnswer.picture);

      if(!this.isUpdate) {
        this.answerService.createAnswer(this.userId,this.q_id, this.newAnswer).pipe(
          catchError((error) => {
            console.error("Failed to create answer:",error);
            return of(null);
          })
        ).subscribe((answer) => {
          if(answer) {
            console.log("Answer created:", answer);
            //this.router.navigate(['question',question.id]);
          }
        });
      }
      else {
        this.answerService.updateAnswer(this.a_id, this.newAnswer).pipe(
          catchError((error) => {
            console.error("Failed to update answer:", error);
            alert("Failed to update answer")
            return of(null);
          })
        ).subscribe((answer) => {
          if (answer) {
            console.log("Answer updated:", answer);
            alert("Answer created")
            //this.router.navigate(['question', question.id]);
          }
        });
      }
      // Reset the form
      form.resetForm();
      this.refreshPage();
    }
    else {
      // Mark the form as submitted to display validation messages
      form.form.markAllAsTouched();
    }
  }
}
