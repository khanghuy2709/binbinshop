import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../action/userActions';

export default function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

  
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }

    return (
        
            <div className="form0">
        <h2>Đăng nhập</h2>
        <p>
          {loading && <div>Loading...</div>}
          {error && <div>ko tìm thấy   ! </div>}
        </p>
        <form onSubmit={submitHandler}>
          <div className="form1">
            <label htmlFor="uname"><b>Email</b></label>
            <input type="email" placeholder="Nhập Email" name="uname" onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="psw"><b>Mật khẩu</b></label>
            <input type="password" placeholder="Nhập Mật khẩu" name="psw"  onChange={(e) => setPassword(e.target.value)}  required />
            <button type="submit" className="phim1">Đăng nhập</button>
            <label>
              <input type="checkbox" defaultChecked="checked" name="remember" /> Ghi nhớ
            </label>
          </div>
          <div className="form1 flex1" style={{backgroundColor: '#f1f1f1'}}>
            <p>Tạo tài khoản mới?</p>
            <span className="psw"><Link style={{color:'blue'}}  to="/register"> Đăng ký </Link></span>
          </div>
        </form>
      </div>
        
    )
}
