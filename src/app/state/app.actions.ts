import { Action } from '@ngrx/store';
import * as i from './app.interfaces';

export interface GetCoffeeList {
    type: 'GET_COFFEE_LIST';
    payload?: any;
}

export interface GetCoffeeListSuccess {
    type: 'GET_COFFEE_LIST_SUCCESS';
    payload: i.Coffee[];
}

export interface GetCoffeeListFailed {
    type: 'GET_COFFEE_LIST_FAILED';
    payload?: any;
}

export interface AddToCart {
    type: 'ADD_TO_CART';
    payload?: string;
}

export interface RemoveCartItem {
    type: 'REMOVE_CART_ITEM';
    payload: string;
}

export interface RemoveOneCartItem {
    type: 'REMOVE_ONE_CART_ITEM';
    payload: string;
}

export interface EmptyCart {
    type: 'EMPTY_CART';
}

/* extra - with remix */

export interface AddToCoffeeList {
    type: 'ADD_TO_COFFEE_LIST';
    payload: i.Coffee[];
}

export interface NextRunningNo {
    type: 'NEXT_RUNNING_NO';
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
    | AddToCoffeeList
    | NextRunningNo;

