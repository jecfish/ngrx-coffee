export interface App {
    // define state here
    coffeeList: Coffee[];
    cart: Coffee[];
}

export interface AppState {
    readonly app: App;
}

export interface Coffee {
    name: string;
    recipe: RecipeItem[];
}

export interface RecipeItem {
    name: string;
    quantity: number;
}
