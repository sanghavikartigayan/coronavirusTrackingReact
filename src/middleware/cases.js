import { handleError } from '../utils';
import { db } from '../App';
import {
    getAllCovidCasePending,
    getAllCovidCaseSuccess,
    getAllCovidCaseFailed,
    getOntarioRecentCasePending,
    getOntarioRecentCaseSuccess,
    getOntarioRecentCaseFailed
} from '../actionCreators/cases';

/**
 * Middleware To Get All Covid Cases
 */

export function getAllCovidCase() {
    return dispatch => {
        dispatch(getAllCovidCasePending())
        db.ref('/allCases').on('value', function (snapshot) {
            dispatch(getAllCovidCaseSuccess(snapshot.val()));
        }),
            function (error) {
                dispatch(getAllCovidCaseFailed(error));
                handleError(error);
            };
    }
};

/**
 * Middleware To Get Onatrio Recent Cases
 */

export function getOnatrioRecentCases() {
    return dispatch => {
        dispatch(getOntarioRecentCasePending())
        db.ref('/onatrioStats').on('value', function (snapshot) {
            dispatch(getOntarioRecentCaseSuccess(snapshot.val()));
        }),
            function (error) {
                dispatch(getOntarioRecentCaseFailed(error));
                handleError(error);
            };
    }
};