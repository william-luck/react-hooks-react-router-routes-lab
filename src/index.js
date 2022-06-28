import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

// Need to have browserRouter surrounding App, to enable the React router functionality
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
