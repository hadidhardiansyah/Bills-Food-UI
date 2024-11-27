import React, { FC } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '@mui/icons-material'
import RestaurantDetail from '../components/Restaurant/RestaurantDetail'
import Cart from '../components/Cart/Cart'
import Profile from '../components/Profile/Profile'

interface CustomerRouteProps {
  
}

export const CustomerRoute: FC<CustomerRouteProps> = ({  }) => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
        </Routes>
    </div>
  )
}