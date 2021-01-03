import React from "react";
import  AdminPage  from "./Pages/Admin/AdminPage";
import  CategoryPage  from "./Pages/Home/CategoryPage";
import HomePage from "./Pages/Home/HomePage";
import NotFoundPage from "./Pages/NotFondPage/NotFoundPage";

const Routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/category",
    exact: true,
    main: () => <CategoryPage />,
  },
  {
    path: "/admin",
    exact: true,
    main: () => <AdminPage />,
  },
  { path: "", exact: false, main: () => <NotFoundPage /> },
];


export default Routes;