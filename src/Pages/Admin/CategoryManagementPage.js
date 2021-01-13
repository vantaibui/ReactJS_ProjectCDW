import React, { useEffect } from "react";
import { connect } from "react-redux";
import TaskForm from "../../Components/Admin/Category/TaskForm";
import CategoryList from "../../Components/Admin/Category/CategoryList";
import CategoryItem from "../../Components/Admin/Category/CategoryItem";
import { toggleFormRequest } from "../../Redux/Actions/FormAction";
import { actionFetchCategoriesRequest } from "../../Redux/Actions/CategoryAction";

const CategoryManagementPage = (props) => {
    let { categories, isDisplayForm, editingCategory } = props;

    console.log(categories);

    useEffect(() => {
        props.fetchAllCategories();
    }, []);

    let onToggleForm = () => {
        props.onToggleForm();
    };

    let renderCategoryItem = (categories) => {
        let result;
        if (categories.length > 0) {
            result = categories.map((category, index) => {
                return (
                    <CategoryItem
                        key={index}
                        category={category}
                        index={index}
                    />
                );
            });
        }
        return result;
    };

    let elementForm = isDisplayForm === true ? <TaskForm /> : "";

    return (
        <div className="container-fluid px-5">
            <div className="text-center">
                <h1>Quản Lý Danh Mục</h1>
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
                        Thêm Danh Mục
                    </button>
                    <div className="row mt-2">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <CategoryList>
                                {renderCategoryItem(categories)}
                            </CategoryList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.CategoryReducer,
        isDisplayForm: state.IsDisplayForm,
        editingCategory: state.EditingReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllCategories: () => {
            dispatch(actionFetchCategoriesRequest());
        },
        onToggleForm: () => {
            dispatch(toggleFormRequest());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryManagementPage);
