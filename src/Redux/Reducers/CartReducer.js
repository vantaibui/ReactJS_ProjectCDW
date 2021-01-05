import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_IN_CART,
  UPDATE_PRODUCT_IN_CART,
} from "../Types/ActionTypes";

let data = JSON.parse(localStorage.getItem("cart"));

let initialState = data ? data : [];

let findProductInCart = (product, cart) => {
  let result = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        result = i;
        break;
      }
    }
  }
  return result;
};

let findProduct = (id, list) => {
  let result = -1;
  for (let i in list) {
    if (list[i].product.id === id) {
      result = i;
    }
  }
  return result;
};

const CartReducer = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      index = findProductInCart(action.param1, state);
      if (index !== -1) {
        state[index].quantity += action.param2;
      } else {
        state.push({
          product: action.param1,
          quantity: action.param2,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case DELETE_PRODUCT_IN_CART: {
      index = findProduct(action.payLoad, state);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case UPDATE_PRODUCT_IN_CART: {
      index = findProductInCart(action.param1, state);
      if (index !== -1) {
        state[index].quantity = action.param2;
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    default:
      return [...state];
  }
};

export default CartReducer;
