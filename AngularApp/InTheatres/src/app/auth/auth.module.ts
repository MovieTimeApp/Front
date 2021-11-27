import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    UserComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent]
})
export class AuthModule { }
