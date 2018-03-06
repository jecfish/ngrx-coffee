import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { appReducer } from './state/app.reducer';
import { appInitialState } from './state/app.init';
import { AppEffects } from './state/app.effects';
import { CoffeeService } from './services/coffee.service';
import { AppRoutingModule } from './app-routing.module';

import { ListPageComponent, CartPageComponent, Cart2PageComponent, CustomizePageComponent } from './containers';
import { HeaderComponent, CupComponent } from './components';

const APP_CONTAINERS = [ListPageComponent, CartPageComponent, Cart2PageComponent, CustomizePageComponent];
const APP_COMPONENTS = [HeaderComponent, CupComponent];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ app: appReducer }, { initialState: { app: appInitialState} }),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
  ],
  providers: [AppEffects, CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
