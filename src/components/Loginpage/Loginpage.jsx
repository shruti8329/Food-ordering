import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Loginpage.css";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "shruti@gmail.com" && password === "123456") {
      setMessage("Login successful!");
      setMessageClass("success");
      setTimeout(() => {
        navigate("/category-list");
      }, 1000);
    } else {
      setMessage("Invalid email or password");
      setMessageClass("error");
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <div className="form-group">
          <label htmlFor="email">Your Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>
        <button type="submit" className="signin-button">
          Sign in
        </button>
        {message && <p className={`message ${messageClass}`}>{message}</p>}
      </form>
    </div>
  );
};

export default Loginpage;
