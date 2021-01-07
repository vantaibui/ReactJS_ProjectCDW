import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { actionAddProductRequest } from "../../Redux/Actions/ProductAction";

const TaskForm = (props) => {
  let handleSubmit = (values) => {
    // console.log(values);
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
          category: "Men",
        }}
        onSubmit={handleSubmit}
        render={(formikProps) => (
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Thêm Sản Phẩm</h3>
            </div>
            <div className="panel-body border p-3">
              <Form>
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
                    type="text"
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
                    // onBlur={formikProps.handleBlur}
                    name="category"
                    as="select"
                    className="form-control"
                    required="required"
                  >
                    <option value="Men">Đồng Hồ Nam</option>
                    <option value="Woman">Đồng Hồ Nữ</option>
                  </Field>
                </div>
                <div className="form-group">
                  <label>Image :</label>
                  <Field
                    onChange={formikProps.handleChange}
                    name="image"
                    type="text"
                    className="form-control"
                  />
                </div>

                {/* <div className="form-group">
                  <label>Image :</label>
                  <Field
                    onChange={formikProps.handleChange}
                    name="image"
                    type="file"
                    className="form-control"
                  />
                </div> */}

                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-warning">
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
                  <button type="submit" className="btn btn-danger">
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
