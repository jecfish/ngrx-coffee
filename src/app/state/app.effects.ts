import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { CoffeeService } from '../services/coffee.service';
import * as i from './app.interfaces';
import { AppAction, GetCoffeeListSuccess, GetCoffeeListFailed } from './app.actions';

@Injectable()
export class AppEffects {
    @Effect()
    getCoffeeListStart$: Observable<Action> = this.actions$
        .pipe(
            ofType('GET_COFFEE_LIST'),
            switchMap(() => {
                return this.coffeeSvc.getAll()
                    .pipe(
                        map(x => new GetCoffeeListSuccess(x)),
                        catchError(() => of(new GetCoffeeListFailed()))
                    );
            })
        );

    constructor(private actions$: Actions<AppAction>,
        private coffeeSvc: CoffeeService,
        private _store: Store<i.AppState>) { }
}
