import { Redirect } from "react-router-dom";
import { accessToken, user_login } from "../../Configuration/Setting";
import { userManagementService } from "../../Services/UserManagementService";
import { LOGIN, REGISTER } from "../Types/ActionTypes";
import { CreateAction } from "./CreateAction";

export const actionLoginRequest = (account) => {
    return (dispatch) => {
        return userManagementService
            .login(account)
            .then((result) => {
                dispatch(CreateAction(LOGIN, result.data));
                localStorage.setItem(user_login, JSON.stringify(result.data));
                localStorage.setItem(
                    accessToken,
                    JSON.stringify(result.data.accessToken)
                );
                window.location.reload();
            })
            .catch((error) => {
                alert("Error");
                console.log(error);
            });
    };
};

export const actionRegisterRequest = (account) => {
    return (dispatch) => {
        return userManagementService
            .register(account)
            .then((result) => {
                dispatch(CreateAction(REGISTER, result.data));
                window.history.go("/login");
            })
            .catch((error) => {
                alert("sai");
                console.log(error);
            });
    };
};
