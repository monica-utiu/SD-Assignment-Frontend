import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {AuthService} from "../services/auth.service";
import {UserDto} from "../user-dto";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent{

  @Input() user!: UserDto;



}

