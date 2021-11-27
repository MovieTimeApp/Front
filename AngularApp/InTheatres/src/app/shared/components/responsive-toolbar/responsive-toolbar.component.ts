import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css']
})

export class ResponsiveToolbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Sign Up',
      icon: 'login'
    },
    {
      label: 'About',
      icon: 'help'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}