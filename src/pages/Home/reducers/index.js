import axios from "axios";

const SET_REPOS = "SET_REPOS";

const defaultState = {
  items: [],
  isFetching: true,
};

export const getRep = (searchQuery = "stars:%3E1") => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`
    );
    dispatch(setRepos(response.data));
  };
};

export default function repReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
