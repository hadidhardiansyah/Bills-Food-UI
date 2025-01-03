import React, { FC, useEffect } from 'react';
import RestaurantCard from '../Restaurant/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../State/rootReducer';
import { AnyAction } from 'redux';
import { getAllRestaurantsAction } from '../../State/Restaurant/Action';

interface FavoritesProps {}
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export const Favorites: FC<FavoritesProps> = ({}) => {

    // sementara mengambil all restaurant
    const dispatch = useDispatch<AppDispatch>();
    const jwt = localStorage.getItem('jwt');

    const restaurants  = useSelector((store: RootState) => store.restaurant.restaurants);    

    useEffect(() => {
        if (jwt) {
            dispatch(getAllRestaurantsAction(jwt));
        } else {
            console.log('Token not found in local storage');
        }
    }, [jwt, dispatch]);

    return (
        <div>
            <h1 className="py-5 text-xl font-semibold text-center">
                My Favorites
            </h1>
            <div className="flex flex-wrap justify-center">
                {restaurants.map((restaurant) => (
                    <RestaurantCard item={restaurant}/>
                ))}
            </div>
        </div>
    );
};
