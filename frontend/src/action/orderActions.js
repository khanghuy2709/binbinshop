import Axios from "axios";
import Cookie from 'js-cookie';

const createOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({ type: 'ORDER_CREATE_REQUEST', payload: order });
      const { userSignin: { userInfo } } = getState();
      const { data: { data: newOrder } } = await Axios.post("/orders", order, {
        headers: {
          Authorization: ' Bearer ' + userInfo.token
        }
      });
     
      dispatch({ type: 'ORDER_CREATE_SUCCESS', payload: newOrder });
      dispatch({ type: 'CART_EMPTY' });
      localStorage.removeItem('cartItems');
      
    } catch (error) {
      dispatch({ type: 'ORDER_CREATE_FAIL', payload: error.message });
    }
  }

  const listMyOrders = () => async (dispatch, getState) => {
    try {
      dispatch({ type: 'MY_ORDER_LIST_REQUEST' });
      const { userSignin: { userInfo } } = getState();
      const { data } = await Axios.get("/orders/mine/", {
        headers:
          { Authorization: 'Bearer ' + userInfo.token }
      });
      dispatch({ type: 'MY_ORDER_LIST_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'MY_ORDER_LIST_FAIL', payload: error.message });
    }
  }

 

  const detailsOrder = (orderId) => async (dispatch, getState) => {
    try {
      dispatch({ type: 'ORDER_DETAILS_REQUEST', payload: orderId });
      const { userSignin: { userInfo } } = getState();
      const { data } = await Axios.get("/orders/" + orderId, {
        headers:
          { Authorization: 'Bearer ' + userInfo.token }
      });
      dispatch({ type: 'ORDER_DETAILS_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'ORDER_DETAILS_FAIL', payload: error.message });
    }
  }

  export { createOrder,listMyOrders,detailsOrder };