import { useEffect, useState } from 'react';
import './request.css';
import formattedDate from '../../script2';
import callUpdateTime, { updateTime } from '../../script3';
import { makeRequest } from '../../services/requestService';

const Request = () => {
    const [fullname, setFullname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [date, setDate] = useState('');
    const [LGA, setLGA] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [userRequest, setUserRequest] = useState('');

    useEffect(() => {
        if (formattedDate) {
            setDate(formattedDate);
        }

        // sets the initial value of the select elements
        const state = document.getElementById('state');
        setState(state.options[state.selectedIndex].textContent);

        const status = document.getElementById('status');
        setStatus(status.options[status.selectedIndex].textContent);

        const gender = document.getElementById('gender');
        setGender(gender.options[gender.selectedIndex].textContent);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const time = updateTime();

        const data = {
            fullname,
            phoneNumber,
            address,
            email,
            state,
            LGA,
            date,
            time,
            status,
            gender,
            userRequest,
        };

        const request = await makeRequest(data);
        console.log(request);
    };

    return (
        <div className='request'>
            <h2></h2>
            <form onSubmit={handleSubmit} style={{ marginTop: '' }}>
                <div className='hero-image'>
                    <img
                        src='image/data.png'
                        style={{ marginTop: '' }}
                        alt='Census Data'
                    />
                </div>
                <br />
                <div className='form-group'>
                    <label htmlFor='fullname'>Full Name</label>
                    <input
                        type='text'
                        id='fullname'
                        value={fullname}
                        onChange={({ target }) => setFullname(target.value)}
                        placeholder='Enter your full name'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input
                        type='text'
                        id='phoneNumber'
                        value={phoneNumber}
                        onChange={({ target }) => setPhoneNumber(target.value)}
                        placeholder='Enter your Phone Number'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>
                        Visitor's Address (Office Address is Most Preferred)
                    </label>
                    <input
                        type='text'
                        id='address'
                        value={address}
                        onChange={({ target }) => setAddress(target.value)}
                        placeholder='Enter your Address'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='text'
                        id='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        placeholder='Enter your email address'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='state'>State</label>
                    <select
                        id='state'
                        onChange={({ target }) =>
                            setState(
                                target.options[target.selectedIndex].textContent
                            )
                        }
                    >
                        <option value='' disabled>
                            Select State
                        </option>
                        <option value='Abia'>Abia State</option>
                        <option value='Adamawa'>Adamawa State</option>
                        <option value='AkwaIbom'>Akwa Ibom State</option>
                        <option value='Anambra'>Anambra State</option>
                        <option value='Bauchi'>Bauchi State</option>
                        <option value='Bayelsa'>Bayelsa State</option>
                        <option value='Benue'>Benue State</option>
                        <option value='Borno'>Borno State</option>
                        <option value='CrossRiver'>Cross River State</option>
                        <option value='Delta'>Delta State</option>
                        <option value='Ebonyi'>Ebonyi State</option>
                        <option value='Edo'>Edo State</option>
                        <option value='Ekiti'>Ekiti State</option>
                        <option value='Enugu'>Enugu State</option>
                        <option value='FCT'>Federal Capital Territory</option>
                        <option value='Gombe'>Gombe State</option>
                        <option value='Imo'>Imo State</option>
                        <option value='Jigawa'>Jigawa State</option>
                        <option value='Kaduna'>Kaduna State</option>
                        <option value='Kano'>Kano State</option>
                        <option value='Katsina'>Katsina State</option>
                        <option value='Kebbi'>Kebbi State</option>
                        <option value='Kogi'>Kogi State</option>
                        <option value='Kwara'>Kwara State</option>
                        <option value='Lagos'>Lagos State</option>
                        <option value='Nasarawa'>Nasarawa State</option>
                        <option value='Niger'>Niger State</option>
                        <option value='Ogun'>Ogun State</option>
                        <option value='Ondo'>Ondo State</option>
                        <option value='Osun'>Osun State</option>
                        <option value='Oyo'>Oyo State</option>
                        <option value='Plateau'>Plateau State</option>
                        <option value='Rivers'>Rivers State</option>
                        <option value='Sokoto'>Sokoto State</option>
                        <option value='Taraba'>Taraba State</option>
                        <option value='Yobe'>Yobe State</option>
                        <option value='Zamfara'>Zamfara State</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='lga'>LGA</label>
                    <input
                        type='text'
                        id='lga'
                        value={LGA}
                        onChange={({ target }) => setLGA(target.value)}
                        placeholder='Enter LGA'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='date'>Date</label>
                    <input
                        type='date'
                        id='date'
                        value={date && date}
                        placeholder='Select your date'
                        disabled
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='time'>Time of Entry</label>
                    <input
                        type='text'
                        id='time'
                        placeholder='Current time'
                        disabled
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='status'>Status</label>
                    <select
                        id='status'
                        onChange={({ target }) =>
                            setStatus(
                                target.options[target.selectedIndex].textContent
                            )
                        }
                    >
                        <option value='' disabled>
                            Status
                        </option>
                        <option value='Processing'>Processing</option>
                        <option value='Pending'>Pending</option>
                        <option value='Completed'>Completed</option>
                        <option value='NotAvailable'>Not Available</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='gender'>Gender</label>
                    <select
                        id='gender'
                        onChange={({ target }) =>
                            setGender(
                                target.options[target.selectedIndex].textContent
                            )
                        }
                    >
                        <option value='' disabled>
                            Select your gender
                        </option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='userRequest'>Explain your request:</label>
                    <textarea
                        id='userRequest'
                        value={userRequest}
                        onChange={({ target }) => setUserRequest(target.value)}
                        placeholder='Enter your request here'
                    ></textarea>
                </div>
                <div className='form-group submit-btn'>
                    <input type='submit' value='Submit' />
                </div>
                {document.getElementById('time') && callUpdateTime()}
            </form>
        </div>
    );
};

export default Request;
