import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">ICHGRAM</h2>

      <nav>
        <div className="menu-item">🏠 Home</div>
        <div className="menu-item">🔍 Search</div>
        <div className="menu-item">🧭 Explore</div>
        <div className="menu-item">💬 Messages</div>
        <div className="menu-item">❤️ Notifications</div>
        <div className="menu-item">➕ Create</div>
        <div className="menu-item">👤 Profile</div>
      </nav>
    </div>
  );
};

export default Sidebar;