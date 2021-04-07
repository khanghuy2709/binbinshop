import Axios from "axios";
import Cookie from 'js-cookie';

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: 'USER_SIGNIN_REQUEST', payload: { email, password } });
    try {
      const { data } = await Axios.post("/users/signin", { email, password });
      dispatch({ type: 'USER_SIGNIN_SUCCESS', payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: 'USER_SIGNIN_FAIL', payload: error.message });
    }
  }
  
  const register = (name, email, password) => async (dispatch) => {
    dispatch({ type: 'USER_REGISTER_REQUEST', payload: { name, email, password } });
    try {
      const { data } = await Axios.post("/users/register", { name, email, password });
      dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data });
      dispatch({ type: 'USER_SIGNIN_SUCCESS', payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
      
    } catch (error) {
      dispatch({ type: 'USER_REGISTER_FAIL', payload: error.message });
    }
  }
  
  const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    localStorage.removeItem('cartItems');
    dispatch({ type: 'USER_LOGOUT' })
  }
  export { signin, register, logout, };