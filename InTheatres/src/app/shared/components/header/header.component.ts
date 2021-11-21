//import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {
//  title = 'demoApp';
//  email:string = '';
//  password:string = '';
//  remail:string = '';
//  rpassword:string = '';
//  rcpassword:string = '';

//   constructor(private snackBar:MatSnackBar) { }

//   ngOnInit(): void {
//   }

//   register() {

//   }
//   login() {
//     if(this.email=="admin" && this.password=="admin"){
//         this.snackBar.open('Login Successful','',{duration:1000})
//     }else{
//       this.snackBar.open('Login error','',{duration:1000})
//     }
//   }

// }

import { Component, OnInit } from "@angular/core";
//import { NgProgress } from "@ngx-progressbar/core";
//import { ProgressBarService } from "../../services/progress-bar.service";
import { AuthService } from "../../services/auth.service";
//import { AlertService } from "ngx-alerts";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    //private progress: NgProgress,
    //public progressBar: ProgressBarService,
    public authService: AuthService,
    //private alertService: AlertService
  ) {}

  ngOnInit() {
    //this.progressBar.progressRef = this.progress.ref("progressBar");
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.authService.currentUser = null;
    this.authService.decodedToken = null;
    //this.alertService.success("Logged Out");
    alert("Logged Out");
  }
}