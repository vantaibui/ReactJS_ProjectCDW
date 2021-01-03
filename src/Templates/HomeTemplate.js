import { Component, Fragment } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { Route } from "react-router-dom";

const HomeLayout = ({ ...props }) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};
const HomeTemplate = ({ ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
}

export default HomeTemplate;