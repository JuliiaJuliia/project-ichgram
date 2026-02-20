import React, { useState } from "react";
import "./Create.css";

export default function Create() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    // DEMO: просто уведомление
    alert("✅ Post published!");
    setCaption("");
    setFile(null);
  };

  return (
    <div className="main-content">
      <div className="createCard">
        <h2 className="createTitle">Create new post</h2>

        <form onSubmit={onSubmit} className="createForm">
          <textarea
            className="createTextarea"
            placeholder="What's new?"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          {/* Красивая кнопка выбора файла (на английском) */}
          <label className="fileLabel">
            Choose file
            <input
              className="fileInput"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>

          <div className="fileName">
            {file ? file.name : "No file chosen"}
          </div>

          <button className="createBtn" type="submit">
            Create post
          </button>
        </form>
      </div>
    </div>
  );
}