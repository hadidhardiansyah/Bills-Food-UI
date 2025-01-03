import { combineReducers } from "redux";
import { authReducer } from "./Authentication/Reducer";
import cartReducer from "./Cart/Reducer";
import { ingredientReducer } from "./Ingredients/Reducer";
import menuItemReducer from "./Menu/Reducer";
import { orderReducer } from "./Order/Reducer";
import restaurantReducer from "./Restaurant/Reducer";
import restaurantsOrderReducer from "./RestaurantOrder/Reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantOrder: restaurantsOrderReducer,
    ingredient: ingredientReducer,
});

export type RootState = ReturnType<typeof rootReducer>;