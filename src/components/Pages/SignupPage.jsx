import { useState } from 'react';
import './LoginSignup.css';
import { signup } from '../../services/loginService';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [notification, setNotification] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const data = {
                username,
                password,
                confirmPassword,
            };
            await signup(data);
            setNotification('Signup successful. Please login');
            setStatus('success');
            setTimeout(() => setNotification(''), 5000);
            navigate('/login');
        } catch (error) {
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setNotification(error.response.data.error);
            setStatus('error');
            setTimeout(() => setNotification(''), 5000);
        }
    };
    return (
        <div className='form-container'>
            <form onSubmit={handleSignup}>
                <div style={{ color: status === 'error' ? 'red' : 'green' }}>
                    {notification && notification}
                </div>
                <h3>Sign Up</h3>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='username'
                        id='username'
                        name='username'
                        value={username}
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
                        value={password}
                        required
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Re-enter Password</label>
                    <input
                        type='password'
                        id='password1'
                        name='password'
                        value={confirmPassword}
                        required
                        onChange={({ target }) =>
                            setConfirmPassword(target.value)
                        }
                    />
                </div>
                <div className='form-group submit-btn'>
                    <input type='submit' value='Sign up' />
                </div>

                <div>
                    Already have an account?{' '}
                    <Link to='/login'>
                        <Button>Login</Button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;
