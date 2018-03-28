import { Action } from '@ngrx/store';
import * as i from './app.interfaces';

/* coffee list */

export class GetCoffeeList implements Action {
    readonly type = 'GET_COFFEE_LIST';
    constructor() { }
}

export class GetCoffeeListSuccess implements Action {
    readonly type = 'GET_COFFEE_LIST_SUCCESS';
    constructor(public payload: i.Coffee[]) { }
}

export class GetCoffeeListFailed implements Action {
    readonly type = 'GET_COFFEE_LIST_FAILED';
    constructor(public payload?: any) { }
}

/* cart */

export class AddToCart implements Action {
    readonly type = 'ADD_TO_CART';
    constructor(public payload: string) { }
}

export class RemoveCartItem implements Action {
    readonly type = 'REMOVE_CART_ITEM';
    constructor(public payload: string) { }
}

export class RemoveOneCartItem implements Action {
    readonly type = 'REMOVE_ONE_CART_ITEM';
    constructor(public payload: string) { }
}

export class EmptyCart implements Action {
    readonly type = 'EMPTY_CART';
    constructor() { }
}

/* extra - with remix */

export class AddToCoffeeList implements Action {
    readonly type = 'ADD_TO_COFFEE_LIST';
    constructor(public payload: i.Coffee[]) { }
}

/* export types */

export type AppAction =
    | GetCoffeeList
    | GetCoffeeListSuccess
    | GetCoffeeListFailed
    | AddToCart
    | RemoveCartItem
    | RemoveOneCartItem
    | EmptyCart
    | AddToCoffeeList;

