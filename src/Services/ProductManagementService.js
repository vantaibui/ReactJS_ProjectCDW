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
        let formData = new FormData();
        formData.append("file", product.file);
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("evaluate", product.evaluate);
        formData.append("category", product.category);
        return axios({
            // params: {
            //     name: product.name,
            //     price: product.price,
            //     description: product.description,
            //     evaluate: product.evaluate,
            //     category: product.category,
            //     file: product.file,
            // },
            method: "POST",
            url: `${domain}/products`,
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
                // "Content-Type": "application/x-www-form-urlencoded",
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
