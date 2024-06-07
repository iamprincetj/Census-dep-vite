import axios from 'axios';
import { baseUrl } from '../utils';

export const makeRequest = async (data) => {
    // code to make request

    const request = await axios.post(`${baseUrl}/request`, data);
    return request.data;
};
