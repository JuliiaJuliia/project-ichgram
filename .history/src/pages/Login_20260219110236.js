import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 👇 тут звернення до твого реального backend API
      const { data } = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        password,
      });

      // Збережемо токен для подальших запитів
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("✅ Вхід успішний!");
      navigate("/"); // після логіну — на головну сторінку
    } catch (err) {
      alert("❌ " + (err.response?.data?.message || "Login error"));
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h1>ICHgram</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
