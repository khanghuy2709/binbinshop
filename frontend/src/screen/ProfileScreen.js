import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { listMyOrders } from '../action/orderActions';
import { useDispatch, useSelector } from 'react-redux';



export default function ProfileScreen(props) {

    const dispatch = useDispatch();
    const myOrderList = useSelector(state => state.myOrderList);
    const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;

    useEffect(() => {
      
        dispatch(listMyOrders());
       
      }, [])

    return (
        <div>
           <h2>Tất cả đơn hàng bạn đã đặt</h2>
            {
        loadingOrders ? <div>Loading...</div> :
          errorOrders ? <div>{errorOrders} </div> :
            <table className="customers">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DỊA CHỈ</th>
                  <th>GIÁ</th>
                  <th>CHI TIẾT</th>
                  
                </tr>
              </thead>
              <tbody>
                {orders.map(order => <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.address}</td>
                  <td>{order.itemsPrice}</td>
                
                  <td>
                    <Link style={{color:'blue'}} to={"/orders/" + order._id}>DETAILS</Link>
                  </td>
                </tr>)}
              </tbody>
            </table>
      }
        </div>
    )
}
