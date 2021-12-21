import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {
  return (

    <Router>
      <div>
      <Box sx={{m:2}}>
        <Button to="/" component={RouterLink} variant="contained" sx={{mr:2}}  >Home</Button>
        <Button to="/about" component={RouterLink} variant="contained" sx={{mr:2}} >About Us</Button>
        <Button to="/shop" component={RouterLink} variant="contained" >Shop</Button>
      </Box>

      
      <Routes>
        <Route exact path="/" element={<><HomePage /></>} />
        <Route exact path="/shop" element={<><ShopPage /></>} />


      </Routes>

      </div>
    </Router>
  );
}

export default App;
