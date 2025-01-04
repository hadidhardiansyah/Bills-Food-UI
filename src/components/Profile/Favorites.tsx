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
    const auth = useSelector((store: RootState) => store.auth);

    return (
        <div>
            <h1 className="py-5 text-xl font-semibold text-center">
                My Favorites
            </h1>
            <div className="flex flex-wrap justify-center">
                {auth.favorites.map((restaurant) => (
                    <RestaurantCard restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};
