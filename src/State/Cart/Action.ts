import { Dispatch } from "redux"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionTypes"
import { api } from "../../components/config/api";

export const findCart = (token: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: FIND_CART_REQUEST });

        try {
            const response = await api.get(`/api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch({ type: FIND_CART_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FIND_CART_FAILURE, payload: error });
        }
    };
};

export const getAllCartItems = (reqData: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });

        try {
            const response = await api.get(`/api/carts/${reqData.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });    
            
            dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error });
        }
    };
};

export const addItemToCart = (reqData: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

        try {
            const { data } = await api.put(`/api/cart/add`, reqData.cartItem, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            })

            dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error });
        }
    };
};

export const updateCartItem = (reqData: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: UPDATE_CART_ITEM_REQUEST });

        try {
            const { data } = await api.put(`/api/cart-item/update`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            })

            dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error });
        }
    };
};

export const removeCartItem = ({ cartItemId, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: REMOVE_CART_ITEM_REQUEST });

        try {
            const { data } = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })

            dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error });
        }
    };
};

export const clearCartAction = () => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: CLEAR_CART_REQUEST });

        try {
            const { data } = await api.put(`/api/cart/clear`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                },
            })

            dispatch({ type: CLEAR_CART_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: CLEAR_CART_FAILURE, payload: error });
        }
    };
};


