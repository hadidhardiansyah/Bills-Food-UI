import { Box, Modal } from '@mui/material'
import React, { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { boolean } from 'yup'
import { style } from '../Cart/Cart'
import { RegisterForm } from './RegisterForm'
import { LoginForm } from './LoginForm'

interface AuthProps {
  
}

export const Auth: FC<AuthProps> = ({  }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnClose = () => {
        navigate('/');
    };

  return (
    <>
     <Modal
        open={
            location.pathname === '/account/register' || 
            location.pathname === '/account/login'
        }
        onClose={handleOnClose}
     >
        <Box sx={style}>
            {
                location.pathname === '/account/register' ?
                <RegisterForm/> : <LoginForm/>
            }
        </Box>
    </Modal>   
    </>
  )
}