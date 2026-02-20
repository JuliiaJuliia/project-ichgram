import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer({ onOpenPanel }) {
  const navigate = useNavigate();

  const openSearch = () => {
    if (onOpenPanel) onOpenPanel("search");
  };

  const openNotifications = () => {
    if (onOpenPanel) onOpenPanel("notifications");
  };

  return (
    <footer className="footer">

      <div className="footerLinks">

        <NavLink to="/">Home</NavLink>

        <span onClick={openSearch}>Search</span>

        <NavLink to="/explore">Explore</NavLink>

        <NavLink to="/messages">Messages</NavLink>

        <span onClick={openNotifications}>Notifications</span>

        <NavLink to="/create">Create</NavLink>

      </div>

      <div className="footerCopy">
        © 2024 ICHgram
      </div>

    </footer>
  );
}