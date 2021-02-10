import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { connect } from "react-redux";
import Header from "../../Layouts/Header";
import Information from "../../Layouts/Information";
import Footer from "../../Layouts/Footer";
import {
    actionLoginRequest,
    actionOrderRequest,
} from "../../Redux/Actions/UserAction";
import * as yup from "yup";

const PaymentPage = (props) => {
    let { cartList } = props;

    let showProductSubTotal = (products) => {
        let total = 0;
        if (products.length > 0) {
            let result = products.map((product) => {
                return parseFloat(product.product.price) * product?.quantity;
            });
            for (const iterator of result) {
                total += iterator;
            }
        }
        return total;
    };

    let renderProductItem = (products) => {
        let result;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr key={index} className="cart-item">
                        <td>
                            {product?.product.product_name}
                            <strong className="product-quantity">
                                × {product?.quantity}
                            </strong>
                        </td>
                        <td>
                            <span className="amount">
                                {parseFloat(product?.product.price) *
                                    product?.quantity}
                                <span>₫</span>
                            </span>
                        </td>
                    </tr>
                );
            });
        }

        return result;
    };

    let handleSubmit = (values) => {
        props.onOrder(values);
        // document.getElementById("btn-reset").click();
    };

    let renderPayment = () => {
        let schema = yup.object().shape({
            customerID: yup.string().required("Vui lòng không được để trống!"),
            consigneeName: yup
                .string()
                .required("Vui lòng không được để trống!"),
            consigneePhone: yup
                .string()
                .required("Vui lòng không được để trống!"),
        });
        return (
            <Formik
                initialValues={{
                    customerID: "",
                    total: showProductSubTotal(props.cartList),
                    consigneeName: "",
                    consigneePhone: "",
                    address: "",
                    cartList: props.cartList,
                }}
                validationSchema={schema}
                onSubmit={handleSubmit}
                render={(formikProps) => (
                    <section className="payment">
                        <div className="payment__content">
                            <Form className="form-payment">
                                <div className="row row--modifier ">
                                    <div className="col-7 col--modifier ">
                                        <div className="customer-detail">
                                            <div className="form-info-billing">
                                                <h3>Thông tin thanh toán</h3>
                                                <div className="customer-information">
                                                    <div className="form-group">
                                                        <label htmlFor="inputEmail">
                                                            Id{" "}
                                                            <span className="required">
                                                                *
                                                            </span>
                                                        </label>
                                                        <Field
                                                            onChange={
                                                                formikProps.handleChange
                                                            }
                                                            type="text"
                                                            className="form-control"
                                                            id="inputUsername"
                                                            name="customerID"
                                                        />
                                                        <ErrorMessage name="customerID" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="inputEmail">
                                                            Tên nhận hàng{" "}
                                                            <span className="required">
                                                                *
                                                            </span>
                                                        </label>
                                                        <Field
                                                            onChange={
                                                                formikProps.handleChange
                                                            }
                                                            type="text"
                                                            className="form-control"
                                                            id="inputEmail"
                                                            name="consigneeName"
                                                        />
                                                        <ErrorMessage name="consigneeName" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="inputEmail">
                                                            Số điện thoại{" "}
                                                            <span className="required">
                                                                *
                                                            </span>
                                                        </label>
                                                        <Field
                                                            onChange={
                                                                formikProps.handleChange
                                                            }
                                                            type="text"
                                                            className="form-control"
                                                            id="inputEmail"
                                                            name="consigneePhone"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="inputAddress">
                                                            Địa chỉ{" "}
                                                            <span className="required">
                                                                *
                                                            </span>
                                                        </label>
                                                        <Field
                                                            onChange={
                                                                formikProps.handleChange
                                                            }
                                                            type="text"
                                                            className="form-control"
                                                            id="inputAddress"
                                                            name="address"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 col--modifier ">
                                        <div className="order-detail">
                                            <div className="order-detail__content">
                                                <h3 className="order-review-heading">
                                                    Đơn hàng của bạn
                                                </h3>
                                                <div className="order-review">
                                                    <table className="table-total">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    Sản phẩm
                                                                </th>
                                                                <th>Tổng</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {renderProductItem(
                                                                cartList
                                                            )}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr className="cart-subtotal">
                                                                <th>
                                                                    Tổng phụ
                                                                </th>
                                                                <td>
                                                                    <span className="amount">
                                                                        {showProductSubTotal(
                                                                            cartList
                                                                        )}{" "}
                                                                        <span>
                                                                            ₫
                                                                        </span>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr className="shipping">
                                                                <th>
                                                                    Giao hàng
                                                                </th>
                                                                <td>
                                                                    Giao hàng
                                                                    miễn phí
                                                                </td>
                                                            </tr>
                                                            <tr className="order-total">
                                                                <th>Tổng</th>
                                                                <td>
                                                                    <span className="amount">
                                                                        {showProductSubTotal(
                                                                            cartList
                                                                        )}{" "}
                                                                        <span>
                                                                            ₫
                                                                        </span>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                    <button
                                                        type="submit"
                                                        className="btn-order"
                                                    >
                                                        Đặt hàng
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </section>
                )}
            />
        );
    };

    // if (!localStorage.getItem(user_login)) {
    //     alert("Vui lòng đăng nhập trước khi thanh toán!");
    //     return <Redirect to="/login" />;
    // }
    return (
        <>
            <Header />
            {renderPayment()}
            <Information />
            <Footer />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cartList: state.CartReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (account) => {
            dispatch(actionLoginRequest(account));
        },
        onOrder: (values) => {
            dispatch(actionOrderRequest(values));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
