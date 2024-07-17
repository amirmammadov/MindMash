import React from "react";
import ReactDOM from "react-dom/client";

import "./sass/style.module.scss";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
