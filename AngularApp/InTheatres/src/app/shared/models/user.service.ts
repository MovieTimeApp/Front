import { HttpClient, HttpHeaders } from "@angular/common/http";
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

    noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

    //HttpMethods

    postUser(user: any){
      return this.http.post(environment.apiBaseUrl + '/register', user, this.noAuthHeader);
    }
    
    login(authCredentials) {
        return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
    }

    getUserProfile(id) {
        return this.http.get(environment.apiBaseUrl + '/userProfile:_id', {
            params: {
                _id: id
            },
            observe: 'response'
        });
    }

    //Helper Methods

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    deleteToken() {
        localStorage.removeItem('token');
    }

    getUserPayload() {
        var token = this.getToken();
        if (token) {
        var userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
        }
        else
        return null;
    }

    isLoggedIn() {
        var userPayload = this.getUserPayload();
        if (userPayload)
        return userPayload.exp > Date.now() / 1000;
        else
        return false;
    }
}