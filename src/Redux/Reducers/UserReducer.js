import { LOGIN, ORDER, REGISTER } from "../Types/ActionTypes";
let initialState = {
    credentials: null,
    users: [],
    orders: null,
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
        // case FORGOT_PASSWORD: {
        //     state.email = action.payLoad;
        //     return { ...state };
        // }
        case ORDER: {
            state.orders = action.payLoad;
            return { ...state };
        }
        default:
            return state;
    }
};

export default UserReducer;
