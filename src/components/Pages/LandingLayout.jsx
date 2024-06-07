import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Card from '../Card'; // Ensure the Card component path is correct
import '../../App.css'; // Adjust the path to App.css based on its location

const LandingLayout = () => {
    const [animateCards, setAnimateCards] = useState(false);

    useEffect(() => {
        setAnimateCards(true);
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>CENSUS DEPARTMENT</h1>
                <Link to='/signup' className='signup-button'>
                    Sign Up
                </Link>
            </header>
            <main>
                <div className='title-container'>
                    <h2 style={{ color: 'black' }}>
                        Tracking Management System
                    </h2>
                    <h3
                        style={{
                            color: 'black',
                            fontSize: '25px',
                            fontWeight: 200,
                            margin: '0 2rem',
                        }}
                    >
                        Departmental Management System for Official tracking and
                        processing of staff attendance, visitors request
                        management and mail tracking
                    </h3>
                </div>
                <div
                    className={`card-container ${
                        animateCards ? 'animate' : ''
                    }`}
                >
                    <Link to='/attendance' className='card-link'>
                        <Card
                            imgSrc='/assets/attendance.jpg'
                            altText='Attendance Management'
                            title='Attendance Management'
                            content='Efficiently track and manage staff attendance with our comprehensive system. Ensure accuracy and streamline your processes to improve productivity and accountability within your department.'
                        />
                    </Link>
                    <Link to='/login' className='card-link'>
                        <Card
                            imgSrc='/assets/requestcard.jpg'
                            altText='Request Management'
                            title='Request Management'
                            content='Streamline and manage all visitor requests efficiently. This system ensures that every request is tracked, processed, and resolved promptly for operational effectiveness.'
                        />
                    </Link>
                    <Link to='/login' className='card-link'>
                        <Card
                            imgSrc='/assets/mail.jpg'
                            altText='Mails Management'
                            title='Mails Management'
                            content='Efficiently handle and track all incoming and outgoing mail within the department. This system ensures all correspondence is properly managed, and delivered.'
                        />
                    </Link>
                </div>
<<<<<<< HEAD
                <div className='title-container'>
                    <Link to='/dashboard'>
                        <div style={{ display: 'inline-block' }}>
                            <h3
                                style={{
                                    color: 'black',
                                    fontSize: '25px',
                                    fontWeight: 200,
                                    margin: '0 2rem',
                                    display: 'inline-block',
                                }}
                            >
                                Click Here To Get All Backend Data...
                            </h3>
                            <img
                                src='assets/Enter.png'
                                alt='Enter'
                                style={{
                                    width: '50px',
                                    height: '60px',
                                    verticalAlign: 'middle',
                                }}
                            />
                        </div>
                    </Link>
                </div>
=======
               <div className="title-container">
          <Link to="/dashboard">
            <div style={{ display: 'inline-block' }}>
              <h3 style={{ color: 'black', fontSize: '25px', fontWeight: 200, margin: '0 2rem', display: 'inline-block' }}>
                Click Here To Get All Backend Data... 
              </h3>
              <img src="assets/Enter.png" alt="Enter" style={{ width: '50px', height: '60px', verticalAlign: 'middle' }} />
            </div>
          </Link>
        </div>
                <div className="title-container">
          <Link to="/dashboard">
            <div style={{ display: 'inline-block' }}>
            <h3 style={{ color: 'black', fontSize: '25px', fontWeight: 200, margin: '0 2rem', display: 'inline-block' }}>
                Click Here To Get Data For Population Projection... 
              </h3>
              <img src="assets/Enter.png" alt="Enter" style={{ width: '50px', height: '60px', verticalAlign: 'middle' }} />
            </div>
          </Link>
        </div>
>>>>>>> ec4f758b247cf3130dab874acc2866f752880904
                <Outlet />{' '}
                {/* This is where the routed components will be rendered */}
            </main>

            <footer>
                <div className='footer-content'>
                    <p>&copy; 2024 Census Department. All rights reserved.</p>
                    <ul className='footer-links'>
                        <li>
                            <a href='#'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='#'>Terms of Service</a>
                        </li>
                        <li>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default LandingLayout;
