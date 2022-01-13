import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { Link as RouterLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <RouterLink className='logo-container' to='/'>
      <Logo className='logo' />
    </RouterLink>

    <div className='options'>
      <RouterLink className='option' to='/shop'>SHOP</RouterLink>
      <RouterLink className='option' to='/contact'>CONTACT</RouterLink>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()} >Sign Out</div>
        :
        <RouterLink className='option' to='/signin'>Sign In</RouterLink>
      }
      <CartIcon />
    </div>
    { hidden ? null : <CartDropdown /> }
  </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden

})

export default connect(mapStateToProps)(Header);
