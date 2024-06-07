import axios from 'axios';
import { baseUrl } from '../utils';

export const downloadAttendance = async ({ month, format }) => {
    const link = `${baseUrl}/users_attendance/download?month=${month}&format=${format}`;

    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error('No attendance yet');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download =
            format === 'excel' ? 'UsersAttendance.xlsx' : 'UsersAttendance.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
    } catch (error) {
        if (error.message === 'No attendance yet') {
            console.log('Something went wrong');
        }
    }
};
