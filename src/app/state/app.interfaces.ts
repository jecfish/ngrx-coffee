export interface AppState {
    readonly app: App; // module
}

export interface App {
    // define "tables" here
    coffeeList: Coffee[];
    cart: { name: string; quantity: number }[];
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
