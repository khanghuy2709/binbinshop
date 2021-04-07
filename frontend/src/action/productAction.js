import axios from 'axios'


export  const producAction =  () => async (dispatch) =>  {

    dispatch({
        type: "PRODUCT_LIST_REQUEST",
      });


    try {
        const { data } = await axios.get('/showall');
        dispatch({ type: "resquet_product", payload: data});
      } catch (error) {
        dispatch({ type: 'PRODUCT_LIST_FAIL', payload: 'error.message' });
      }
    
    

};
export const detalsProduct = (productId)=> async(dispatch)=>{
 
  try {
    const {data} =await axios.get(`/show/${productId}`);
    dispatch({ type: "detals_product", payload: data });
  }  catch (error) {
    dispatch({ type: 'PRODUCT_LIST_FAIL', payload: 'error.message' });
  }
};

export const listProducts = ({
  
  name = '',
 
}) => async (dispatch) => {
  dispatch({
    type: 'PRODUCT_LIST_REQUEST1',
  });
  try {
    const { data } = await axios.get(
      `/show?name=${name}`
    );
    dispatch({ type: 'PRODUCT_LIST_SUCCESS1', payload: data });
  } catch (error) {
    dispatch({ type: 'PRODUCT_LIST_FAIL1', payload: error.message });
  }
};


