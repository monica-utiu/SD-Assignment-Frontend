import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {Question} from "../question";
import {HttpClient} from "@angular/common/http";
import {User} from "../user";
import {UserDto} from "../user-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userUrl= '';
  private userData = {
    id: Number,
    rol: ''
  }

  constructor(private router: Router, private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users';
  }

  login(email: string, pword: string) {
    this.getUsers().pipe(
      map(users => users.find(user => user.email === email && user.passphrase === pword))
    ).subscribe(user => {
      if (user) {
        if(user.banned) {
          alert("Sorry, you are banned!")
        }
        else {
          console.log(user)
          this.userData.id = user.userId;
          this.userData.rol = user.rol;
          localStorage.setItem("userData", JSON.stringify(this.userData));
          localStorage.setItem("isLogged", "1");
        }
        // Handle successful login
      } else {
        // Handle invalid credentials
        console.log("error");
      }
    });
    if(this.userData.rol != '')
      return 200;
    else return 403;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  getUsers(): Observable<User[]> {
    const allUsersUrl = `${this.userUrl}/getAllUsers`;
    return this.http.get<User[]>(allUsersUrl);
  }

  getUser(u_id: Number): Observable<UserDto> {
    console.log("In service: ",u_id, typeof(u_id))
    const userUrl = `${this.userUrl}/getUser/${u_id}`;
    return this.http.get<UserDto>(userUrl);
  }

  updateUser(u_id: Number, user: UserDto) {
    const userUrl = `${this.userUrl}/update/${u_id}`;
    return this.http.put<User>(userUrl,user);
  }

}
