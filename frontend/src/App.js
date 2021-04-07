
import React, { useState ,useEffect} from 'react';
import HomScreen from './screen/HomScreen'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'
import SigninScreen from './screen/SigninScreen'
import RegisterScreen from './screen/RegisterScreen'
import PlaceOrderScreen from './screen/PlaceOrderScreen'
import OrderScreen from './screen/OrderScreen';
import ProfileScreen from './screen/ProfileScreen';
import SearchScreen from './screen/SearchScreen';
import { logout } from './action/userActions';
import SearchBox from './component/SearchBox';



function App(props) {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;



  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    
    
  }


  return (
    <BrowserRouter>

    

    <div>

      
    <div className="c">
        <div className="b">
          <Link to='/'>
          <div className="b1">
            <img className="b2" src="linux.svg" alt="" />
          </div>
          </Link>
          <div>
            <p className="h1">BINBIN SHOP</p>
            <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
            </div>
            <div className="b3">
              <ul>
                <li><Link to="/search/name/to">giày nike</Link></li>
              </ul>
              <ul>
                <li><Link to="/search/name/san">giày nike</Link></li>
              </ul>
              <ul>
                <li><Link to="/search/name/ui">giày cho bé</Link></li>
              </ul>
              <ul>
                <li><Link to="/search/name/k">giày đi ngủ</Link></li>
              </ul>
            </div>
          </div>
          <div style={{display: 'flex', marginTop: '6rem', marginLeft: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'flex-start'}}>
              <div>
                <img src="user-64.png" alt="" style={{width: '2.5rem'}} />
              </div>
              <div>
                { userInfo ? (
                 <Link to="/profile">{userInfo.name}</Link>
                
               
                ):(  <Link to="/signin" style={{padding: 0}} href="#">
                  <p style={{fontSize: '1.4rem'}}>
                    Đăng nhập 
                  </p>
                </Link >)}
                  <br/>
                <Link to="/signin" >  
                {userInfo ?  ( <button  type="button" onClick={handleLogout} >đăng xuất</button>):("") } </Link>
               

               
              </div>
            </div>
            <div className='gio' style={{display: 'flex',}}>
            <Link to="/show/" style={{display:'flex'}}>
              <div>
                <img style={{width: '2.5rem'}} src="shopping-cart.svg" alt="" />
              </div>
              
                <p className='p12' style={{fontSize: '1.4rem'}}>Giỏ hàng</p>
              

              
              
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            </div>
          </div>
        </div>
      </div>
    
    
        <div>
    

        <main>
        <Route path="/show/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomScreen} exact></Route>
          <Route path="/signin" component={SigninScreen} exact></Route>
          <Route path="/register" component={RegisterScreen} ></Route>
          <Route path="/dathang" component={PlaceOrderScreen }/>
          <Route path="/orders/:id" component={OrderScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>

        </main>

        </div>


      
       
    </div>
    
    </BrowserRouter>
  );
}

export default App;
