import { IngredientState } from '../model';
import {
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    CREATE_INGREDIENT_SUCCESS,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    GET_INGREDIENTS,
    UPDATE_STOCK,
} from './ActionTypes';

const initialState: IngredientState = {
    ingredients: [],
    update: null,
    categories: [],
};

export const ingredientReducer = (state = initialState, action: any): IngredientState => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return { ...state, ingredients: action.payload };
        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return { ...state, categories: action.payload };
        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, action.payload],
            };
        case CREATE_INGREDIENT_SUCCESS:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload],
            };
        case UPDATE_STOCK:
            return {
                ...state,
                update: action.payload,
                ingredients: state.ingredients.map((item: any) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        default:
            return state;
    }
};
