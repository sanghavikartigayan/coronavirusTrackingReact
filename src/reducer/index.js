import { combineReducers } from 'redux';
import utilReducer from './utils';
import caseReducer from './cases';
import ontarioRecentCaseReducer from './onatrioCases';

export default combineReducers({
    utilReducer,
    caseReducer,
    ontarioRecentCaseReducer
});