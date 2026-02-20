import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotificationsDrawer.css";

import avatar from "../assets/sashaa.jpg";
import post1 from "../assets/post.jpg";

export default function NotificationsDrawer({ open, onClose }) {
  const navigate = useNavigate();

  const goProfile = () => {
    navigate("/profile/sashaa");
    if (onClose) onClose();
  };

  const goPost = () => {
    navigate("/");
    if (onClose) onClose();
  };

  return (
    <>
      {/* overlay показываем только когда open */}
      {open && <div className="drawerOverlay" onClick={onClose} />}

      <aside className={`notifDrawer ${open ? "open" : ""}`}>
        <button className="notifClose" type="button" onClick={onClose}>
          ×
        </button>

        <h2 className="notifTitle">Notifications</h2>

        <div className="notifSection">New</div>

        <button className="notifItem" type="button" onClick={goProfile}>
          <img className="notifAvatar" src={avatar} alt="sashaa" />
          <div className="notifText">
            <b>sashaa</b> liked your photo. <span className="notifTime">2 d</span>
          </div>
          <img className="notifThumb" src={post1} alt="post" onClick={(e) => { e.stopPropagation(); goPost(); }} />
        </button>

        <button className="notifItem" type="button" onClick={goProfile}>
          <img className="notifAvatar" src={avatar} alt="sashaa" />
          <div className="notifText">
            <b>sashaa</b> commented your photo. <span className="notifTime">2 week</span>
          </div>
          <img className="notifThumb" src={post1} alt="post" onClick={(e) => { e.stopPropagation(); goPost(); }} />
        </button>

        <button className="notifItem" type="button" onClick={goProfile}>
          <img className="notifAvatar" src={avatar} alt="sashaa" />
          <div className="notifText">
            <b>sashaa</b> started following. <span className="notifTime">2 d</span>
          </div>
          <img className="notifThumb" src={post1} alt="post" onClick={(e) => { e.stopPropagation(); goPost(); }} />
        </button>
      </aside>
    </>
  );
}