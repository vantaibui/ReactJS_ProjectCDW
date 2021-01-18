import { Redirect } from "react-router-dom";
import { accessToken, user_login } from "../../Configuration/Setting";
import { userManagementService } from "../../Services/UserManagementService";
import {
    FORGOT_PASSWORD,
    LOGIN,
    REGISTER,
    ORDER,
    CONFIRM_ACCOUNT,
} from "../Types/ActionTypes";
import { CreateAction } from "./CreateAction";

export const actionLoginRequest = (account) => {
    return (dispatch) => {
        return userManagementService
            .login(account)
            .then((result) => {
                dispatch(CreateAction(LOGIN, result.data));
                localStorage.setItem(user_login, JSON.stringify(result.data));
                localStorage.setItem(accessToken, result.data.accessToken);
                if (
                    result.data.roles.map((role) => {
                        console.log(role);
                        return role;
                    }) === "ROLE_ADMIN"
                ) {
                    console.log("abc");
                    window.location.assign("/admin");
                }
                // window.location.assign("/");
                // window.location.reload();
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
                localStorage.setItem("token", result.data);
                window.history.go("/login");
            })
            .catch((error) => {
                alert("sai");
                console.log(error);
            });
    };
};

export const actionConfirmAccountRequest = (accessToken) => {
    return (dispatch) => {
        return userManagementService
            .confirmRegister(accessToken)
            .then((result) => {
                dispatch(CreateAction(CONFIRM_ACCOUNT, result.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const actionForgotPasswordRequest = (email) => {
    return (dispatch) => {
        return userManagementService
            .forgotPassword(email)
            .then((result) => {
                console.log(result);
                dispatch(CreateAction(FORGOT_PASSWORD, result.data));
            })
            .catch((error) => {
                console.log("error");
            });
    };
};

export const actionOrderRequest = (values) => {
    return (dispatch) => {
        return userManagementService
            .order(values)
            .then((result) => {
                console.log(result.data);
                dispatch(CreateAction(ORDER, result.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
