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

export type AppAction =
    | GetCoffeeList
    | GetCoffeeListSuccess
    | GetCoffeeListFailed
    | AddToCart;

