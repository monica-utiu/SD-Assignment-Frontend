import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Question} from "../question";
import {QuestionService} from "../services/question.service";
import {AnswerService} from "../services/answer.service";
import {Answer} from "../answer";

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  question: Question | undefined;
  answers: Answer[] = [];

  showForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id)
    this.questionService.getQuestionById(id).subscribe(question => {
      this.question = question;
      console.log(this.question)
    });
    this.answerService.getAnswersByQuestionId(id).subscribe(answers => {
      this.answers = answers;
      console.log(this.answers)
    })
  }
}
