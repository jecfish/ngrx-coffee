import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import * as i from './barista.interfaces';

export const employeeAdapter: EntityAdapter<i.Employee> = createEntityAdapter<i.Employee>({
    selectId: x => x.name,
    sortComparer: (x, y) => x.name.localeCompare(y.name)
});

export const baristaInitialState: i.Barista = {
    employeesEnt: employeeAdapter.getInitialState()
};
