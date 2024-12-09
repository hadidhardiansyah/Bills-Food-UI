import React, { FC } from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import EventIcon from '@mui/icons-material/Event';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { MenuModel } from '../../models/menuModel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { logout } from '../State/Authentication/Action';
import { RootState } from '../State/store';

interface ProfileNavigationProps {
    open: boolean;
    handleClose: () => void;
}

const menus: MenuModel[] = [
    {title: "Orders", icon: <ShoppingBagIcon/>},
    {title: "Favorites", icon: <FavoriteIcon/>},
    {title: "Address", icon: <AddReactionIcon/>},
    {title: "Payments", icon: <AccountBalanceWalletIcon/>},
    {title: "Notification", icon: <NotificationsActiveIcon/>},
    {title: "Events", icon: <EventIcon/>},
    {title: "Logout", icon: <LogoutIcon/>},
];

export const ProfileNavigation: FC<ProfileNavigationProps> = ({ open, handleClose }) => {
    
    const isSmallScreen: boolean = useMediaQuery('(max-width: 900px)');
    const navigate = useNavigate();
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
    const handleNavigate = (menu: MenuModel) => {
        if (menu.title === 'Logout') {
            dispatch(logout());
            navigate('/');
        } else {
            navigate(`/my-profile/${menu.title.toLowerCase()}`)
        }
    };

  return (
    <div>
        <Drawer
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        onClose={handleClose}
        open={isSmallScreen ? open : true}
        anchor='left'
        sx={{zIndex: -1, position: 'sticky'}}
        >
            <div 
                className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'
            >
                {menus.map((menu: MenuModel, i: number) => 
                    <>
                        <div 
                            className='px-5 flex items-center space-x-5 cursor-pointer'
                            onClick={() => handleNavigate(menu)}
                        >
                                {menu.icon}
                                <span>{menu.title}</span>
                        </div>
                        {i !== menus.length - 1 && <Divider/>}
                    </>
                )}
            </div>
        </Drawer>
    </div>
  )
}