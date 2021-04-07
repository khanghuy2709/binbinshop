import Axios from 'axios';
import Cookie from 'js-cookie';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get("/show/"+productId);
  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      name: data.ten,
      image: data.url,
      price: data.gia,
      
      product: data._id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: "CART_REMOVE_ITEM", payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));};