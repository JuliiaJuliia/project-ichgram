import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import PostForm from "./components/PostForm";
import Chat from "./components/Chat";
import Feed from "./components/Feed";

function App() {
  // Сохраняем токен в localStorage один раз при загрузке
  useEffect(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OTQ0YTdmMzM5MjM5MDhiMDM4MTk3NiIsImlhdCI6MTc3MTQzNjg0NCwiZXhwIjoxNzcxNDQwNDQ0fQ.IEpSjAO3weDFfEyMKLS8Ym7_YiXqnhlEZkIvg1zCEHg"
    );
  }, []);

  const chatId = "123"; // тестовый id чата
  const userId = "user123"; // id текущего пользователя

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Мой Instagram-клон</h1>
      </header>

      <PostForm />

      <Feed />

      <Chat chatId={chatId} userId={userId} />
    </div>
  );
}

export default App;