import { Component, Fragment } from "react";
import { Route } from "react-router-dom";

const AdminLayout = ({ ...props }) => {
  return <Fragment>
      {/* Header admin */}
      {props.children}
      {/* Footer admin */}
      </Fragment>;
};

const AdminTemplate = ({...props}) => {
    return (
        <Route {...props} render={(propsComponent) => {
            return (
                <AdminLayout>
                    <Component {...propsComponent} />
                </AdminLayout>
            )
        }}  />
    )
}

export default AdminTemplate;