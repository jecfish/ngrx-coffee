import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { BaristaRoutingModule } from './barista-routing.module';
import { EmployeeListPageComponent } from './containers';

import { baristaReducer } from './+state/barista.reducer';

const CONTAINERS = [EmployeeListPageComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('barista', baristaReducer),
    BaristaRoutingModule
  ],
  declarations: [
    ...CONTAINERS
  ]
})
export class BaristaModule { }
