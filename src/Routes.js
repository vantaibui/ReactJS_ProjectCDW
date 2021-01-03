import React from "react";
import HomePage from "./Pages/Home/HomePage";
import NotFoundPage from "./Pages/NotFondPage/NotFoundPage";

const Routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  { path: "", exact: false, main: () => <NotFoundPage /> },
];


export default Routes;