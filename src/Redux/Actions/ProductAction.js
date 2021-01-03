import { productManagementService } from "../../Services/ProductManagementService";
import { DELETE_PRODUCT, FETCH_PRODUCTS } from "../Types/ActionTypes";
import { CreateAction } from "./CreateAction";

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

export const actionDeleteProductRequest = (id) => {
  return (dispatch) => {
    return productManagementService
      .deleteProduct(id)
      .then((result) => {
        console.log(result);
        dispatch(CreateAction(DELETE_PRODUCT, id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
