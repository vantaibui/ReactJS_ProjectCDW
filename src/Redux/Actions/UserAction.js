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
                window.history.go("/");
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
                window.history.go("/login");
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
    console.log(values);
    let newOrder = {
        customerID: parseInt(values.customerID),
        total: parseInt(values.total),
        consigneeName: values.consigneeName,
        consigneePhone: values.consigneePhone,
        address: values.address,
        items: values.cartList,
    };
    console.log(newOrder);
    return (dispatch) => {
        return userManagementService
            .order(newOrder)
            .then((result) => {
                console.log(result.data);
                dispatch(CreateAction(ORDER, result.data));
                localStorage.removeItem("cart");
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
