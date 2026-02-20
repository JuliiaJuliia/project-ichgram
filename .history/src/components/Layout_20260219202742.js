import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Drawer from "./layout/Drawer";
import Overlay from "./layout/Overlay";
import Footer from "./layout/Footer";
import "./layout/layout.css";
import SearchDrawer from "./SearchDrawer";
import { useState } from "react";

export default function Layout({ children }) {
  const [panel, setPanel] = useState(null); // "search" | "notifications" | null

  const openPanel = (type) => setPanel(type);
  const closePanel = () => setPanel(null);
  const [panel, setPanel] = useState(null);

const openPanel = (name) => setPanel(name);
const closePanel = () => setPanel(null);
  return (
    <div className="appShell">
      <Sidebar onOpenPanel={openPanel} />

      {/* Затемнение + панель */}
      <Overlay isOpen={!!panel} onClose={closePanel} />
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