
import React from 'react';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';




const auth = getAuth(app)




const Login = () => {
    const [signInWithGoogle,user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>Please Login</h2>

            <div style={{ margin: '20px' }}>
                <button onClick={()=> signInWithGoogle()}>Google Sign In</button>
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