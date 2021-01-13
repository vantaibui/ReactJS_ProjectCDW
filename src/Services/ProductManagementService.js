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
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET, POST, PATCH, DELETE, PUT, OPTIONS",
                "Access-Control-Allow-Headers":
                    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",

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
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                  "GET, POST, PATCH, DELETE, PUT, OPTIONS",
              "Access-Control-Allow-Headers":
                  "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",

                Authorization: "Bearer " + localStorage.getItem(accessToken),
            },
        });
    };
}

export const productManagementService = new ProductManagementService();
