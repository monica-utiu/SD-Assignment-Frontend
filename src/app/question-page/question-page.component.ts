import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Question} from "../question";
import {QuestionService} from "../services/question.service";
import {AnswerService} from "../services/answer.service";
import {Answer} from "../answer";
import {QuestionAnswer} from "../question-answer";
import {NewQuestion} from "../new-question";
import {NewAnswer} from "../new-asnwer";

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  question!: Question;
  answers: Answer[] = [];
  questionAnswer!: QuestionAnswer;
  showForm: boolean = false;

  oldAnswer: NewAnswer = {
    picture: "",
    text: ''
  };
  isUpdated=false;
  oldAId: Number = 0;

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
    console.log("From question-page " + id)
    this.questionService.getQuestionByIdWithAnswers(id).subscribe(question => {
      this.question = question.question;
      this.answers = question.answers;
      console.log(this.question)
    });
  }

}
