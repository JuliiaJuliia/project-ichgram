import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Chat = ({ chatId, userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Подключаемся к WebSocket серверу
    const socket = io("http://localhost:4000");

    // Присоединяемся к комнате чата
    socket.emit("joinRoom", chatId);

    // Слушаем входящие сообщения
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Очистка при закрытии компонента
    return () => {
      socket.emit("leaveRoom", chatId);
      socket.off();
    };
  }, [chatId]);

  const handleSend = () => {
    if (!newMessage) return;

    // Отправляем сообщение на сервер
    const messageData = { chatId, userId, text: newMessage };
    const socket = io("http://localhost:4000");
    socket.emit("sendMessage", messageData);

    setNewMessage("");
  };

  return (
    <div>
      <h3>Чат</h3>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "200px", overflowY: "scroll" }}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <b>{msg.userId}</b>: {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Введите сообщение..."
      />
      <button onClick={handleSend}>Отправить</button>
    </div>
  );
};

export default Chat;