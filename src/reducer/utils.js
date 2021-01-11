import * as actionTypes from '../constants/index';

const initialState = {
    currentTab: 'dashboard'
};

export default function utilReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TAB:
            return {
                ...state,
                currentTab: action.payload
            }
        default:
            return state;
    }
}