export interface App {
    // define state here
    coffeeList: Coffee[];
    cart: { name: string; quantity: number }[];
}

export interface AppState {
    readonly app: App;
}

export interface Coffee {
    name: string;
    price: number;
    recipe: RecipeItem[];
}

export interface RecipeItem {
    name: string;
    quantity: number;
}
