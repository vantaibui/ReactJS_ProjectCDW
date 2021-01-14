import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { actionForgotPasswordRequest } from "../../Redux/Actions/UserAction";

const ForgotPasswordPage = (props) => {
    let handleSubmit = (values) => {
        console.log(values);
        props.onForgotPassword(values);
    };

    let renderFormForgotPassword = () => {
        return (
            <Formik
                initialValues={{ email: "" }}
                onSubmit={handleSubmit}
                render={(formikProps) => (
                    <section className="forgotPassword">
                        <div className="forgotPassword__content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="col-inner">
                                        <div className="form-forgot-password">
                                            <Form className="form-input">
                                                <p>
                                                    Quên mật khẩu? Vui lòng nhập
                                                    tên đăng nhập hoặc địa chỉ
                                                    email. Bạn sẽ nhận được một
                                                    liên kết tạo mật khẩu mới
                                                    qua email.
                                                </p>
                                                <p className="input-email-userName">
                                                    <label htmlFor="inputUserName">
                                                        Tên đăng nhập hoặc email
                                                    </label>
                                                    <Field
                                                        onChange={
                                                            formikProps.handleChange
                                                        }
                                                        name="email"
                                                        type="text"
                                                        className="inputUserName"
                                                        id="inputUserName"
                                                    />
                                                </p>
                                                <p className="button-reset-password">
                                                    <button
                                                        type="submit"
                                                        className="btn-reset-password"
                                                    >
                                                        Lấy lại mật khẩu
                                                    </button>
                                                </p>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            />
        );
    };
    return renderFormForgotPassword();
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onForgotPassword: (email) => {
            dispatch(actionForgotPasswordRequest(email));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);
