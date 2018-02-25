import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i from '../state/app.interfaces';
import * as a from '../state/app.actions';
import { Store } from '@ngrx/store';
import { CoffeeService } from '../services/coffee.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  list$ = this.store.select(x => x.app.coffeeList);

  constructor(private coffeeSvc: CoffeeService, private store: Store<i.AppState>) { }

  ngOnInit() {
    this.store.dispatch({ type: 'GET_COFFEE_LIST' });
  }

  addToCart(name: string) {
    this.store.dispatch({ type: 'ADD_TO_CART', payload: name });
  }
}
