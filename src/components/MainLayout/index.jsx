import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeContainer from "../../pages/Home/containers/HomeContainer.jsx";

import styles from "./index.module.scss";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainLayout;
