import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchDrawer.css";

import sashaa from "../assets/sashaa.jpg";
import alex from "../assets/alex.jpg";
import maria from "../assets/maria.jpg";
import john from "../assets/john.jpg";

// демо-пользователи (позже заменишь на API)
const USERS = [
  { username: "sashaa", name: "Sashaa", avatar: sashaa },
  { username: "alex", name: "Alex", avatar: alex },
  { username: "maria", name: "Maria", avatar: maria },
  { username: "john", name: "John", avatar: john },
  { username: "nikita", name: "Nikita", avatar: alex },
];

export default function SearchDrawer({ open, onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(""); // что именно искали по Enter
  const [recent, setRecent] = useState(() => {
    try {
      const raw = localStorage.getItem("ich_recent_search");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // закрытие по ESC
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // при открытии — сброс состояния
  useEffect(() => {
    if (open) {
      setQuery("");
      setSubmitted("");
    }
  }, [open]);

  // фильтр результата
  const results = useMemo(() => {
    const q = (submitted || "").trim().toLowerCase();
    if (!q) return [];
    return USERS.filter(
      (u) =>
        u.username.toLowerCase().includes(q) ||
        u.name.toLowerCase().includes(q)
    );
  }, [submitted]);

  const saveRecent = (username) => {
    const next = [username, ...recent.filter((x) => x !== username)].slice(0, 6);
    setRecent(next);
    localStorage.setItem("ich_recent_search", JSON.stringify(next));
  };

  const openProfile = (username) => {
    saveRecent(username);
    onClose?.();
    navigate(`/profile/${username}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(query); // запускаем поиск только по Enter
  };

  const clear = () => {
    setQuery("");
    setSubmitted("");
  };

  return (
    <div className={`drawer ${open ? "drawer--open" : ""}`} aria-hidden={!open}>
      <div className="drawerHeader">
        <div className="drawerTitle">Search</div>
        <button className="drawerClose" type="button" onClick={onClose}>
          ✕
        </button>
      </div>

      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="searchInputWrap">
          <input
            className="searchInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search users…"
          />
          {query.length > 0 && (
            <button className="searchClear" type="button" onClick={clear}>
              ✕
            </button>
          )}
        </div>
      </form>

      {/* Результаты */}
      {submitted.trim() ? (
        <div className="searchSection">
          <div className="searchSectionTitle">Results</div>

          {results.length === 0 ? (
            <div className="searchEmpty">No users found</div>
          ) : (
            <div className="searchList">
              {results.map((u) => (
                <button
                  key={u.username}
                  type="button"
                  className="searchRow"
                  onClick={() => openProfile(u.username)}
                >
                  <img className="searchAvatar" src={u.avatar} alt={u.username} />
                  <div className="searchMeta">
                    <div className="searchName">{u.username}</div>
                    <div className="searchSub">{u.name}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="searchSection">
          <div className="searchSectionTitle">Recent</div>

          {recent.length === 0 ? (
            <div className="searchEmpty">No recent searches</div>
          ) : (
            <div className="searchList">
              {recent.map((username) => {
                const u = USERS.find((x) => x.username === username);
                if (!u) return null;
                return (
                  <button
                    key={u.username}
                    type="button"
                    className="searchRow"
                    onClick={() => openProfile(u.username)}
                  >
                    <img className="searchAvatar" src={u.avatar} alt={u.username} />
                    <div className="searchMeta">
                      <div className="searchName">{u.username}</div>
                      <div className="searchSub">{u.name}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}