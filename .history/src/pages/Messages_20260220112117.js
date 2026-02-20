import React, { useMemo, useState } from "react";
import "./Messages.css";

import sashaa from "../assets/sashaa.jpg";
import alex from "../assets/alex.jpg";
import maria from "../assets/maria.jpg";
import john from "../assets/john.jpg";

const initialChats = [
  {
    id: "nikita",
    name: "nikita",
    username: "nikita • ICHgram",
    avatar: alex,
    preview: "Nikita sent a message • 2 week",
    messages: [
      { id: 1, from: "them", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 2, from: "me", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ],
  },
  {
    id: "sashaa",
    name: "sashaa",
    username: "sashaa • ICHgram",
    avatar: sashaa,
    preview: "Sashaa sent a message • 2 week",
    messages: [
      { id: 1, from: "them", text: "heyyyyy" },
      { id: 2, from: "me", text: "Hi 👋" },
    ],
  },
  {
    id: "maria",
    name: "maria",
    username: "maria • ICHgram",
    avatar: maria,
    preview: "Maria sent a message • 1 week",
    messages: [{ id: 1, from: "them", text: "How are you?" }],
  },
  {
    id: "john",
    name: "john",
    username: "john • ICHgram",
    avatar: john,
    preview: "John sent a message • 3 day",
    messages: [{ id: 1, from: "them", text: "Hey!" }],
  },
];

export default function Messages() {
  const [chats, setChats] = useState(initialChats);
  const [activeId, setActiveId] = useState(initialChats[0]?.id || null);
  const [text, setText] = useState("");

  const activeChat = useMemo(
    () => chats.find((c) => c.id === activeId) || null,
    [chats, activeId]
  );

  const send = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value || !activeChat) return;

    setChats((prev) =>
      prev.map((c) =>
        c.id === activeChat.id
          ? { ...c, messages: [...c.messages, { id: Date.now(), from: "me", text: value }] }
          : c
      )
    );
    setText("");
  };

  return (
    <div className="messagesPage">
      <div className="messagesShell">
        {/* LEFT */}
        <aside className="messagesLeft">
          <div className="messagesLeftTop">
            <div className="messagesBrand">itcareerhub</div>
          </div>

          <div className="chatList">
            {chats.map((c) => (
              <button
                key={c.id}
                className={`chatRow ${c.id === activeId ? "active" : ""}`}
                onClick={() => setActiveId(c.id)}
                type="button"
              >
                <img className="chatAvatar" src={c.avatar} alt={c.name} />
                <div className="chatMeta">
                  <div className="chatName">{c.name}</div>
                  <div className="chatPreview">{c.preview}</div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT */}
        <section className="messagesRight">
          {activeChat ? (
            <>
              <div className="chatHeader">
                <img className="chatHeaderAvatar" src={activeChat.avatar} alt={activeChat.name} />
                <div className="chatHeaderText">
                  <div className="chatHeaderName">{activeChat.name}</div>
                  <div className="chatHeaderSub">{activeChat.username}</div>
                </div>
                <button className="viewProfileBtn" type="button">
                  View profile
                </button>
              </div>

              <div className="chatBody">
                {activeChat.messages.map((m) => (
                  <div key={m.id} className={`bubbleRow ${m.from === "me" ? "me" : "them"}`}>
                    {m.from === "them" && (
                      <img className="bubbleAvatar" src={activeChat.avatar} alt="" />
                    )}
                    <div className={`bubble ${m.from === "me" ? "bubbleMe" : "bubbleThem"}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              <form className="chatInputRow" onSubmit={send}>
                <input
                  className="chatInput"
                  placeholder="Write message"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </form>
            </>
          ) : (
            <div className="chatEmpty">Select a chat</div>
          )}
        </section>
      </div>
    </div>
  );
}