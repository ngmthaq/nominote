import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./Provider";
import "./assets/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
);
