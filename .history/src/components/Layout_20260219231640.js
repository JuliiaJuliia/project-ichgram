import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SearchDrawer from "./SearchDrawer";
import NotificationsDrawer from "./NotificationsDrawer";
import Footer from "./Footer";
import "./layout.css";

export default function Layout({ children }) {
  const [panel, setPanel] = useState(null); // "search" | "notifications" | null

  const openPanel = (type) => setPanel(type);
  const closePanel = () => setPanel(null);

  const isOpen = !!panel;

  return (
    <div className="appShell">
      <Sidebar onOpenPanel={openPanel} />

      {/* overlay */}
      {isOpen && <div className="overlay" onClick={closePanel} />}

      {/* drawers справа */}
      <SearchDrawer open={panel === "search"} onClose={closePanel} />
      <NotificationsDrawer open={panel === "notifications"} onClose={closePanel} />

      {/* main */}
      <main className={`appMain ${isOpen ? "dimmed" : ""}`}>
        <div className="appContainer">
          {children}
          <Footer onOpenPanel={openPanel} />
        </div>
      </main>
    </div>
  );
}