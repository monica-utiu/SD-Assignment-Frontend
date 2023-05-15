import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Question} from "../question";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {
  newQuestion: Question = {
    id: '', // Set as appropriate
    title: '',
    body: '',
    creationDate: '',
    author: '',
    tags: [],
    picture: '',
    vote: '',
    answers: []
  };

  tags: string[] = [];
  separatorKeysCodes: number[] = [13, 188];
  addOnBlur = true;

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  submitQuestion(form: NgForm) {

  }

}
