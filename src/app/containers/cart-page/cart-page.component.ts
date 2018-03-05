import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as i from '../../state/app.interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  // simple cart, with quantity only
  cartList$ = this.store.select(x => x.app.cart).pipe(
    map(x => x.reduce(this.groupCart, {})),
    map(x => Object.entries(x).map(([key, value]) => ({ key, value })))
  );

  constructor(private store: Store<i.AppState>) { }

  ngOnInit() {
  }

  private groupCart(acc, curr) {
    const obj = { [curr]: 0, ...acc };
    obj[curr] = obj[curr] + 1;
    return obj;
  }

}
