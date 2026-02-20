import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "260px", padding: "20px" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;