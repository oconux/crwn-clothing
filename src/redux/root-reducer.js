import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import tonyReducer from './tony/tony.reducer';

export default combineReducers ({
  user: userReducer,
  cart: cartReducer,
  tony: tonyReducer
});
