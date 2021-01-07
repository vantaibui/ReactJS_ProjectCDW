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
        console.log(result.data);
        dispatch(CreateAction(FETCH_PRODUCTS, result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const actionAddProductRequest = (product) => {
  console.log(product);
  let newProduct = {
    name: product.name,
    price: product.price,
    description: product.description,
    evaluate: product.evaluate,
    category: product.category,
    images: [
      {
        link: product.image,
        description: "Image of product: " + product.name,
      },
    ],
  };
  console.log(newProduct);
  return (dispatch) => {
    return productManagementService
      .addProduct(product)
      .then((result) => {
        dispatch(
          CreateAction(ADD_PRODUCT, result.data),
          actionFetchProductsRequest()
        );
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
