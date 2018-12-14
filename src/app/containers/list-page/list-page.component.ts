import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i from '../../state/app.interfaces';
import { Store, select } from '@ngrx/store';

import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GetCoffeeList, AddToCart } from '../../state/app.actions';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  // .filter(c => !c.name.startsWith('Special'))
  list$ = this.store.pipe(
    select(x => x.app.coffeeList)
  );
  isFeatureRemixOn = environment.features.remix;

  constructor(private router: Router, private store: Store<i.AppState>) { }

  ngOnInit() {
    this.store
      .pipe(
        select(x => !!x.app.coffeeList.length),
        take(1)
      )
      .subscribe(x => {
        if (x) { return; }
        this.store.dispatch(new GetCoffeeList());
      });
  }

  addToCart(name: string) {
    this.store.dispatch(new AddToCart(name));
  }

  addToCartAndCheckout(name: string) {
    this.addToCart(name);
    this.router.navigateByUrl('/cart');
  }
}
