import React, { useState } from "react";
import "./Create.css";

export default function Create() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files?.[0] || null);
  };

  const submit = (e) => {
    e.preventDefault();

    // пока без backend: просто показываем что "создали"
    if (!file) {
      alert("Please choose a file");
      return;
    }

    alert("Post created (demo). Add backend later 🙂");
    setCaption("");
    setFile(null);

    // сброс input file
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

          <div className="createFileRow">
            <input className="createFile" type="file" accept="image/*" onChange={onFileChange} />
            <div className="createFileName">{file ? file.name : "No file chosen"}</div>
          </div>

          <button className="createBtn" type="submit">
            Create post
          </button>
        </form>
      </div>
    </div>
  );
}