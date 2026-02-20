import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Stories.css";

import sashaa from "../assets/sashaa.jpg";
import alex from "../assets/alex.jpg";
import maria from "../assets/maria.jpg";
import john from "../assets/john.jpg";

/* список сторис */
const initialStories = [
  { name: "sashaa", avatar: sashaa, isFollowing: false },
  { name: "alex", avatar: alex, isFollowing: false },
  { name: "maria", avatar: maria, isFollowing: false },
  { name: "john", avatar: john, isFollowing: false },
];

export default function Stories() {

  const navigate = useNavigate();
  const [stories, setStories] = useState(initialStories);

  // переход в профиль
  const openProfile = (username) => {
    navigate(`/profile/${username}`);
  };

  // follow / unfollow
  const toggleFollow = (index, e) => {
    e.stopPropagation(); // ВАЖНО: чтобы не открывался профиль
    setStories(prev =>
      prev.map((user, i) =>
        i === index ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <div className="stories">
      {stories.map((user, i) => (
        <div
          className="storyItem"
          key={i}
          onClick={() => openProfile(user.name)}
        >

          {/* аватар */}
          <div className="storyAvatarWrapper">
            <img src={user.avatar} alt={user.name} className="storyAvatar" />
          </div>

          {/* имя + follow */}
          <div className="storyInfo">
            <div className="storyName">{user.name}</div>

            <div
              className={`storyFollow ${user.isFollowing ? "following" : ""}`}
              onClick={(e) => toggleFollow(i, e)}
            >
              {user.isFollowing ? "Following" : "Follow"}
            </div>

          </div>

        </div>
      ))}
    </div>
  );
}