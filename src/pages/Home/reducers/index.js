import axios from "axios";
import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  items: [],
  isFetching: true,
};

export const setRepositories = (repositories) => ({
  type: actions.GET_REPOSITORIES,
  payload: repositories,
});

export const getRepositories = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars`
    );
    dispatch(setRepositories(response.data));
  };
};

export const repositoriesReducer = handleActions(
  {
    [actions.GET_REPOSITORIES]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        items: payload.items,
      };
    },
  },
  defaultState
);
