import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as i from '../../state/app.interfaces';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount$ = this.store.select(x => x.app.cart.length);
  isFeatureRemixOn = environment.features.remix;

  constructor(private store: Store<i.AppState>) { }

  ngOnInit() {
  }

}
