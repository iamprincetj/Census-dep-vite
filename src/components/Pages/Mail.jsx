import { useEffect, useState } from 'react';
import './mail.css';
import formattedDate from '../../script2';
import callUpdateTime, { updateTime } from '../../script3';
import { createMail } from '../../services/mailService';

const Mail = () => {
    const [referenceId, setReferenceId] = useState('');
    const [department, setDepartment] = useState('');
    const [receiptDate, setReceiptDate] = useState('');
    const [category, setCategory] = useState('');
    const [sender, setSender] = useState('');
    const [request, setRequest] = useState('');
    const [mailDate, setDate] = useState('');

    console.log(department);

    useEffect(() => {
        if (formattedDate) {
            setDate(formattedDate);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here

        const time = updateTime();

        const data = {
            referenceId,
            department,
            receiptDate,
            category,
            sender,
            request,
            mailDate,
            time,
        };

        console.log(data);
        const req = await createMail(data);
        console.log(req);
    };

    return (
        <div>
            <h2></h2>
            <form onSubmit={handleSubmit} style={{}}>
                <div className='hero-image'>
                    <img
                        src='https://i.pinimg.com/736x/25/47/e4/2547e41487634d272a78471c0ae64121.jpg'
                        alt='Hero'
                        style={{ marginTop: '' }}
                    />
                </div>
                <br />
                <div className='form-group fullname'>
                    <label>Reference ID</label>
                    <input
                        type='text'
                        name='referenceId'
                        placeholder='Enter issue no. of issuing dept.'
                        value={referenceId}
                        onChange={({ target }) => setReferenceId(target.value)}
                    />
                </div>
                <div className='form-group posting'>
                    <label>DEPARTMENT</label>
                    <select
                        name='department'
                        value={'department'}
                        onChange={({ target }) =>
                            setDepartment(
                                target.options[target.selectedIndex].textContent
                            )
                        }
                    >
                        <option value='' disabled>
                            Select Department
                        </option>
                        <option value='Male'>Office of The Chairman</option>
                        <option value='Male'>Office of The DG</option>
                        <option value='Female'>Cartography Department</option>
                        <option value='Male'>Population Management</option>
                        <option value='Female'>General Services</option>
                        <option value='Male'>Procurement</option>
                        <option value='Female'>
                            Secretary to the Commission
                        </option>
                        <option value='Female'>
                            Human Resource Management and Administration
                        </option>
                        <option value='Male'>
                            Public Relations Department
                        </option>
                        <option value='Female'>
                            Vital Registration Department
                        </option>
                        <option value='Male'>Legal Department</option>
                        <option value='Female'>
                            Population Institute and Studies Department
                        </option>
                        <option value='Male'>
                            Public Administration Department
                        </option>
                        <option value='Female'>Account Department</option>
                        <option value='Male'>ICT Department</option>
                        <option value='Female'>
                            Special Duties Department
                        </option>
                        <option value='Female'>Other</option>
                    </select>
                </div>
                <div className='form-group fullname'>
                    <label>DATE OF RECEIPT</label>
                    <input
                        type='text'
                        name='receiptDate'
                        placeholder='Enter date of receipt'
                        value={receiptDate}
                        onChange={({ target }) => setReceiptDate(target.value)}
                    />
                </div>
                <div className='form-group posting'>
                    <label>Category</label>
                    <select
                        name='category'
                        value={category}
                        onChange={({ target }) => setCategory(target.value)}
                    >
                        <option value='' disabled>
                            Select Category
                        </option>
                        <option value='Incoming'>Incoming</option>
                        <option value='Outgoing'>Outgoing</option>
                    </select>
                </div>
                <div className='form-group fullname'>
                    <label>WHO FROM</label>
                    <input
                        type='text'
                        name='sender'
                        placeholder='Enter who mail is coming from'
                        value={sender}
                        onChange={({ target }) => setSender(target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='userRequest'>Explain your request:</label>
                    <textarea
                        id='userRequest'
                        value={request}
                        onChange={({ target }) => setRequest(target.value)}
                        placeholder='Enter your request here'
                    ></textarea>
                </div>
                <div className='form-group date'>
                    <label>Mail Date</label>
                    <input
                        type='date'
                        name='mailDate'
                        value={mailDate}
                        disabled
                    />
                </div>
                <div className='form-group time'>
                    <label>Time</label>
                    <input
                        type='text'
                        name='time'
                        id='time'
                        placeholder='Current time'
                        disabled
                    />
                </div>
                <br />
                <div className='form-group submit-btn'>
                    <input type='submit' value='Submit' />
                </div>
            </form>
            {document.getElementById('time') && callUpdateTime()}
        </div>
    );
};

export default Mail;
