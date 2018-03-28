import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemixRoutingModule } from './remix-routing.module';

import { CustomizePageComponent } from './containers';
import { SharedModule } from '../shared';
import { StoreModule } from '@ngrx/store';
import { remixReducer } from './+state/remix.reducer';
import { remixInitialState } from './+state/remix.init';

const CONTAINERS = [CustomizePageComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('remix', remixReducer, { initialState: remixInitialState }
    ),
    RemixRoutingModule
  ],
  declarations: [
    ...CONTAINERS
  ]
})
export class RemixModule { }
