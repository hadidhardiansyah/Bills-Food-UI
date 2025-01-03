export interface AuthState {
    user: any | null;
    isLoading: boolean;
    error: string | null;
    jwt: string | null;
    favorites: any[];
    success: string | null;
}

export interface CartState {
    cart: any;
    cartItems: any[];
    loading: boolean;
    error: string | null;
    success?: string;
}

export interface IngredientState {
    ingredients: any[];
    update: any | null;
    categories: any[];
}

export interface MenuState {
    menuItems: any[];
    loading: boolean;
    error: string | null;
    search: any[];
    message: string | null;
}

export interface OrderState {
    loading: boolean;
    orders: any[];
    error: string | null;
}

export interface RestaurantState {
    restaurants: any[];
    usersRestaurant: any | null;
    restaurant: any | undefined;
    loading: boolean;
    error: any | null;
    events: any[];
    restaurantsEvents: any[];
    categories: any[];
}