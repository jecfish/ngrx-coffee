import * as i from './remix.interfaces';
import { RemixAction } from './remix.actions';
import { remixInitialState } from './remix.init';

export function remixReducer(state: i.Remix, action: RemixAction): i.Remix {
    switch (action.type) {
        case 'NEXT_RUNNING_NO': {

            const current = {
                runningNo: state.runningNo + 1
            };

            return { ...state, ...current };
        }

        /* default state */

        default: {
            return state || remixInitialState;
        }
    }
}
