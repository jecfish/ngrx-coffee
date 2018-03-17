import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs/observable/combineLatest';
import * as i from '../../state/app.interfaces';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  private coffeeList$ = this.store.select(x => x.app.coffeeList);
  private cart$ = this.store.select(x => x.app.cart);

  total$ = combineLatest(this.coffeeList$, this.cart$).pipe(
    map(([list, cart]) => cart.map(c => list.find(x => x.name === c).price)),
    map(x => x.reduce((acc, curr) => acc + curr, 0))
  );

  constructor(private store: Store<i.AppState>, private router: Router) { }

  ngOnInit() {
  }

  pay() {
    alert('Yay, order placed. Start a new order!');
    this.store.dispatch({ type: 'EMPTY_CART' });
    this.router.navigateByUrl('/menu');
  }

}
