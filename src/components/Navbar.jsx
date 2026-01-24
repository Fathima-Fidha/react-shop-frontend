import React from "react";

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
      <div>
        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
      </div> 
    </nav>
    
    <div className="nav-line"></div>
    </>
  );
};

export default Navbar;
