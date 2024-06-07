import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingLayout from './components/Pages/LandingLayout';
import RoutedLayout from './components/Pages/RoutedLayout';
import Attendance from './components/Pages/Attendance';
import Mail from './components/Pages/Mail';
import Request from './components/Pages/Request';
import LoginPage from './components/Pages/LoginPage';
import SignupPage from './components/Pages/SignupPage';
import Dashboard from './components/Pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingLayout />} />
            <Route element={<RoutedLayout />}>
                <Route path='attendance' element={<Attendance />} />
                <Route path='mail' element={<Mail />} />
                <Route path='request' element={<Request />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='signup' element={<SignupPage />} />
                <Route path='dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
