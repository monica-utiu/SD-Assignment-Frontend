import { Component } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  user: User = { id: "1",name: "Roy", picture: "https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"};

}
