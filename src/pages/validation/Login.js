import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-page">
        <div className="login-form">
            <form className="login-form">
                <div className="col-md-12">
            <input type="text" placeholder="username" required/> </div>
                <div className="col-md-12">
            <input type="password" placeholder="password" required/> </div>
            <button onClick={() => {
        navigate('/blog')                
            }}>login</button>
            <div className="col-md-12">
            <p className="message mt-2">Not registered? <a href="./Signup">Create an account</a></p> </div>
            </form>
        </div>
    </div>
  )
}
