import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import CategoryReducer from "./CategoryReducer";
import CartReducer from "./CartReducer";
import IsDisplayForm from "./IsDisplayForm";
import EditingReducer from "./EditingReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
    ProductReducer: ProductReducer,
    CategoryReducer: CategoryReducer,
    UserReducer: UserReducer,
    EditingReducer: EditingReducer,
    CartReducer: CartReducer,
    IsDisplayForm: IsDisplayForm,
});

export default RootReducer;
