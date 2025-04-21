import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Dictionary defaultKeyword="word" />
    </div>
  );
}

export default App;
