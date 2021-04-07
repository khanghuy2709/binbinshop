import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../action/userActions';

export default function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  console.log(redirect)
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
   
  }, [props.history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }


    return (
        <div className="form0">
        <h2>Đăng ký</h2>
        <p>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </p>
        <form onSubmit={submitHandler}>
          <div className="form1">
            <label htmlFor="uname"><b>Tên</b></label>
            <input type="text" placeholder="Nhập Tên" name="uname" onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="uname"><b>Email</b></label>
            <input type="email" placeholder="Nhập Email" name="uname" onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="psw"><b>Mật khẩu</b></label>
            <input type="password" placeholder="Nhập Mật khẩu" name="psw"  onChange={(e) => setPassword(e.target.value)} required />
            <label htmlFor="psw"><b> Nhập lại mật khẩu</b></label>
            <input type="password" placeholder="Nhập lại Mật khẩu" name="psw" onChange={(e) => setRePassword(e.target.value)} required />
            <button type="submit" className="phim1">Đăng ký</button>
          </div>
          <div className="form1 flex1" style={{backgroundColor: '#f1f1f1'}}>
            <span className="psw">bạn đã có tài khoản<Link style={{color:'blue'}} to="/signin"> Đăng nhập </Link></span>
          </div>
        </form>
      </div>
    )
}
