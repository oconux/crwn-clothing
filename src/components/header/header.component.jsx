import React from 'react';
import './header.styles.scss';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
  <div className='header'>
    <RouterLink className='logo-container' to='/'>
      <Logo className='logo' />
    </RouterLink>

    <div className='options'>
      <RouterLink className='option' to='/shop'>SHOP</RouterLink>
      <RouterLink className='option' to='/contact'>CONTACT</RouterLink>
    </div>
  </div>
);

export default Header;
