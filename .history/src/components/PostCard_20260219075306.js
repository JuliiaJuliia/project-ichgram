import React from "react";
import "./PostCard.css";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      {/* Header */}
      <div className="post-header">
        <img
          className="avatar"
          src="https://i.pravatar.cc/40"
          alt="avatar"
        />
        <span className="username">
          {post.user?.username || "username"}
        </span>
      </div>

      {/* Image */}
      <img
        className="post-image"
        src={post.image}
        alt="post"
      />

      {/* Actions */}
      <div className="post-actions">
        ❤️ 💬 📤
      </div>

      {/* Likes */}
      <div className="post-likes">
        {post.likes?.length || 0} likes
      </div>

      {/* Caption */}
      <div className="post-caption">
        <b>{post.user?.username || "username"}</b>{" "}
        {post.caption}
      </div>
    </div>
  );
};

export default PostCard;