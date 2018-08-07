import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./styles.css";
import Fetch from "./Fetch";

function App() {
  return (
    <div className="App">
      <Fetch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
