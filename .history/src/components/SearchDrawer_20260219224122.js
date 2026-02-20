import React, { useMemo, useState } from "react";
import "./SearchDrawer.css";

import sashaaAvatar from "../assets/sashaa.jpg"; // положи фото в src/assets

export default function SearchDrawer({ open, onClose }) {
  const [query, setQuery] = useState("");

  // мок-данные (можешь потом заменить на данные с бэка)
  const users = useMemo(
    () => [
      { id: 1, username: "sashaa", name: "Sasha", avatar: sashaaAvatar },
      // добавишь ещё: { id:2, username:"niki", name:"Niki", avatar: nikiAvatar }
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.username.toLowerCase().includes(q) ||
        u.name.toLowerCase().includes(q)
    );
  }, [query, users]);

  if (!open) return null;

  return (
    <>
      <div className="drawerOverlay" onClick={onClose} />

      <div className="searchDrawer">
        <div className="searchHeader">
          <h2 className="searchTitle">Search</h2>
          <button className="searchClose" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="searchInputWrap">
          <input
            className="searchInput"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="searchRecent">
          <div className="recentTitle">Recent</div>

          {filtered.map((u) => (
            <button
              key={u.id}
              className="recentUser"
              onClick={() => setQuery(u.username)}
              type="button"
            >
              <img className="recentAvatar" src={u.avatar} alt={u.username} />
              <span className="recentName">{u.username}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}