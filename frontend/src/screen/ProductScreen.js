import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detalsProduct } from '../action/productAction';
import axios from 'axios'
import { addToCart } from '../action/CartAction';

export default function ProductScreen(props) {
    
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
   
    const productDetails = useSelector((state) => state.productDetals);
   
  console.log(typeof(productId))

    useEffect(() => {
        dispatch(detalsProduct (productId));
      }, []);
   
      
      const addToCartHandler = () => {
        props.history.push('/show/'+productId+'?qty='+qty);
      };
    
      
    return (
     
            <div>
                <Link to='/'>   <p className="quaylai">Quay lai</p> </Link>
       
        <div className="product" style={{display: 'flex' , justifyContent:'space-around'}}>
          <div>
            <img src={productDetails.url} alt="none" />
          </div>
          <div>
            <h3>{productDetails.ten}</h3>
            <h1>{productDetails.gia} ₫</h1>
            <p>Số Lượng</p>
      <div>
       <select
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                >
                              {[1,2,3,5,6].map(
                                (x) => (
                                  <option key={x } value={x}>
                                    {x}
                                  </option>
                                )
                )}
        </select>
        </div>
            <br />
            <button style={{padding: '10px', fontSize: '16px', width: '100%', backgroundColor: '#f0c14b', backgroundImage: 'linear-gradient(0deg,  #f0c14b,rgb(244,210,125))', border: '1px solid #846a29'}}
             onClick={addToCartHandler}
            >Chon Mua</button>
          </div>
        </div>
        <h3>THÔNG TIN CHI TIẾT</h3>
        <p>Cá ngừ trên 23%, bắp, nước, đậu đỏ, salad (ớt chuông, hành) trên 10%, đường, dấm, dầu hướng dương, muối, ớt, chất làm dày, mì chính.</p>
        <h3>MÔ TẢ SẢN PHẨM</h3>
        <p>Thương hiệu: Hạ Long (Việt Nam).
          Nơi sản xuất: Việt Nam.</p>
        <h3>ĐÁNH GIÁ SẢN PHẨM</h3>
      </div>
        
    )
}
