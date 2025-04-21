import logo from "./abc-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={logo} className="App-logo" alt="logo" />
      <Dictionary defaultKeyword="word" />
    </div>
  );
}

export default App;
