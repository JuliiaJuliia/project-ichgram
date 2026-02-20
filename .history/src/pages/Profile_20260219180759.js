import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// ==== Компоненты ====
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import PostForm from "./components/PostForm";
import Feed from "./components/Feed";
import Chat from "./components/Chat";

// ==== Страницы ====
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

// ==== Внутренние компоненты страниц ====
function Home() {
  return (
    <div className="main-content">
      <Stories />
      <PostForm />
      <Feed />
    </div>
  );
}

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

// ==== Основной компонент приложения ====
function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Левое меню (Sidebar) */}
        <Sidebar />

        {/* Настройка маршрутов */}
        <Routes>

          {/* ===== Закрытые маршруты ===== */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* ===== Публичные маршруты (без авторизации) ===== */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ===== 404 ===== */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
