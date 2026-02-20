import "./Stories.css";

const stories = [
  { id: 1, name: "You", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Anna", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Max", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Olga", avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Ivan", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Kate", avatar: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "John", avatar: "https://i.pravatar.cc/150?img=7" },
];

const Stories = () => {
  return (
    <div className="stories">
      {stories.map((story) => (
        <div key={story.id} className="story">
          <img src={story.avatar} alt={story.name} />
          <p>{story.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;