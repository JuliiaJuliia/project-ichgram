import React from "react";
import "./Stories.css";

import a1 from "../assets/sashaa.jpg"; // положи фото в src/assets
import a2 from "../assets/me.jpg";     // если есть
// можешь добавить ещё: import a3 from "../assets/xxx.jpg";

export default function Stories() {
  const stories = [
    { id: 1, username: "sashaa", avatar: a1, isNew: true, isFollowing: false },
    { id: 2, username: "you", avatar: a2, isNew: false, isFollowing: true },
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

            {!s.isFollowing && s.username !== "you" && (
              <button className="storyFollowBtn" type="button">
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}