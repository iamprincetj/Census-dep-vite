import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Attendance from './components/Pages/Attendance';
import Mail from './components/Pages/Mail';
import Request from './components/Pages/Request';
import LandingLayout from './components/Pages/LandingLayout';
import RoutedLayout from './components/Pages/RoutedLayout';
import LoginPage from './components/Pages/LoginPage';
import SignupPage from './components/Pages/SignupPage';
import Dashboard from './components/Pages/Dashboard';
import './App.css';
import FullLandingLayout from './components/Pages/FullLandingLayout';
import Admin from './components/Pages/Admin';

function App() {
    const token = JSON.parse(window.localStorage.getItem('loggedInUser'));
    const [admin, setAdmin] = useState(token?.username || null);

    return (
        <Routes>
            <Route path='/' element={<LandingLayout />} />
            <Route
                path='/admin'
                exact
                element={
                    admin ? <FullLandingLayout /> : <Navigate to='/login' />
                }
            />
            <Route element={<RoutedLayout />}>
                <Route path='attendance' element={<Attendance />} />
                <Route
                    path='login'
                    element={<LoginPage setAdmin={setAdmin} />}
                />
                <Route element={<Admin admin={admin} />}>
                    <Route path='mail' element={<Mail />} />
                    <Route path='request' element={<Request />} />
                    <Route path='signup' element={<SignupPage />} />
                    <Route path='dashboard' element={<Dashboard />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
