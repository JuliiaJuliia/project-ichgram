import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiSend,
  FiHeart,
  FiPlusSquare,
  FiUser,
}from "react-icons/fi";

export default function Sidebar(props) {
  const navigate = useNavigate();

  const openPanel =
    typeof props.onOpenPanel === "function" ? props.onOpenPanel : null;

  const handleSearch = () => {
    if (openPanel) openPanel("search"); // НЕ navigate("/search")
  };

  const handleNotifications = () => {
    if (openPanel) openPanel("notifications");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__logo" onClick={() => navigate("/")}>
        <span className="sidebar__logoText">ICHGRAM</span>
      </div>

      <nav className="sidebar__nav">
        <NavLink to="/" className="sidebar__item">
          <span className="sidebar__icon"><FiHome size={24} /></span>
          <span className="sidebar__label">Home</span>
        </NavLink>

        <button type="button" className="sidebar__item" onClick={handleSearch}>
          <span className="sidebar__icon"><FiSearch size={24} /></span>
          <span className="sidebar__label">Search</span>
        </button>

        <NavLink to="/explore" className="sidebar__item">
          <span className="sidebar__icon"><FiCompass size={24} /></span>
          <span className="sidebar__label">Explore</span>
        </NavLink>

        <NavLink to="/messages" className="sidebar__item">
          <span className="sidebar__icon"><FiSend size={24} /></span>
          <span className="sidebar__label">Messages</span>
        </NavLink>

        <button type="button" className="sidebar__item" onClick={handleNotifications}>
          <span className="sidebar__icon"><FiHeart size={24} /></span>
          <span className="sidebar__label">Notifications</span>
        </button>

        <NavLink to="/create" className="sidebar__item">
          <span className="sidebar__icon"><FiPlusSquare size={24} /></span>
          <span className="sidebar__label">Create</span>
        </NavLink>
      </nav>

      <div className="sidebar__bottom">
        <div className="sidebar__divider" />
        <NavLink to="/profile" className="sidebar__profile">
          <div className="sidebar__avatar"><FiUser size={18} /></div>
          <div className="sidebar__profileText">
            <div className="sidebar__profileName">Profile</div>
            <div className="sidebar__profileSub">@username</div>
          </div>
        </NavLink>
      </div>
    </aside>
  );
}