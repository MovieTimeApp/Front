import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/models/user.service';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router : Router, private sharedDataService: SharedDataService) { }

  model ={
    email :'',
    password:''
  };
  
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string | null;
  isLoggedIn: boolean = false;
  subscription: Subscription;
  data: boolean;
  
  onUserLogin = new EventEmitter<any>();

  ngOnInit() {
    this.sharedDataService.currentMessage.subscribe(res => this.data = res);
    this.isLoggedIn = this.data;
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        if(res.hasOwnProperty('token'))
        {
          this.isLoggedIn = true;
          this.onUserLogin.emit(this.isLoggedIn);
          this.sharedDataService.changeMessage(this.isLoggedIn);
        }
        this.userService.setToken(res['token']);
        this.userService.getUserProfile(res['token']);
        this.router.navigateByUrl('/userprofile');
        this.serverErrorMessages = null;
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}