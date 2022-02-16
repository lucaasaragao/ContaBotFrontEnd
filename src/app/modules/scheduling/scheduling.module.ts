import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingPageComponent } from './page/scheduling-page/scheduling-page.component';
import { SchedulingRoutingModule } from './scheduling.routing.module';

@NgModule({
  declarations: [
    SchedulingPageComponent
  ],
  imports: [
    CommonModule,
    SchedulingRoutingModule
  ]
})
export class SchedulingModule { }
