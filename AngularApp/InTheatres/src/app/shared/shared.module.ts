import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';
import { ResponsiveToolbarComponent } from './components/responsive-toolbar/responsive-toolbar.component';


@NgModule({
  declarations: [
    ResponsiveToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    ResponsiveToolbarComponent
  ]
})
export class SharedModule { }
