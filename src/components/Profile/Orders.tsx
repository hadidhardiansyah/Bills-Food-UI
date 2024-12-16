import React, { FC } from 'react';
import { OrderCard } from './OrderCard';

interface OrdersProps {}

export const Orders: FC<OrdersProps> = ({}) => {
    return (
        <div className="flex items-center flex-col">
            <h1 className="text-xl text-center py-7 font-semibold">
                My Orders
            </h1>
            <div className="space-y-5 w-full lg:w-1/2">
                {[1, 2, 3].map((order) => (
                    <OrderCard />
                ))}
            </div>
        </div>
    );
};
