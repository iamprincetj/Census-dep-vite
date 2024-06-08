import { Link, useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import { useState } from 'react';
import { login } from '../../services/loginService';

const LoginPage = ({ setAdmin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            username,
            password,
        };
        const request = await login(data);
        console.log(JSON.parse(JSON.stringify(request)));
        localStorage.setItem('loggedInUser', JSON.stringify(request));
        setAdmin(request.username);
        navigate('/admin');
    };
    return (
        <div className='form-container'>
            <form onSubmit={handleLogin}>
                <h3>Login</h3>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        required
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        required
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <div className='form-group submit-btn'>
                    <input type='submit' value='Login' />
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
