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
      console.log(state);
      // let newProduct = {
      //   name: action.payLoad.name,
      //   price: action.payLoad.price,
      //   description: action.payLoad.description,
      //   evaluate: action.payLoad.evaluate,
      //   category: action.payLoad.category,
      //   images: [
      //     {
      //       link: action.payLoad.image,
      //       description: "Image of product: " + action.payLoad.name,
      //     },
      //   ],
      // };
      // console.log(newProduct);
      state.push(action.payLoad);
      // state.push(newProduct);
      return [...state];
    }
    case DELETE_PRODUCT: {
      console.log(state);
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
