import { AnyAction, Dispatch } from 'redux';
import {
    ADD_TO_FAVORITE_FAILURE,
    ADD_TO_FAVORITE_REQUEST,
    ADD_TO_FAVORITE_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
} from './ActionTypes';
import axios from 'axios';
import { api, API_URL } from '../../components/config/api';
import { ThunkDispatch } from 'redux-thunk';
import {
    ReqUserLoginModel,
    ReqUserRegisterModel,
} from '../../models/authModel';

export const registerUser =
    (reqData: ReqUserRegisterModel) =>
    async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
        dispatch({ type: REGISTER_REQUEST });

        try {
            const { data } = await axios.post(
                `${API_URL}/auth/signup`,
                reqData.userData
            );

            if (data.jwt) localStorage.setItem('jwt', data.jwt);
            if (data.role === 'ROLE_RESTAURANT_OWNER') {
                reqData.navigate('/admin/restaurant');
            } else {
                reqData.navigate('/');
            }

            dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
        } catch (error) {
            dispatch({ type: REGISTER_FAILURE, payload: error });
            console.log('Error', error);
        }
    };

export const loginUser =
    (reqData: ReqUserLoginModel) => async (dispatch: Dispatch) => {
        dispatch({ type: LOGIN_REQUEST });

        try {
            const { data } = await axios.post(
                `${API_URL}/auth/signin`,
                reqData.userData
            );

            if (data.jwt) localStorage.setItem('jwt', data.jwt);
            if (data.role === 'ROLE_RESTAURANT_OWNER') {
                reqData.navigate('/admin/restaurant');
            } else {
                reqData.navigate('/');
            }

            dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
        } catch (error) {
            dispatch({ type: LOGIN_FAILURE, payload: error });
            console.log('Error', error);
        }
    };

export const getUser = (jwt: string) => async (dispatch: Dispatch) => {
    dispatch({ type: GET_USER_REQUEST });

    try {
        const { data } = await api.get(`${API_URL}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        dispatch({ type: GET_USER_SUCCESS, payload: data });
        console.log('user profile', data);
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error });
        console.log('Error', error);
    }
};

export const addToFavorite =
    (jwt: string, restaurantId: string) => async (dispatch: Dispatch) => {
        dispatch({ type: ADD_TO_FAVORITE_REQUEST });

        try {
            const { data } = await api.put(
                `${API_URL}/auth/restaurants/${restaurantId}/add-favorite`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error });
            console.log('Error', error);
        }
    };

export const logout = () => async (dispatch: Dispatch) => {
    try {
        localStorage.clear();
        dispatch({ type: LOGOUT });
    } catch (error) {
        console.log('Error', error);
    }
};
