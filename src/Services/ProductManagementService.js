import axios from "axios";
import { domain } from "../Configuration/Setting";

export class ProductManagementService {
  fetchProductList = () => {
    return axios({
      method: "GET",
      url: `${domain}/products`,
    });
  };
}

export const productManagementService = new ProductManagementService();
