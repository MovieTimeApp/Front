import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';
import { ResponsiveToolbarComponent } from './components/responsive-toolbar/responsive-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResponsiveSidenavListComponent } from './components/responsive-sidenav-list/responsive-sidenav-list.component';


@NgModule({
  declarations: [
    ResponsiveToolbarComponent,
    ResponsiveSidenavListComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ResponsiveToolbarComponent,
    ResponsiveSidenavListComponent
  ]
})
export class SharedModule { }
