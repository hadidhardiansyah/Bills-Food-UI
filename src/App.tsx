import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './components/Home/Home';
import RestaurantDetail from './components/Restaurant/RestaurantDetail';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import { CustomerRoute } from './Routers/CustomerRoute';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {/* <Navbar/> */}

      {/* <Home/> */}
      {/* <RestaurantDetail/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
