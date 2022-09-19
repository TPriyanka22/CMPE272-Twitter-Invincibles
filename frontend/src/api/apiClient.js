/*Rishabh has worked on apiClient.js*/

import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `http://localhost:8080`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        credentials: 'include'
    }
});

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        if (res.status === 401) {
        window.location.href = "http://localhost:8080";
        }
        console.error("Looks like there was a problem. Status Code: " + res.status);
        return Promise.reject(error);
    }
);

export default axiosClient;