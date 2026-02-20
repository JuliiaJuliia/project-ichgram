import React from "react";
import "./Feed.css";
import PostCard from "./PostCard";

export default function Feed() {
  const posts = [1, 2, 3, 4]; // временно 4 поста 2x2

  return (
    <div className="feed">
      <div className="feedGrid">
        {posts.map((id) => (
          <PostCard key={id} />
        ))}
      </div>
    </div>
  );
}