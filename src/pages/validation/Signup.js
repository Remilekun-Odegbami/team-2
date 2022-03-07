import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
  return (
 <div className="signup-page">
        <div className="signup-form">
            <form className="signup-form">
            <input type="text" placeholder="first name" required/>
            <input type="text" placeholder="last name" required/>
            <input type="password" placeholder="password" required/>
            <input type="password" placeholder="confirm password" required/>
            <input type="text" placeholder="email address" required/>
            <button onClick={() => {
        navigate('/blog')                
            }}>create</button>
            <p className="message mt-2">Already registered? <a href="./Login">Sign In</a></p>
            </form>            
        </div>
    </div>
    
  )
}