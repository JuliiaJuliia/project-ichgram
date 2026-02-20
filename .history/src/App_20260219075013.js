import "./App.css";
import PostForm from "./components/PostForm";
import Chat from "./components/Chat";
import Feed from "./components/Feed";
import Stories from "./components/Stories";

function App() {
  const chatId = "123";
  const userId = "user123";

  return (
    <div className="App">
      <h1>Instagram-клон</h1>

      <Stories />

      <PostForm />

      <Feed />

      <Chat chatId={chatId} userId={userId} />
    </div>
  );
}

export default App;