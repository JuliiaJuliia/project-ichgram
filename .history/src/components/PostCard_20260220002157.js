import React, { useState } from "react";
import "./PostCard.css";

import avatar from "../assets/sashaa.jpg";
import postImg from "../assets/bild.jpg";

export default function PostCard() {

  // ❤️ лайк
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(101824);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  // 💬 комментарии
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(["heyyyyy"]);

  const addComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="postCard">

      {/* header */}
      <div className="postHeader">
        <img className="postAvatar" src={avatar} alt="avatar" />
        <div className="postUsername">sashaa</div>
        <div className="postTime">• 2 week</div>
      </div>

      {/* image */}
      <img
        className="postImage"
        src={postImg}
        alt="post"
        onDoubleClick={toggleLike}
      />

      {/* actions */}
      <div className="postActions">
        <span
          className={`likeBtn ${liked ? "liked" : ""}`}
          onClick={toggleLike}
        >
          ♥
        </span>
        <span className="commentBtn">💬</span>
      </div>

      {/* likes */}
      <div className="postLikes">
        {likes.toLocaleString()} likes
      </div>

      {/* caption */}
      <div className="postCaption">
        <b>sashaa</b> It’s golden, Ponyboy!
      </div>

      {/* comments list */}
      <div className="postComments">
        {comments.map((c, i) => (
          <div key={i} className="comment">
            <b>sashaa</b> {c}
          </div>
        ))}
      </div>

      {/* add comment */}
      <form className="addComment" onSubmit={addComment}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>

    </div>
  );
}