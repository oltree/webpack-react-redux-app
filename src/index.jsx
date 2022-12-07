import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import MainLayout from "./components/MainLayout/index.jsx";

import { configureStore } from "./store/configureStore";

import "./static/styles/normalize.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout />
    </Provider>
  </React.StrictMode>
);
