import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import IsDisplayForm from "./IsDisplayForm";

const RootReducer = combineReducers({
  ProductReducer: ProductReducer,
  CartReducer: CartReducer,
  IsDisplayForm: IsDisplayForm,
});

export default RootReducer;
