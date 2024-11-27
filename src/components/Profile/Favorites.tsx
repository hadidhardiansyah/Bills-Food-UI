import React, { FC } from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'

interface FavoritesProps {
  
}

export const Favorites: FC<FavoritesProps> = ({  }) => {
  return (
    <div>
        <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
        <div className='flex flex-wrap justify-center'>
            {[1, 2, 3].map((restaurant) => <RestaurantCard/>)}
        </div>
    </div>
  )
}