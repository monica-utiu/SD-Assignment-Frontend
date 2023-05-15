import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../question";
import {subscriptionLogsToBeFn} from "rxjs/internal/testing/TestScheduler";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() data!: Question;
  @Input() showRoutingLink: boolean = true;

  constructor() {

  }


}
