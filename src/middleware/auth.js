import { getTokenForDemoUsers } from '../api/auth';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../actionCreators/auth';
import { handleError } from '../utils';

/**
 * Middleware To Login - Test Demo's
 * @param {email} email - email address to login
 */

export function demoLogin(email) {
    return dispatch => {
        getTokenForDemoUsers(email)
            .then(res => {
                let decoded = jwt.decode(res.data)
                localStorage.setItem('token', res.data);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                handleError(err);
            });
    }
}