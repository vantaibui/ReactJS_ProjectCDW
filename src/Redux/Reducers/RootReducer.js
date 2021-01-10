import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import CategoryReducer from "./CategoryReducer";
import CartReducer from "./CartReducer";
import IsDisplayForm from "./IsDisplayForm";
import EditingReducer from "./EditingReducer";

const RootReducer = combineReducers({
  ProductReducer: ProductReducer,
  CategoryReducer: CategoryReducer,
  EditingReducer: EditingReducer,
  CartReducer: CartReducer,
  IsDisplayForm: IsDisplayForm,
});

export default RootReducer;
