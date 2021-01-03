import axios from "axios";
import { domain, token } from "../Configuration/Setting";

export class ProductManagementService {
  fetchProductList = () => {
    return axios({
      method: "GET",
      url: `${domain}/products`,
    });
  };
  deleteProduct = (id) => {
    return axios({
      method: "DELETE",
      url: `${domain}/products/${id}`,
      data: id,
      // headers: {
      //   Authorization: "Bearer " + localStorage.getItem(token),
      // },
    });
  };
}

export const productManagementService = new ProductManagementService();
