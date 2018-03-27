import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as i from '../../state/app.interfaces';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { AddToCart, RemoveOneCartItem, RemoveCartItem } from '../../state/app.actions';

@Component({
  selector: 'app-cart2-page',
  templateUrl: './cart2-page.component.html',
  styleUrls: ['./cart2-page.component.css']
})
export class Cart2PageComponent implements OnInit {

  cartList$ = this.store
    .pipe(
      // list of cart coffee object
      select(x => x.app.cart.map(item => {
        // get coffee object by name
        const { name, price, recipe } = x.app.coffeeList.find(c => c.name === item.name);

        return {
          name,
          quantity: item.quantity,
          unitPrice: price,
          price: item.quantity * price, // sum quantity
          recipe
        };
      })),
      // sort by name
      map(x => x.sort((a, b) => a.name < b.name ? -1 : 1))
    );

  constructor(private store: Store<i.AppState>, private router: Router) { }

  ngOnInit() {
  }

  addOneItem(name) {
    this.store.dispatch(new AddToCart(name));
  }

  removeOneItem(name) {
    this.store.dispatch(new RemoveOneCartItem(name));
  }

  removeItem(name) {
    this.store.dispatch(new RemoveCartItem(name));
  }

}
