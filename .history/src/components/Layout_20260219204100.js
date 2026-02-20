import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Overlay from "./layout/Overlay";
import Drawer from "./layout/Drawer";
import Footer from "./layout/Footer";
import "./layout/layout.css";

export default function Layout({ children }) {

  const [panel, setPanel] = useState(null); // "search" | "notifications" | null

  const openPanel = (type) => setPanel(type);
  const closePanel = () => setPanel(null);

  return (
    <div className="appShell">

      <Sidebar onOpenPanel={openPanel} />

      {/* затемнение */}
      <Overlay isOpen={!!panel} onClose={closePanel} />

      {/* выезжающая панель */}
      <Drawer type={panel} isOpen={!!panel} onClose={closePanel} />

      <main className={`appMain ${panel ? "dimmed" : ""}`}>
        <div className="appContainer">
          {children}
          <Footer />
        </div>
      </main>

    </div>
  );
}