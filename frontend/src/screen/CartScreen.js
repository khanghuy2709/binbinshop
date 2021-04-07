import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart ,removeFromCart} from '../action/CartAction';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
      ? Number(props.location.search.split('=')[1])
      : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
    }, [dispatch, productId, qty]);
  
    const removeFromCartHandler = (id) => {
      // delete action
      dispatch(removeFromCart(id));
    };
  
    const checkoutHandler = () => {
      props.history.push('/signin?redirect=dathang');
    };
  

    return (

      <div>
         <h1>Hàng hóa</h1>
        
      <div  style={{display: 'flex'}}>
        <div style={{width: '70%'}} >
          
          
            <ul>
              {cartItems.map((item) => (

                  


                <li key={item.product}>
                  
                  
                    <div  >
                      <div className="a">

                        <div style={{width: '130px', height: '130px'}}>
                            <img  style={{width: '100%'}} src={item.image} alt="xx"/>

                        </div>

                        <div className="a3">
                          <div>
                            <p>{item.name}</p>
                            <div style={{marginTop: '10px'}}>
                            <a style={{color: 'rgb(206, 9, 9)'}} className="a5" href="#" onClick={() => removeFromCartHandler(item.product)} >Xóa</a>
                            {/* <a className="a5" href="#">Để dành mua sau</a> */}

                            </div>

                          </div>

                        </div>

                        <div>
                <span className="a4">{item.price}đ</span> <br/>
                <span> số lượng {item.qty}</span>
              </div>
                      </div>

                    </div>

                  
                  
                </li>
              ))}
            </ul>

            <Link to="/">
             <button>Mua hàng tiếp</button>
            </Link>
          
        </div>

        <div style={{marginLeft:'10px'}} >
          <div >
            <ul>
              <li>
                <h2>
                  Tổng số ({cartItems.reduce((a, c) => a + c.qty, 0)} sản phẩm) : <br/> Tổng tiền
                  <p className="a4">
                  {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} đ
                  </p>
                  
                </h2>
              </li>
              <li>
                <button
                  type="button"
                  onClick={checkoutHandler}
                  style={{padding: '10px', fontSize: '16px', width: '100%', backgroundColor: '#f0c14b', backgroundImage: 'linear-gradient(0deg,  #f0c14b,rgb(244,210,125))', border: '1px solid #846a29'}}
                  disabled={cartItems.length === 0}
                >
                  Đặt hàng
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }