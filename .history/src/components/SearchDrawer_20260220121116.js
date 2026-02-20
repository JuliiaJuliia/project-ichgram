import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchDrawer.css";

import sashaa from "../assets/sashaa.jpg";
import alex from "../assets/alex.jpg";
import maria from "../assets/maria.jpg";
import john from "../assets/john.jpg";

const USERS = [
  { name: "sashaa", avatar: sashaa },
  { name: "alex", avatar: alex },
  { name: "maria", avatar: maria },
  { name: "john", avatar: john },
];

export default function SearchDrawer({ open, onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return USERS.filter((u) => u.name.toLowerCase().includes(q));
  }, [query]);

  const goUser = (username) => {
    navigate(`/profile/${username}`);
    if (onClose) onClose();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // просто показываем results (они уже считаются)
    // если хочешь: при 1 результате сразу перейти:
    if (results.length === 1) goUser(results[0].name);
  };

  return (
    <aside className={`searchDrawer ${open ? "open" : ""}`}>
      <button className="searchDrawerClose" type="button" onClick={onClose}>
        ×
      </button>

      <h2 className="searchTitle">Search</h2>

      <form onSubmit={onSubmit}>
        <input
          className="searchInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
      </form>

      <div className="searchSectionTitle">Recent</div>

      <div className="searchList">
        {(query.trim() ? results : USERS).map((u) => (
          <button
            key={u.name}
            type="button"
            className="searchRow"
            onClick={() => goUser(u.name)}
          >
            <img className="searchAvatar" src={u.avatar} alt={u.name} />
            <div className="searchMeta">
              <div className="searchName">{u.name}</div>
              <div className="searchSub">@{u.name}</div>
            </div>
          </button>
        ))}

        {query.trim() && results.length === 0 && (
          <div className="searchEmpty">No results</div>
        )}
      </div>
    </aside>
  );
}