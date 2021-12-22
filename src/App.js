import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {
  return (

    <Router>
      <div>

      <Header />

      <Routes>
        <Route exact path="/" element={<><HomePage /></>} />
        <Route exact path="/shop" element={<><ShopPage /></>} />
        <Route exact path="/signin" element={<><SignInAndSignUpPage /></>} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
