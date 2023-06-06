import {Component, Input} from '@angular/core';
import {AnswerService} from "../services/answer.service";
import {QuestionService} from "../services/question.service";
import {Question} from "../question";
import {VoteService} from "../services/vote.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  @Input() data!: any;
  @Input() question = 0;
  @Input() answer = 0;

  userData : any = {
    id: Number,
    rol: ''
  };

  constructor(private answerService: AnswerService,
              private questionService: QuestionService,
              private voteService: VoteService) {
  }

  vote(value: Number) {
    let udata: any = localStorage.getItem("userData");
    this.userData = JSON.parse(udata);
    console.log(this.userData)

    console.log(this.question, this.answer)
    if(this.question != 0 ) {
      this.voteService.setUrl('http://localhost:8080/voteQuestions')
    }
    else if(this.answer != 0) {
      this.voteService.setUrl('http://localhost:8080/voteAnswers')
    }
    this.voteService.addVote(value, this.userData.id,this.data.id).subscribe(t=>console.log(t));
  }
}
