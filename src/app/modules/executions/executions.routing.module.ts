import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExecutionsPageComponent } from './page/executions-page/executions-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExecutionsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutionsRoutingModule { }
