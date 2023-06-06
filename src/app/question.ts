import {User} from "./user";
import {Answer} from "./answer";
import {UserDto} from "./user-dto";
import {Tags} from "./tags";

export interface Question {
  id: Number;
  title: string;
  text: string;
  creation: Date;
  updated: Date;
  // MAYBE SHOULD BE uSER OR CHANGE IN BACKEND FOR USERDTO
  author: UserDto;
  tags: Tags[];
  picture: string;
  vote: Number;
  answers: String[];
  rating: Number;
}
