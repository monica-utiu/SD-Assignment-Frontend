import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../question";
import {Answer} from "../answer";
import {AnswerService} from "../services/answer.service";

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit{
  @Input() data!: Answer[];
  @Input() qId!: Number;
  constructor() {
  }

  ngOnInit() {
    this.data = this.data.sort( (a,b)=> {
      const x: number = a.vote as number;
      const y: number = b.vote as number;
      return y-x;
    });
  }
}
