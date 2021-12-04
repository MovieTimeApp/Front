import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../models/user.service';

@Component({
  selector: 'app-responsive-sidenav-list',
  templateUrl: './responsive-sidenav-list.component.html',
  styleUrls: ['./responsive-sidenav-list.component.css']
})
export class ResponsiveSidenavListComponent implements OnInit {

  loggedIn: boolean = false;

  @Output() public sidenavClose = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void { 
    if(this.userService.isLoggedIn()){
      this.loggedIn = true;
    }
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
