import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    actionDeleteProductRequest,
    actionFetchProductsRequest,
} from "../../Redux/Actions/ProductAction";
import TaskForm from "../../Components/Admin/Product/TaskForm";
import ProductItem from "../../Components/Admin/Product/ProductItem";
import ProductList from "../../Components/Admin/Product/ProductList";
import Control from "../../Components/Admin/Control";
import { toggleFormRequest } from "../../Redux/Actions/FormAction";

const ProductManagementPage = (props) => {
    let { products, isDisplayForm } = props;

    useEffect(() => {
        props.fetchAllProducts();
    }, []);

    let onToggleForm = () => {
        props.onToggleForm();
    };

    let onDeleteProduct = (id) => {
        props.onDeleteProduct(id);
    };

    let renderProductItem = (products) => {
        let result;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDeleteProduct={onDeleteProduct}
                    />
                );
            });
        }
        return result;
    };

    let elementForm = isDisplayForm === true ? <TaskForm /> : "";

    return (
        <>
            <div className="container-fluid px-5">
                <div className="text-center">
                    <h1>Quản Lý Sản Phẩm</h1>
                    <hr />
                </div>
                <div className="row">
                    <div
                        className={
                            isDisplayForm === true
                                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                                : ""
                        }
                    >
                        {elementForm}
                    </div>
                    <div
                        className={
                            isDisplayForm === true
                                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                        }
                    >
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                onToggleForm();
                            }}
                        >
                            <span className="fa fa-plus mr-2" />
                            Thêm Sản Phẩm
                        </button>
                        <Control />
                        <div className="row mt-2">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <ProductList>
                                    {renderProductItem(products)}
                                </ProductList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.ProductReducer,
        isDisplayForm: state.IsDisplayForm,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: () => {
            dispatch(actionFetchProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actionDeleteProductRequest(id));
        },
        onToggleForm: () => {
            dispatch(toggleFormRequest());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductManagementPage);
