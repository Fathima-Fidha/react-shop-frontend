import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/authApi";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const newUser = {
        name: firstName + " " + lastName,
        email,
        password,
        avatar: "https://api.lorem.space/image/face?w=640&h=480",
      };

      await signupUser(newUser);

      alert("Account created successfully");
      navigate("/auth/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>

        <div className="row">
          <div>
            <label>First Name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="auth-actions">
          <button className="auth-primary-btn" onClick={handleSignup}>
            Sign Up
          </button>

          <button
            className="switch-btn"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
