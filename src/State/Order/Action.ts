import { Dispatch } from 'redux';
import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    GET_USERS_ORDERS_FAILURE,
    GET_USERS_ORDERS_REQUEST,
    GET_USERS_ORDERS_SUCCESS,
} from './ActionTypes';
import { api } from '../../components/config/api';

export const createOrder = (reqData: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: CREATE_ORDER_REQUEST });

        try {
            const { data } = await api.post(`/api/order`, reqData.order, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });

            // if (data.payment_url) {
            //     window.location.href = data.payment_url;
            // }

            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
        }
    };
};

export const getUsersOrders = (jwt: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: GET_USERS_ORDERS_REQUEST });

        try {
            const { data } = await api.get(`/api/order/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error });
        }
    };
};
