import * as i from './app.interfaces';
import { AppAction } from './app.actions';
import { appInitialState } from './app.init';

export function appReducer(state: i.App, action: AppAction): i.App {
    switch (action.type) {
        case 'GET_COFFEE_LIST_SUCCESS': {
            const current = {
                coffeeList: action.payload
            };

            return { ...state, ...current };
        }

        case 'GET_COFFEE_LIST_FAILED': {
            const current = {
                coffeeList: []
            };

            return { ...state, ...current };
        }

        case 'ADD_TO_CART': {
            // find cart item by item name
            const { quantity = 0 } = state.cart.find(x => x.name === action.payload) || {};

            const current = {
                    cart: [
                        ...state.cart.filter(x => x.name !== action.payload),
                        {
                            name: action.payload, quantity: quantity + 1
                        }
                    ]
                };

            return { ...state, ...current };
        }

        case 'REMOVE_CART_ITEM': {
            const current = {
                cart: [...state.cart.filter(x => x.name !== action.payload)]
            };

            return { ...state, ...current };
        }

        case 'REMOVE_ONE_CART_ITEM': {
            const item = state.cart.find(x => x.name === action.payload);

            const current = {
                cart: [
                    ...state.cart.filter(x => x.name !== action.payload),
                    ...(item.quantity - 1 <= 0 ? [] : [{ name: item.name, quantity: item.quantity - 1 }])
                ]
            };

            return { ...state, ...current };
        }

        case 'EMPTY_CART': {
            const current = {
                cart: []
            };

            return { ...state, ...current };
        }

        /* extra, with remix */

        case 'ADD_TO_COFFEE_LIST': {
            const current = {
                coffeeList: [...state.coffeeList, ...action.payload]
            };

            return { ...state, ...current };
        }

        case 'NEXT_RUNNING_NO': {

            const current = {
                runningNo: state.runningNo + 1
            };

            return { ...state, ...current };
        }

        /* default state */

        default: {
            return state;
        }
    }
}
