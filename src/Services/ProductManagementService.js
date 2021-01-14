import axios from "axios";
import { accessToken, domain } from "../Configuration/Setting";

export class ProductManagementService {
    fetchProductList = () => {
        return axios({
            method: "GET",
            url: `${domain}/products`,
        });
    };
    addProduct = (product) => {
        return axios({
            method: "POST",
            url: `${domain}/products`,
            data: product,
            headers: {
                Authorization: "Bearer " + localStorage.getItem(accessToken),
            },
        });
    };

    deleteProduct = (id) => {
        return axios({
            method: "DELETE",
            url: `${domain}/products/${id}`,
            data: id,
            headers: {
                Authorization: "Bearer " + localStorage.getItem(accessToken),
            },
        });
    };
}

export const productManagementService = new ProductManagementService();
