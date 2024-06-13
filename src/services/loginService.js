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

export const signup = async (data) => {
    const response = await axios.post(`${baseUrl}/signup`, data);
    return response.data;
};

export const getToken = async () => {
    const request = await axios.get(`${baseUrl}/login/token`);
    return request.data;
};

export const logout = async () => {
    const { token } = await getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    await axios.post(`${baseUrl}/login/logout`, null, config);
};
