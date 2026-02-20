import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

import phones from "../assets/phones.png"; // <-- добавь файл сюда

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
      <div className="loginWrap">
        {/* LEFT: phones */}
        <div className="loginPhones" aria-hidden="true">
          <img src={phones} alt="" />
        </div>

        {/* RIGHT: form */}
        <div className="loginRight">
          <div className="loginCard">
            <h1 className="loginLogo">ICHGRAM</h1>

            <form className="loginForm" onSubmit={handleSubmit}>
              <input
                className="loginInput"
                type="text"
                placeholder="Username, or email"
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

              <div className="loginDivider">
                <span>OR</span>
              </div>

              <button
                type="button"
                className="loginForgot"
                onClick={() => alert("Forgot password (demo)")}
              >
                Forgot password?
              </button>
            </form>
          </div>

          <div className="loginCard loginCardSmall">
            <span>Don't have an account?</span>
            <Link className="loginSignup" to="/register">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}