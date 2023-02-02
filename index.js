import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./App1.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);

reportWebVitals();
