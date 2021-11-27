import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';

const routes: Routes = [
//   { path: 'login', component: LoginComponent },  
//   { path: 'signup', component: SignupComponent },
//   { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
