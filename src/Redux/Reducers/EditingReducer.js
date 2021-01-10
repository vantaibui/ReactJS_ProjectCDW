import { EDIT_CATEGORY } from "../Types/ActionTypes";

let initialState = {};

const EditingReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_CATEGORY: {
            console.log(action);
            return action.payLoad;
        }
        default:
            return state;
    }
};

export default EditingReducer;
