import {
} from './barista.actions';
import { baristaReducer } from './barista.reducer';
import { baristaInitialState } from './barista.init';

describe('Barista Reducer', () => {
    describe('X', () => {
        it('should x', () => {
            // arrange
            const currentState = {
                ...baristaInitialState,
                runningNo: 4
            };

            const expectedState = {
                ...baristaInitialState,
                runningNo: 5
            };

            // action
            // const action = new NextRunningNo();
            // const actual = baristaReducer(currentState, action);

            // assert
            // expect(actual).toEqual(expectedState);
        });
    });
});
