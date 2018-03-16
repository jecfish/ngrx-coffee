import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i from '../../state/app.interfaces';
import * as a from '../../state/app.actions';
import { Store } from '@ngrx/store';
import { CoffeeService } from '../../services/coffee.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  list$ = this.store.select(x => x.app.coffeeList);

  constructor(private coffeeSvc: CoffeeService, private router: Router, private store: Store<i.AppState>) { }

  ngOnInit() {
    this.store.select(x => !!x.app.coffeeList.length)
      .pipe(
        take(1)
      )
      .subscribe(x => {
        if (x) { return; }
        this.store.dispatch({ type: 'GET_COFFEE_LIST' });
      });
  }

  addToCart(name: string) {
    this.store.dispatch({ type: 'ADD_TO_CART', payload: name });
  }

  addToCartAndCheckout(name: string) {
    this.addToCart(name);
    this.router.navigateByUrl('/cart');
  }
}
