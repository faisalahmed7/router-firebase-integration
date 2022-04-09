import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {signInWithGoogle}=useFirebase()
    return (
        <div>
            <h2>Please Login</h2>

            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form action="">
                <input type="text" placeholder='Yor Name' />
                <br />
                <input type="email" name="" id="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="password" placeholder='Password' />
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;