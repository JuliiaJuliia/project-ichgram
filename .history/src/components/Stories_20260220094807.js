import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Stories.css";

import sashaa from "../assets/sashaa.jpg";
import alex from "../assets/alex.jpg";
import maria from "../assets/maria.jpg";
import john from "../assets/john.jpg";

const initialStories = [
  { name: "sashaa", avatar: sashaa, isFollowing: false, isNew: true },
  { name: "alex", avatar: alex, isFollowing: false, isNew: true },
  { name: "maria", avatar: maria, isFollowing: false, isNew: false },
  { name: "john", avatar: john, isFollowing: false, isNew: true },
];

export default function Stories() {
  const navigate = useNavigate();
  const [stories, setStories] = useState(initialStories);

  const openProfile = (username) => {
    navigate(`/profile/${username}`);
  };

  const toggleFollow = (index, e) => {
    e.stopPropagation(); // чтобы клик по Follow не открывал профиль
    setStories((prev) =>
      prev.map((u, i) => (i === index ? { ...u, isFollowing: !u.isFollowing } : u))
    );
  };

  return (
    <div className="storiesBar">
      {stories.map((user, i) => (
        <div
          key={user.name}
          className="story"
          onClick={() => openProfile(user.name)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openProfile(user.name);
          }}
        >
          <div className={`storyRing ${user.isNew ? "isNew" : ""}`}>
            <img className="storyAvatar" src={user.avatar} alt={user.name} />
          </div>

          <div className="storyMeta">
            <div className="storyUsername">{user.name}</div>

            <button
              type="button"
              className="storyFollowBtn"
              onClick={(e) => toggleFollow(i, e)}
            >
              {user.isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}