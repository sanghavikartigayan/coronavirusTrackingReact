import { handleError } from '../utils';
import { db } from '../App';
import { getAllCovidCasePending, getAllCovidCaseSuccess, getAllCovidCaseFailed } from '../actionCreators/cases';

/**
 * Middleware To Get All Covid Cases
 */

export function getAllCovidCase() {
    return dispatch => {
        dispatch(getAllCovidCasePending())
            db.ref('/').on('value', function (snapshot) {
                dispatch(getAllCovidCaseSuccess(snapshot.val()));
            }),
            function (error) {
                dispatch(getAllCovidCaseFailed(error));
                handleError(error);
            };
    }
};