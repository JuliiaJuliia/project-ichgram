import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SearchDrawer from "./SearchDrawer";
import NotificationsDrawer from "./NotificationsDrawer";
import Footer from "./Footer";
import "./layout.css";

export default function Layout({ children }) {
  const [panel, setPanel] = useState(null);

  const openPanel = (type) => setPanel(type);
  const closePanel = () => setPanel(null);

  const isOpen = panel !== null;

  return (
    <div className="appShell">
      <Sidebar onOpenPanel={openPanel} isDimmed={isOpen} />

      {isOpen && <div className="overlay" onClick={closePanel} />}

      <SearchDrawer open={panel === "search"} onClose={closePanel} />
      <NotificationsDrawer open={panel === "notifications"} onClose={closePanel} />

      <main className={`appMain ${isOpen ? "dimmed" : ""}`}>
        <div className="appContainer">
          <div className="pageContent">{children}</div>
          <Footer onOpenPanel={openPanel} />
        </div>
      </main>
    </div>
  );
}