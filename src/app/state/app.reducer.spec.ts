import { GetCoffeeListSuccess, GetCoffeeListFailed } from './app.actions';
import { appReducer } from './app.reducer';
import { appInitialState } from './app.init';

describe('App Reducer', () => {
    describe('GET_COFFEE_LIST_SUCCESS', () => {
        it('should return list of coffee', () => {
            // arrange
            const currentState = {
                ...appInitialState
            };

            const expectedState = {
                ...appInitialState,
                coffeeList: [
                    { name: 'coffee aaa', price: 99, recipe: [] }
                ]
            };

            // action
            const action = new GetCoffeeListSuccess([
                { name: 'coffee aaa', price: 99, recipe: [] }
            ]);
            const actual = appReducer(currentState, action);

            // assert
            expect(actual).toEqual(expectedState);
        });
    });

    describe('GET_COFFEE_LIST_FAILED', () => {
        it('should return empty list', () => {
            // arrange
            const currentState = {
                ...appInitialState,
                coffeeList: [
                    { name: 'coffee efg', price: 88, recipe: [] }
                ]
            };

            const expectedState = {
                ...appInitialState,
                coffeeList: []
            };

            // action
            const action = new GetCoffeeListFailed();
            const actual = appReducer(currentState, action);

            // assert
            expect(actual).toEqual(expectedState);
        });
    });
});
