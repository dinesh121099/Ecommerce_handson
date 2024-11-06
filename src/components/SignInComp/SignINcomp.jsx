import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import './SignINcomp.scss';

const SignINcomp = () => {
  return (
    <div className="sign-in">
        <h2>I already have an account</h2>
        <span className='title'>Sign In with your  email & password</span>
        <form>
            <CustomInput className='custom-input' type='email' name='email' placeholder='Email Address'/>
            <CustomInput className='custom-input' type='password' name='password' placeholder='Enter your password'/>
            <CustomButton className="custom-button" type="submit">Sign In</CustomButton>
        </form>
    </div>
  )
}

export default SignINcomp;