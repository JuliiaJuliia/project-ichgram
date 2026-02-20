import Navbar from "../components/layout/Navbar";
import Feed from "../components/Feed";
import Chat from "../components/Chat";
import Stories from "../components/Stories";

const Home = () => {
  const chatId = "123";
  const userId = "user123";

  return (
    <div>
      <Navbar />
      <Stories />

      <div style={{ display: "flex" }}>
        {/* Левая колонка */}
        <div style={{ width: "70%", padding: "20px" }}>
          {/* УБРАЛИ PostForm */}
          <Feed />
        </div>

        {/* Правая колонка */}
        <div style={{ width: "30%", padding: "20px" }}>
          <Chat chatId={chatId} userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default Home;