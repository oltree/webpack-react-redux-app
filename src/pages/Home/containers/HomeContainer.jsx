import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomeLayout from "../components/HomeLayout/index.jsx";
import { getRep } from "../reducers/index.js";

const HomeContainer = () => {
  const dispatch = useDispatch();

  const repos = useSelector((state) => state.repos);

  console.log(repos);

  useEffect(() => {
    dispatch(getRep());
  }, []);
  return <HomeLayout />;
};

export default HomeContainer;
