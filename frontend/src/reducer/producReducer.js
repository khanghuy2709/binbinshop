
export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST1':
      return { loading: true, products: []  };
    case 'PRODUCT_LIST_SUCCESS1':
      return {
        loading: false,
        products: action.payload.products,
        
      };
    case 'PRODUCT_LIST_FAIL1':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};




export  const productlist= (
     state =[],
     action
     )=> {
         switch(action.type){
             case "resquet_product":
                 
                 return state=action.payload;
            default:
                    return state;
         }

}

export const productDetailsReducer = (
    state = ["vffvgbv"],
    action
  ) => {
    switch (action.type) {
     
      case "detals_product":
        return  state= action.payload ;
     
      default:
        return state;
    }
  };