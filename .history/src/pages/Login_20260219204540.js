import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // тимчасовий вхід (щоб працював ProtectedRoute)
    localStorage.setItem("token", "test");

    navigate("/");
  };

  return (
    <div className="loginPage">
      <div className="loginBox">

        {/* логотип */}
        <h1 className="loginLogo">ICHgram</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="loginInput"
            type="text"
            placeholder="Phone number, username or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="loginInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="loginButton" type="submit">
            Log in
          </button>
        </form>

      </div>
    </div>
  );
}