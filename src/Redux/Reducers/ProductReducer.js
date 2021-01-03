import { FETCH_PRODUCTS } from "../Types/ActionTypes";

let initialState = [];

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      state = action.products;
      return [...state];
    }
    default:
      return [...state];
  }
};

export default ProductReducer;
