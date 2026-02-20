import React, { useEffect, useState } from "react";

const Feed = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState({}); // Для хранения текста комментариев по постам

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

  // Лайк поста
  const handleLike = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/posts/${postId}/like`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // если используем токен
        },
      });
      const updatedPost = await response.json();
      setPosts(posts.map((p) => (p._id === postId ? updatedPost : p)));
    } catch (err) {
      console.error("Ошибка при лайке:", err);
    }
  };

  // Добавление комментария
  const handleComment = async (postId) => {
    if (!commentText[postId]) return;
    try {
      const response = await fetch(`http://localhost:3001/api/posts/${postId}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ text: commentText[postId] }),
      });
      const updatedPost = await response.json();
      setPosts(posts.map((p) => (p._id === postId ? updatedPost : p)));
      setCommentText({ ...commentText, [postId]: "" });
    } catch (err) {
      console.error("Ошибка при комментарии:", err);
    }
  };

  return (
    <div>
      <h2>Лента постов</h2>
      {posts.map((post) => (
        <div key={post._id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <b>{post.user?.username || "User"}</b>
          <p>{post.text}</p>
          {post.image && <img src={post.image} alt="post" style={{ maxWidth: "100%" }} />}
          <p>Лайков: {post.likes?.length || 0}</p>
          <button onClick={() => handleLike(post._id)}>❤️ Лайк</button>

          <div style={{ marginTop: "10px" }}>
            <input
              type="text"
              value={commentText[post._id] || ""}
              onChange={(e) => setCommentText({ ...commentText, [post._id]: e.target.value })}
              placeholder="Написать комментарий..."
            />
            <button onClick={() => handleComment(post._id)}>Отправить</button>
          </div>

          <div style={{ marginTop: "10px" }}>
            {post.comments?.map((c, idx) => (
              <p key={idx}>
                <b>{c.user}</b>: {c.text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;