import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authApi";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);
      console.log(res.data);   // access_token

      alert("Login successful");
      navigate("/products");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="auth-actions">
          <button className="auth-primary-btn" onClick={handleLogin}>
            Login
          </button>

          <button
            className="switch-btn"
            onClick={() => navigate("/auth/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
