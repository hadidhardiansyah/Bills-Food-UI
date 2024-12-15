import { Dispatch } from "redux"
import { api } from "../../config/api";
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENTS_FAILURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANTS_CATEGORY_FAILURE, GET_RESTAURANTS_CATEGORY_REQUEST, GET_RESTAURANTS_CATEGORY_SUCCESS, GET_RESTAURANTS_EVENTS_FAILURE, GET_RESTAURANTS_EVENTS_REQUEST, GET_RESTAURANTS_EVENTS_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionTypes";
import { string } from "yup";

export const getAllRestaurantsRequest = (token: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: GET_ALL_RESTAURANTS_REQUEST});

        try {
            const { data } = await api.get(`/api/restaurants`, {
               headers: {
                Authorization: `Bearer ${token}`,
               },
            });

            dispatch({type: GET_ALL_RESTAURANTS_SUCCESS, payload: data});
            console.log('all restaurant',  data);
        } catch (error) {
            console.log('catch error', error);
            
            dispatch({type: GET_ALL_RESTAURANTS_FAILURE, payload: error});
        }
    }
}

export const getRestaurantById = (reqData: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: GET_RESTAURANT_BY_ID_REQUEST});

        try {
            const response = await api.get(`/api/restaurants/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });

            dispatch({type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data});
        } catch (error) {
            console.log('error', error);
            
            dispatch({type: GET_RESTAURANT_BY_ID_FAILURE, payload: error});
        }
    }
}

export const getRestaurantByUserId = (jwt: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: GET_RESTAURANT_BY_USER_ID_REQUEST});

        try {
            const { data } = await api.get(`/api/admin/restaurant/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            
            dispatch({type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data});
            console.log('get restaurant by user id', data);
        } catch (error) {
            console.log('error', error);

            dispatch({type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error})            
        }
    }
}

export const createRestaurant = (reqData: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: CREATE_RESTAURANT_REQUEST});

        try {
            const { data } = await api.post(`/api/admin/restaurants`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });

            dispatch({type: CREATE_RESTAURANT_SUCCESS, payload: data});
            console.log('created restaurant', data);
        } catch (error) {
            console.log('error', error);

            dispatch({type: CREATE_RESTAURANT_FAILURE, payload: error})
        }
    }
}

export const updateRestaurant = ({ restaurantId, restauranData, jwt}: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_REQUEST});

        try {
            const res = await api.put(
                `/api/admin/restaurant/${restaurantId}`,
                restauranData,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                },
            );

            dispatch({type: UPDATE_RESTAURANT_SUCCESS, payload: res.data});
            console.log('update restaurant', res.data);
        } catch (error) {
            console.log('error', error);

            dispatch({type: UPDATE_RESTAURANT_FAILURE, payload: error});
        }
    }
}

export const deleteRestaurant = ({ restaurantId, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: DELETE_RESTAURANT_REQUEST});

        try {
            const res = await api.delete(`/api/admin/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId});
            console.log('delete restaurant', res.data);
        } catch (error) {
            console.log('error', error);

            dispatch({type: DELETE_RESTAURANT_FAILURE, payload: error});
        }
    }
}

export const updateRestaurantStatus = ({ restaurantId, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST});

        try {
            const res = await api.put(
                `/api/admin/restaurants/${restaurantId}/status`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    },
                },
            );

            dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data});
            console.log('update restaurant status', res.data);
        } catch (error) {
            console.log('error', error);
            
            dispatch({type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error});
        }
    }
}

export const createEventAction = ({ data, jwt, restaurantId }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: CREATE_EVENTS_REQUEST});

        try {
            const res = await api.post(
                `/api/admin/events/restaurant/${restaurantId}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                },
            );

            dispatch({type: CREATE_EVENTS_SUCCESS, payload: res.data});
            console.log('create event', res.data);
        } catch (error) {
            console.log('error', error);
            
            dispatch({type: CREATE_EVENTS_FAILURE, payload: error});
        }
    }
}

export const getAllEvents = ({ jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: GET_ALL_EVENTS_REQUEST});

        try {
            const res = await api.get(`/api/events`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({type: GET_ALL_EVENTS_SUCCESS, payload: res.data});
            console.log('get all event', res.data);
        } catch (error) {
            console.log('error', error);
            
            dispatch({type: GET_ALL_EVENTS_FAILURE, payload: error});
        }
    }
}

export const deleteEventAction = ({ eventId, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: DELETE_EVENTS_REQUEST});

        try {
            const res = await api.delete(`/api/admin/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            
            dispatch({type: DELETE_EVENTS_SUCCESS, payload: eventId});
            console.log('delete event', res.data);
        } catch (error) {
            console.log('error', error);

            dispatch({type: DELETE_EVENTS_FAILURE, payload: error});
        }
    }
}

export const getRestaurantsEvents = ({ restaurantId, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: GET_RESTAURANTS_EVENTS_REQUEST});

        try {
            const res = await api.get(
                `/api/admin/events/restaurant/${restaurantId}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                },
            );

            dispatch({type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: res.data});
            console.log('get restaurants event', res.data);
        } catch (error) {
            console.log('error', error);

            dispatch({type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error});
        }
    }
}

export const createCategotyAction = ({ reqData, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: CREATE_CATEGORY_REQUEST});

        try {
            const res = await api.post(`/api/admin/category`, reqData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({type: CREATE_CATEGORY_SUCCESS, payload: res.data});
            console.log('create category', res.data);
        } catch (error) {
            console.log('error', error);

            dispatch({type: CREATE_CATEGORY_FAILURE, payload: error});
        }
    }
}

export const getRestaurantsCategory = ({ restaurantId, jwt }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: GET_RESTAURANTS_CATEGORY_REQUEST});

        try {
            const res = await api.get(`/api/category/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            dispatch({type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: res.data});
            console.log('get restaurants category', res.data);
        } catch (error) {
            console.log('error', error);

            dispatch({type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error});
        }
    }
}