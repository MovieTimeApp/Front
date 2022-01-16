import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthModule } from '../../auth.module';
import { Subscription } from 'rxjs';
import { SharedDataService } from './shared-data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  imgSrc: string="";
  subscription: Subscription;
  isLoggedIn: boolean = false;

  
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.currentMessage.subscribe(res => this.isLoggedIn = res)
  }
  
  hoverOnCity(e:any) {
    var srcAttbt = document.getElementById(e.target.id)?.getAttribute("src");
    srcAttbt = srcAttbt?.slice(0, -4) + "_Hover.png";
    document.getElementById(e.target.id)?.setAttribute("src", srcAttbt);
  }

  hoverOutCity(e:any) {
    var srcAttbt = document.getElementById(e.target.id)?.getAttribute("src");
    srcAttbt = srcAttbt?.slice(0, -10) + ".png";
    document.getElementById(e.target.id)?.setAttribute("src", srcAttbt);
  }

  subscribeToEmitter(componentRef){
    if(!(componentRef instanceof LoginComponent)) {
      return;
    }
    const child : LoginComponent = componentRef;
    child.onUserLogin.subscribe(() => {
      console.log("success");
    })
  }

  unsubscribe() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}