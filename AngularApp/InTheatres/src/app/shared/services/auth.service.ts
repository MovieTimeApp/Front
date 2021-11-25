import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../models/user.model";
import { Observable } from "rxjs";

//TO_BE_REMOVED
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authUrl = "http://localhost:5000/api/auth/";
  employersUrl = "http://localhost:5000/api/employers/";
  confirmEmailUrl = "http://localhost:4200/confirm-email/";
  changePasswordUrl = "http://localhost:4200/change-password/";
  helper = new JwtHelperService();
  decodedToken: any;
  currentUser: User | any;

  //TO_BE_REMOVED
  users: Observable<{ token: number; userToReturn: string; result: boolean}[]> | any;
  private usersSource: BehaviorSubject<{ token: number; userToReturn: string; result: boolean}[]>;

  constructor(private http: HttpClient) {

    //TO_BE_REMOVED
    this.usersSource = new BehaviorSubject<any>([
      { token: 111, userToReturn: 'Jack' , result: true},
      { token: 222, userToReturn: 'John' , result: true},
      { token: 333, userToReturn: 'Foo' , result: true},
    ]);
    this.users = this.usersSource.asObservable();
  }

  login(model: any) {
    // return this.http.post(this.authUrl + "login", model).pipe(
    //   map((response: any) => {
    //     const user = response;
    //     if (user.result.succeeded) {
    //       localStorage.setItem("token", user.token);
    //       localStorage.setItem("user", JSON.stringify(user.userToReturn));
    //       this.decodedToken = this.helper.decodeToken(user.token);
    //       this.currentUser = user.userToReturn;
    //     }
    //   })
    // )
    
    return this.users.pipe(
      map((response: any) => {
        const user = response;
          if (user.result) {
            localStorage.setItem("token", user.token);
            localStorage.setItem("user", JSON.stringify(user.userToReturn));
            this.decodedToken = this.helper.decodeToken(user.token);
            this.currentUser = user.userToReturn;
          };
        }
      )
    )
  }

  register(model: any) {
    let headers = new HttpHeaders({
      confirmEmailUrl: this.confirmEmailUrl
    });
    let options = { headers: headers };
    return this.http.post(this.employersUrl + "create", model, options);
  }

  resetPassword(model: any) {
    let headers = new HttpHeaders({
      changePasswordUrl: this.changePasswordUrl
    });
    let options = { headers: headers };
    return this.http.post(this.authUrl + "resetpassword", model, options);
  }

  confirmEmail(model: any) {
    return this.http.post(this.authUrl + "confirmemail", model);
  }

  changePassword(model: any) {
    return this.http.post(this.authUrl + "changepassword", model);
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.helper.isTokenExpired(token ? token : undefined);
  }
}