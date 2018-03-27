import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as i from '../../state/app.interfaces';
import { Store } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { AddToCoffeeList, AddToCart, NextRunningNo } from '../../state/app.actions';

@Component({
  selector: 'app-customize-page',
  templateUrl: './customize-page.component.html',
  styleUrls: ['./customize-page.component.css']
})
export class CustomizePageComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  ingredients = [
    'espresso',
    'chocolate syrup',
    'steamed milk',
    'milk foam',
    'whipped cream',
    'water'
  ];

  private defaultCoffee = {
    name: '',
    price: 0,
    recipe: this.ingredients.map(x => ({ name: x, quantity: 0 }))
  };

  coffee = { ...this.defaultCoffee };

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<i.AppState>) { }

  ngOnInit() {
    const { template = '' } = this.route.snapshot.queryParams;
    this.store.select(x => ({
      template: x.app.coffeeList.find(c => c.name === template),
      runningNo: x.app.runningNo
    }))
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(x => {
        this.coffee = x.template ? { ...x.template } : { ...this.defaultCoffee };
        this.coffee.recipe = [...this.coffee.recipe, ...this.defaultCoffee.recipe
          .filter(w => !this.coffee.recipe.map(r => r.name).includes(w.name))];
        this.coffee.name = 'Special Cafe ' + x.runningNo.toString().padStart(2, '0');
        this.coffee.price = 20;
      });
  }

  addToCart(coffee: i.Coffee) {
    this.store.dispatch(new AddToCoffeeList([coffee]));
    this.store.dispatch(new AddToCart(coffee.name));
    this.store.dispatch(new NextRunningNo());
    this.router.navigateByUrl('/cart');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
