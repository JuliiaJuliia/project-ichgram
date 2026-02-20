import React from "react";
import "./PostCard.css";

import avatar from "../assets/sashaa.jpg";
import postImg from "../assets/bild.jpg";

export default function PostCard() {
  return (
    <div className="postCard">

      {/* верх поста */}
      <div className="postHeader">
        <img className="postAvatar" src={avatar} alt="avatar" />
        <div className="postUsername">sashaa</div>
      </div>

      {/* фото */}
      <img className="postImage" src={postImg} alt="post" />

      {/* действия */}
      <div className="postActions">
        ❤️ 💬 📤
      </div>

      {/* лайки */}
      <div className="postLikes">
        1 like
      </div>

      {/* подпись */}
      <div className="postCaption">
        <b>sashaa</b> Autumn mood 🍂
      </div>

    </div>
  );
}