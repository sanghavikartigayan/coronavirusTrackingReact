import * as actionTypes from '../constants/index';

export function getAllCovidCasePending() {
    return {
        type: actionTypes.FETCH_COVID_DATA_PENDING
    }
}


export function getAllCovidCaseSuccess(data) {
    return {
        type: actionTypes.FETCH_COVID_DATA_SUCCESS,
        payload: data
    }
}

export function getAllCovidCaseFailed(error) {
    return {
        type: actionTypes.FETCH_COVID_DATA_FAILED,
        payload: error
    }
}