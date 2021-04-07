import React from 'react'
import { Link } from 'react-router-dom';


export default function Card(prop) {
  


  const car=prop.cart

    return (

      

        <div >

     


        <div style={{margin: '0 20px 0 20px'}}>
        <div>
       <Link to={'/product/'+car._id}>
       <img src={car.url} alt="jhjhj" />
       </Link>
          
          
          
        </div>
        <div>
          <p style={{color: 'rgb(204,28,95)', fontWeight: 'bold'}}>{car.gia} <span style={{textDecoration: 'underline'}}>đ</span>
            <span style={{fontSize: '13px', color: 'black', fontWeight: 'normal'}}>    <span style={{textDecoration: 'line-through'}}> 800.000</span>  <span style={{textDecoration: 'underline'}}>đ</span> (giảm 20%) </span>
          </p>
          <p> <strong>  {car.ten}</strong> <br/>  <small>{car.mota}</small>  </p>
          <div className="rating">
            <span> <i className="fa fa-star" /> </span>
            <span> <i className="fa fa-star" /> </span>
            <span> <i className="fa fa-star" /> </span>
            <span> <i className="fa fa-star" /> </span>
            <span> <i className="fa fa-star-half-o" /> </span>
            <span style={{color: 'black', fontSize: '13px'}}>363</span>
          </div>
        </div>
        {/* <div>
          <a href="themgio">
          <button style={{padding: '10px', fontSize: '16px', width: '100%', backgroundColor: '#f0c14b', backgroundImage: 'linear-gradient(0deg,  #f0c14b,rgb(244,210,125))', border: '1px solid #846a29'}}>Thêm vào giỏ </button>
          </a>
        
        </div> */}
      </div>
        </div>
    )
}
