import React, { useRef, useState } from "react";
import "./Create.css";

export default function Create() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const fileRef = useRef(null);

  const openPicker = () => {
    fileRef.current?.click();
  };

  const onFileChange = (e) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
  };

  const submit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please choose a file");
      return;
    }

    alert("Post created (demo). Add backend later 🙂");
    setCaption("");
    setFile(null);
    e.target.reset();
  };

  return (
    <div className="createPage">
      <div className="createCard">
        <h2 className="createTitle">Create new post</h2>

        <form className="createForm" onSubmit={submit}>
          <textarea
            className="createCaption"
            placeholder="What’s on your mind?"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          {/* скрытый настоящий input */}
          <input
            ref={fileRef}
            className="createFileHidden"
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />

          {/* кастомная кликабельная зона */}
          <div className="createFileBox" onClick={openPicker} role="button" tabIndex={0}>
            <button
              type="button"
              className="createChooseBtn"
              onClick={(e) => {
                e.preventDefault();
                openPicker();
              }}
            >
              Choose file
            </button>

            <div className="createFileName">
              {file ? file.name : "No file chosen"}
            </div>
          </div>

          <button className="createBtn" type="submit">
            Create post
          </button>
        </form>
      </div>
    </div>
  );
}