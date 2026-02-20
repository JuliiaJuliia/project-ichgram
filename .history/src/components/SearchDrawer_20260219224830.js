  <div className="searchDrawer">
    <h2 className="searchTitle">Search</h2>

    {/* ПОИСК */}
    <div className="searchInputWrap">
      <input
        className="searchInput"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* КРЕСТИК (всегда есть) */}
      <button
        type="button"
        className="searchClear"
        onClick={() => setQuery("")}
      >
        ×
      </button>
    </div>

    {/* RECENT */}
    <div className="searchRecent">
      <div className="recentTitle">Recent</div>

      <div className="recentUser">
        <img className="recentAvatar" src={avatar} alt="sashaa" />
        <span>sashaa</span>
      </div>
    </div>
  </div>
</>