import React, { useEffect, useState } from "react";
import API from "../api"; // ✅ імпорт axios‑інстансу

function Profile() {
  const [user, setUser] = useState(null); // тут збережемо дані користувача

  // коли сторінка завантажується — отримаємо профіль із бекенду
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile/me"); // 👈 ось ці два рядки тут
        setUser(res.data); // збережемо дані користувача у state
      } catch (err) {
        console.error("Помилка отримання профілю:", err);
        alert("Не вдалося завантажити профіль. Можливо, токен недійсний.");
      }
    };

    fetchProfile();
  }, []);

  // поки завантаження
  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="main-content">
      <h2>My Profile</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>ID:</b> {user._id}</p>
    </div>
  );
}

export default Profile;
