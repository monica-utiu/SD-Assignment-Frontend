import {User} from "./user";
import {Answer} from "./answer";
import {UserDto} from "./user-dto";

export interface Question {
  id: Number;
  title: string;
  text: string;
  creation: Date;
  updated: Date;
  // MAYBE SHOULD BE uSER OR CHANGE IN BACKEND FOR USERDTO
  author: UserDto;
  tags: string[];
  picture: string;
  vote: Number;
  answers: Answer[];
}
