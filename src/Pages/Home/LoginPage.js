import React from "react";

const LoginPage = () => {
    let renderFormLogin = () => {
        return (
            <div className="container-fluid section-login px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card-customs border-0">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="card-image">
                                <div className="row border-line p-0 m-0 d-flex justify-content-center align-items-center ">
                                    <img
                                        className="image"
                                        src="./images/bg-login.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form>
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
                                                Email Address
                                            </h6>
                                        </label>
                                        <input
                                            className="mb-4"
                                            type="text"
                                            name="email"
                                            placeholder="Enter a valid email address"
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">
                                                Password
                                            </h6>
                                        </label>
                                        <input
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
                                    </div>
                                    <div className="row mb-4 px-3">
                                        <small className="font-weight-bold">
                                            Don't have an account?
                                            <a className="text-danger">
                                                Register
                                            </a>
                                        </small>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return renderFormLogin();
};

export default LoginPage;
