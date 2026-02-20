import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <span>Home</span>
        <span>Search</span>
        <span>Explore</span>
        <span>Messages</span>
        <span>Notifications</span>
        <span>Create</span>
      </div>

      <div className="footerCopy">
        © 2024 ICHgram
      </div>
    </footer>
  );
}