import React, { useMemo, useState } from "react";
import "./SearchDrawer.css";
import sashaaAvatar from "../assets/sashaa.jpg"; // фото положи в src/assets/sashaa.jpg

export default function SearchDrawer({ open, onClose }) {
  const [query, setQuery] = useState("");

  const users = useMemo(
    () => [{ id: 1, username: "sashaa", avatar: sashaaAvatar }],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => u.username.toLowerCase().includes(q));
  }, [query, users]);

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

          {/* крестик справа ВНУТРИ поля */}
          {query.length > 0 && (
            <button
              type="button"
              className="searchClear"
              onClick={() => setQuery("")}
              aria-label="Clear"
            >
              ×
            </button>
          )}
        </div>

        <div className="searchRecent">
          <div className="recentTitle">Recent</div>

          {filtered.map((u) => (
            <div key={u.id} className="recentUser">
              <img className="recentAvatar" src={u.avatar} alt={u.username} />
              <span className="recentName">{u.username}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}