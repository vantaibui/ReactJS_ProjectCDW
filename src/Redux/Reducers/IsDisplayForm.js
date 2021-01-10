import { CLOSE_FORM, OPEN_FORM, TOGGLE_FORM } from "../Types/ActionTypes";
let initialState = false;

const IsDisplayForm = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FORM: {
      return !state;
    }
    case CLOSE_FORM: {
      state = false;
      return state;
    }
    case OPEN_FORM: {
      state = true;
      return state;
    }
    default:
      return state;
  }
};

export default IsDisplayForm;
