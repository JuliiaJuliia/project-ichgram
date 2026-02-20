import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");  // ✅ додаємо повне ім’я
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/auth/register", {
        email,
        username,
        fullName,    // ✅ тепер передаємо
        password,
      });

      alert("✅ Реєстрація успішна!");
      navigate("/login");
    } catch (err) {
      alert("❌ " + (err.response?.data?.message || "Помилка реєстрації"));
      console.error(err);
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
          type="text"
          placeholder="Full name"          // ✅ поле повного імені
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
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
