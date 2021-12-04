import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { MenuItem } from '../../models/menu-item.model';
import { UserService } from '../../models/user.service';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css',
              '../../assets/navbar.css']
  //encapsulation: ViewEncapsulation.None
})

export class ResponsiveToolbarComponent implements OnInit {

  // menuItems: MenuItem[] = [
  //   {
  //     label: 'Sign Up',
  //     icon: 'login'
  //   },
  //   {
  //     label: 'About',
  //     icon: 'help'
  //   }
  // ];

  loggedIn: boolean = false;
  isDarkTheme: boolean = false;
  //checkbox: any = document.querySelector<HTMLInputElement>('input[name=mode]');
  

  @Output() public sidenavToggle = new EventEmitter();
  @Output() public isDarkMode = new EventEmitter();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void { 
    if(this.userService.isLoggedIn()){
      this.loggedIn = true;
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  // public trans() {
  //   document.documentElement.classList.add('transition');
  //   window.setTimeout(() => {
  //     document.documentElement.classList.remove('transition');
  //   }, 1000);
  // }
  
  // changeTheme(): void {
  //   if(this.isDarkTheme) {
  //     this.trans();
  //     this.isDarkTheme = false;
  //     document.documentElement.setAttribute('data-theme', 'light');
  //   } else {
  //     this.trans();
  //     this.isDarkTheme = true;
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //   }
  // }

  // this.checkbox.addEventListener('change', (checked : boolean) => {
  //   if(checked) {
  //       this.trans();
  //       document.documentElement.setAttribute('data-theme', 'dark');
  //     } else {
  //       this.trans();
  //       document.documentElement.setAttribute('data-theme', 'light');
  //     }
  // })
}