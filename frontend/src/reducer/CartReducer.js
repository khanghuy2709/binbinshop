
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {  cartItems: [...state.cartItems, item] };
      }

    
      case "CART_REMOVE_ITEM":
      return {
        
       
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
      case 'CART_EMPTY':
        return {  cartItems: [] }

    default:
      return state;
  }
};