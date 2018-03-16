import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent, Cart2PageComponent, CustomizePageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/menu'
  },
  {
    path: 'menu',
    component: ListPageComponent
  },
  {
    path: 'cart',
    component: Cart2PageComponent
  },
  {
    path: 'remix',
    component: CustomizePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
