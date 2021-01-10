import React from "react";
import { connect } from "react-redux";
import {
  actionDeleteCategoryRequest, actionGetCategoryRequest,
} from "../../../Redux/Actions/CategoryAction";
import { openFormRequest } from "../../../Redux/Actions/FormAction";

const CategoryItem = (props) => {
  let { category, index } = props;

  let onDeleteCategory = (id) => {
    props.onDeleteCategory(id);
  };

  let onEditCategory = (id) => {
    console.log(id);
    props.onOpenForm();
    props.onEditCategory(id);
  };

  return (
    <tr>
      <td className="border text-center">{index + 1}</td>
      <td className="border text-center">{category.name}</td>
      <td className="border text-center">{category.description}</td>
      <td className="border text-center">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            onEditCategory(category.id);
          }}
        >
          <i className="fa fa-edit mr-1"></i>
          Sửa
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            onDeleteCategory(category.id);
          }}
        >
          <i className="fa fa-trash mr-1"></i>
          Xóa
        </button>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteCategory: (id) => {
      dispatch(actionDeleteCategoryRequest(id));
    },
    onEditCategory: (id) => {
      dispatch(actionGetCategoryRequest(id));
    },
    onOpenForm: () => {
      dispatch(openFormRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
