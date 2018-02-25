import * as i from './app.interfaces';
import * as a from './app.action';
import { appInitialState } from './app.init';

export function appReducer(state: i.App, action: a.AppAction): i.App {
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

        default: {
            return state;
        }
    }
}
