import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaristaRoutingModule { }
