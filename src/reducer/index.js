import { combineReducers } from 'redux';
import utilReducer from './utils';
import caseReducer from './cases';
import ontarioRecentCaseReducer from './onatrioCases';
import authReducer from './auth';

export default combineReducers({
    utilReducer,
    caseReducer,
    ontarioRecentCaseReducer,
    authReducer
});