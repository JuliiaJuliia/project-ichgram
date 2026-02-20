import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

import Stories from "./components/Stories";
import Feed from "./components/Feed";

import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

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

        {/* Profile (и обычный, и по username) */}
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
        <Route
          path="/profile/:username"
          element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Public */}
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