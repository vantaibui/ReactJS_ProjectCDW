import axios from "axios";
import { domain } from "../Configuration/Setting";

export class UserManagementService {
    login = (account) => {
        return axios({
            method: "POST",
            url: `${domain}/login`,
            data: account,
        });
    };
    register = (account) => {
        return axios({
            method: "POST",
            url: `${domain}/register`,
            data: account,
        });
    };
    confirmRegister = (accessToken) => {
        return axios({
            method: "POST",
            url: `${domain}/confirm-account`,
            data: accessToken,
        });
    };
    forgotPassword = (email) => {
        console.log(email);
        return axios({
            method: "GET",
            url: `${domain}/sendMail`,
            data: email,
        });
    };
    order = (values) => {
        return axios({
            method: "POST",
            url: `${domain}/orders`,
            data: values,
        });
    };
}

export const userManagementService = new UserManagementService();
