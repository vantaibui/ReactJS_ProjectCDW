import { productManagementService } from "../../Services/ProductManagementService";
import { FETCH_PRODUCTS } from "../Types/ActionTypes";
import { CreateAction } from "./CreateAction";

export const actionFetchProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    products: products,
  };
};

export const actionFetchProductsRequest = () => {
  return (dispatch) => {
    return productManagementService
      .fetchProductList()
      .then((result) => {
        dispatch(CreateAction(FETCH_PRODUCTS, result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
