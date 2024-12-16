import { Button, Card } from '@mui/material';
import React, { FC } from 'react';

interface OrderCardProps {}

export const OrderCard: FC<OrderCardProps> = ({}) => {
    return (
        <Card className="flex justify-between items-center p-5">
            <div className="flex items-center space-x-5">
                <img
                    className="h-16 w-16"
                    src="https://images.pexels.com/photos/29368032/pexels-photo-29368032/free-photo-of-delicious-gourmet-burger-with-fresh-ingredients.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
                <div>
                    <p>Burger</p>
                    <p>Rp.49,000</p>
                </div>
            </div>
            <Button className="cursor-not-allowed">Completed</Button>
        </Card>
    );
};
