import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    selectedUser: User = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    constructor(private http: HttpClient) { }

    postUser(user: any){
      return this.http.post(environment.apiBaseUrl+'/register',user);
    }
}