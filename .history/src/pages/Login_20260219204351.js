import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SearchDrawer from "./SearchDrawer";

export default function Layout({ children }) {

  const [panel, setPanel] = useState(null);

  const openPanel = (type) => setPanel(type);
  const closePanel = () => setPanel(null);

  return (
    <div style={{ display: "flex" }}>

      <Sidebar onOpenPanel={openPanel} />

      {/* выезжающая панель поиска */}
      <SearchDrawer open={panel === "search"} onClose={closePanel} />

      <main style={{ marginLeft: 240, padding: 20, width: "100%" }}>
        {children}
      </main>

    </div>
  );
}