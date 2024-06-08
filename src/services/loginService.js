import axios from 'axios';
import { baseUrl } from '../utils';

export const login = async (data) => {
    const response = await axios.post(`${baseUrl}/login`, data);
    return response.data;
};

export const changeCredential = async (data) => {
    const { token } = JSON.parse(localStorage.getItem('loggedInUser'));
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const request = await axios.post(`${baseUrl}/login/change`, data, config);
    return request.data;
};
