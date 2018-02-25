import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i from '../state/app.interfaces';
import * as a from '../state/app.action';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  list$;
  // coffeeList;

  constructor(private http: HttpClient, private store: Store<i.AppState>) { }

  ngOnInit() {
    this.list$ = this.store.select(x => x.app.coffeeList);
    this.getAll();
  }

  getAll() {
    this.http.get('assets/list.json').subscribe((x: i.Coffee[]) => {
      this.store.dispatch<a.GetCoffeeListSuccess>({ type: 'GET_COFFEE_LIST_SUCCESS', payload: x });
    });
  }

}
