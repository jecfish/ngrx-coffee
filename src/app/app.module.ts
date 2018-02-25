import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { appReducer } from './state/app.reducer';
import { appInitialState } from './state/app.init';
import { AppEffects } from './state/app.effects';
import { CoffeeService } from './services/coffee.service';


@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }, { initialState: { app: appInitialState} }),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [AppEffects, CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
