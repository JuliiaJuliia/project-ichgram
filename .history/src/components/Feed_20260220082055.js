import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer({ onOpenPanel }) {
  return (
    <footer className="footer">
      <div className="footerNav">
        <NavLink to="/">Home</NavLink>

        {/* Search открывает drawer, НЕ route */}
        <button type="button" onClick={() => onOpenPanel?.("search")}>
          Search
        </button>

        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/messages">Messages</NavLink>

        {/* Notifications открывает drawer */}
        <button type="button" onClick={() => onOpenPanel?.("notifications")}>
          Notifications
        </button>

        <NavLink to="/create">Create</NavLink>
      </div>

      <div className="footerCopy">© 2026 ICHgram</div>
    </footer>
  );
}