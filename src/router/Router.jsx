import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeContainer from "../pages/Home/containers/HomeContainer.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
    </Routes>
  );
};

export default Router;
