import {User} from "./user";
import {UserDto} from "./user-dto";

export interface Answer {
  id: string;
  text: string;
  creation: Date;
  author: UserDto;
  picture: string;
  vote: Number;
}
