
import React, { useState ,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../action/orderActions.js';


export default function PlaceOrderScreen(props) {

    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const cart = useSelector(state => state.cart);
    const orderCreate = useSelector(state => state.orderCreate);
    const { loading, success, error, order } = orderCreate;

    const { cartItems } = cart;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
   
    const dispatch = useDispatch();


    const placeOrderHandler = (e) => {
      e.preventDefault();
        // create an order
        dispatch(createOrder({
          orderItems: cartItems, itemsPrice,address,phone
          
        }));
      }

      useEffect(() => {
        if (success) {
          props.history.push("/orders/" + order._id);
          dispatch({ type: 'ORDER_CREATE_RESET' });
        }
    
      }, [dispatch, order, props.history, success]);

    return (
      <div className="form0">
        <h2>Người nhận hàng</h2>
      <form onSubmit={placeOrderHandler}>
        <div className="form1">
          <label htmlFor="uname"><b>Địa chỉ</b></label>
          <input type="text"  name="uname" onChange={(e) => setAddress(e.target.value)} required  />
          <label htmlFor="psw"><b>Số điện thoại</b></label>
          <input type="number"  name="psw" onChange={(e) => setPhone(e.target.value)} required />
          <button type="submit" className="phim1">Đặt hàng</button>
        </div>
      </form>
      
    </div>
    )
}
