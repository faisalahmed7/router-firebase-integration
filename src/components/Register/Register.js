import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>

            <div style={{ margin: '20px' }}>
                <button>Google Sign In</button>
            </div>
            <form action="">
                <input type="text" placeholder='Yor Name' />
                <br />

                <input type="email" name="" id="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="password" placeholder='Password' />
                <br />
                <br />
                <input type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Register;