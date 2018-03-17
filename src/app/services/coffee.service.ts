import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i from '../state/app.interfaces';
import { delay } from 'rxjs/operators';

@Injectable()
export class CoffeeService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<i.Coffee[]>('assets/list.json').pipe(
      delay(1500)
    );
  }

}
