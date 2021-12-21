import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {
  return (

    <Router>
      <div>
      <Box sx={{m:2}}>
        <Button to="/" component={RouterLink} variant="contained" sx={{mr:2}}  >Home</Button>
        <Button to="/about" component={RouterLink} variant="contained" >About Us</Button>
      </Box>

      <RouterLink to='/about' > About Usss </RouterLink>
      <Routes>
        <Route exact path="/" element={<><HomePage /></>} />

        <Route exact path="/about" element={
          <>
          <h1>Hello</h1>
          </>
        }
        />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
