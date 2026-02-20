import React, { useMemo, useState } from "react";
import "./PostCard.css";

import avatar from "../assets/sashaa.jpg";
import postImg from "../assets/bild.jpg";

export default function PostCard() {
  const commenter = "alex";

  // лайк
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(101824);

  const toggleLike = () => {
    setLiked((v) => !v);
    setLikes((n) => (liked ? n - 1 : n + 1));
  };

  // комментарии
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(["heyyyyy"]);

  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const commentsCount = useMemo(() => comments.length, [comments]);

  const toggleCommentBox = () => {
    setIsCommentOpen(true);
    setIsCommentsOpen(true);
  };

  const addComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setComments((arr) => [...arr, comment.trim()]);
    setComment("");
    setIsCommentsOpen(true);
  };

  return (
    <div className="postCard">
      {/* HEADER как на скрине */}
      <div className="postHeader">
        <div className="postUserLeft">
          <img className="postAvatar" src={avatar} alt="avatar" />

          <div className="postUserInfo">
            <span className="postUsername">sashaa</span>
            <span className="postDot">•</span>
            <span className="postTime">2 week</span>
          </div>
        </div>

        <button className="followBtn" type="button">
          Follow
        </button>
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
      <div
        className="viewAllComments viewAllComments--link"
        onClick={() => setIsCommentsOpen((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsCommentsOpen((v) => !v);
        }}
      >
        View all comments ({commentsCount})
      </div>

      {/* comments list */}
      {isCommentsOpen && (
        <div className="postComments">
          {comments.map((c, i) => (
            <div key={i} className="comment">
              <b>{commenter}</b> {c}
            </div>
          ))}
        </div>
      )}

      {/* input */}
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