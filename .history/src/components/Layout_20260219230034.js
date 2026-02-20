import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SearchDrawer from "./SearchDrawer";
import NotificationsDrawer from "./NotificationsDrawer";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [panel, setPanel] = useState(null);

  const openPanel = (type) => setPanel(type);
  const closePanel = () => setPanel(null);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onOpenPanel={openPanel} />

      <SearchDrawer open={panel === "search"} onClose={closePanel} />
      <NotificationsDrawer open={panel === "notifications"} onClose={closePanel} />
      
      <main style={{ marginLeft: 240, width: "100%", minHeight: "100vh" }}>
  {children}
  <Footer />
</main>
    </div>
  );
}