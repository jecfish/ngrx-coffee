import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { CoffeeService } from './services/coffee.service';

import { appReducer } from './state/app.reducer';
import { appInitialState } from './state/app.init';
import { AppEffects } from './state/app.effects';

import { AppComponent } from './app.component';
import { ListPageComponent, CartPageComponent } from './containers';
import { HeaderComponent, PayComponent } from './components';
import { SharedModule } from './modules/shared';
import { App, AppState } from './state/app.interfaces';

const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];

const CONTAINERS = [ListPageComponent, CartPageComponent];
const COMPONENTS = [HeaderComponent, PayComponent];

@NgModule({
  declarations: [
    AppComponent,
    ...CONTAINERS,
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(
      { app: appReducer },
      {
        initialState: { app: appInitialState },
        metaReducers
      }),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedModule,
    AppRoutingModule,
  ],
  providers: [AppEffects, CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
