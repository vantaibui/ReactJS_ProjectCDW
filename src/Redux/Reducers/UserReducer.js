import { LOGIN, REGISTER } from "../Types/ActionTypes";
let initialState = {
    credentials: null,
    users: [],
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            state.credentials = action.payLoad;
            return { ...state };
        }
        case REGISTER: {
            state.users.push(action.payLoad);
            return { ...state };
        }
        default:
            return state;
    }
};

export default UserReducer;
