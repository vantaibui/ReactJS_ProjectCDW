import { Formik, Form, Field } from "formik";
import React from "react";
import { connect } from "react-redux";
import bgLogin from "../../Asserts/images/bg-login.jpg";
import { accessToken } from "../../Configuration/Setting";
import { actionConfirmAccountRequest } from "../../Redux/Actions/UserAction";

const ConfirmAccountPage = (props) => {
    let handleSubmit = (values) => {
        console.log(values);
        props.onConfirmAccount(values);
    };
    let renderForm = () => {
        return (
            <Formik
                initialValues={{
                    token: localStorage.getItem("token"),
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
                                            <div className="row">
                                                <p
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Đường dẫn xác thực đã được
                                                    gửi tới email của bạn,{" "}
                                                    <br /> vui lòng kiểm tra
                                                    email!
                                                </p>
                                            </div>
                                            <div className="row px-3 mb-4">
                                                <a
                                                    href="#"
                                                    className="ml-auto mb-0 text-sm"
                                                >
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <div className="row">
                                                <button
                                                    style={{ width: "100%" }}
                                                    type="submit"
                                                    className="btn btn-login text-center"
                                                >
                                                    Confirm account
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
    return renderForm();
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onConfirmAccount: (accessToken) => {
            dispatch(actionConfirmAccountRequest(accessToken));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmAccountPage);
