// client\src\index.js
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import "./index.css";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
