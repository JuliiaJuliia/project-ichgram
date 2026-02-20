import Stories from "../components/Stories";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <>
      {/* Сторис */}
      <Stories />

      {/* Посты */}
      <Feed />
    </>
  );
};

export default Home;