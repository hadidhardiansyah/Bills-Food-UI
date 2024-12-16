import React, { FC } from 'react';
import { EventCard } from './EventCard';

interface EventsProps {}

export const Events: FC<EventsProps> = ({}) => {
    return (
        <div className="mt-5 px-5 flex flex-wrap gap-5">
            {[1, 2, 3].map((event) => (
                <EventCard />
            ))}
        </div>
    );
};
