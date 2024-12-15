import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { CustomerRoute } from './Routers/CustomerRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './components/State/Authentication/Action';
import { RootState } from './components/State/store';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootStateModel } from './models/storeModel';

function App() {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const jwt = localStorage.getItem('jwt');
  const {auth} = useSelector((store: RootStateModel ) => store)

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))
  }, [auth.jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
