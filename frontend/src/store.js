import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productlist, productListReducer } from './reducer/producReducer';
import { productDetailsReducer } from './reducer/producReducer';
import {cartReducer} from'./reducer/CartReducer'
import {
  userSigninReducer,
  userRegisterReducer,
  
} from './reducer/userReducers';

import {
  orderCreateReducer,
 
  myOrderListReducer,
  orderDetailsReducer,
  
} from './reducer/orderReducers';



const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },

  userSignin: { userInfo },
};

const reducer = combineReducers({
  productList1: productListReducer,
  productList:  productlist,
  productDetals:productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  myOrderList: myOrderListReducer,
  orderDetails: orderDetailsReducer,



});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;