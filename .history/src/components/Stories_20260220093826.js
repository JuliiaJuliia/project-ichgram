import React from "react";
import "./Stories.css";

import sashaa from "../assets/sashaa.jpg";
import alex from "../assets/alex.jpg";
import maria from "../assets/maria.jpg";
import john from "../assets/john.jpg";

/* список сторис */
const stories = [
  { name: "sashaa", avatar: sashaa, follow: true },
  { name: "alex", avatar: alex, follow: true },
  { name: "maria", avatar: maria, follow: true },
  { name: "john", avatar: john, follow: true },
];

export default function Stories() {
  return (
    <div className="stories">
      {stories.map((user, i) => (
        <div className="storyItem" key={i}>

          {/* круглая аватарка */}
          <div className="storyAvatarWrapper">
            <img src={user.avatar} alt={user.name} className="storyAvatar" />
          </div>

          {/* имя + follow */}
          <div className="storyInfo">
            <div className="storyName">{user.name}</div>

            {user.follow && (
              <div className="storyFollow">Follow</div>
            )}
          </div>

        </div>
      ))}
    </div>
  );
}