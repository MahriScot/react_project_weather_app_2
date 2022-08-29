import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";
import "./images/Me.svg";

function App() {
  return (
    <div className="App">
      <Weather />
      <p className="footer">
        This project was coded by{" "}
        <img src="images/Me.svg" alt="me" width="20"></img>{" "}
        <span className="me">Mahri Stewart</span> and is{" "}
        <a
          href="https://github.com/MahriScot/react_project_weather_app_2"
          target="_blank"
          className="gitHubLink"
        >
          open source on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://bespoke-lokum-d4aee7.netlify.app"
          target="_blank"
          className="netlifyLink"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
