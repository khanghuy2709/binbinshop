
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../action/productAction';
import Card from '../component/Card';
import Test from '../component/Test1';

export default function SearchScreen(props) {
    const {
        name = 'all',
      
      } = useParams();

      
  const dispatch = useDispatch();
  const {products}= useSelector((state)=>(state.productList1))


console.log(products)



useEffect(() => {
    dispatch(
      listProducts({
   
        name: name !== 'all' ? name : '',
       
      })
    );
  }, [dispatch,name]);
    return (
        <div>

             {products.length === 0 && (
                <h2>Ko tìm thấy!!!</h2>
              )}
             {products.length > 0 && (
                <h2>{products.length} sản phẩm </h2>
              )}
            <div className="a1">
                    {products.map((x)=>(
                    <Card  key={x._id} cart={x} > </Card>)
                    )}
            </div>
     
        </div>
    )
}
