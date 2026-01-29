import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <label>Email Address</label>
        <input type="email" />

        <label>Password</label>
        <input type="password" />
        <div className="auth-actions">
        <button className="auth-primary-btn">Login</button>

        <button className="switch-btn" onClick={() => navigate("/auth/signup")}>
          Sign Up
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
