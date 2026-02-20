import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ onOpenPanel }) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebarLogo" onClick={() => navigate("/")}>
        ICHGRAM
      </div>

      <nav className="sidebarNav">
        <NavLink to="/" className="navItem">
          <span className="icon">⌂</span> Home
        </NavLink>

        <button className="navItem btnNav" onClick={() => onOpenPanel("search")}>
          <span className="icon">⌕</span> Search
        </button>

        <NavLink to="/explore" className="navItem">
          <span className="icon">◎</span> Explore
        </NavLink>

        <NavLink to="/messages" className="navItem">
          <span className="icon">✉</span> Messages
        </NavLink>

        <button className="navItem btnNav" onClick={() => onOpenPanel("notifications")}>
          <span className="icon">♡</span> Notification
        </button>

        <NavLink to="/create" className="navItem">
          <span className="icon">＋</span> Create
        </NavLink>
      </nav>

      <NavLink to="/profile" className="sidebarProfile">
        <div className="avatarSmall">IC</div>
        <span>Profile</span>
      </NavLink>
    </aside>
  );
}