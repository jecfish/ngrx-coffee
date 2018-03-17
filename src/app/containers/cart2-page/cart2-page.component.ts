import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as i from '../../state/app.interfaces';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';

@Component({
  selector: 'app-cart2-page',
  templateUrl: './cart2-page.component.html',
  styleUrls: ['./cart2-page.component.css']
})
export class Cart2PageComponent implements OnInit {
  // complete cart, with quantity, price, add, delete
  private coffeeList$ = this.store.select(x => x.app.coffeeList);
  private cart$ = this.store.select(x => x.app.cart);

  cartList$ = combineLatest(this.coffeeList$, this.cart$).pipe(
    map(([list, cart]) => cart.map(c => list.find(x => x.name === c))),
    map(x => x.reduce(this.groupCart, {})),
    map(x => Object.entries(x).map(([key, value]) => ({ key, value }))),
    map(x => x.sort((a, b) => a.key < b.key ? -1 : 1))
  );

  total$ = this.cartList$.pipe(
    map(x => x.map(g => (g.value as any).price)),
    map(x => x.reduce((acc, curr) => acc + curr, 0))
  );

  constructor(private store: Store<i.AppState>, private router: Router) { }

  ngOnInit() {
  }

  private groupCart(acc, curr) {
    const { name, price, recipe } = curr;
    const item = {
      name,
      unitPrice: price,
      recipe,
      quantity: 0,
      price: 0
    };

    const obj = { [name]: { ...item, }, ...acc };

    obj[name].quantity = obj[name].quantity + 1;
    obj[name].price = obj[name].price + price;

    return obj;
  }

  addOneItem(name) {
    this.store.dispatch({ type: 'ADD_TO_CART', payload: name });
  }

  removeOneItem(name) {
    this.store.dispatch({ type: 'REMOVE_ONE_CART_ITEM', payload: name });
  }

  removeItem(name) {
    this.store.dispatch({ type: 'REMOVE_CART_ITEM', payload: name });
  }

}
