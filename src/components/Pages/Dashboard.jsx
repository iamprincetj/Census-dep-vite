import { useEffect, useState } from 'react';
import './Dashboard.css';
import { getAttendance } from '../../services/attendanceServices';

const Dashboard = () => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        // Fetch attendance data from the backend
        // setAttendance(data)

        getAttendance().then((data) => setAttendance(data));
    }, []);
    console.log(attendance);
    return (
        <div>
            <div className='container'>
                <h2 className='heading-primary'>Document Management System</h2>
                <h3 className='heading-secondary'>
                    Download backend documents in Excel format
                </h3>
                <table className='document-table'>
                    <thead>
                        <tr>
                            <th>Document Name</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Document 1</td>
                            <td>
                                <a
                                    href='/path/to/document1.xlsx'
                                    download='document1.xlsx'
                                >
                                    Download
                                </a>
                            </td>
                        </tr>
                        {/* Repeat this pattern for each document */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
