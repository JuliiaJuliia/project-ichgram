import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Instagram</h2>

      <nav>
        <div className="nav-item">🏠 Home</div>
        <div className="nav-item">🔍 Search</div>
        <div className="nav-item">🧭 Explore</div>
        <div className="nav-item">💬 Messages</div>
        <div className="nav-item">❤️ Notifications</div>
        <div className="nav-item">➕ Create</div>
        <div className="nav-item">👤 Profile</div>
      </nav>
    </div>
  );
};

export default Sidebar;