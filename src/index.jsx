import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "./components/MainLayout/index.jsx";
import Router from "./router/Router.jsx";

import { configureStore } from "./store/configureStore";

import "./static/styles/normalize.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout>
          <Router />
        </MainLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
