import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/components/home/home.component';
import { LoginComponent } from './auth/components/user/login/login.component';
import { SignupComponent } from './auth/components/user/signup/signup.component';
import { UserComponent } from './auth/components/user/user.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignupComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: LoginComponent }]
  },
  {
    path: 'user', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
