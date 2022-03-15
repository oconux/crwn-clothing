import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { Link as RouterLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectTonyHeight, selectTonyWeight, selectTonyFood } from '../../redux/tony/tony.selectors';

import { setTonyHeight } from '../../redux/tony/tony.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden, height, weight, food, name }) => (

  <div className='header'>
    <RouterLink className='logo-container' to='/'>
      <Logo className='logo' />
    </RouterLink>

    <div className='options'>
      <span onClick={() => {console.log('hello')} }>clck me</span>
      <RouterLink className='option' to='/shop'>SHOP {height} & {weight} & {food[1]}</RouterLink>
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

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden,
  height:selectTonyHeight,
  weight: selectTonyWeight,
  food: selectTonyFood
});

const mapDispatchToProps = (dispatch) => ({
  setTonyHeight: () => dispatch(setTonyHeight('10ft'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
