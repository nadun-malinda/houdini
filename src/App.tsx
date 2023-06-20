import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "css-paint-polyfill";

//@ts-ignore
// CSS.paintWorklet.addModule("./worklets/curved-line.js");

//@ts-ignore
CSS.paintWorklet.addModule(
  "https://unpkg.com/curved-line@1.0.0/curved-line.js"
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <hr />
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

export default App;
