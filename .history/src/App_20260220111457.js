import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Explore from "./pages/Explore";


// компоненты для Home
import Feed from "./components/Feed";

// страницы
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

// Home (БЕЗ PostForm)
function Home() {
  return (
    <div className="main-content">
      <Feed />
    </div>
  );
}

// Messages (заглушка)
function Messages() {
  return (
    <div className="main-content">
      <h2>Messages</h2>
      <p>Coming soon…</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
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

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

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