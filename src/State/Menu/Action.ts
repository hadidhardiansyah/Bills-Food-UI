import { Dispatch } from 'redux';
import {
    CREATE_MENU_ITEM_FAILURE,
    CREATE_MENU_ITEM_REQUEST,
    CREATE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
    UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
} from './ActionTypes';
import { api } from '../../components/config/api';

export const createMenuItem = ({ menu, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: CREATE_MENU_ITEM_REQUEST });

        try {
            const { data } = await api.post(`/api/admin/food`, menu, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
            console.log('created menu', data);
        } catch (error) {
            console.log('error', error);

            dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
        }
    };
};

export const getMenuItemsByRestaurantId = (reqData: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });

        try {
            const { data } = await api.get(
                `/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&non_vegetarian=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt}`,
                    },
                }
            );

            dispatch({
                type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
                payload: data,
            });
            console.log('get data menu by restaurant', data);
        } catch (error) {
            console.log('error', error);

            dispatch({
                type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
                payload: error,
            });
        }
    };
};

export const searchMenuItem = ({ keyword, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: SEARCH_MENU_ITEM_SUCCESS });

        try {
            const { data } = await api.get(`/api/food/search?name=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
            console.log('get menu item by keyword', data);
        } catch (error) {
            console.log('error', error);

            dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
        }
    };
};

// export const getAllIngredientsOfMenuItem = (reqData: any) => {
//     return async (dispatch: Dispatch) => {
//         // dispatch({type: });

//         try {
//             const { data } = await api.get(`/api/food/restaurant/${reqData.restaurantId}`, {
//                 headers: {
//                     Authorization: `Bearer ${reqData.jwt}`,
//                 },
//             });

//             // dispatch({type: , payload: data});
//             console.log('get all ingredients', data);
//         } catch (error) {
//             console.log('error', error);

//             // dispatch({type: , payload: error});
//         }
//     }
// }

export const updateMenuItemsAvailability = ({ foodId, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });

        try {
            const { data } = await api.put(
                `/api/admin/food/${foodId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            dispatch({
                type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
                payload: data,
            });
            console.log('update menu items avaibility', data);
        } catch (error) {
            console.log('error', error);

            dispatch({
                type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
                payload: error,
            });
        }
    };
};

export const deleteFoodAction = ({ foodId, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: DELETE_MENU_ITEM_REQUEST });

        try {
            const { data } = await api.delete(`/api/admin/food/${foodId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: foodId });
            console.log('delete food', data);
        } catch (error) {
            console.log('error', error);

            dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
        }
    };
};
