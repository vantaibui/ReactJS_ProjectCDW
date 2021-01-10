import axios from "axios";
import { domain, token } from "../Configuration/Setting";

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
      // headers: {
      //   Authorization: "Bearer " + localStorage.getItem(token),
      // },
    });
  };

  deleteProduct = (id) => {
    return axios({
      method: "DELETE",
      url: `${domain}/products/${id}`,
      data: id,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   Authorization: "Bearer " + localStorage.getItem(token),
      // },
    });
  };
}

export const productManagementService = new ProductManagementService();
