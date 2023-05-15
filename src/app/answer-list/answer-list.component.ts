import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../question";
import {Answer} from "../answer";
import {AnswerService} from "../services/answer.service";

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent {
  @Input() data!: Answer[];
  constructor() {
  }

}
