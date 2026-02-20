import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchDrawer.css";

import sashaa from "../assets/sashaa.jpg";
import alex from "../assets/alex.jpg";
import maria from "../assets/maria.jpg";
import john from "../assets/john.jpg";

const users = [
  { username: "sashaa", avatar: sashaa },
  { username: "alex", avatar: alex },
  { username: "maria", avatar: maria },
  { username: "john", avatar: john },
  { username: "nikita", avatar: alex },
];

export default function SearchDrawer({ open, onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = users.filter((u) =>
    u.username.toLowerCase().includes(query.toLowerCase())
  );

  const openProfile = (username) => {
    navigate(`/profile/${username}`);
    onClose();
  };

  return (
    <div className={`searchDrawer ${open ? "open" : ""}`}>
      
      {/* HEADER */}
      <div className="searchHeader">
        <h2>Search</h2>
        <button className="searchClose" onClick={onClose}>✕</button>
      </div>

      {/* INPUT */}
      <div className="searchInputBox">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* RECENT / RESULTS */}
      <div className="searchResults">
        {(query ? filtered : users).map((user) => (
          <div
            key={user.username}
            className="searchUser"
            onClick={() => openProfile(user.username)}
          >
            <img src={user.avatar} alt={user.username} />
            <span>{user.username}</span>
          </div>
        ))}
      </div>

    </div>
  );
}