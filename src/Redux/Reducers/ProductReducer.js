import { DELETE_PRODUCT, FETCH_PRODUCTS } from "../Types/ActionTypes";

let initialState = [];

let findIndex = (id, list) => {
  let result = -1;
  for (const index in list) {
    console.log(index);
    if (list[index].id === id) {
      result = index;
    }
  }
  return result;
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      state = action.payLoad;
      return [...state];
    }
    case DELETE_PRODUCT: {
      let index = findIndex(action.id, state);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    }
    default:
      return [...state];
  }
};

export default ProductReducer;
