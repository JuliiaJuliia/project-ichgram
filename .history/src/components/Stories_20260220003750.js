import React from "react";
import "./Stories.css";

import a1 from "../assets/sashaa.jpg";

export default function Stories() {
  const stories = [
    { id: 1, username: "sashaa", avatar: a1, isNew: true, isFollowing: false },
    { id: 2, username: "alex", avatar: a1, isNew: true, isFollowing: false },
    { id: 3, username: "maria", avatar: a1, isNew: false, isFollowing: true },
    { id: 4, username: "john", avatar: a1, isNew: true, isFollowing: false }
  ];

  return (
    <div className="storiesBar">
      {stories.map((s) => (
        <div className="story" key={s.id}>
          <div className={`storyRing ${s.isNew ? "isNew" : ""}`}>
            <img className="storyAvatar" src={s.avatar} alt={s.username} />
          </div>

          <div className="storyMeta">
            <div className="storyUsername">{s.username}</div>

            {!s.isFollowing && (
              <button className="storyFollowBtn">
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}