import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    bio: "",
  });

  // 🔴 вместо backend — берём из localStorage (или создаём)
  useEffect(() => {
    let savedUser = localStorage.getItem("demoUser");

    if (!savedUser) {
      const defaultUser = {
        fullName: "Your Name",
        username: "username",
        email: "demo@ichgram.com",
        bio: "Welcome to ICHgram ✨",
      };
      localStorage.setItem("demoUser", JSON.stringify(defaultUser));
      savedUser = JSON.stringify(defaultUser);
    }

    const parsed = JSON.parse(savedUser);
    setUser(parsed);
    setFormData({
      fullName: parsed.fullName,
      username: parsed.username,
      bio: parsed.bio,
    });
  }, []);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      fullName: formData.fullName,
      username: formData.username,
      bio: formData.bio,
    };

    localStorage.setItem("demoUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditMode(false);
    alert("Profile updated!");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <h2>Profile</h2>

      {!editMode ? (
        <div className="profile-view">
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Username:</strong> @{user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Bio:</strong> {user.bio || "—"}</p>

          <button onClick={() => setEditMode(true)}>
            Edit profile
          </button>
        </div>
      ) : (
        <div className="profile-edit">
          <input
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            placeholder="Full name"
          />

          <input
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Username"
          />

          <textarea
            value={formData.bio}
            onChange={(e) =>
              setFormData({ ...formData, bio: e.target.value })
            }
            placeholder="Bio"
          />

          <div className="edit-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;