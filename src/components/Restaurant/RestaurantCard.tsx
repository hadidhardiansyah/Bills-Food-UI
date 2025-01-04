import { Card, Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';
import { RestaurantResponseModel } from '../../models/restaurantModel';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../State/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { addToFavorite } from '../../State/Authentication/Action';
import { isPresentInFavorites } from '../config/logic';

interface RestaurantCardProps {
    restaurant: RestaurantResponseModel;
}

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const jwt = localStorage.getItem('jwt');
    const auth = useSelector((store: RootState) => store.auth);

    const handleAddToFavorite = () => {
        if (jwt) {
            dispatch(addToFavorite(jwt, restaurant.id));
        } else {
            console.log('Token not found in local storage');
        }
    };

    const handleNavigateToRestaurant = () => {
        if (!restaurant.open) {
            navigate(
                `/restaurant/${restaurant.address.city}/${restaurant.name}/${restaurant.id}`
            );
        }
    };

    return (
        <Card className="m-5 w-[18rem]">
            <div
                className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}
            >
                <img
                    className="w-full h-[10rem] rounded-t-md object-cover"
                    src={restaurant.images[0]}
                    alt=""
                />
                <Chip
                    size="small"
                    className="absolute top-2 left-2"
                    color={restaurant.open ? 'success' : 'error'}
                    label={restaurant.open ? 'open' : 'closed'}
                />
            </div>
            <div className="p-4 textPart lg:flex w-full justify-between">
                <div className="space-y-1">
                    <p
                        onClick={handleNavigateToRestaurant}
                        className="font-semibold text-lg cursor-pointer"
                    >
                        {restaurant.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {restaurant.description}
                    </p>
                </div>
                <div>
                    <IconButton onClick={handleAddToFavorite}>
                        {isPresentInFavorites(auth.favorites, restaurant) ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        )}
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default RestaurantCard;
