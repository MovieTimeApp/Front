import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
