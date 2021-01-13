import React from "react";
import AdminPage from "./Pages/Admin/AdminPage";
import CategoryManagementPage from "./Pages/Admin/CategoryManagementPage";
import ProductManagementPage from "./Pages/Admin/ProductManagementPage";
import CartPage from "./Pages/Home/CartPage";
import CategoryPage from "./Pages/Home/CategoryPage";
import ForgotPasswordPage from "./Pages/Home/ForgotPasswordPage";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Home/LoginPage";
import RegisterPage from "./Pages/Home/Register";
import PaymentPage from "./Pages/Home/PaymentPage";
import NotFoundPage from "./Pages/NotFondPage/NotFoundPage";

const Routes = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />,
    },
    {
        path: "/login",
        exact: false,
        main: () => <LoginPage />,
    },
    {
        path: "/register",
        exact: false,
        main: () => <RegisterPage />,
    },
    {
        path: "/forgot-password",
        exact: false,
        main: () => <ForgotPasswordPage />,
    },
    {
        path: "/cart",
        exact: false,
        main: () => <CartPage />,
    },
    {
        path: "/payment",
        exact: false,
        main: () => <PaymentPage />,
    },
    {
        path: "/category",
        exact: true,
        main: () => <CategoryPage />,
    },
    {
        path: "/admin",
        exact: false,
        main: () => <AdminPage />,
    },
    {
        path: "/admin-product",
        exact: false,
        main: () => <ProductManagementPage />,
    },
    {
        path: "/admin-category",
        exact: false,
        main: () => <CategoryManagementPage />,
    },

    { path: "", exact: false, main: () => <NotFoundPage /> },
];

export default Routes;
