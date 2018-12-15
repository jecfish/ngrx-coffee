import * as i from './barista.interfaces';
import { BaristaAction, BaristaActionTypes } from './barista.actions';
import { baristaInitialState, employeeAdapter } from './barista.init';

export function baristaReducer(state: i.Barista, action: BaristaAction): i.Barista {
    switch (action.type) {

        case BaristaActionTypes.ADD_EMPLOYEE: {
            return {
                ...state,
                employeesEnt: employeeAdapter.addOne(action.payload.employee, state.employeesEnt)
            };
        }

        case BaristaActionTypes.ADD_EMPLOYEES: {
            return {
                ...state,
                employeesEnt: employeeAdapter.addMany(action.payload.employees, state.employeesEnt)
            };
        }

        case BaristaActionTypes.DELETE_EMPLOYEE: {
            return {
                ...state,
                employeesEnt: employeeAdapter.removeOne(action.payload.id, state.employeesEnt)
            };
        }

        case BaristaActionTypes.LOAD_EMPLOYEES: {
            return {
                ...state,
                employeesEnt: employeeAdapter.addAll(action.payload.employees, state.employeesEnt)
            };
        }

        default: {
            return state || baristaInitialState;
        }
    }
}
