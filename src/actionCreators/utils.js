import * as actionTypes from '../constants/index';

export function changeTab(tabName) {
    return {
        type: actionTypes.CHANGE_TAB,
        payload: tabName
    }
}