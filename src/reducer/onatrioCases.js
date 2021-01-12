import * as actionTypes from '../constants/index';
import { sortByMostRecentDate } from '../utils/index';

const initialState = {
    ontarioCases: [],
    totalCases: [],
    totalDeath: [],
    ontarioRecentValue:[],
    ontarioEndValue: [],
    error: false,
    loading: false,
    message: ''
};

export default function ontarioRecentCaseReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_ONTARIO_RECENT_DATA_PENDING:
            return {
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.FETCH_ONTARIO_RECENT_DATA_SUCCESS:

            let sortedDataMostRecent = sortByMostRecentDate(action.payload);

            let totalCases = sortedDataMostRecent.map(c => {
                return {
                    'count': c['TotalCases'],
                    'date': c['SummaryDate']
                }
            });

            let totalDeath = sortedDataMostRecent.map(c => {
                return {
                    'count': c['TotalDeaths'],
                    'date': c['SummaryDate']
                }
            });

            const ontarioRecentValue = sortedDataMostRecent[0];
            const ontarioEndValue = sortedDataMostRecent.slice(-1)[0];

            return {
                ...state,
                ontarioCases: sortedDataMostRecent,
                totalCases: totalCases,
                totalDeath: totalDeath,
                ontarioRecentValue: ontarioRecentValue,
                ontarioEndValue: ontarioEndValue,
                loading: false,
                error: false
            }
        case actionTypes.FETCH_ONTARIO_RECENT_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            };
        default:
            return state;

    }
}
