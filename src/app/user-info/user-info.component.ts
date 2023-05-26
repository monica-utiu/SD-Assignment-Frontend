import { Component } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  user: User = { userId: 1,
    firstName: "Roy",
    lastName: "Joy",
    picture: "https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png",
    email: "email@gmal.com",
    phone: "0756279243",
    rating: 4.5,
    role: "user"
    }
}

