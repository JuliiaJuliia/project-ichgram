import React from "react";
import "./PostCard.css";
import avatar from "../assets/sashaa.jpg";
import post from "../assets/post.jpg";


export default function PostCard() {
  return (
    <div className="postCard">

      {/* header */}
      <div className="postHeader">
        <img className="postAvatar" src={avatar} alt="avatar" />
        <div className="postUsername">sashaa</div>
      </div>

      {/* photo */}
      <img className="postImage" src={post} alt="post" />

      {/* actions */}
      <div className="postActions">
        ❤️ 💬 📤
      </div>

      {/* likes */}
      <div className="postLikes">
        1 like
      </div>

      {/* caption */}
      <div className="postCaption">
        <b>sashaa</b> Autumn mood 🍂
      </div>

    </div>
  );
}