import React, { useEffect } from 'react';
import './Home.css';
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../State/store';
import { AnyAction } from 'redux';
import { getAllRestaurantsAction } from '../../State/Restaurant/Action';

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const jwt = localStorage.getItem('jwt');

    const restaurants = useSelector(
        (store: RootState) => store.restaurant.restaurants
    );

    useEffect(() => {
        if (jwt) {
            dispatch(getAllRestaurantsAction(jwt));
        } else {
            console.log('Token not found in local storage');
        }
    }, [jwt, dispatch]);

    return (
        <div className="pb-10">
            <section className="banner -z-50 relative flex flex-col justify-center items-center">
                <div className="w-[50vw] z-10 text-center">
                    <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
                        Bills Food
                    </p>
                    <p className="z-10 text-gray-300 text-xl lg:text-4xl">
                        Taste the Convenience: Food, Fast and Delivered.
                    </p>
                </div>

                <div className="cover absolute top-0 left-0 right-0"></div>

                <div className="fadout"></div>
            </section>
            <section className="p-10 lg:py-10 lg:px-20">
                <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
                    Top Meals
                </p>
                <MultiItemCarousel />
            </section>
            <section className="px-5 lg:px-20 pt-10">
                <h1 className="text-2xl font-semibold text-gray-400 pb-8">
                    Order From Our Handpicked Favorites
                </h1>
                <div className="flex flex-wrap items-center justify-around gap-5">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard restaurant={restaurant} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
