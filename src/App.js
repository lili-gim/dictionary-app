import logo from "./abc-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={logo} className="App-logo" alt="logo" />
      <Dictionary defaultKeyword="word" />
      <footer>
        This project was coded by Lili Gim and is{" "}
        <a
          href="https://github.com/lili-gim/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://abc-dictionary.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
