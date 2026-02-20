import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // 🔹 ось цей імпорт обов’язковий
import "./Auth.css";

function Register() {
  // 🔹 створюємо стейти для полів форми
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // 🔹 щоб перенаправити користувача після реєстрації

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // надсилаємо запит на твій backend
      const { data } = await axios.post("http://localhost:3001/api/auth/register", {
        email,
        username,
        password,
      });

      alert("✅ Реєстрація успішна!");
      console.log("Registered user:", data);

      navigate("/login"); // після реєстрації → на сторінку логіну
    } catch (err) {
      console.error(err);
      alert("❌ " + (err.response?.data?.message || "Помилка при реєстрації"));
    }
  };

  return (
    <div className="auth-container">
      <h1>ICHgram</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Register;
