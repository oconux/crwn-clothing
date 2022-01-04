import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";

//import { Link as RouterLink } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              displayName: snapShot.displayName,
              ...snapShot.data()
            }
          });

          console.log(this.state);

        });

      }

      this.setState({currentUser: userAuth, userName: null});

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (

      <div>
        <Header currentUser={ this.state.currentUser }  welcomeMessage='Good to see you again, '/>

        <Routes>
          <Route exact path="/" element={<><HomePage /></>} />
          <Route exact path="/shop" element={<><ShopPage /></>} />
          <Route exact path="/signin" element={<><SignInAndSignUpPage /></>} />
        </Routes>
      </div>
    );
  }
}

export default App;
