import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as i from '../../+state/barista.interfaces';
import { Store, select } from '@ngrx/store';
import { take, map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { AddToCoffeeList, AddToCart } from '../../../../state/app.actions';
import { LoadEmployees, DeleteEmployee, AddEmployees, AddEmployee } from '../../+state/barista.actions';
import { selectAllEmployees, selectAllEmployeesTotal } from '../../+state/barista.selectors';

@Component({
  selector: 'app-employee-list-page',
  templateUrl: './employee-list-page.component.html',
  styleUrls: ['./employee-list-page.component.css']
})
export class EmployeeListPageComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  employees$ = this.store.pipe(select(selectAllEmployees));
  total$ = this.store.pipe(select(selectAllEmployeesTotal));

  private get staticList() {
    return [
      { name: 'Jenny', age: 22 },
      { name: 'Ali', age: 21 },
      { name: 'Chris', age: 28 },
      { name: 'Celine', age: 19 },
    ];
  }

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<i.BaristaState>) { }

  ngOnInit() {

    this.employees$.pipe(
      map(x => !!x.length),
      take(1),
    ).subscribe(x => {
      if (x) {
        return;
      }

      this.store.dispatch(new AddEmployees({
        employees: this.staticList
      }));
    });

  }

  remove(id: string) {
    this.store.dispatch(new DeleteEmployee({ id }));
  }

  reset() {
    this.store.dispatch(new LoadEmployees({
      employees: this.staticList
    }));
  }

  add(name, age) {
    this.store.dispatch(new AddEmployee({
      employee: { name, age }
    }));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
