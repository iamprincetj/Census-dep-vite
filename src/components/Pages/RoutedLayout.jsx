// components/Pages/RoutedLayout.jsx
import { Outlet } from 'react-router-dom';

const RoutedLayout = () => {
    return (
        <div>
            <header>{/*<h1>Department Management System</h1>*/}</header>
            <main>
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
                            <a href='mailto:ndefoafam@gmail.com'>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default RoutedLayout;
