import { useEffect, useState } from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { downloadAttendance } from '../../services/download';
import { getAttendance } from '../../services/attendanceServices';

const Dashboard = () => {
    const [month, setMonth] = useState('');
    const [format, setFormat] = useState('');
    const [attendance, setAttend] = useState([]);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    useEffect(() => {
        const monthInput = document.getElementById('month');
        setMonth(monthInput.selectedIndex);

        const formatInput = document.getElementById('format');
        setFormat(formatInput.value);

        getAttendance().then((res) => setAttend(res));
    }, []);

    let availableMonth = [];

    new Set(
        attendance.map((attend) => new Date(attend.date).getMonth())
    ).forEach((item) => (availableMonth = [...availableMonth, item]));

    const handleDownload = async (e) => {
        e.preventDefault();
        // Handle download logic here
        const data = {
            month,
            format,
        };
        await downloadAttendance(data);
    };
    return (
        <div className='dashboard-wrapper'>
            <div className='container'>
                <h2 className='heading-primary'>Document Management System</h2>
                <h3 className='heading-secondary'>
                    Download backend documents in Excel format
                </h3>
                <Form onSubmit={handleDownload} className='container'>
                    <div className='row' style={{ marginBottom: 10 }}>
                        <label className='col-2'>Format</label>
                        <select
                            className='col-8'
                            id='format'
                            onChange={({ target }) => setFormat(target.value)}
                        >
                            <option value='excel'>Excel</option>
                            <option value='csv'>CSV</option>
                        </select>
                    </div>

                    <div className='row' style={{ marginBottom: 10 }}>
                        <label className='col-2'>Month</label>
                        <select
                            className='col-8'
                            id='month'
                            onChange={({ target }) =>
                                setMonth(target.selectedIndex)
                            }
                        >
                            {months.map((month, index) => (
                                <option
                                    key={index}
                                    value={month}
                                    disabled={
                                        availableMonth.includes(index)
                                            ? false
                                            : true
                                    }
                                >
                                    {' '}
                                    {month}{' '}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Button variant='primary' type='submit'>
                        Download
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Dashboard;
