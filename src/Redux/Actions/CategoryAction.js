import { categoryManagementService } from "../../Services/CategoryManagementService";
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  FETCH_CATEGORIES,
  UPDATE_CATEGORY,
} from "../Types/ActionTypes";
import { CreateAction } from "./CreateAction";

export const actionFetchCategoriesRequest = () => {
  return (dispatch) => {
    return categoryManagementService
      .fetchCategoryList()
      .then((result) => {
        dispatch(CreateAction(FETCH_CATEGORIES, result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const actionAddCategoryRequest = (category) => {
  return (dispatch) => {
    return categoryManagementService
      .addCategory(category)
      .then((result) => {
        dispatch(CreateAction(ADD_CATEGORY, result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const actionDeleteCategoryRequest = (id) => {
  return (dispatch) => {
    return categoryManagementService
      .deleteCategory(id)
      .then((result) => {
        dispatch(CreateAction(DELETE_CATEGORY, id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const actionGetCategoryRequest = (id) => {
  return (dispatch) => {
    return categoryManagementService
      .getCategory(id)
      .then((result) => {
        dispatch(CreateAction(EDIT_CATEGORY, result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
