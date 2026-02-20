import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SearchDrawer from "./SearchDrawer";
import NotificationsDrawer from "./NotificationsDrawer";
import Footer from "./Footer";
import "./layout.css";

export default function Layout({ children }) {
  const [panel, setPanel] = useState(null); // "search" | "notifications" | null

  const openPanel = (type) => {
    setPanel(type);
  };

  const closePanel = () => {
    setPanel(null);
  };

  const isOpen = panel !== null;

  return (
    <div className="appShell">

      {/* ЛЕВАЯ ОСНОВНАЯ ПАНЕЛЬ */}
      <Sidebar onOpenPanel={openPanel} isDimmed={isOpen} />

      {/* СЕРЫЙ ФОН (OVERLAY) */}
      {isOpen && (
        <div className="overlay" onClick={closePanel}></div>
      )}

      {/* ВЫЕЗЖАЮЩИЕ ПАНЕЛИ */}
      <SearchDrawer open={panel === "search"} onClose={closePanel} />
      <NotificationsDrawer open={panel === "notifications"} onClose={closePanel} />

      {/* ОСНОВНОЙ КОНТЕНТ */}
      .appShell {
    min-height: 100vh;
  }
  
  .appMain {
    margin-left: 245px;          /* ширина sidebar */
    min-height: 100vh;
  }
  
  .appContainer {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px 16px;
    box-sizing: border-box;
  
    /* важно: чтобы футер был снизу */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .appContainer > :first-child {
    /* контент */
  }
  
  .appContainer > :not(:last-child) {
    /* не обязательно, можно убрать */
  }
  
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 40;
  }
  
  /* затемнение основного контента когда открыт drawer */
  .appMain.dimmed {
    filter: brightness(0.75);
  }
  
  /* адаптив */
  @media (max-width: 900px) {
    .appMain {
      margin-left: 0;
    }
  }

    </div>
  );
}