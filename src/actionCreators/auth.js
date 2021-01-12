import * as actionTypes from '../constants/index';

export function setCurrentUser(user) {
    return {
        type: actionTypes.ADD_USER,
        payload: user
    };
}

export function logout() {
    return {
        type: actionTypes.REMOVE_USER
    };
}