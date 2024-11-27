import React, { FC, useState } from 'react'
import { ProfileNavigation } from './ProfileNavigation';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import { Address } from './Address';
import { Favorites } from './Favorites';
import { Events } from './Events';
import { Orders } from './Orders';

interface ProfileProps {
  
}

const Profile: FC<ProfileProps> = ({  }) => {
    
    const [openSideBar, setOpenSideBar] = useState<boolean>(false);
    const handleClose = () => {
        setOpenSideBar(false);
      };

  return (
    <div>
        <div className='lg:flex justify-between'>
            <div className='sticky h-[80vh] lg:w-[20%]'>
                <ProfileNavigation open={openSideBar} handleClose={handleClose} />
            </div>
            <div className='lg:w-[80%]'>
                <Routes>
                    <Route path='/' element={<UserProfile/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/address' element={<Address/>}/>
                    <Route path='/favorites' element={<Favorites/>}/>
                    <Route path='/events' element={<Events/>}/>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Profile;