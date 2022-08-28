import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <p className="footer">
        This project was coded by <span className="me">Mahri Stewart</span> and
        is{" "}
        <a href="#" target="_blank" className="gitHubLink">
          open source on GitHub
        </a>{" "}
        and{" "}
        <a href="#" target="_blank" className="netlifyLink">
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
