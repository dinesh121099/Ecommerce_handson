import React, { useEffect, useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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

  return (
    <div className="signup-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email & password</span>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Display name"
          type="text"
          name="displayName"
          placeholder="Display name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        {errors.displayName && (
          <p style={{ color: "red" }}>{errors.displayName}</p>
        )}
        <CustomInput
          label="email"
          type="emailt"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <CustomInput
          label="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
