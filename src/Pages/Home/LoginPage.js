import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import bgLogin from "../../Asserts/images/bg-login.jpg";
import { actionLoginRequest } from "../../Redux/Actions/UserAction";
import {NavLink} from "react-router-dom"


const LoginPage = (props) => {
    let handleSubmit = (values) => {
        console.log(values);
        props.onLogin(values);
        document.getElementById("btn-reset").click();
    };
    let renderFormLogin = () => {
        return (
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
                render={(formikProps) => (
                    <div className="container-fluid section-login px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                        <div className="card card-customs border-0">
                            <div className="row">
                                <div className="col-lg-6 p-0">
                                    <div className="card-image">
                                        <div className="row border-line p-0 m-0 d-flex justify-content-center align-items-center ">
                                            <img
                                                className="image"
                                                src={bgLogin}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <Form>
                                        <div className="card card-form border-0 px-4 py-5">
                                            <div className="row mb-4 px-3">
                                                <h6 className="mb-0 mr-4 mt-2">
                                                    Sign in with
                                                </h6>
                                                <div className="facebook text-center mr-3">
                                                    <div className="fab fa-facebook" />
                                                </div>
                                                <div className="twitter text-center mr-3">
                                                    <div className="fab fa-twitter" />
                                                </div>
                                                <div className="google text-center mr-3">
                                                    <div className="fab fa-google-plus" />
                                                </div>
                                            </div>
                                            <div className="row px-3 mb-4">
                                                <div className="line" />
                                                <small className="or text-center">
                                                    Or
                                                </small>
                                                <div className="line" />
                                            </div>
                                            <div className="row px-3">
                                                <label className="mb-1">
                                                    <h6 className="mb-0 text-sm">
                                                        Username
                                                    </h6>
                                                </label>
                                                <Field
                                                    onChange={
                                                        formikProps.handleChange
                                                    }
                                                    className="mb-4"
                                                    type="text"
                                                    name="username"
                                                    placeholder="Enter a valid username"
                                                />
                                            </div>
                                            <div className="row px-3">
                                                <label className="mb-1">
                                                    <h6 className="mb-0 text-sm">
                                                        Password
                                                    </h6>
                                                </label>
                                                <Field
                                                    onChange={
                                                        formikProps.handleChange
                                                    }
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter password"
                                                />
                                            </div>
                                            <div className="row px-3 mb-4">
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input
                                                        id="chk1"
                                                        type="checkbox"
                                                        name="chk"
                                                        className="custom-control-input"
                                                    />
                                                    <label
                                                        htmlFor="chk1"
                                                        className="custom-control-label text-sm"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="ml-auto mb-0 text-sm"
                                                >
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <div className="row mb-3 px-3">
                                                <button
                                                    type="submit"
                                                    className="btn btn-login text-center"
                                                >
                                                    Login
                                                </button>
                                                <button
                                                    type="reset"
                                                    id="btn-reset"
                                                    className="btn btn-warning d-none"
                                                >
                                                    <i className="fa fa-plus mr-1"></i>
                                                    Reset
                                                </button>
                                            </div>
                                            <div className="row mb-4 px-3">
                                                <small className="font-weight-bold">
                                                    Don't have an account?
                                                    <NavLink exact to="/register" className="text-danger ml-1">
                                                        Register
                                                    </NavLink>
                                                </small>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />
        );
    };
    // if (localStorage.getItem(user_login)) {
    //     return <Redirect to="/" />;
    // }
    return renderFormLogin();
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (account) => {
            dispatch(actionLoginRequest(account));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
