import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import * as i from './barista.interfaces';

/* barista */

export enum BaristaActionTypes {
    LOAD_EMPLOYEES = '[Barista] Load Employees',
    ADD_EMPLOYEE = '[Barista] Add Employee',
    ADD_EMPLOYEES = '[Barista] Add Employees',
    DELETE_EMPLOYEE = '[Barista] Delete Employee',
}

export class LoadEmployees implements Action {
    readonly type = BaristaActionTypes.LOAD_EMPLOYEES;

    constructor(public payload: { employees: i.Employee[] }) { }
}

export class AddEmployee implements Action {
    readonly type = BaristaActionTypes.ADD_EMPLOYEE;

    constructor(public payload: { employee: i.Employee }) { }
}

export class AddEmployees implements Action {
    readonly type = BaristaActionTypes.ADD_EMPLOYEES;

    constructor(public payload: { employees: i.Employee[] }) { }
}

export class DeleteEmployee implements Action {
    readonly type = BaristaActionTypes.DELETE_EMPLOYEE;

    constructor(public payload: { id: string }) { }
}

/* export types */

export type BaristaAction =
    | LoadEmployees
    | AddEmployee
    | AddEmployees
    | DeleteEmployee;

