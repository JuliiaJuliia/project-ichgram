import React from "react";
import PostCard from "./PostCard";
import "./Feed.css";


export default function Feed() {
  return (
    <div className="exploreGrid">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}