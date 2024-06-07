import axios from 'axios';
import { baseUrl } from '../utils';

export const createMail = async (data) => {
    // code to create mail
    const request = await axios.post(`${baseUrl}/mail`, data);
    return request.data;
};
