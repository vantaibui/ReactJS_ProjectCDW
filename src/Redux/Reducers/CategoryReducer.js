import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  UPDATE_CATEGORY,
} from "../Types/ActionTypes";

let initialState = [];

let findIndex = (id, list) => {
  let result = -1;
  for (let index in list) {
    if (list[index].id === id) {
      result = index;
    }
  }
  return result;
};

const CategoryReducer = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case FETCH_CATEGORIES: {
      state = action.payLoad;
      return [...state];
    }
    case ADD_CATEGORY: {
      state.push(action.payLoad);
      return [...state];
    }
    case DELETE_CATEGORY: {
      index = findIndex(action.payLoad, state);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    }

    default:
      return [...state];
  }
};

export default CategoryReducer;
