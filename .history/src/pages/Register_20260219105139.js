import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !username || !password) {
      alert("Заповни всі поля!");
      return;
    }

    alert("✅ Реєстрація успішна!");
    navigate("/login");
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
