import { useEffect, useState } from 'react';
import formattedDate from '../../script2';
import './Attendance.css';
import { createAttendance } from '../../services/attendanceServices';
import callUpdateTime, { updateTime } from '../../script3';
import getLocation from '../../gpscript';

const Attendance = () => {
    const [fullname, setFullname] = useState('');
    const [posting, setPosting] = useState('');
    const [time, setTime] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    useEffect(() => {
        setTime(updateTime());
        if (document.getElementById('latitude')) {
            setLat(document.getElementById('latitude').textContent);
            setLong(document.getElementById('longitude').textContent);
            setFullname(
                document.getElementById('fullName').options[1].textContent
            );
            setPosting(
                document.getElementById('postingLocation').options[0]
                    .textContent
            );
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const date = formattedDate;
        const data = {
            fullname,
            time,
            posting,
            lat,
            long,
            date,
        };

        console.log(data);
        const request = await createAttendance(data);
        console.log(request);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='hero-image'>
                    <img
                        src='https://i.pinimg.com/736x/84/f6/1b/84f61b14ab8ea65cccb77238c85b8dd0.jpg'
                        alt='Hero Image'
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <br />
                <h3>ATTENDANCE</h3>
                <br />
                <div
                    className='location-info'
                    style={{ display: 'flex', alignItems: 'flex-start' }}
                >
                    <label htmlFor='latitude' style={{ fontSize: '13px' }}>
                        Latitude: <span id='latitude'></span>
                    </label>
                </div>
                <div
                    className='location-info'
                    style={{ display: 'flex', alignItems: 'flex-start' }}
                >
                    <label htmlFor='longitude' style={{ fontSize: '13px' }}>
                        Longitude: <span id='longitude'> </span>
                    </label>
                </div>
                <br />
                <br />
                <div className='form-group'>
                    <label htmlFor='fullName'>Full Name</label>
                    <select
                        id='fullName'
                        onChange={({ target }) =>
                            setFullname(
                                target.options[target.selectedIndex].textContent
                            )
                        }
                    >
                        <option value='' disabled>
                            Select Name
                        </option>
                        <option value='Male'>
                            Ag. Director Abubakar Bello Afegbua
                        </option>
                        <option value='Female'>Abdullahi Abubakar</option>
                        <option value='Male'>Abubakar Aisha</option>
                        <option value='Female'>Abubakar Muhammad Zayyad</option>
                        <option value='Male'>Achinonu Pamela</option>
                        <option value='Female'>Adebayo Olayide Ajani</option>
                        <option value='Female'>Adesanya Oluwafemi Dayo</option>
                        <option value='Male'>Agabi Alhassan Yusuf</option>
                        <option value='Female'>
                            Aisaborhale Victor Emiohe
                        </option>
                        <option value='Male'>Ajayi Oluwaseun</option>
                        <option value='Female'>Ajayi Oluwatosin Esther</option>
                        <option value='Male'>Aliyu Taofeeq</option>
                        <option value='Female'>
                            Allah-Kayisafiyanu Safiyanu
                        </option>
                        <option value='Male'>Bello Usman</option>
                        <option value='Female'>Bukarmusa Alhaji</option>
                        <option value='Male'>Bulus Jonathan Bulus</option>
                        <option value='Female'>Charlie Samuel Silas</option>
                        <option value='Male'>Danladi Chewazalo Juliet</option>
                        <option value='Female'>Duru Emeka Jackline</option>
                        <option value='Male'>
                            Ezeihekaibee Sylvia Chidumebi
                        </option>
                        <option value='Female'>Ezekwe Harrison Tabansi</option>
                        <option value='Male'>Gajimi Umar</option>
                        <option value='Female'>Gurinsa'Adu Dahiru</option>
                        <option value='Male'>Hammed Titilayo Tawakalitu</option>
                        <option value='Female'>Haruna Audu Falnyi</option>
                        <option value='Female'>Ibrahim Habibu Ibbi</option>
                        <option value='Male'>Ibrahim Yakubu Aduku</option>
                        <option value='Female'>Jalingo Inuwa Bakare</option>
                        <option value='Male'>Joseph Taye Oluwaseyi Taye</option>
                        <option value='Female'>Kareem Olushola</option>
                        <option value='Female'>Madaki Abubakar</option>
                        <option value='Male'>Makinwa Paul Tobiloba</option>
                        <option value='Female'>Mohammed Ahmed Wudini</option>
                        <option value='Male'>Muhammad Musa Shabbal</option>
                        <option value='Female'>Sylvia Dumebi</option>
                        <option value='Male'>Musa Vincent Ogaji</option>
                        <option value='Female'>Ndefo Afamefuna Nkemjika</option>
                        <option value='Male'>Nemieboka Amina Abigail</option>
                        <option value='Female'>Njoku Benneth Chinedu</option>
                        <option value='Male'>Nteme Barbara Francis</option>
                        <option value='Female'>Odela Joan Ame</option>
                        <option value='Male'>Odibo Aghogho P.</option>
                        <option value='Female'>Ogbole Anthony</option>
                        <option value='Male'>Ogbu Emmanuel Chisom</option>
                        <option value='Female'>Ogedegbe Josephine Ese</option>
                        <option value='Male'>Ogenyi Sandra</option>
                        <option value='Female'>Ogidi Mary Oyiweche</option>
                        <option value='Male'>Oke Olayinka Oluwatosin</option>
                        <option value='Female'>Olufadele Elizabeth Bose</option>
                        <option value='Male'>Omonijo Ibukunoluwa</option>
                        <option value='Female'>Osunde Helen Ebosetale</option>
                        <option value='Female'>
                            Oyibo Onyeiweanehi Violet
                        </option>
                        <option value='Male'>Raymond -Sen Jinteno</option>
                        <option value='Female'>Saleh Abubakar</option>
                        <option value='Male'>Sandra Henry</option>
                        <option value='Female'>Shuaibu Mohammed Jamiu</option>
                        <option value='Male'>Solagbade Peter Oluwole</option>
                        <option value='Female'>Tsakpa Adigizi Anthony</option>
                        <option value='Male'>Uchechukwu Ngozi Clara</option>
                        <option value='Female'>Udem Gibson Chimezie</option>
                        <option value='Male'>Umeaniba Maureen</option>
                        <option value='Female'>Usman Halima Said</option>
                        <option value='Male'>Usman Saad</option>
                        <option value='Female'>Yusuf Imran Musa</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='currentTime'>Attendance Time:</label>
                    <span id='currentTime'></span>
                </div>
                <br />
                <div className='form-group'>
                    <label htmlFor='time'>Time</label>
                    <input
                        type='text'
                        id='time'
                        placeholder='Current time'
                        disabled
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='date'>Date</label>
                    <input
                        type='date'
                        id='date'
                        value={formattedDate && formattedDate}
                        placeholder='Select your date'
                        disabled
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='postingLocation'>Posting</label>
                    <select
                        id='postingLocation'
                        onChange={({ target }) => setPosting(target.value)}
                    >
                        <option value='NPC Headquaters'>NPC Headquaters</option>
                        <option value='NPC Wuye Office'>NPC Wuye Office</option>
                    </select>
                </div>
                <div className='form-group submit-btn'>
                    <input type='submit' value='Submit' />
                </div>
            </form>
            <script>
                {' '}
                {document.getElementById('time') && callUpdateTime()}{' '}
                {document.getElementById('latitude') && getLocation()}{' '}
            </script>
        </div>
    );
};

export default Attendance;
