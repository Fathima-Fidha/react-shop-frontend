import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>

        <div className="row">
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Email Address</label>
            <input type="email" />
          </div>

          <div>
            <label>Password</label>
            <input type="password" />
          </div>
        </div>
        <div className="auth-actions">
        <button className="auth-primary-btn">Sign Up</button>

        <button className="switch-btn" onClick={() => navigate("/auth/login")}>
          Login
        </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
