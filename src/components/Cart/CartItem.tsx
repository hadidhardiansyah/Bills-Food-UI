import { Chip, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from 'react';

export const CartItem = () => {
    return (
        <div className="px-5">
            <div className="lg:flex items-center lg:space-x-5">
                <div>
                    <img
                        className="w-[5rem] h-[5rem] object-cover"
                        src="https://images.pexels.com/photos/29368032/pexels-photo-29368032/free-photo-of-delicious-gourmet-burger-with-fresh-ingredients.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="flex items-center justify-between lg:w-[70%]">
                    <div className="space-y-1 lg:space-y-3 w-full">
                        <p>Burger</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                                <IconButton>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div className="w-5 h-5 text-xs flex items-center justify-center">
                                    {5}
                                </div>
                                <IconButton>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>Rp.45,000</p>
                </div>
            </div>
            <div className="pt-3 space-x-2">
                {[1, 2, 3, 4].map((item) => (
                    <Chip label={'meal'} />
                ))}
            </div>
        </div>
    );
};
