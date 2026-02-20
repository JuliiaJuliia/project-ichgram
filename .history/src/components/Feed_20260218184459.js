import React, { useEffect, useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error("Ошибка при получении постов:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Лента постов</h2>
      {posts.map((post) => (
        <div key={post._id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <b>{post.user?.username || "User"}</b>
          <p>{post.text}</p>
          {post.image && <img src={post.image} alt="post" style={{ maxWidth: "100%" }} />}
          <p>Лайков: {post.likes?.length || 0}</p>
          <p>Комментарии: {post.comments?.length || 0}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;