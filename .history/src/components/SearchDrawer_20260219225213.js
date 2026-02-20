import React, { useState } from "react";
import "./SearchDrawer.css";
import avatar from "../assets/sashaa.jpg";

export default function SearchDrawer({ open, onClose }) {
  const [query, setQuery] = useState("");

  if (!open) return null;

  return (
    <>
      <div className="drawerOverlay" onClick={onClose} />

      <div className="searchDrawer">
        <h2 className="searchTitle">Search</h2>

        <div className="searchInputWrap">
          <input
            className="searchInput"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* крестик справа (всегда) */}
          <button
            type="button"
            className="searchClear"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            title="Clear"
          >
            ×
          </button>
        </div>

        <div className="searchRecent">
          <div className="recentTitle">Recent</div>

          <div className="recentUser">
            <img className="recentAvatar" src={avatar} alt="sashaa" />
            <span className="recentName">sashaa</span>
          </div>
        </div>
      </div>
    </>
  );
}