import { useState, useEffect } from 'react';
import './Attendance.css';
import { getCurrentLocation } from './gps';
import { getCurrentDate } from './date';
import { getCurrentTime } from './time';
import { createAttendance } from '../../services/attendanceServices';

const Attendance = () => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });
    const [error, setError] = useState(null);
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [fullName, setFullName] = useState('');
    const [postingLocation, setPostingLocation] = useState('');

    useEffect(() => {
        // Fetch GPS coordinates
        getCurrentLocation()
            .then((coords) => {
                setLocation(coords);
            })
            .catch((err) => {
                setError(err.message);
            });

        // Set current date
        const date = getCurrentDate();
        setCurrentDate(date);

        // Update the time every second
        const interval = setInterval(() => {
            const time = getCurrentTime();
            setCurrentTime(time);
        }, 1000);

        //set the initial values of the select elements
        const fullname = document.getElementById('fullName');
        setFullName(fullname.options[fullname.selectedIndex].textContent);
        const postingLocation = document.getElementById('postingLocation');
        setPostingLocation(
            postingLocation.options[postingLocation.selectedIndex].textContent
        );

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission here
        try {
            const data = {
                latitude: location.latitude,
                longitude: location.longitude,
                fullName,
                postingLocation,
                currentDate,
                currentTime,
            };
            await createAttendance(data);
            alert('Attendance submitted successfully');
        } catch (error) {
            console.log(error);
        }
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
                        Latitude: <span id='latitude'>{location.latitude}</span>
                    </label>
                </div>
                <div
                    className='location-info'
                    style={{ display: 'flex', alignItems: 'flex-start' }}
                >
                    <label htmlFor='longitude' style={{ fontSize: '13px' }}>
                        Longitude:{' '}
                        <span id='longitude'>{location.longitude}</span>
                    </label>
                </div>
                <br />
                <br />
                <div className='form-group'>
                    <label htmlFor='fullName'>Full Name</label>
                    <select
                        id='fullName'
                        onChange={({ target }) =>
                            setFullName(
                                target.options[target.selectedIndex].textContent
                            )
                        }
                    >
                        <option value='' disabled>
                            Select Name
                        </option>
                        <option value='Ag. Director Abubakar Bello Afegbua'>
                            Ag. Director Abubakar Bello Afegbua
                        </option>
                        <option value='Abdullahi Abubakar'>
                            Abdullahi Abubakar
                        </option>
                        <option value='Abubakar Aisha'>Abubakar Aisha</option>
                        <option value='Abubakar Muhammad Zayyad'>
                            Abubakar Muhammad Zayyad
                        </option>
                        <option value='Achinonu Pamela'>Achinonu Pamela</option>
                        <option value='Adebayo Olayide Ajani'>
                            Adebayo Olayide Ajani
                        </option>
                        <option value='Adesanya Oluwafemi Dayo'>
                            Adesanya Oluwafemi Dayo
                        </option>
                        <option value='Agabi Alhassan Yusuf'>
                            Agabi Alhassan Yusuf
                        </option>
                        <option value='Aisaborhale Victor Emiohe'>
                            Aisaborhale Victor Emiohe
                        </option>
                        <option value='Ajayi Oluwaseun'>Ajayi Oluwaseun</option>
                        <option value='Ajayi Oluwatosin Esther'>
                            Ajayi Oluwatosin Esther
                        </option>
                        <option value='Aliyu Taofeeq'>Aliyu Taofeeq</option>
                        <option value='Allah-Kayisafiyanu Safiyanu'>
                            Allah-Kayisafiyanu Safiyanu
                        </option>
                        <option value='Bello Usman'>Bello Usman</option>
                        <option value='Bukarmusa Alhaji'>
                            Bukarmusa Alhaji
                        </option>
                        <option value='Bulus Jonathan Bulus'>
                            Bulus Jonathan Bulus
                        </option>
                        <option value='Charlie Samuel Silas'>
                            Charlie Samuel Silas
                        </option>
                        <option value='Danladi Chewazalo Juliet'>
                            Danladi Chewazalo Juliet
                        </option>
                        <option value='Duru Emeka Jackline'>
                            Duru Emeka Jackline
                        </option>
                        <option value='Ezeihekaibee Sylvia Chidumebi'>
                            Ezeihekaibee Sylvia Chidumebi
                        </option>
                        <option value='Ezekwe Harrison Tabansi'>
                            Ezekwe Harrison Tabansi
                        </option>
                        <option value='Gajimi Umar'>Gajimi Umar</option>
                        <option value="Gurinsa'Adu Dahiru">
                            Gurinsa'Adu Dahiru
                        </option>
                        <option value='Hammed Titilayo Tawakalitu'>
                            Hammed Titilayo Tawakalitu
                        </option>
                        <option value='Haruna Audu Falnyi'>
                            Haruna Audu Falnyi
                        </option>
                        <option value='Ibrahim Habibu Ibbi'>
                            Ibrahim Habibu Ibbi
                        </option>
                        <option value='Ibrahim Yakubu Aduku'>
                            Ibrahim Yakubu Aduku
                        </option>
                        <option value='Jalingo Inuwa Bakare'>
                            Jalingo Inuwa Bakare
                        </option>
                        <option value='Joseph Taye Oluwaseyi Taye'>
                            Joseph Taye Oluwaseyi Taye
                        </option>
                        <option value='Kareem Olushola'>Kareem Olushola</option>
                        <option value='Madaki Abubakar'>Madaki Abubakar</option>
                        <option value='Makinwa Paul Tobiloba'>
                            Makinwa Paul Tobiloba
                        </option>
                        <option value='Mohammed Ahmed Wudini'>
                            Mohammed Ahmed Wudini
                        </option>
                        <option value='Muhammad Musa Shabbal'>
                            Muhammad Musa Shabbal
                        </option>
                        <option value='Sylvia Dumebi'>Sylvia Dumebi</option>
                        <option value='Musa Vincent Ogaji'>
                            Musa Vincent Ogaji
                        </option>
                        <option value='Ndefo Afamefuna Nkemjika'>
                            Ndefo Afamefuna Nkemjika
                        </option>
                        <option value='Nemieboka Amina Abigail'>
                            Nemieboka Amina Abigail
                        </option>
                        <option value='Njoku Benneth Chinedu'>
                            Njoku Benneth Chinedu
                        </option>
                        <option value='Nteme Barbara Francis'>
                            Nteme Barbara Francis
                        </option>
                        <option value='Odela Joan Ame'>Odela Joan Ame</option>
                        <option value='Odibo Aghogho P.'>
                            Odibo Aghogho P.
                        </option>
                        <option value='Ogbole Anthony'>Ogbole Anthony</option>
                        <option value='Ogbu Emmanuel Chisom'>
                            Ogbu Emmanuel Chisom
                        </option>
                        <option value='Ogedegbe Josephine Ese'>
                            Ogedegbe Josephine Ese
                        </option>
                        <option value='Ogenyi Sandra'>Ogenyi Sandra</option>
                        <option value='Ogidi Mary Oyiweche'>
                            Ogidi Mary Oyiweche
                        </option>
                        <option value='Oke Olayinka Oluwatosin'>
                            Oke Olayinka Oluwatosin
                        </option>
                        <option value='Olufadele Elizabeth Bose'>
                            Olufadele Elizabeth Bose
                        </option>
                        <option value='Omonijo Ibukunoluwa'>
                            Omonijo Ibukunoluwa
                        </option>
                        <option value='Osunde Helen Ebosetale'>
                            Osunde Helen Ebosetale
                        </option>
                        <option value='Oyibo Onyeiweanehi Violet'>
                            Oyibo Onyeiweanehi Violet
                        </option>
                        <option value='Raymond -Sen Jinteno'>
                            Raymond -Sen Jinteno
                        </option>
                        <option value='Saleh Abubakar'>Saleh Abubakar</option>
                        <option value='Sandra Henry'>Sandra Henry</option>
                        <option value='Shuaibu Mohammed Jamiu'>
                            Shuaibu Mohammed Jamiu
                        </option>
                        <option value='Solagbade Peter Oluwole'>
                            Solagbade Peter Oluwole
                        </option>
                        <option value='Tsakpa Adigizi Anthony'>
                            Tsakpa Adigizi Anthony
                        </option>
                        <option value='Uchechukwu Ngozi Clara'>
                            Uchechukwu Ngozi Clara
                        </option>
                        <option value='Udem Gibson Chimezie'>
                            Udem Gibson Chimezie
                        </option>
                        <option value='Umeaniba Maureen'>
                            Umeaniba Maureen
                        </option>
                        <option value='Usman Halima Said'>
                            Usman Halima Said
                        </option>
                        <option value='Usman Saad'>Usman Saad</option>
                        <option value='Yusuf Imran Musa'>
                            Yusuf Imran Musa
                        </option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='currentTime'>Attendance Time:</label>
                    <span id='currentTime'>{currentTime}</span>
                </div>
                <br />

                <div className='form-group'>
                    <label htmlFor='date'>Date</label>
                    <input type='date' id='date' disabled value={currentDate} />
                </div>
                <div className='form-group'>
                    <label htmlFor='postingLocation'>Posting</label>
                    <select
                        id='postingLocation'
                        onChange={({ target }) =>
                            setPostingLocation(
                                target.options[target.selectedIndex].textContent
                            )
                        }
                    >
                        <option value='NPC Headquaters'>NPC Headquaters</option>
                        <option value='NPC Wuye Office'>NPC Wuye Office</option>
                    </select>
                </div>
                <div className='form-group submit-btn'>
                    <input type='submit' value='Submit' />
                </div>
            </form>
            {error && <p className='error'>{error}</p>}
        </div>
    );
};

export default Attendance;
