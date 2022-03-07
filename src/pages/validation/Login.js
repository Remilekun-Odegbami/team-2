import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-page">
        <div className="login-form">
            <form className="login-form">
            <input type="text" placeholder="username" required/>
            <input type="password" placeholder="password" required/>
            <button onClick={() => {
        navigate('/blog')                
            }}>login</button>
            <p className="message mt-2">Not registered? <a href="./Signup">Create an account</a></p>
            </form>
        </div>
    </div>
  )
}
