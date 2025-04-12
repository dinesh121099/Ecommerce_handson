import SignINcomp from '../../components/SignInComp/SignINcomp';
import './AuthenticationContainer.scss';
import SignUp from '../../components/SignUp/SignUp';

const AuthenticationContainer = () => {
  return (
    <div className="authentication-container">
      <div className="card-shadow">
        <SignINcomp />
      </div>
      <div className="card-shadow">
        <SignUp />
      </div>
    </div>
  )
}

export default AuthenticationContainer;