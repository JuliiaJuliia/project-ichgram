import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"; // якщо у тебе є стилі для Sidebar

function Sidebar() {
  const location = useLocation(); // дізнаємось, яка зараз сторінка

  return (
    <div className="sidebar">
      <h2 className="logo">ICHgram</h2>

      <nav className="sidebar-nav">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          🏠 Home
        </Link>

        <Link
          to="/search"
          className={location.pathname === "/search" ? "active" : ""}
        >
          🔍 Search
        </Link>

        <Link
          to="/explore"
          className={location.pathname === "/explore" ? "active" : ""}
        >
          🌍 Explore
        </Link>

        <Link
          to="/messages"
          className={location.pathname === "/messages" ? "active" : ""}
        >
          💬 Messages
        </Link>

        <Link
          to="/notifications"
          className={location.pathname === "/notifications" ? "active" : ""}
        >
          ❤️ Notifications
        </Link>

        <Link
          to="/create"
          className={location.pathname === "/create" ? "active" : ""}
        >
          ➕ Create
        </Link>

        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "active" : ""}
        >
          👤 Profile
        </Link>
      </nav>
    </div>
  );
}

<button
  style={{
    background: "none",
    border: "none",
    color: "gray",
    marginTop: "20px",
    cursor: "pointer",
  }}
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }}
>
  🚪 Вийти
</button>

export default Sidebar;
