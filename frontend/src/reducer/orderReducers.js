function orderCreateReducer(state = {}, action) {
    switch (action.type) {
      case 'ORDER_CREATE_REQUEST':
        return { loading: true };
      case 'ORDER_CREATE_SUCCESS':
        return { loading: false, order: action.payload, success: true };
      case 'ORDER_CREATE_FAIL':
        return { loading: false, error: action.payload };
      case 'ORDER_CREATE_RESET':
        return {};
      default: return state;
    }
  }
  
  
function myOrderListReducer(state = {
    orders: []
  }, action) {
    switch (action.type) {
      case 'MY_ORDER_LIST_REQUEST':
        return { loading: true };
      case 'MY_ORDER_LIST_SUCCESS':
        return { loading: false, orders: action.payload };
      case 'MY_ORDER_LIST_FAIL':
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

  function orderDetailsReducer(state = {
    order: {
      orderItems: [],
      phone: 0,
      address: "",
      itemsPrice: 0,
    }
  }, action) {
    switch (action.type) {
      case 'ORDER_DETAILS_REQUEST':
        return { loading: true };
      case 'ORDER_DETAILS_SUCCESS':
        return { loading: false, order: action.payload };
      case 'ORDER_DETAILS_FAIL':
        return { loading: false, error: action.payload };

      default: return state;
    }
  }

  export {
    orderCreateReducer, myOrderListReducer ,orderDetailsReducer
  }