import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomeLayout from "../components/HomeLayout/index.jsx";

import { getRepositories } from "../reducers/index.js";
import { repositoriesSelector } from "../selectors/index.js";

const HomeContainer = () => {
  const dispatch = useDispatch();

  const repositories = useSelector(repositoriesSelector);

  console.log(repositories);

  useEffect(() => {
    dispatch(getRepositories());
  }, []);
  return <HomeLayout repositories={repositories} />;
};

export default HomeContainer;
