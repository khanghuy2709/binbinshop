import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {detailsOrder} from '../action/orderActions'

export default function OrderScreen(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsOrder(props.match.params.id));
        
        ;

      }, []);




    const orderDetails = useSelector(state => state.orderDetails);
    const { loading, order, error } = orderDetails;
   ;
     
    return   loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="order1">
        <h3>Thông tin chi tiết đơn hàng</h3>
        <div>
          <p>Số điện thoại: {order.phone} </p>
          <p>Địa chỉ:  {order.address}</p>
        </div>
        <div>
          <h3 style={{marginBottom: 0}}>giỏ hàng</h3>
          <p className="h44">Giá</p>
          {order.orderItems.map(x=> 

                    <div key={x._id} className="order2">
                    <div style={{maxWidth: '300px', display: 'flex'}}>
                      <div>
                        <img src={x.image} alt="none" style={{maxWidth: '100px'}} />
                      </div>
                      <p style={{marginLeft: '10px'}}> {x.name} <br />
                        <span>{x.qty}</span>
                      </p>
                    </div>
                    <p style={{fontSize: 'larger'}}>{x.price}</p>
                    </div>

          )}
               
        </div>
        <h3>Tổng giá tiền</h3>
        <p style={{fontSize: 'larger', textAlign: 'right'}}>{order.itemsPrice}</p>
      </div>

            <Link to="/profile"> 
            <button>Xem Đơn hàng đã đặt</button>
            </Link>
      
    </div>
}
