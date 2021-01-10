import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actionAddCategoryRequest } from "../../../Redux/Actions/CategoryAction";
import { closeFormRequest } from "../../../Redux/Actions/FormAction";

export const TaskForm = (props) => {
    const [initialValue, setInitialValue] = useState({
        id: "",
        name: "Men",
        description: "",
    });

    let { editingCategory } = props;

    console.log(editingCategory);

    let onCloseForm = () => {
        props.onCloseForm();
    };

    let handleSubmit = (values) => {
        props.onAddCategory(values);
        document.getElementById("btn-reset").click();
    };
    useEffect(() => {
        console.log("Props received: " + props.editingCategory.id);
        if (props && props.editingCategory) {
            setInitialValue({
                id: props.editingCategory.id,
                name: props.editingCategory.name,
                description: props.editingCategory.description,
            });
        } else if (!props.editingCategory) {
            setInitialValue({
                id: "",
                name: "Men",
                description: "",
            });
        }
    }, []);

    let renderForm = () => {
      console.log(initialValue.id);
        return (
            <Formik
                initialValues={initialValue}
                onSubmit={handleSubmit}
                render={(formikProps) => (
                    <div className="card">
                        <div className="card-header text-center d-flex justify-content-center align-items-center">
                            <h3 className="card-title">
                                {initialValue.id !== ""
                                    ? "Thêm Danh Mục"
                                    : "Cập Nhật Danh Mục"}
                            </h3>
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
                            <Form>
                                <div className="form-group">
                                    <label>Name :</label>
                                    <Field
                                        onChange={formikProps.handleChange}
                                        value={initialValue.name || ""}
                                        name="name"
                                        as="select"
                                        className="form-control"
                                        required="required"
                                    >
                                        <option value="Men">Đồng Hồ Nam</option>
                                        <option value="Woman">
                                            Đồng Hồ Nữ
                                        </option>
                                    </Field>
                                </div>
                                <div className="form-group">
                                    <label>Description :</label>
                                    <Field
                                        onChange={formikProps.handleChange}
                                        value={initialValue.description || ""}
                                        name="description"
                                        type="text"
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
    return { editingCategory: state.EditingReducer };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCategory: (category) => {
            dispatch(actionAddCategoryRequest(category));
        },
        onCloseForm: () => {
            dispatch(closeFormRequest());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
