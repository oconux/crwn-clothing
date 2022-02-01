import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { createStructuredSelector } from 'reselect';
//import { Link as RouterLink } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';


import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
              ...snapShot.data()
            });
        });
      }

      setCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (

      <div>
        <Header  />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/signin" element={
            this.props.currentUser ?
              (
                <Navigate to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
          }
          />
        </Routes>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} lg={6} style={{backgroundColor:'red'}}>
            <ListItem>xs=8</ListItem>
          </Grid>
          <Grid item xs={12} sm={4} lg={6} style={{backgroundColor:'green'}}>
            <ListItem>xs=4</ListItem>
          </Grid>
          <Grid item xs={12} sm={4} lg={6} style={{backgroundColor:'orange'}}>
            <ListItem>xs=4</ListItem>
          </Grid>
          <Grid item xs={12} sm={8} lg={6} style={{backgroundColor:'yellow'}}>
            <ListItem>xs=8</ListItem>
          </Grid>
        </Grid>
        <Box>
          <Button variant="contained">Click Me</Button>
          <Button variant="contained">Click Me</Button>
          <Button variant="contained">Click Me</Button>
        </Box>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps =  dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
