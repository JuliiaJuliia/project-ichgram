import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar(props) {
  const navigate = useNavigate();

  // Безопасно: если проп не пришёл — не падаем
  const openPanel =
    typeof props.onOpenPanel === "function" ? props.onOpenPanel : null;

  const handleSearch = () => {
    // 1) Если Layout передал функцию — откроем drawer
    if (openPanel) return openPanel("search");
    // 2) Иначе просто перейдем на роут (чтобы не было ошибки)
    navigate("/search");
  };

  const handleNotifications = () => {
    if (openPanel) return openPanel("notifications");
    navigate("/notifications");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__logo" onClick={() => navigate("/")}>
        <span className="sidebar__logoText">ICHGRAM</span>
      </div>

      <nav className="sidebar__nav">
        <NavLink to="/" className="sidebar__item">
          <span className="sidebar__icon">⌂</span>
          <span className="sidebar__label">Home</span>
        </NavLink>

        <button type="button" className="sidebar__item" onClick={handleSearch}>
          <span className="sidebar__icon">⌕</span>
          <span className="sidebar__label">Search</span>
        </button>

        <NavLink to="/explore" className="sidebar__item">
          <span className="sidebar__icon">◎</span>
          <span className="sidebar__label">Explore</span>
        </NavLink>

        <NavLink to="/messages" className="sidebar__item">
          <span className="sidebar__icon">✉</span>
          <span className="sidebar__label">Messages</span>
        </NavLink>

        <button
          type="button"
          className="sidebar__item"
          onClick={handleNotifications}
        >
          <span className="sidebar__icon">♡</span>
          <span className="sidebar__label">Notifications</span>
        </button>

        <NavLink to="/create" className="sidebar__item">
          <span className="sidebar__icon">＋</span>
          <span className="sidebar__label">Create</span>
        </NavLink>
      </nav>

      <div className="sidebar__bottom">
        <div className="sidebar__divider" />

        <NavLink to="/profile" className="sidebar__profile">
          <div className="sidebar__avatar" />
          <div className="sidebar__profileText">
            <div className="sidebar__profileName">Profile</div>
            <div className="sidebar__profileSub">@username</div>
          </div>
        </NavLink>
      </div>
    </aside>
  );
}