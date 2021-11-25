import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './public/components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'header/home/login', component: LoginComponent},
  { path: 'header/home/signup', component: SignupComponent},
  { path: '', redirectTo: 'header', pathMatch: 'full' }
  // { path: 'header/login', component: HomeComponent,
  //   children: [{ path: '', component: LoginComponent}]
  // },
  // { path: 'header/signup', component: HomeComponent,
  //   children: [{ path: '', component: SignupComponent}] 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
