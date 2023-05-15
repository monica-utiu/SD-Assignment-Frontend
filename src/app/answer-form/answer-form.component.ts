import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent {
  newAnswer = {
    text: '',
    picture: ''
  };
  submitAnswer(form: NgForm) {
    if (form.valid) {

      // Perform actions with the form values (e.g., save to backend)
      console.log('Text:', this.newAnswer.text);
      console.log('Picture:', this.newAnswer.picture);

      // Reset the form
      form.resetForm();
    }
    else {
      // Mark the form as submitted to display validation messages
      form.form.markAllAsTouched();
    }
  }
}
