import React from 'react';
import SignINcomp from '../../components/SignInComp/SignINcomp';
import './AuthenticationContainer.scss';
import SignUp from '../../components/SignUp/SignUp';

const AuthenticationContainer = () => {
  return (
    <div className="authentication-container">
      <SignINcomp/>
      <SignUp/>
    </div>
  )
}

export default AuthenticationContainer;