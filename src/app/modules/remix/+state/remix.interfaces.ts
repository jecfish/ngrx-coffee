import { App } from '../../../state/app.interfaces';

export interface Remix {
    // define state here
    runningNo: number;
}

export interface RemixState {
    readonly app: App;
    readonly remix: Remix;
}
