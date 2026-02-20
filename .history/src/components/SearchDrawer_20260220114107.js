import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchDrawer.css";

import sashaa from "../assets/sashaa.jpg";
import alex from "../assets/alex.jpg";
import maria from "../assets/maria.jpg";
import john from "../assets/john.jpg";

const USERS = [
  { id: "sashaa", name: "sashaa", avatar: sashaa },
  { id: "alex", name: "alex", avatar: alex },
  { id: "maria", name: "maria", avatar: maria },
  { id: "john", name: "john", avatar: john },
  { id: "nikita", name: "nikita", avatar: alex }, // можешь поменять аватар
];

export default function SearchDrawer({ open, onClose }) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]); // результаты поиска после Enter
  const [didSearch, setDidSearch] = useState(false);

  const recent = useMemo(() => {
    // то, что ты показываешь в "Recent"
    return [
      { id: "sashaa", name: "sashaa", avatar: sashaa },
    ];
  }, []);

  const clearAll = () => {
    setQuery("");
    setResults([]);
    setDidSearch(false);
  };

  const runSearch = () => {
    const q = query.trim().toLowerCase();
    setDidSearch(true);

    if (!q) {
      setResults([]);
      return;
    }

    const found = USERS.filter((u) => u.name.toLowerCase().includes(q));
    setResults(found);
  };

  const openProfile = (username) => {
    // закрываем drawer и переходим в профиль
    if (onClose) onClose();
    navigate(`/profile/${username}`);
  };

  if (!open) return null;

  return (
    <aside className="searchDrawer" role="dialog" aria-modal="true">
      <div className="searchHeader">
        <h2>Search</h2>
      </div>

      {/* ВАЖНО: Enter работает только если input внутри form */}
      <form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
          runSearch();
        }}
      >
        <div className="searchInputWrap">
          <input
            className="searchInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
          />

          {!!query && (
            <button
              type="button"
              className="searchClearBtn"
              onClick={clearAll}
              aria-label="Clear"
            >
              ×
            </button>
          )}
        </div>
      </form>

      <div className="searchBody">
        {/* после Enter показываем результаты */}
        {didSearch ? (
          <>
            <div className="searchSectionTitle">Results</div>

            {results.length === 0 ? (
              <div className="searchEmpty">No results</div>
            ) : (
              <div className="searchList">
                {results.map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    className="searchRow"
                    onClick={() => openProfile(u.id)}
                  >
                    <img className="searchAvatar" src={u.avatar} alt={u.name} />
                    <div className="searchName">{u.name}</div>
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="searchSectionTitle">Recent</div>
            <div className="searchList">
              {recent.map((u) => (
                <button
                  key={u.id}
                  type="button"
                  className="searchRow"
                  onClick={() => openProfile(u.id)}
                >
                  <img className="searchAvatar" src={u.avatar} alt={u.name} />
                  <div className="searchName">{u.name}</div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
}