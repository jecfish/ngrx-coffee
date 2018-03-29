import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AppState } from '../../../state/app.interfaces';

export interface Barista  {
    employeesEnt: EntityState<Employee>;
}

export interface BaristaState extends AppState {
    readonly barista: Barista;
}

export interface Employee {
    name: string;
    age: number;
}
