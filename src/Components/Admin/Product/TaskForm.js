import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { closeFormRequest } from "../../../Redux/Actions/FormAction";
import { actionAddProductRequest } from "../../../Redux/Actions/ProductAction";

const TaskForm = (props) => {
    let onCloseForm = () => {
        props.onCloseForm();
    };

    let handleSubmit = (values) => {
        console.log(values);
        props.onAddProduct(values);
        document.getElementById("btn-reset").click();
    };

    let renderForm = () => {
        return (
            <Formik
                initialValues={{
                    name: "",
                    image: "",
                    description: "",
                    price: 0,
                    evaluate: 0,
                    category: 1,
                }}
                onSubmit={handleSubmit}
                render={(formikProps) => (
                    <div className="card">
                        <div className="card-header text-center d-flex justify-content-center align-items-center">
                            <h3 className="card-title">Thêm Sản Phẩm</h3>
                            <button
                                className="btn btn-danger ml-1 p-1 px-2"
                                onClick={() => {
                                    onCloseForm();
                                }}
                            >
                                X
                            </button>
                        </div>
                        <div className="card-body border p-3">
                            <Form enctype="multipart/form-data">
                                <div className="form-group">
                                    <label>Name :</label>
                                    <Field
                                        onChange={formikProps.handleChange}
                                        name="name"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Price :</label>
                                    <Field
                                        onChange={formikProps.handleChange}
                                        name="price"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description :</label>
                                    <Field
                                        onChange={formikProps.handleChange}
                                        name="description"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Evaluate :</label>
                                    <Field
                                        onChange={formikProps.handleChange}
                                        name="evaluate"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Danh mục :</label>
                                    <Field
                                        onChange={formikProps.handleChange}
                                        name="category"
                                        as="select"
                                        className="form-control"
                                        required="required"
                                    >
                                        <option value={1}>Đồng Hồ Nam</option>
                                        <option value={2}>Đồng Hồ Nữ</option>
                                    </Field>
                                </div>
                                {/* <div className="form-group">
                                    <label>Image :</label>
                                    <Field
                                        onChange={formikProps.handleChange}
                                        name="image"
                                        type="text"
                                        className="form-control"
                                    />
                                </div> */}

                                <div className="form-group">
                                    <label>Image :</label>
                                    <input
                                        onChange={(event) =>
                                            formikProps.setFieldValue(
                                                "image",
                                                event.target.files[0]
                                            )
                                        }
                                        name="image"
                                        type="file"
                                        className="form-control"
                                    />
                                </div>

                                <br />
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-warning"
                                    >
                                        <i className="fa fa-plus mr-1"></i>
                                        Thêm
                                    </button>
                                    <button
                                        type="reset"
                                        id="btn-reset"
                                        className="btn btn-warning d-none"
                                    >
                                        <i className="fa fa-plus mr-1"></i>
                                        Reset
                                    </button>
                                    &nbsp;
                                    <button
                                        type="submit"
                                        className="btn btn-danger"
                                    >
                                        <i className="fa fa-times-circle mr-1"></i>
                                        Hủy Bỏ
                                    </button>
                                </div>
                            </Form>
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
        onAddProduct: (product) => {
            dispatch(actionAddProductRequest(product));
        },
        onCloseForm: () => {
            dispatch(closeFormRequest());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
