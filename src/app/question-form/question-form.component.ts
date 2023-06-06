import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Question} from "../question";
import {MatChipInputEvent} from "@angular/material/chips";
import {User} from "../user";
import {NewQuestion} from "../new-question";
import {QuestionService} from "../services/question.service";
import {of, subscribeOn} from "rxjs";
import { catchError } from 'rxjs/operators';
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {TagService} from "../services/tag.service";
import {Tags} from "../tags";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit{

  @Input() newQuestion!: NewQuestion;
  @Input() isUpdate!: boolean;
  @Input() old_q_id!: Number;
  userData : any = {
    id: Number,
    rol: ''
  };
  userId!: Number;
  tags: Tags[] = [];
  separatorKeysCodes: number[] = [13, 188];
  addOnBlur = true;

  constructor(private questionService: QuestionService,
              private tagService: TagService,
              private router:Router) {}

  ngOnInit(): void {
    let data: any = localStorage.getItem("userData");
    this.userData = JSON.parse(data);
    console.log(data)
    this.userId = this.userData.id;
    console.log(this.userId);
    this.getTags();
  }
  getTags() {
    this.tagService.getTags().subscribe(t => {
        this.tags = t;
        console.log("In the on init ",this.tags);
      }
    );
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      console.log(value);
      this.tagService.createTag(value).subscribe(t => {
        let newTag;
        if (t != null) {
          newTag = {
            "tag_id": 0,
            "title": value
          }
          this.tags.push(newTag);
          console.log("In add tag ", this.tags);
        } else alert("Tag " + value + " already exists")
      });
    }
    event.chipInput!.clear();
  }

  removeTag(tag: Tags): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
      console.log("In remove tags ", this.tags)
    }
  }

  submitQuestion(form: NgForm) {

    if(form.invalid) {
      return;
    }

    this.newQuestion.tags = this.tags;


    if(this.isUpdate) {

      console.log(this.tags)
      this.questionService.editQuestion(this.old_q_id,this.newQuestion).subscribe(
        (response: HttpResponse<any>) => {
          console.log(response)
          if (response.status == 500) {
            alert('An error occurred while editing the question.')
            //           console.log('An error occurred while deleting the question.');
          } else {
            // Success
            console.log('Question edited successfully.');
            alert('Question edited successfully.')
          }
        });
    }
    else {
      this.questionService.createQuestion(this.userId, this.newQuestion).pipe(
        catchError((error) => {
          console.error("Failed to create question:", error);
          return of(null);
        })
      ).subscribe((question) => {
        if (question) {
          console.log("Question created:", question);
          this.router.navigate(['question', question.id]);
        }
      });
    }
  }

}
