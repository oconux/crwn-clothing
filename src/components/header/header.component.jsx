import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { Link as RouterLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, abcName, fruit}) => (
  <div className='header'>
    <RouterLink className='logo-container' to='/'>
      <Logo className='logo' />
    </RouterLink>

    <div className='options'>
      <RouterLink className='option' to='/shop'>SHOP</RouterLink>
      <RouterLink className='option' to='/contact'>CONTACT</RouterLink>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()} >Sign Out {currentUser.email} | {abcName} | {fruit}</div>
        :
        <RouterLink className='option' to='/signin'>Sign In</RouterLink>
      }

    </div>

  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  abcName: state.user.abcName

})

export default connect(mapStateToProps)(Header);
