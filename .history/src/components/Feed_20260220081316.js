import React from "react";
import "./Feed.css";
import PostCard from "./PostCard";

export default function Feed() {
  return (
    <div className="feed">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}