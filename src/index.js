import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

// Render the App component to the root element in the HTML document
ReactDOM.render(<App />, document.getElementById("root"));

// Optional error handling if the root element is not found
if (!document.getElementById("root")) {
  console.error("Root element 'root' not found in the HTML document.");
}
