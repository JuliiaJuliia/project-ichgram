import React, { useMemo, useState } from "react";
import "./PostCard.css";

import avatar from "../assets/sashaa.jpg";
import postImg from "../assets/bild.jpg";

export default function PostCard() {
  // кто комментирует (не владелец)
  const commenter = "alex";

  // ❤️ лайк
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(101824);

  const toggleLike = () => {
    setLiked((v) => !v);
    setLikes((n) => (liked ? n - 1 : n + 1));
  };

  // 💬 комментарии
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(["heyyyyy"]);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const commentsCount = useMemo(() => comments.length, [comments]);

  const toggleCommentBox = () => {
    setIsCommentOpen((v) => !v);
  };

  const addComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setComments((arr) => [...arr, comment.trim()]);
    setComment("");
    // оставляем поле открытым
  };

  return (
    <div className="postCard">
      {/* header */}
      <div className="postHeader">
        <img className="postAvatar" src={avatar} alt="avatar" />
        <div className="postUsername">sashaa</div>
        <div className="postTime">• 2 week</div>
      </div>

      {/* photo */}
      <img
        className="postImage"
        src={postImg}
        alt="post"
        onDoubleClick={toggleLike}
      />

      {/* actions */}
      <div className="postActions">
        <span className={`likeBtn ${liked ? "liked" : ""}`} onClick={toggleLike}>
          ♥
        </span>

        <span className="commentBtn" onClick={toggleCommentBox}>
          💬
        </span>
      </div>

      {/* likes */}
      <div className="postLikes">{likes.toLocaleString()} likes</div>

      {/* caption */}
      <div className="postCaption">
        <b>sashaa</b> It’s golden, Ponyboy!
      </div>

      {/* View all comments */}
      <div className="viewAllComments">
        View all comments ({commentsCount})
      </div>

      {/* comments list */}
      <div className="postComments">
        {comments.map((c, i) => (
          <div key={i} className="comment">
            <b>{commenter}</b> {c}
          </div>
        ))}
      </div>

      {/* input появляется ТОЛЬКО после клика по 💬 */}
      {isCommentOpen && (
        <form className="commentInputRow" onSubmit={addComment}>
          <input
            className="commentInput"
            type="text"
            placeholder="Write a comment…"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            autoFocus
          />
        </form>
      )}
    </div>
  );
}