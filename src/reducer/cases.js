import * as actionTypes from '../constants/index';

const initialState = {
    cases: [],
    globalValue: [],
    casesForLastWeek: [],
    casesForToday: [],
    deathForLastWeek: [],
    deathForToday: [],
    error: false,
    loading: false,
    message: ''
};

export default function caseReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_COVID_DATA_PENDING:
            return {
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.FETCH_COVID_DATA_SUCCESS:

            const globalValue = action.payload.filter(c => c['Name'] === 'Global');

            const casesForLastWeek = action.payload.map(c => c['Cases - newly reported in last 7 days']);

            const casesForToday = action.payload.map(c => c['Cases - newly reported in last 24 hours']);

            const deathForLastWeek = action.payload.map(c => c['Deaths - newly reported in last 7 days']);

            const deathForToday = action.payload.map(c => c['Deaths - newly reported in last 24 hours']);

            return {
                ...state,
                cases: action.payload,
                globalValue: globalValue[0],
                casesForLastWeek: casesForLastWeek,
                casesForToday: casesForToday,
                deathForLastWeek: deathForLastWeek,
                deathForToday: deathForToday,
                loading: false,
                error: false
            }
        case actionTypes.FETCH_COVID_DATA_FAILED:
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
