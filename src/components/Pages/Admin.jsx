import { Navigate, Outlet } from 'react-router-dom';

const Admin = () => {
    const admin = JSON.parse(window.localStorage.getItem('loggedInUser'));
    return (
        <div>
            <main>{admin ? <Outlet /> : <Navigate to='/login' />}</main>
        </div>
    );
};

export default Admin;
