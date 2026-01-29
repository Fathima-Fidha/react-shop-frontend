import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <h2>React Shop</h2>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
      </div>
      <div >
      <Link to="/auth/login"className="btn">Login</Link>
      <Link to="/auth/signup"className="btn">Sign Up</Link>
      </div> 
    </nav>
    
    <div className="nav-line"></div>
    </>
  );
};

export default Navbar;
