import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchedulingPageComponent } from './page/scheduling-page/scheduling-page.component';

const routes: Routes = [
  {
    path: '',
    component: SchedulingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }
