import axios from "axios";
import { domain } from "../Configuration/Setting";

export class UserManagementService{
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
}

export const userManagementService = new UserManagementService();
