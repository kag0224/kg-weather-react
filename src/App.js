import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer>
        This project was coded by Kristy-Ann Gaor and is open-sourced on{" "}
        <a
          href="https://github.com/kag0224/kg-weather-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
