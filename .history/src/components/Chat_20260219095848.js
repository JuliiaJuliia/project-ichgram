import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const Chat = ({ chatId, userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef(); // сохраняем один socket

  useEffect(() => {
    // Подключаемся к WebSocket серверу
    socketRef.current = io("http://localhost:3001
    // ");

    // Присоединяемся к комнате чата
    socketRef.current.emit("joinRoom", chatId);

    // Слушаем входящие сообщения
    socketRef.current.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Очистка при закрытии компонента
    return () => {
      socketRef.current.emit("leaveRoom", chatId);
      socketRef.current.disconnect();
    };
  }, [chatId]);

  const handleSend = () => {
    if (!newMessage) return;

    const messageData = { chatId, userId, text: newMessage };

    // Используем один и тот же socket
    socketRef.current.emit("sendMessage", messageData);

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