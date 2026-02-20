import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

import Stories from "./components/Stories";
import Feed from "./components/Feed";

// Home
function Home() {
  return (
    <div className="main-content">
      <Stories />
      <Feed />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Explore */}
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Layout>
                <Explore />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Messages */}
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Layout>
                <Messages />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Публичные */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <Layout>
                <NotFound />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;