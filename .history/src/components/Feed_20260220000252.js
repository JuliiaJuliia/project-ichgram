import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) =>
        console.error("Ошибка при получении постов:", err)
      );
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Feed;