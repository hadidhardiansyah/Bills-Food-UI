import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { CustomerRoute } from './Routers/CustomerRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './State/Authentication/Action';
import { RootState } from './State/store';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

function App() {
    const dispatch =
        useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
    const jwt = localStorage.getItem('jwt');
    const auth = useSelector((store: RootState) => store.auth);

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(auth.jwt || jwt));
        } else {
            console.log('Token not found in local storage');
        }
    }, [auth.jwt]);
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <CustomerRoute />
        </ThemeProvider>
    );
}

export default App;
