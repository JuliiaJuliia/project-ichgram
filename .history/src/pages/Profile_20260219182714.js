import React, { useEffect, useState } from "react";
import API from "../api";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", username: "", bio: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile/me");
        setUser(res.data);
        setFormData({
          fullName: res.data.fullName || "",
          username: res.data.username || "",
          bio: res.data.bio || "",
        });
      } catch (err) {
        console.error("❌ Помилка отримання профілю:", err);
        alert("Помилка: не вдалося завантажити профіль.");
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      const form = new FormData();
      form.append("fullName", formData.fullName);
      form.append("username", formData.username);
      form.append("bio", formData.bio);

      const res = await API.put("/profile", form);
      setUser(res.data);
      setEditMode(false);
      alert("✅ Профіль оновлено!");
    } catch (err) {
      console.error("❌ Помилка збереження:", err);
      alert("Не вдалося оновити профіль.");
    }
  };

  if (!user) return <p>Завантаження...</p>;

  return (
    <div className="main-content profile-page">
      <h2>Профіль</h2>

      {!editMode ? (
        <div className="profile-view">
          <p><strong>Ім’я:</strong> {user.fullName}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Bio:</strong> {user.bio || "немає"}</p>
          <button onClick={() => setEditMode(true)}>Редагувати профіль</button>
        </div>
      ) : (
        <div className="profile-edit">
          <input
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Повне ім’я"
          />
          <input
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            placeholder="Username"
          />
          <textarea
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Опис (bio)"
          />
          <div className="edit-buttons">
            <button onClick={handleSave}>Зберегти</button>
            <button onClick={() => setEditMode(false)}>Скасувати</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
