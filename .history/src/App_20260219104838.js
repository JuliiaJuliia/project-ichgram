import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ПІДКЛЮЧАЄМО КОМПОНЕНТИ
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import PostForm from "./components/PostForm";
import Feed from "./components/Feed";
import Chat from "./components/Chat";

// СТОРІНКИ
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

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

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
