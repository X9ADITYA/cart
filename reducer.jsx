export const initialState = {
    cart: [],
    total: 0,
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          cart: [...state.cart, action.payload],
          total: state.total + action.payload.price,
        };
  
      case "REMOVE_ITEM":
        const updatedCart = state.cart.filter((item) => item.id !== action.payload);
        const removedItem = state.cart.find((item) => item.id === action.payload);
        return {
          ...state,
          cart: updatedCart,
          total: state.total - (removedItem ? removedItem.price : 0),
        };
  
      case "CLEAR_CART":
        return initialState;
  
      default:
        return state;
    }
  }
  
  export default reducer;
  