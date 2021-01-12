import axios from "axios";
import baseURL from './index';

export function getTokenForDemoUsers(email) {
    return axios.get(`${baseURL}/api/parser?email=${email}`);
}