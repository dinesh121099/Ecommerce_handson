import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import './SignIncomp.scss';
import axios from 'axios';

const SignINcomp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit= async (e) => {
    e.preventDefault();
    try{
      const resp = await axios.post("http://localhost:3000/signin",{
        email,
        password,
      });
      if(resp.data) {
        alert("Sign in sucessful!");
      }
      else{
        alert("User not found");
      }
    }
    catch(err) {
      alert("Sign In failed",err)
    }
  };

  return (
    <div className="sign-in">
        <h2>I already have an account</h2>
        <span className='title'>Sign In with your  email & password</span>
        <form onSubmit={handleSubmit}>
            <CustomInput 
              className='custom-input' 
              type='email' 
              name='email' 
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CustomInput 
              className='custom-input' 
              type='password' 
              name='password' 
              placeholder='Enter your password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <div className='my-button'>
            <CustomButton className="custom-button" type="submit">Sign In</CustomButton>
            </div>
        </form>
    </div>
  )
}

export default SignINcomp;