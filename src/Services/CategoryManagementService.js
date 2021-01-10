import axios from "axios";
import { domain, token } from "../Configuration/Setting";

export class CategoryManagementService {
  fetchCategoryList = () => {
    return axios({
      method: "GET",
      url: `${domain}/categories`,
    });
  };
  addCategory = (category) => {
    return axios({
      method: "POST",
      url: `${domain}/categories`,
      data: category,
      // headers: {
      //   Authorization: "Bearer " + localStorage.getItem(token),
      // },
    });
  };
  deleteCategory = (id) => {
    return axios({
      method: "DELETE",
      url: `${domain}/categories/${id}`,
      data: id,
      // headers: {
      //   Authorization: "Bearer " + localStorage.getItem(token),
      // },
    });
  };
  getCategory = (id) => {
    return axios({
      method: "GET",
      url: `${domain}/categories/${id}`,
    });
  };
  updateCategory = (id) => {
    return axios({
      method: "PUT",
      url: `${domain}/categories/${id}`,
      data: id,
      // headers: {
      //   Authorization: "Bearer " + localStorage.getItem(token),
      // },
    });
  };
}

export const categoryManagementService = new CategoryManagementService();
