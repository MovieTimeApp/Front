import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'InTheatres';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'InTheatres',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/icons8-movie-32.svg'));

    // iconRegistry.addSvgIcon(
    //   'about',
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/Icons/about.svg'));
  }
}
