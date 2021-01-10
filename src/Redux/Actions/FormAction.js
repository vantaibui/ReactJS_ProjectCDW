import { CLOSE_FORM, OPEN_FORM, TOGGLE_FORM } from "../Types/ActionTypes";

export const toggleFormRequest = () => {
  return {
    type: TOGGLE_FORM,
  };
};

export const closeFormRequest = () => {
  return {
    type: CLOSE_FORM,
  };
};

export const openFormRequest = () => {
  return {
    type: OPEN_FORM,
  };
};
