import { productManagementService } from "../../Services/ProductManagementService";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
} from "../Types/ActionTypes";
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

export const actionAddProductRequest = (product) => {
  return (dispatch) => {
    return productManagementService
      .addProduct(product)
      .then((result) => {
        dispatch(CreateAction(ADD_PRODUCT, result.data));
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
        dispatch(CreateAction(DELETE_PRODUCT, id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
