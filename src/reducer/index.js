import { combineReducers } from 'redux';
import utilReducer from './utils';
import caseReducer from './cases';

export default combineReducers({
    utilReducer,
    caseReducer
});