import React from 'react';
import './login.css';
import NavBar from '../navbar/navbar';
import { useStatus } from './Status'; 

const Login = () => {
  const { LoggedIn,setLoggedIn, setUserData } = useStatus();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    setUserData({
      name: 'User',
      email: email,
      admin: false,
      password: password
    });
    setLoggedIn(true)
  };

  return (
    <div className='login-background'>
      <NavBar />
      <center>
        <div className="login">
          <div className="login__container">
            {!LoggedIn && (
              <>
                <h1>Log in</h1>
                <form onSubmit={handleSubmit}>
                  <h5>E-mail</h5>
                  <input type="email" name="email" placeholder='Enter Email' />
                  <h5>Password</h5>
                  <input type="password" name="password" placeholder='Enter Password' />
                  <button type="submit" className="login__signInButton">Sign In</button>
                  <a href="/auth/register"><button className="login__registerButton">Create your Account</button></a>
                </form>
              </>
            )}
          </div>
        </div>
      </center>
    </div>
  );
};

export default Login;
