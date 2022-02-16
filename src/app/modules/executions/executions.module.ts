import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionsRoutingModule } from './executions.routing.module';

import { ExecutionsPageComponent } from './page/executions-page/executions-page.component';

@NgModule({
  declarations: [
    ExecutionsPageComponent
  ],
  imports: [
    CommonModule,
    ExecutionsRoutingModule
  ]
})
export class ExecutionsModule { }
