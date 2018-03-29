import { AppState } from '../../../state/app.interfaces';

export interface Remix {
    // define state here
    runningNo: number;
}

export interface RemixState extends AppState {
    readonly remix: Remix;
}
