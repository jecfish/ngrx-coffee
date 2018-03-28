import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CupComponent } from './components';

const APP_COMPONENTS = [CupComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...APP_COMPONENTS
  ],
  exports: [
    ...APP_COMPONENTS
  ]
})
export class SharedModule { }
