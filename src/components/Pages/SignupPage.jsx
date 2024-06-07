import './LoginSignup.css';

const SignupPage = () => {
    return (
        <div className='form-container'>
            <form>
                <h3>Sign Up</h3>
                <div className='form-group'>
                    <label htmlFor='email'>Full Name</label>
                    <input type='email' id='email' name='email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email1' name='email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Re-enter Password</label>
                    <input
                        type='password'
                        id='password1'
                        name='password'
                        required
                    />
                </div>
                <div className='form-group submit-btn'>
                    <input type='submit' value='Sign Up' />
                </div>
            </form>
        </div>
    );
};

export default SignupPage;
