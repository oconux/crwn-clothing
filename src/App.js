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

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      userName: null
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

      <Router>
        <div>

        <Header currentUser={ this.state.currentUser } name={this.state.userName} />

        <Routes>
          <Route exact path="/" element={<><HomePage /></>} />
          <Route exact path="/shop" element={<><ShopPage /></>} />
          <Route exact path="/signin" element={<><SignInAndSignUpPage /></>} />
        </Routes>

        </div>
      </Router>
    );
  }
}

export default App;
