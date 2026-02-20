import logo from './logo.svg';
import './App.css';
import PostForm from "./components/PostForm";
import Chat from "./components/Chat";
import Feed from "./components/Feed";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Instagram-клон</h1>
      <PostForm />
    </div>
  );
}

function App() {
  const chatId = "123"; // тестовый id чата
  const userId = "user123"; // id текущего пользователя

  return (
    <div className="App">
      <h1>Instagram-клон</h1>
      <PostForm />
      <Chat chatId={chatId} userId={userId} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Мой Instagram-клон</h1>
      <Feed />
    </div>
  );
}


export default App;
