import { useState } from 'react';
import './LoginSignup.css';
import { changeCredential } from '../../services/loginService';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = async (e) => {
        e.preventDefault();
        const data = {
            username,
            password,
            confirmPassword,
        };
        console.log(data);
        await changeCredential(data);
    };
    return (
        <div className='form-container'>
            <form onSubmit={handleChange}>
                <h3>Sign Up</h3>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='username'
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
                <div className='form-group'>
                    <label htmlFor='password'>Re-enter Password</label>
                    <input
                        type='password'
                        id='password1'
                        name='password'
                        required
                        onChange={({ target }) =>
                            setConfirmPassword(target.value)
                        }
                    />
                </div>
                <div className='form-group submit-btn'>
                    <input type='submit' value='Change' />
                </div>
            </form>
        </div>
    );
};

export default SignupPage;
