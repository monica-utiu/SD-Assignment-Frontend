import {Tags} from "./tags";

export interface NewQuestion {
  title: string;
  text: string;
  tags: Tags[];
  picture: string;
}
