import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, updateFormData } from '../../features/signup/signup-slice';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import './SignUp.scss';

const SignUp = () => {
    // dispatching the data from thr component through action
    const dispatch = useDispatch();
    
    //selecting data from the store
    const formData = useSelector((state) => state.signup.formData);
    const errors= useSelector((state) => state.signup.errors);
    const status = useSelector((state) => state.signup.status);
    const errorMessage = useSelector((state) => state.signup.errorMessage);
    
    //event change for input feilds
    const handleChange = (e) => {
      const {name, value} = e.target;
      dispatch(updateFormData({[name]: value}));
    };

    //validating the input feilds
    const validateForm = () => {
        let errors ={};
        if(!formData.displayName.trim())
            errors.displayName = "Display name is requiered";
        if(!formData.email.trim())
            errors.email = "Email is requiered";
        if(!formData.password.trim())
            errors.password = "password is requiered";
        if(formData.password !== formData.confirmPassword)
            errors.confirmPassword = "Password does not match!";
        if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email))
            errors.email = "Please enter a valid email address";
        return errors;
    };

    // submitting the validation errors and formData to redux store
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      dispatch(setError(validationErrors));
    } else {
      dispatch(signUpUser(formData));
      alert("signup successful");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don`t have an account?</h2>
      <span>Sign up with your email & password</span>
      <form onSubmit={handleSubmit}>
        <CustomInput
          className = "custom-input"
          label="Display name"
          type="text"
          required
          name="displayName"
          placeholder="Enter Display Name Here"
          value={formData.displayName}
          onChange={handleChange}
        />
        {errors.displayName && (
          <p style={{ color: "red" }}>{errors.displayName}</p>
        )}
        <CustomInput
          className = "custom-input"
          label="Email"
          type="email"
          required
          name="email"
          placeholder="Email Here" 
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <CustomInput
          className = "custom-input"
          label="Password"
          type="password"
          required
          placeholder="Password Here"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <CustomInput
          className = "custom-input"
          label="Confirm password"
          type="password"
          required
          placeholder="Confirm Password Here"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className='my-button'>
        <CustomButton type="submit"className="custom-button">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp