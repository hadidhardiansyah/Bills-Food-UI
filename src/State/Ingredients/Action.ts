import { Dispatch } from 'redux';
import { api } from '../../components/config/api';
import {
    CREATE_INGREDIENT_CATEGORY_FAILURE,
    CREATE_INGREDIENT_CATEGORY_REQUEST,
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    CREATE_INGREDIENT_FAILURE,
    CREATE_INGREDIENT_REQUEST,
    CREATE_INGREDIENT_SUCCESS,
    GET_INGREDIENT_CATEGORY_FAILURE,
    GET_INGREDIENT_CATEGORY_REQUEST,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    GET_INGREDIENTS,
    UPDATE_STOCK,
} from './ActionTypes';

export const getIngredientsOfRestaurant = ({ id, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await api.get(
                `/api/admin/ingredients/restaurant/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            dispatch({ type: GET_INGREDIENTS, payload: response.data });
        } catch (error) {
            console.log('error', error);
        }
    };
};

export const createIngredient = ({ data, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: CREATE_INGREDIENT_REQUEST });

        try {
            const response = await api.post(`/api/admin/ingredients`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({
                type: CREATE_INGREDIENT_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({ type: CREATE_INGREDIENT_FAILURE, payload: error });
        }
    };
};

export const createIngredientCategory = ({ data, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });

        try {
            const response = await api.post(
                `/api/admin/ingredients/category`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            dispatch({
                type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: CREATE_INGREDIENT_CATEGORY_FAILURE,
                payload: error,
            });
        }
    };
};

export const getIngredientCategory = ({ id, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: GET_INGREDIENT_CATEGORY_REQUEST });

        try {
            const response = await api.get(
                `/api/admin/ingredients/restaurant/${id}/category`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            dispatch({
                type: GET_INGREDIENT_CATEGORY_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({ type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error });
        }
    };
};

export const updateStockOfIngredient = ({ id, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await api.put(
                `/api/admin/ingredients/${id}/stoke`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            dispatch({ type: UPDATE_STOCK, payload: data });
        } catch (error) {
            console.log('error', error);
        }
    };
};
