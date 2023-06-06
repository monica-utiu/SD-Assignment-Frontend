import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../user";
import {UserDto} from "../user-dto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{

  user!: UserDto;
  userData : any = {
    id: Number,
    rol: ''
  };
  isBannable: boolean=false;

  constructor(private authService: AuthService, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log("From user-page " + id)
    this.authService.getUser(id).subscribe(user => {
      this.user = user;
      console.log(this.user)

      let data: any = localStorage.getItem("userData");
      this.userData = JSON.parse(data);
      console.log(data)
      if(this.userData.rol=='MODERATOR' && this.userData.id!=this.user.userId
      && !this.user.banned)
        this.isBannable = true;
    });

  }

  banUser() {
    this.user.banned = !this.user.banned;
    this.authService.updateUser(this.user.userId, this.user).subscribe();
  }

}
