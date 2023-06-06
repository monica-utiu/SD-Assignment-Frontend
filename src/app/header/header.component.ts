import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userData : any = {
    id: Number,
    rol: ''
  };

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['gallery']);
  }

  goToUser() {
    let data: any = localStorage.getItem("userData");
    this.userData = JSON.parse(data);
    console.log(this.userData)
    this.router.navigate(['/account',this.userData.id]);
  }
  logout() {
    this.auth.logout();
  }

  goToQuestionForm() {
    this.router.navigate(['new-question'])
  }
}
