import { Action } from '@ngrx/store';

/* remix */

export class NextRunningNo implements Action {
    readonly type = 'NEXT_RUNNING_NO';
    constructor() { }
}

/* export types */

export type RemixAction =
    | NextRunningNo;

