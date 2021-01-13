import axios from "axios";
import { accessToken, domain, user_login } from "../Configuration/Setting";

export class CategoryManagementService {
    fetchCategoryList = () => {
        return axios({
            method: "GET",
            url: `${domain}/categories`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem(accessToken),
            },
        });
    };
    addCategory = (category) => {
        return axios({
            method: "POST",
            url: `${domain}/categories`,
            data: category,
            headers: {
                Authorization: "Bearer " + localStorage.getItem(accessToken),
            },
        });
    };
    deleteCategory = (id) => {
        return axios({
            method: "DELETE",
            url: `${domain}/categories/${id}`,
            data: id,
            headers: {
                Authorization: "Bearer " + localStorage.getItem(accessToken),
            },
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
            headers: {
                Authorization: "Bearer " + localStorage.getItem(accessToken),
            },
        });
    };
}

export const categoryManagementService = new CategoryManagementService();
