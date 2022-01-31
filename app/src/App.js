import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [status, setStatus] = useState();
  useEffect(() => {
    fetch("http://localhost:3333/")
      .then((e) => e.json())
      .then((e) => {
        setStatus(e.status);
      })
      .catch((e) => {
        setStatus("error");
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>api: {status}</h1>
      </header>
    </div>
  );
}

export default App;
