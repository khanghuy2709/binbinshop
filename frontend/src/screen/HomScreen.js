import Card from "../component/Card"
import React, { useState ,useEffect} from 'react';
import Head from "../component/Head";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {producAction} from "../action/productAction"

export default  function HomScreen() {

    const dispatch = useDispatch()
    const cart = useSelector((state)=>(state.productList))
   
    
  
    useEffect(() => {
      dispatch(producAction());
    }, [])
   

    return (
        
        <div>
            <Head/>
            <div className="a0">
            <p className="p1">Giá Sốc</p>
            <ul>
                <li>
                    <a className="p2"  href="#" >Xem them sản phẩm  </a>
                </li>
                
            </ul>
            
        </div>
            <div className="a1">
      {cart.map((x)=>(
       <Card  key={x._id} cart={x} > </Card>)
        )}
      
      

      </div>
        </div>
    )
}
