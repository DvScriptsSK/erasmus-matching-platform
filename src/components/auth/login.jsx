import React from 'react';
import './login.css';
import NavBar from '../navbar/navbar';
const Login = () => {
  return (
    <div className='login-background'>
            <NavBar />
    <center >
        <div className="login">
        <div className="login__container">
            <h1>Sign in</h1>
            <form>
            <h5>E-mail</h5>
            <input type="email" placeholder='erasmusproject@email.com'/>
            <h5>Password</h5>
            <input type="password" placeholder='Enter Password' />
            <button type="submit" className="login__signInButton">Sign In</button>
            <a href="/auth/register"><button className="login__registerButton">Create your Account</button></a>
            </form>
        </div>
        </div>
    </center>
    </div>
  );
};

export default Login;
