import React from "react";
import "./NotificationsDrawer.css";
import avatar from "../assets/sashaa.jpg";
import post1 from "../assets/post.jpg";

export default function NotificationsDrawer({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className="drawerOverlay" onClick={onClose}></div>

      <div className="notifDrawer">
        <h2 className="notifTitle">Notifications</h2>

        <div className="notifSection">New</div>

        <div className="notifItem">
        <img className="notificationAvatar" src={avatar} alt="avatar" />
          <div className="notifText">
            <b>sashaa</b> liked your photo. <span>2 d</span>
          </div>
          <img className="notifThumb" src={post1} alt="post" />        </div>

        <div className="notifItem">
        <img className="notificationAvatar" src={avatar} alt="avatar" />
          <div className="notifText">
            <b>sashaa</b> commented your photo. <span>2 week</span>
          </div>
          <img className="notifThumb" src={post1} alt="post" />        </div>

        <div className="notifItem">
        <img className="notificationAvatar" src={avatar} alt="avatar" />
          <div className="notifText">
            <b>sashaa</b> started following. <span>2 d</span>
          </div>
          <div className="notifThumb"></div>
        </div>
      </div>
    </>
  );
}