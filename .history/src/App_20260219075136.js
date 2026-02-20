import "./App.css";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import PostForm from "./components/PostForm";
import Feed from "./components/Feed";
import Chat from "./components/Chat";

function App() {
  const chatId = "123";
  const userId = "user123";

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Stories />
        <PostForm />
        <Feed />
        <Chat chatId={chatId} userId={userId} />
      </div>
    </div>
  );
}

export default App;