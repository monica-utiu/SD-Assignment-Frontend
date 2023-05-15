import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {QuestionComponent} from "../../question/question.component";
import {Question} from "../../question";
import {QuestionListComponent} from "../../question-list/question-list.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent{

  @Output() term1 = new EventEmitter();
  term!: string;
  constructor() {
  }

  onInput(event: string): void {
    debugger
    this.term1.emit(event)
  }




}
