import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

// компоненты
import Stories from "./components/Stories";
import PostForm from "./components/PostForm";
import Feed from "./components/Feed";
import Chat from "./components/Chat";

// страницы
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

// Home
function Home() {
  return (
    <div className="main-content">
      <Stories />
      <PostForm />
      <Feed />
    </div>
  );
}

// Messages
function Messages() {
  const chatId = "123";
  const userId = "user123";

  return (
    <div className="main-content">
      <h2>Messages</h2>
      <Chat chatId={chatId} userId={userId} />
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

        {/* Сообщения */}
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

        {/* Профиль */}
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
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;