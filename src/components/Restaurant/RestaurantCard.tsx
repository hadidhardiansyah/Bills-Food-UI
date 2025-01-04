import { Card, Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';
import { RestaurantResponseModel } from '../../models/restaurantModel';

interface RestaurantCardProps {
    restaurant: RestaurantResponseModel;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
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
                    <p className="font-semibold text-lg">{restaurant.name}</p>
                    <p className="text-gray-500 text-sm">
                        {restaurant.description}
                    </p>
                </div>
                <div>
                    <IconButton>
                        {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default RestaurantCard;
