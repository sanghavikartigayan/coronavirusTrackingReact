import axios from "axios";
import baseURL from './index';

export function getAllCases() {
    return axios.get(`${baseURL}/api/states`);
}