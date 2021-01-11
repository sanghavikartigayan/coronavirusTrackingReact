import axios from 'axios';

const baseURL = 'https://covid-19-278f1-default-rtdb.firebaseio.com'; // Default base url for all axios request

axios.interceptors.response.use(res => res, error => {
    // Do something with response error
    if (error.response && error.response.status === 401) {
        // Logout the unauthorised user
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    return Promise.reject(error);
});

axios.interceptors.response.use(res => res, error => {
    return Promise.reject(error);
});

export default baseURL;