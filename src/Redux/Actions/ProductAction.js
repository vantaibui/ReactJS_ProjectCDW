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
    let newProduct = {
        name: product.name,
        price: product.price,
        description: product.description,
        evaluate: product.evaluate,
        category: parseInt(product.category),
        file: product.image,
    };
    return (dispatch) => {
        return productManagementService
            .addProduct(newProduct)
            .then((result) => {
                dispatch(CreateAction(ADD_PRODUCT, result.data));
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const actionDeleteProductRequest = (id) => {
    return (dispatch) => {
        console.log(id);
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
