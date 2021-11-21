import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 title = 'demoApp';
 email:string = '';
 password:string = '';
 remail:string = '';
 rpassword:string = '';
 rcpassword:string = '';

  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  register() {

  }
  login() {
    if(this.email=="admin" && this.password=="admin"){
        this.snackBar.open('Login Successful','',{duration:1000})
    }else{
      this.snackBar.open('Login error','',{duration:1000})
    }
  }

}