  
import * as actionTypes from "../constants";

const initialState = {
    currentUser: null,
    loginSuccess: false
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_USER:
            return {
                currentUser: action.payload,
                loginSuccess: true
            };
        case actionTypes.REMOVE_USER:
            return {
                currentUser: null
            };
        default:
            return state;
    }
}