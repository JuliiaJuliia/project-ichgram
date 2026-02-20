import React from "react";
import Layout from "./components/Layout";
import Feed from "./components/Feed";

function App() {
  return (
    <Layout>
      <h1>Лента</h1>
      <Feed />
    </Layout>
  );
}

export default App;