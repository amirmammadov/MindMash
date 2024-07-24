import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalContextProvider } from "./context/GlobalContextProvider.tsx";

import "./sass/style.module.scss";
import "./global.css";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
