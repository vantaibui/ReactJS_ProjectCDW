import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
} from "../Types/ActionTypes";

let initialState = [];

let findIndex = (id, list) => {
  let result = -1;
  for (let index in list) {
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
    case ADD_PRODUCT: {
      state.push(action.payLoad);
      return [...state];
    }
    case DELETE_PRODUCT: {
      let index = findIndex(action.payLoad, state);
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
