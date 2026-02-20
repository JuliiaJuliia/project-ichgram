import React, { useState } from "react";
import "./Create.css";

export default function Create() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    // demo-уведомление (как ты просила)
    alert("✅ Post published!");
    setCaption("");
    setFile(null);
  };

  return (
    <div className="createPage">
      <div className="createCard">
        <h2 className="createTitle">Create new post</h2>

        <form className="createForm" onSubmit={onSubmit}>
          <textarea
            className="createTextarea"
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          {/* Скрытый input */}
          <input
            id="createFile"
            className="createFileInput"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />

          {/* Красивая кликабельная кнопка выбора файла */}
          <label className="createChooseBtn" htmlFor="createFile">
            Choose file
          </label>

          <div className="createFileName">
            {file ? file.name : "No file chosen"}
          </div>

          <button className="createSubmitBtn" type="submit">
            Create post
          </button>
        </form>
      </div>
    </div>
  );
}