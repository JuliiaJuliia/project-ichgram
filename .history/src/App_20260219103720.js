import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import PostForm from "./components/PostForm";
import Feed from "./components/Feed";
import Chat from "./components/Chat";

// Создади простые страницы как пример
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
      <h2>Messages Page</h2>
      <Chat chatId={chatId} userId={userId} />
    </div>
  );
}

function Profile() {
  return (
    <div className="main-content">
      <h2>Profile Page</h2>
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
          {/* якщо сторінка не знайдена */}
          <Route path="*" element={<div className="main-content"><h2>404 Not Found</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
