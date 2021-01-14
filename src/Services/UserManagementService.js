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
    forgotPassword = (email) => {
        console.log(email);
        return axios({
            method: "GET",
            url: `${domain}/sendMail`,
            data: email,
        });
    };
}

export const userManagementService = new UserManagementService();
