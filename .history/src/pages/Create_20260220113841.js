import React, { useRef, useState } from "react";
import "./Create.css";

export default function Create() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  // уведомление
  const [toast, setToast] = useState({ open: false, text: "" });
  const toastTimerRef = useRef(null);

  const fileRef = useRef(null);

  const showToast = (text) => {
    // сбрасываем прошлый таймер
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);

    setToast({ open: true, text });

    toastTimerRef.current = setTimeout(() => {
      setToast({ open: false, text: "" });
      toastTimerRef.current = null;
    }, 2500);
  };

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
      showToast("Please choose a file");
      return;
    }

    // тут позже будет запрос на backend
    showToast("✅ Post published");

    // очистка формы
    setCaption("");
    setFile(null);
    e.target.reset();
  };

  return (
    <div className="createPage">
      {/* TOAST */}
      <div className={`toast ${toast.open ? "toast--show" : ""}`}>
        {toast.text}
      </div>

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
          <div
            className="createFileBox"
            onClick={openPicker}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openPicker();
            }}
          >
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