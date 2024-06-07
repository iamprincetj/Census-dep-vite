import axios from 'axios';
import { baseUrl } from '../utils';

export const getAttendance = async () => {
    const request = await axios.get(`${baseUrl}/users_attendance`);
    return request.data;
};

export const createAttendance = async (data) => {
    // code to create attendance
    const request = await axios.post(`${baseUrl}/users_attendance`, data);
    return request.data;
};
