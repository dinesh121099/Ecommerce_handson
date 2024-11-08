//import { useEffect, useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";
import { useForm, useFormState } from "react-hook-form";

const SignUp = () => {
  // const [displayName, setDisplayName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { errors }= useFormState({control});

  /*
  useEffect(() => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    } else if (password.length < 6) {
      newErrors.password = "Password must be of minimum length 6";
    }
    setErrors(newErrors);
  }, [email, password]);
  */

  /*
  const onSubmit = async (displayName, email, password, confirmPassword) => {
    e.preventDefault();
    setIsSubmitting(true);
    if(password!= confirmPassword){
        alert("Password doesnot match");
    }
    if (Object.keys(errors.length === 0)) {
      try {
        const resp = await axios.post("http://localhost:3000/user", {
          displayName,
          email,
          password,
        });
        alert("sign up sucessfull!");
      } catch (err) {
        console.log("Signup failed", err);
        alert("sign up failed. please try again!");
      }
    } else {
      alert("please fix the errors before submitting.");
    }
    setIsSubmitting(false);
  };
  */
  const submitToApi = async (formData) => {
    try {
      const resp = await axios.post("http://localhost:3000/user", {
        displayName,
        email,
        password,
      });
      alert("User created sucessfully!");
    } catch {
      alert("Error creating user");
    }
  };

  const onSubmit = (data) => {
    const { displayName, email, password, confirmPassword } = data;
    if (password != confirmPassword) {
      alert("Password Doesnot match");
      return;
    }

    submitToApi({ displayName, email, password });
  };

  return (
    <div className="signup-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email & password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label="Display Name"
          type="text"
          placeholder="Display Name"
          required
          {...register("displayName", { required: "displayName" })}
        />
        {errors.displayName && (
          <p style={{ color: "red" }}>{errors.displayName}</p>
        )}
        <CustomInput
          label="Email"
          type="email"
          placeholder="Email here"
          required
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <CustomInput
          label="Password"
          type="password"
          placeholder="Password Here"
          {...register("password", { required: "Password is required" })}
          required
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <CustomInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password Here"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
          })}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
