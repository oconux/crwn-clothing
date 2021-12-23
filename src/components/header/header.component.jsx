import React from 'react';
import './header.styles.scss';
import { Link as RouterLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => (
  <div className='header'>
    <RouterLink className='logo-container' to='/'>
      <Logo className='logo' />
    </RouterLink>

    <div className='options'>
      <RouterLink className='option' to='/shop'>SHOP</RouterLink>
      <RouterLink className='option' to='/contact'>CONTACT</RouterLink>
      {
        currentUser ?
        <div className='opiton' onClick={() => auth.signOut()} >Sign Out </div>
        :
        <RouterLink className='option' to='/signin'>Sign In</RouterLink>
      }
    </div>
  </div>
);

export default Header;
