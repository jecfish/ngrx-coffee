import { employeeAdapter } from './barista.init';
import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { BaristaState, Barista } from './barista.interfaces';

const {
    // select the array of employees
    selectAll,

    // select the total employee count
    selectTotal
} = employeeAdapter.getSelectors();

export const selectBaristaState = createFeatureSelector<Barista>('barista');
export const selectEmployeeEnt = createSelector(selectBaristaState, (x: Barista) => x.employeesEnt);
export const selectAllEmployees = createSelector(selectEmployeeEnt, selectAll);
export const selectAllEmployeesTotal = createSelector(selectEmployeeEnt, selectTotal);
