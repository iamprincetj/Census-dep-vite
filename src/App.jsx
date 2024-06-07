import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Attendance from './components/Pages/Attendance';
import Mail from './components/Pages/Mail';
import Request from './components/Pages/Request';
import LandingLayout from './components/Pages/LandingLayout'; 
import RoutedLayout from './components/Pages/RoutedLayout';
import LoginPage from './components/Pages/LoginPage';
import SignupPage from './components/Pages/SignupPage';
import Dashboard from './components/Pages/Dashboard';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route path="attendance" element={<Attendance />} />
        <Route path="request" element={<Request />} />
        <Route path="mail" element={<Mail />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
