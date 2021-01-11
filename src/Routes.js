import React from "react";
import AdminPage from "./Pages/Admin/AdminPage";
import CartPage from "./Pages/Home/CartPage";
import CategoryPage from "./Pages/Home/CategoryPage";
import ForgotPasswordPage from "./Pages/Home/ForgotPasswordPage";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Home/LoginPage";
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
        path: "/admin",
        exact: false,
        main: () => <AdminPage />,
    },
    {
        path: "/category",
        exact: true,
        main: () => <CategoryPage />,
    },
    { path: "", exact: false, main: () => <NotFoundPage /> },
];

export default Routes;
