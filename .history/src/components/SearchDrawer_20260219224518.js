import React from "react";
import "./SearchDrawer.css";
import avatar from "../assets/sashaa.jpg";

export default function SearchDrawer({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className="drawerOverlay" onClick={onClose}></div>

      <div className="searchDrawer">
        <h2 className="searchTitle">Search</h2>
        

        <div className="searchInputWrap">
          <input
            className="searchInput"
            placeholder="Search"
          />
        </div>

        <div className="searchRecent">
          <div className="recentTitle">Recent</div>

          <div className="recentUser">
  <img className="recentAvatar" src={avatar} alt="sashaa" />
  <span>sashaa</span>
</div>
        </div>
      </div>
    </>
  );
}