import { getTokenFromBackend, getTokenForDemoUsers } from '../api/auth';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../actionCreators/auth';
import { handleError } from '../utils';

/**
 * Middleware To Login
 * @param {token} token - token of the user to login
 */

export function login(token) {
    return dispatch => {
        getTokenFromBackend(token)
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