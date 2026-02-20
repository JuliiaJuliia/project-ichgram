import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const Chat = ({ chatId, userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    // ✅ Підключення до Socket.io бекенду
    socketRef.current = io("http://localhost:3001", {
      transports: ["websocket", "polling"],
      withCredentials: true,
    });

    // ✅ Приєднуємось до кімнати
    socketRef.current.emit("joinRoom", chatId);

    // ✅ Слухаємо вхідні повідомлення
    socketRef.current.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // ✅ При виході
    return () => {
      socketRef.current.emit("leaveRoom", chatId);
      socketRef.current.disconnect();
    };
  }, [chatId]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const messageData = {
      chatId,
      userId,
      text: newMessage,
      time: new Date().toLocaleTimeString(),
    };

    // ✅ тепер назва події така сама, як на сервері
    socketRef.current.emit("message", messageData);

    setMessages((prev) => [...prev, messageData]);
    setNewMessage("");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>💬 Чат кімната {chatId}</h3>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "250px",
          overflowY: "auto",
          background: "#fff",
        }}
      >
        {messages.length === 0 ? (
          <p style={{ color: "#888" }}>Поки що немає повідомлень</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} style={{ marginBottom: "5px" }}>
              <b>{msg.userId}</b>: {msg.text}{" "}
              <span style={{ fontSize: "0.8em", color: "#aaa" }}>
                ({msg.time})
              </span>
            </div>
          ))
        )}
      </div>

      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Введи повідомлення..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button
          onClick={handleSend}
          style={{
            marginLeft: "5px",
            padding: "8px 15px",
            background: "#0095f6",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Надіслати
        </button>
      </div>
    </div>
  );
};

export default Chat;
