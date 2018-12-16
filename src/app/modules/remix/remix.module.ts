import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemixRoutingModule } from './remix-routing.module';

import { CustomizePageComponent } from './containers';
import { SharedModule } from '../shared';
import { StoreModule } from '@ngrx/store';
import { remixReducer } from './+state/remix.reducer';

const CONTAINERS = [CustomizePageComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('remix', remixReducer),
    RemixRoutingModule
  ],
  declarations: [
    ...CONTAINERS
  ]
})
export class RemixModule { }
